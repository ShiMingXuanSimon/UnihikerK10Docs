import fs from 'node:fs/promises'
import fsSync from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const URLS_FILE = path.join(ROOT, 'urls.json')
const OUT = path.join(ROOT, 'docs', '.vitepress', 'sidebar.mts')

function toLink(it) {
  const link = it.slug ? `/wiki/k10/${it.slug}` : '/wiki/k10/'
  return { text: it.title, link }
}

async function main() {
  let sidebar = []
  if (fsSync.existsSync(URLS_FILE)) {
    const urls = JSON.parse(await fs.readFile(URLS_FILE, 'utf8'))
    for (const it of urls.items) {
      if (it.type === 'link' || !it.items) sidebar.push(toLink(it))
      else sidebar.push({ text: it.title, collapsed: false, items: it.items.map(toLink) })
    }
  } else {
    console.warn(`[警告] 找不到 ${URLS_FILE},生成空侧边栏`)
  }

  const content = `// 自动生成,勿手改\nexport const sidebarK10 = ${JSON.stringify(sidebar, null, 2)}\n`
  await fs.writeFile(OUT, content, 'utf8')
  console.log(`[完成] 侧边栏 ${sidebar.length} 项 → ${OUT}`)
}

main().catch(e => { console.error(e); process.exit(1) })