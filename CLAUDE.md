# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start Vite dev server (localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview production build locally
```

No test runner is configured.

## Architecture

Single-page React app (Vite + Tailwind). No routing — navigation is scroll-based using `scrollTo(id)` passed as a prop.

**State lives entirely in `App.jsx`:**
- `lang` — current language (`'en'` or `'zh'`), persisted to `localStorage`
- `t(key)` — translation lookup function, falls back `zh → en → key`
- All components receive `t`, `lang`, `scrollTo`, and/or `toggleLang` as props

**i18n (`src/i18n.js`):** flat key/value object with `en` and `zh` (Traditional Chinese HK) namespaces. All user-visible strings live here — never hardcode text in components. The `{year}` token in values is replaced at runtime.

**Component render order** (matches page top→bottom):
`Header` → `Hero` → `Services` → `ProductSpotlight` → `Contact` → `Footer`

Section IDs used for scroll targets: `top`, `what-we-do`, `product`, `contact`

## Design system

Custom Tailwind tokens are defined in `tailwind.config.js` — use these, not arbitrary values:

- **Colors:** `navy-*`, `coral-*`, `blurple-*`, `mint-*`
- **Shadows:** `shadow-card`, `shadow-card-lg`, `shadow-action`, `shadow-action-lg`, `shadow-pos`, `shadow-mint`, `shadow-navy-xl`
- **Max-width:** `max-w-container` (1200px)
- **Fonts:** `font-sans` (Inter + Noto Sans HK) · `font-hk` (Noto Sans HK-first, for CJK-heavy blocks)

**Rules:**
- White (`#FFFFFF`) background — no gradients, no textures
- Coral (`coral-500`) = Cardybara agency brand only
- Blurple (`blurple-500`) = spharm POS brand only — never mix as co-equal accents
- Mint (`mint-500`) = spharm secondary accent
- Sentence case everywhere except the `CARDYBARA` wordmark
- Icons from `lucide-react` (already installed)

## Assets

Static assets are served from `/assets/` (the `assets/` folder at project root, not `public/`). Reference them as `/assets/filename.png` in JSX.

Key assets: `cardybara-woodcut-logo.png` (hero), `cardybara-hat-mark.png` (header favicon/mark), `spharm-logo.png`, `spharm-mark.png`.
