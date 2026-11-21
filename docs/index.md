# 行空板 K10 文档（VitePress 重构版）

原站：<https://www.unihiker.com.cn/wiki/k10>

点击网页上方的`K10教程`进入文档。如果是手机端，请先点击右上角`≡`。

## 声明

- MIT协议。
- 绝对没有病毒。代码就在GitHub上面，提交记录和构建记录也有，可以自己查。
- 代码是Deepseek网页端自己设计自己写的。我只是帮他复制、粘贴、

## 自动同步原理

`.github/workflows/sync.yml` 每天 18:00 UTC（北京 02:00）自动跑一次：

1. `discover-urls.js` 解析原站左侧导航 → 有变更 → `urls.json`
2. `crawl.js` 抓正文（`#htmlContent`）→ 增量写入 md，图片按 URL hash 去重
3. `gen-sidebar.js` 生成 `docs/.vitepress/sidebar.mts`
4. `docs:build` 构建校验
5. 有变更 → 提交

也可在 Actions 页面手动触发（`Run workflow`）。
测试。

## 本地开发

### 克隆仓库
```bash
git clone https://github.com/ShiMingXuanSimon/UnihikerK10Docs
cd UnihikerK10Docs
git switch -c YOUR_BRANCH_NAME
```

### 开发
```bash
npm install         # 安装依赖
npm run sync        # 抓取原站 → urls.json + docs/wiki/k10/*.md + 图片 + sidebar.mts
npm run docs:dev    # 预览
npm run docs:build  # 构建
```

## 目录

| 路径 | 说明 |
|---|---|
| `scripts/discover-urls.js` | 解析导航，生成 urls.json |
| `scripts/crawl.js` | 抓正文/图片/代码块，写 md |
| `scripts/gen-sidebar.js` | 生成侧边栏 |
| `docs/wiki/k10/` | 抓取产物 |
| `docs/public/images/k10/` | 图片（sha1 命名，自动去重） |
| `urls.json` / `state.json` | 同步状态，**要提交进 git** |