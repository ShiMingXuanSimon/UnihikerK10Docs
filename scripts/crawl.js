import axios from 'axios'
import * as cheerio from 'cheerio'
import TurndownService from 'turndown'
import fs from 'node:fs/promises'
import fsSync from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUT_DIR = path.join(ROOT, 'docs', 'wiki', 'k10')
const IMG_DIR = path.join(ROOT, 'docs', 'public', 'images', 'k10')
const URLS_FILE = path.join(ROOT, 'urls.json')
const STATE_FILE = path.join(ROOT, 'state.json')

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

const td = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  hr: '---'
})

td.addRule('fencedCode', {
  filter: (node) => node.nodeName === 'PRE',
  replacement: (_content, node) => {
    const code = node.querySelector('code')
    const src = code || node
    const cls = (code && code.getAttribute('class')) || ''
    const m = cls.match(/language-([\w-]+)/i)
    const lang = m ? m[1].toLowerCase() : ''
    const text = src.textContent.replace(/\n+$/, '')
    return `\n\`\`\`${lang}\n${text}\n\`\`\`\n`
  }
})

function sha1(s) { return crypto.createHash('sha1').update(s).digest('hex') }

function rewriteLink(raw, pageUrl, slugSet) {
  if (!raw || raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:')) return raw
  let abs
  try { abs = new URL(raw, pageUrl) } catch { return raw }

  if (abs.hostname === 'www.unihiker.com.cn') {
    const p = abs.pathname
    let targetSlug = null
    if (p === '/wiki/k10' || p === '/wiki/k10/') targetSlug = ''
    else if (p.startsWith('/wiki/k10/')) {
      try { targetSlug = decodeURIComponent(p.slice('/wiki/k10/'.length)) } catch { targetSlug = null }
    }
    if (targetSlug !== null) {
      if (slugSet.has(targetSlug)) {
        const path = targetSlug === '' ? '/wiki/k10/' : `/wiki/k10/${targetSlug}`
        return path + abs.hash
      }
      return abs.href
    }
  }
  return /^https?:|^mailto:|^tel:/.test(raw) ? raw : abs.href
}

async function downloadImage(url, state) {
  if (url.startsWith('data:')) return null
  const cached = state.images[url]
  if (cached && fsSync.existsSync(path.join(IMG_DIR, cached))) return cached

  const cleanUrl = url.split('#')[0].split('?')[0]
  let ext = (cleanUrl.split('.').pop() || 'png').toLowerCase()
  if (!['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(ext)) ext = 'png'
  const filename = `${sha1(url).slice(0, 16)}.${ext}`
  const localPath = path.join(IMG_DIR, filename)

  if (!fsSync.existsSync(localPath)) {
    const res = await axios.get(url, {
      responseType: 'arraybuffer',
      headers: { 'User-Agent': UA },
      timeout: 30000
    })
    await fs.writeFile(localPath, Buffer.from(res.data))
  }
  state.images[url] = filename
  return filename
}

async function crawlOne(item, state, slugSet) {
  const url = state.baseUrl + item.href
  const slug = item.slug || 'index'
  const outFile = path.join(OUT_DIR, `${slug}.md`)

  console.log(`[抓取] ${url}`)
  const { data: html } = await axios.get(url, { headers: { 'User-Agent': UA }, timeout: 30000 })
  const $ = cheerio.load(html)
  const $article = $('#htmlContent')
  if (!$article.length) throw new Error('找不到 #htmlContent')

  for (const img of $article.find('img').toArray()) {
    const $img = $(img)
    let src = $img.attr('src')
    if (!src) continue
    if (!/^https?:|^data:/.test(src)) {
      try { src = new URL(src, url).href } catch { continue }
    }
    if (src.startsWith('data:')) continue
    try {
      const filename = await downloadImage(src, state)
      if (filename) $img.attr('src', `/images/k10/${filename}`)
    } catch (e) {
      console.warn(`  [图片失败] ${src}: ${e.message}`)
    }
  }

  $article.find('a[href]').each((_, a) => {
    const $a = $(a)
    const rewritten = rewriteLink($a.attr('href'), url, slugSet)
    if (rewritten) $a.attr('href', rewritten)
  })

  let md = td.turndown($article.html())
  md = md.replace(/\n{3,}/g, '\n\n').trim()

  const today = new Date().toISOString().slice(0, 10)
  const fmLines = [
    '---',
    `title: ${JSON.stringify(item.title)}`,
    `source: ${JSON.stringify(url)}`,
    item.sourceTitle ? `sourceTitle: ${JSON.stringify(item.sourceTitle)}` : null,
    `updated: "${today}"`,
    '---'
  ].filter(Boolean)
  const fm = fmLines.join('\n') + '\n\n'
  const body = `# ${item.title}\n\n${md}\n`
  const full = fm + body

  const hashBase = fmLines.filter(l => !l.startsWith('updated:')).join('\n') + '\n\n' + body
  const bodyHash = sha1(hashBase)

  const prev = state.pages[item.href]
  if (prev && prev.bodyHash === bodyHash && fsSync.existsSync(outFile)) {
    console.log(`  [跳过] 内容未变`)
    return false
  }

  await fs.writeFile(outFile, full, 'utf8')
  state.pages[item.href] = { slug, bodyHash, title: item.title, fetchedAt: new Date().toISOString() }
  console.log(`  [写入] ${slug}.md`)
  return true
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true })
  await fs.mkdir(IMG_DIR, { recursive: true })

  if (!fsSync.existsSync(URLS_FILE)) {
    throw new Error(`找不到 ${URLS_FILE},请先跑 npm run sync`)
  }
  const urls = JSON.parse(await fs.readFile(URLS_FILE, 'utf8'))
  const state = fsSync.existsSync(STATE_FILE)
    ? JSON.parse(fsSync.readFileSync(STATE_FILE, 'utf8'))
    : { pages: {}, images: {} }
  state.baseUrl = urls.baseUrl

  const allItems = []
  for (const it of urls.items) {
    if (it.type === 'group') allItems.push(...it.items)
    else allItems.push(it)
  }
  const slugSet = new Set(allItems.map(it => it.slug ?? ''))
  console.log(`[白名单] 站内可改写 slug: ${slugSet.size} 个`)

  let changed = 0
  for (const item of allItems) {
    try {
      if (await crawlOne(item, state, slugSet)) changed++
    } catch (e) {
      console.error(`  [失败] ${item.href}: ${e.message}`)
    }
    await new Promise(r => setTimeout(r, 500))
  }

  const current = new Set(allItems.map(it => it.href))
  for (const [href, meta] of Object.entries(state.pages)) {
    if (!current.has(href)) {
      const f = path.join(OUT_DIR, `${meta.slug}.md`)
      if (fsSync.existsSync(f)) {
        await fs.unlink(f)
        console.log(`[删除] ${meta.slug}.md (原站已移除)`)
      }
      delete state.pages[href]
      changed++
    }
  }

  await fs.writeFile(STATE_FILE, JSON.stringify(state, null, 2), 'utf8')
  console.log(`\n[完成] ${allItems.length} 个页面,${changed} 个变更`)
}

main().catch(e => { console.error(e); process.exit(1) })