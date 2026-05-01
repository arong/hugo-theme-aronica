# Aronica

> 一个基于 Hugo 的博客主题, 使用 Tailwind CSS v4 和 DaisyUI 构建.

**⚠️ 开发中, 请勿使用.** | **Work in progress, not ready for production.**

## 在线演示

[https://www.arong-xu.com](https://www.arong-xu.com/)

## Feature

- 🌓 黑暗模式 (跟随系统 / localStorage 持久化)
- 📱 响应式设计 (DaisyUI drawer 布局, 适配桌面 / 平板 / 手机)
- 📑 自动文章目录 (TOC, 滚动高亮当前章节)
- 🧮 数学公式渲染 (KaTeX v0.16.21, 按需加载)
- 📊 Mermaid 图表 (v11, 按需加载)
- 💻 代码块高亮 (Chroma 自定义主题, 支持多 Tab 和 Compiler Explorer 跳转)
- 🔍 全局搜索支持
- 🌍 多语言 (简体中文 / English)
- 📝 Waline 评论系统 (v3)
- 📈 Google Analytics / AdSense (仅生产环境)

## Quick Start

### 1. 添加到 Hugo 站点

```bash
git submodule add https://github.com/arong/hugo-theme-aronica themes/hugo-theme-aronica
```

在 `hugo.toml` 中启用主题:

```toml
theme = 'hugo-theme-aronica'
```

### 2. 安装 Node.js 依赖

```bash
npm install
# 或使用 pnpm
pnpm install
```

### 3. 构建 CSS

```bash
npm run build
```

### 4. 启动开发服务器

```bash
hugo server -D
```

> **重要**: 必须先构建 CSS 再运行 Hugo. 主题依赖 `assets/css/main.css`, 该文件由 `tailwind.css` 生成.

## Configuration

### Hugo 要求

- 最低版本: `0.160.0` (extended)

### Site Params

```toml
[params.Aronica]
toc = true       # 显示文章目录 (默认: true)
comment = true   # 显示评论 (默认: true)
crawl = true     # 允许搜索引擎抓取 (默认: true)
```

### Google Analytics

```toml
[params.GoogleAnalytics]
ID = 'G-XXXXXXXXXX'

[params.GoogleTagManager]
CookiebotTag = false
```

### Google AdSense

```toml
[params.GoogleAdSense]
ID = 'ca-pub-XXXXXXXXXXXXXXXX'
```

## Shortcodes

| Shortcode          | 说明                                      |
|--------------------|------------------------------------------|
| `CodeTabs`         | 多 Tab 代码块, 支持切换不同语言/版本        |
| `Code`             | 增强版代码块, 带复制按钮                    |
| `PostRef`          | 自动引用帖子的 title 和链接                 |
| `IncludeFile`      | 引入公共文件 (如专栏目录)                   |
| `CompilerExplorer` | 代码块跳转 Compiler Explorer 在线运行       |
| `Collapse`         | 可折叠内容区块                             |
| `mermaid`          | Mermaid 图表渲染                           |
| `Info` / `Warning` | 信息提示框 / 警告框                        |

## Development

```bash
# Watch mode - 监听并自动构建 CSS
npm run watch
```

### 项目结构

```
├── assets/
│   ├── css/        # tailwind.css (源码) → main.css (生成)
│   └── js/         # 主逻辑, 暗色切换, TOC 高亮
├── layouts/
│   ├── _default/   # baseof, single, list, section
│   ├── partials/   # head/, body/, sidebar/, icons/
│   ├── shortcodes/ # 自定义 shortcode
│   └── taxonomy/   # 标签, 分类页面
├── static/         # 静态资源 (favicon, logo)
└── i18n/           # 翻译文件 (zh-Hans, en)
```

## Browser Support

| 浏览器      | 版本   |
|-------------|--------|
| Chrome      | ≥ 90   |
| Firefox     | ≥ 88   |
| Safari      | ≥ 14   |
| Edge        | ≥ 90   |

## License

MIT
