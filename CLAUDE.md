# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # local dev server at localhost:3000
npm run build    # production build + static export to /out
npm run lint     # ESLint
```

There are no tests. The build is the primary correctness check — always run `npm run build` after changes.

## Architecture

**Static export.** `next.config.js` sets `output: 'export'` and `images: { unoptimized: true }`. The site builds to `/out` with no server runtime. This means:
- No API routes, no SSR, no `next/image` optimization
- Dynamic routes require `generateStaticParams` (see `app/portfolio/[slug]/page.tsx`)
- Sanity fetches happen at build time inside async server components

**Page layout flow.** Every page is wrapped by `ParkPlaceAbode` (client component, `components/ParkPlaceAbode.tsx`), which renders `Header → layout-container section → Footer`. Page components are direct children of the section. The `Header` is `position: fixed`, so interior pages need `padding-top: var(--header-height)` on their first element — this is handled by the global rule `section.layout-container > main:not(.full)`. The homepage opts out by using `<main className="full">` to allow the hero to start at y:0 behind the transparent header.

**CMS.** Sanity client is in `lib/sanity.ts` (project `w9ib5hjc`, dataset `production`). It exports `sanityClient`, `urlFor`, and `getFeaturedProjects`. The Sanity content type is `project` with fields: `name`, `slug`, `description` (PortableText), `images` (array). Portfolio slug URLs use `encodeURIComponent(project.name)` — there is no `slug.current` in use yet.

**Styling.** CSS Modules per component/page, plus global design tokens in `app/globals.css`. All spacing, color, and layout values come from CSS custom properties — do not use hardcoded values. Key tokens: `--color-bg`, `--color-bg-cream`, `--color-bg-dark`, `--color-sand`, `--color-mauve`, `--section-h-pad`, `--section-v-pad`, `--header-height`, `--max-width`.

**Typography.** Two fonts from `utils/fonts.ts`: `dmSans` (body, applied as `className` on `<body>`) and `playfairDisplay` (headings, applied as `className` on individual elements). Both also expose CSS variables (`--font-sans-serif`, `--font-serif`). Playfair Display includes `style: ['normal', 'italic']`.

**Shared footer CTA.** `Footer` always renders a cream "Get in Touch" section above the dark nav footer — suppressed via `hideContactCTA` prop. `ParkPlaceAbode` reads `usePathname()` and passes `hideContactCTA={pathname === '/contact'}` automatically. Per-page Instagram CTA uses `<PageCTA />` (components/PageCTA) — present on home, about, and portfolio; omitted on services and contact.

**Page padding convention.** Interior page headers use `padding-top: calc(var(--header-height) + 3.5rem)` to clear the fixed header. The homepage hero uses `height: 100svh` and sits behind the transparent header.
