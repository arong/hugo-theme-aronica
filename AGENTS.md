# Aronica - Hugo Theme Development Guide

A Hugo blog theme using Tailwind CSS v4 and DaisyUI. Under development.

## Branching & Commit Policy

**CRITICAL: AI cannot commit directly to main/master/production branches.**

- Create feature branches: `feature/*` or `bugfix/*`
- Alternative: use `develop` branch for ongoing work
- Submit changes via Pull Request for human review
- Never use `--no-verify` or skip pre-commit hooks

## Quick Commands

```bash
# Build CSS (required before Hugo serve)
npm run build

# Watch mode for CSS development
npm run watch

# Serve Hugo site (requires CSS build first)
hugo server -D
```

**Important**: Always build CSS before running Hugo. The theme imports `assets/css/main.css` which is generated from `assets/css/tailwind.css`.

## Architecture

### Key Directories

- `layouts/` - Hugo templates (78 files)
  - `_default/` - Base templates (baseof.html, single.html, list.html, section.html)
  - `partials/` - Reusable components (head/, body/, sidebar/, icons/)
  - `shortcodes/` - Custom Hugo shortcodes
  - `taxonomy/` - Tag/category pages
- `assets/css/` - Source CSS (tailwind.css) and generated CSS (main.css)
- `assets/js/` - Theme JavaScript (dark mode toggle, TOC highlighting)
- `static/` - Static assets (favicon, logos)
- `i18n/` - Translation files (zh-Hans.yaml, en.yaml)
- `archetypes/` - Content templates

### Template Hierarchy

```
baseof.html (main layout)
├── head/seo.html, head/css.html, head/js.html
├── body/navbar.html
└── block "main"
    ├── _default/single.html (posts)
    ├── _default/section.html (columns/series)
    ├── _default/list.html (post lists)
    └── index.html (homepage)
```

### Page Params (under `Params.Aronica`)

- `toc`: Show table of contents (default: true)
- `comment`: Show comments (default: true)
- `crawl`: Allow search crawling (default: true)

Set in frontmatter: `Params.Aronica.toc = false`

## Styling System

### Tailwind v4 Setup

- Config: `tailwind.config.js` (content paths: `layouts/**/*.html`, `assets/js/*.js`)
- Source: `assets/css/tailwind.css` - uses `@import "tailwindcss"` (v4 syntax)
- Generated: `assets/css/main.css` - do not edit directly
- Plugins: DaisyUI v5, @tailwindcss/typography

### DaisyUI Integration

- Themes: dark, light (configured in tailwind.config.js)
- Uses drawer component for responsive sidebar
- Theme toggle implemented in `assets/js/main.js`

### Custom CSS Classes

From `tailwind.css`:
- `.scrollbar-hidden` - hides scrollbars across browsers
- `.search-highlight` - highlight color for search results
- `.code-tab` - code block tab styling
- `.menu-active` - active TOC item state
- `.chroma` classes - syntax highlighting colors (extensive custom theme)

## Custom Shortcodes

Located in `layouts/shortcodes/`:

- `CodeTabs.html` - Multi-tab code blocks
- `Code.html` - Enhanced code blocks with copy button
- `PostRef.html` - Auto-reference post title and link
- `IncludeFile.html` - Include common content (e.g., series TOC)
- `CompilerExplorer.html` - Link to Compiler Explorer
- `Collapse.html` - Collapsible content sections
- `mermaid.html` - Mermaid diagram support
- `Info.html`, `Warning.html` - Alert boxes

## Build Pipeline

```
1. npm run build     # tailwind.css → main.css
2. hugo server -D    # Hugo serves the site
```

### Pre-commit Checklist

- CSS rebuilt? (`npm run build`)
- No uncommitted main.css changes?
- Theme toggles work in both modes?

## Hugo Configuration

See `hugo.yaml`:
- Min version: 0.116.0
- Language: zh-CN (Chinese Simplified)
- Menus defined in config (not automatic)

## External Dependencies

Loaded via CDN in baseof.html:
- KaTeX 0.16.21 (math rendering, conditionally loaded)
- Mermaid 11 (diagrams, conditionally loaded)
- Clipboard.js 2.0.11 (code copy buttons)
- Waline v3 (comments, CSS only)

Conditional loading uses `.Page.Store`:
- `hasMath` → loads KaTeX
- `hasMermaid` → loads Mermaid
- `PageHasCode` → loads Clipboard.js

## Internationalization

Supported languages: zh-Hans (default), en

Template usage: `{{ T "tags" }}` or `{{ i18n "tags" }}`

## Known Issues (from todo.md)

- Mobile: arrow alignment in navigation
- prev/next buttons broken in `_index.html`
- Multiple same titles cause simultaneous highlighting in TOC
- Sidebar scroll issue on mobile when expanded

## Development Notes

- Uses Hugo's `partialCached` for performance
- Google Analytics/AdSense only loads in production (`hugo.IsProduction`)
- Dark mode persists in localStorage, falls back to system preference
- TOC auto-highlights current section on scroll (JavaScript in baseof.html)
- Left sidebar switches content based on `.Page.Store.Get "LeftSidebar"` value
  - "ColumnTOC" → series table of contents
  - "SiteLink" → site navigation (default)
