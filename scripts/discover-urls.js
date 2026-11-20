import axios from 'axios'
import * as cheerio from 'cheerio'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUT = path.join(ROOT, 'urls.json')

const BASE_URL = 'https://www.unihiker.com.cn'
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

function resolveSlug($a, $li) {
  const href = $a.attr('href') || ''
  if (href.startsWith('/wiki/k10/')) return href.replace('/wiki/k10/', '')
  const id = $li.attr('id') || ''
  return id || null
}

async function main() {
  console.log(`[发现] 抓取入口: ${BASE_URL}/wiki/k10`)
  const { data: html } = await axios.get(`${BASE_URL}/wiki/k10`, {
    headers: { 'User-Agent': UA }, timeout: 30000
  })
  const $ = cheerio.load(html)

  const $nav = $('#leftNavigate .bs-docs-sidenav')
  if (!$nav.length) throw new Error('找不到 #leftNavigate .bs-docs-sidenav')

  const directLis = $nav.children('li')
  console.log(`[调试] 顶层 li 数量: ${directLis.length}`)

  const items = []
  items.push({ type: 'link', slug: '', href: '/wiki/k10', title: '简介', sourceTitle: null })

  directLis.each((_, li) => {
    const $li = $(li)
    const $a = $li.children('a').first()
    const $sub = $li.children('ul.nav').first()

    if ($sub.length) {
      const groupTitle = ($a.find('span').text() || $a.text()).trim()
      const groupItems = []
      $sub.children('li').each((__, subLi) => {
        const $subLi = $(subLi)
        const $subA = $subLi.children('a').first()
        const slug = resolveSlug($subA, $subLi)
        if (!slug) return
        groupItems.push({
          slug,
          href: `/wiki/k10/${slug}`,
          title: $subA.text().trim(),
          sourceTitle: $subA.attr('title') || null
        })
      })
      if (groupItems.length) items.push({ type: 'group', title: groupTitle, items: groupItems })
    } else {
      const slug = resolveSlug($a, $li)
      if (!slug) return
      items.push({
        type: 'link',
        slug,
        href: `/wiki/k10/${slug}`,
        title: $a.text().trim(),
        sourceTitle: $a.attr('title') || null
      })
    }
  })

  const total = items.reduce((s, it) => s + (it.type === 'group' ? it.items.length : 1), 0)
  console.log(`[统计] 解析出 ${total} 个页面（顶层 ${items.length} 项）`)

  if (total < 5) {
    console.warn(`[警告] 只解析到 ${total} 个页面,原始 HTML 里可能连 id 都没了`)
    directLis.slice(0, 3).each((i, li) => {
      console.warn(`--- li ${i} ---`)
      console.warn($(li).html()?.slice(0, 300))
    })
  }

  const out = { generatedAt: new Date().toISOString(), baseUrl: BASE_URL, items }
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2), 'utf8')
  console.log(`[完成] → ${OUT}`)
}

main().catch(e => { console.error(e); process.exit(1) })