import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '行空板 K10 文档',
  description: '行空板 K10 官方文档（VitePress 重构版）',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'K10 教程', link: '/wiki/k10/' }
    ]
  }
})