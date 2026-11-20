import { defineConfig } from 'vitepress'

export default defineConfig(async () => {
  let sidebarK10: any[] = []
  try {
    const m = await import('./sidebar.mts')
    sidebarK10 = m.sidebarK10 ?? []
  } catch {
    // sidebar.mts 还没生成(首次 npm run sync 之前),用空数组
  }

  return {
    title: '行空板 K10 文档',
    description: '行空板 K10 官方文档（VitePress 重构版）',
    lang: 'zh-CN',
    cleanUrls: true,
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: 'K10 教程', link: '/wiki/k10/' }
      ],
      sidebar: {
        '/wiki/k10/': sidebarK10
      },
      outline: { level: [2, 3] },
      search: { provider: 'local' }
    }
  }
})