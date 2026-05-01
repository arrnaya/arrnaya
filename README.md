# Arrnaya

> Personal site & technical blog — AI, Blockchain, DeFi, and the future of finance.

[![Site](https://img.shields.io/badge/live-arrnaya.github.io/arrnaya-7c3aed?style=flat-square&logo=githubpages)](https://arrnaya.github.io/arrnaya/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06b6d4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-8b5cf6?style=flat-square)](LICENSE)

---

## Live Site

**[arrnaya.github.io/arrnaya](https://arrnaya.github.io/arrnaya/)**

Built as a static export and deployed via GitHub Pages.

---

## What's Inside

### Landing Page
- Hero section with animated gradient overlays
- Stats, expertise grid, speaking highlights, blog teaser, CTA
- Fully responsive dark theme

### Blog — 6 Deep-Dive Articles

| Post | Topic | Read Time |
|------|-------|-----------|
| [AI for the Modern CA — 30-Day Roadmap](https://arrnaya.github.io/arrnaya/blog/ca-ai-roadmap) | AI & Finance | 15 min |
| [DeFi Banking in Southeast Asia](https://arrnaya.github.io/arrnaya/blog/defi-banking-sea) | DeFi | 14 min |
| [Designing Compliant Stablecoin Architectures](https://arrnaya.github.io/arrnaya/blog/stablecoin-architecture) | Stablecoins | 16 min |
| [CBDCs & DeFi: Convergence or Collision?](https://arrnaya.github.io/arrnaya/blog/cbdc-defi) | Regulatory | 18 min |
| [Real-World Asset Tokenization: A Practical Guide](https://arrnaya.github.io/arrnaya/blog/rwa-tokenization) | Tokenization | 18 min |
| [Layer-1 Scaling: Beyond TPS Metrics](https://arrnaya.github.io/arrnaya/blog/layer1-scaling) | Blockchain Infrastructure | 20 min |

Each post features:
- Terminal-style code blocks and metric grids
- Comparison tables and data visualizations
- Pull quotes, info boxes, and structured conclusions
- Full SEO metadata (Open Graph, Twitter Cards)

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | **Next.js 16** (App Router, static export) | SSG for GitHub Pages, clean routing, built-in image optimization |
| Language | **TypeScript** | Type safety across components and content |
| Styling | **Tailwind CSS v3** | Utility-first, dark-mode native, arbitrary values for precise design control |
| Build | **Turbopack** | Fast iterative builds during development |
| Deploy | **GitHub Pages** (`gh-pages` branch) | Zero-cost hosting, automated via `git subtree push --prefix out` |

### Why Tailwind v3 over v4
Next.js 16 + Turbopack failed to generate many arbitrary-value classes under Tailwind v4 (e.g., `bg-[#0f0524]`, `blur-[120px]`). v3 with standard `postcss.config.js` + `tailwind.config.ts` resolves this reliably.

---

## Project Structure

```
app/
├── page.tsx                    # Landing page
├── layout.tsx                  # Root layout (Inter font, dark theme)
├── globals.css                 # Tailwind directives + CSS variables
├── blog/
│   ├── page.tsx                # Blog listing grid
│   ├── ca-ai-roadmap/
│   ├── cbdc-defi/
│   ├── defi-banking-sea/
│   ├── layer1-scaling/         # Layer-1 Scaling deep-dive
│   ├── rwa-tokenization/
│   └── stablecoin-architecture/
└── components/
    ├── Navbar.tsx
    └── Footer.tsx
public/                         # Static assets (images, favicon)
next.config.ts                  # output: 'export', distDir: 'out'
```

---

## Development

```bash
# Install dependencies
npm install

# Run dev server (Turbopack)
npm run dev

# Build static export
npm run build

# The `out/` folder is then pushed to the `gh-pages` branch for deployment
```

---

## Design System

- **Background**: `#030308` — near-black with subtle warmth
- **Card surfaces**: `#0a0a12` with `#1a1a2e` borders
- **Primary accent**: `#7c3aed` (violet-600) → `#a855f7` (purple-500)
- **Secondary**: `#3b82f6` (blue-500)
- **Typography**: Inter (Google Fonts), monospace for labels/code
- **Hero pattern**: Purple gradient orbs + radial-gradient sparkle dots on `#0f0524`

All background images use inline `style={{ backgroundImage: ... }}` rather than Tailwind arbitrary `bg-[url(...)]` syntax to ensure compatibility.

---

## Writing & Content

Blog posts are authored as standalone Next.js pages rather than MDX. This allows:
- Precise control over interactive elements (terminal blocks, metric grids, tables)
- Full TypeScript type safety for content structure
- Custom per-post metadata and Open Graph tags
- Consistent design system enforcement without MDX parser overhead

---

## Connect

- **Site**: [arrnaya.github.io/arrnaya](https://arrnaya.github.io/arrnaya/)
- **GitHub**: [@arrnaya](https://github.com/arrnaya)

---

*Built with intention. No templates.*
