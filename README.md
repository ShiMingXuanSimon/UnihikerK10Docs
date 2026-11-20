# 行空板 K10 文档（VitePress 重构版）

原站：<https://www.unihiker.com.cn/wiki/k10>

## 本地开发

```bash
npm install
npm run sync        # 抓取原站 → urls.json + docs/wiki/k10/*.md + 图片 + sidebar.mts
npm run docs:dev    # 预览
npm run docs:build  # 构建
```

## 自动同步

`.github/workflows/sync.yml` 每周一 00:00 UTC（北京 08:00）自动跑一次：

1. `discover-urls.js` 解析原站左侧导航 → `urls.json`
2. `crawl.js` 抓正文（`#htmlContent`）→ 增量写入 md，图片按 URL hash 去重
3. `gen-sidebar.js` 生成 `docs/.vitepress/sidebar.mts`
4. `docs:build` 构建校验
5. 有变更 → 开 PR 到 `bot/sync-k10` 分支

也可在 Actions 页面手动触发（`Run workflow`）。

## 目录

| 路径 | 说明 |
|---|---|
| `scripts/discover-urls.js` | 解析导航，生成 urls.json |
| `scripts/crawl.js` | 抓正文/图片/代码块，写 md |
| `scripts/gen-sidebar.js` | 生成侧边栏 |
| `docs/wiki/k10/` | 抓取产物 |
| `docs/public/images/k10/` | 图片（sha1 命名，自动去重） |
| `urls.json` / `state.json` | 同步状态，**要提交进 git** |

## 申明
MIT协议。

代码是Deepseek网页端自己设计自己写的。我只是帮他复制、粘贴、测试。