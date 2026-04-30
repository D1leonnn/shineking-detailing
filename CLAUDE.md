# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start dev server (http://localhost:4321)
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

> npm is at `C:\Program Files\nodejs\npm.ps1` on this machine — if `npm` is not on PATH, invoke it with the full path or prefix the command with `$env:PATH += ";C:\Program Files\nodejs"`.

## Architecture

Single-page Astro 4 static site. No framework islands, no SSR — everything renders to plain HTML/CSS/JS at build time.

**Render flow:** `src/pages/index.astro` imports and sequences all section components inside `src/layouts/Layout.astro`, which provides the HTML shell and loads global styles + Google Fonts.

**Page sections in order:**
`Navbar` → `Hero` → `Services` → `Stats` → `Pricing` → `Gallery` → `Testimonials` → `Contact` → `Footer`

Each section component is self-contained: markup, scoped `<style>`, and any `<script>` blocks all live in one `.astro` file. There are no shared component props or inter-component state.

## Styling System

All design tokens live in `src/styles/global.css` as CSS custom properties on `:root`. Use these tokens rather than hardcoding values:

| Token | Value | Use |
|---|---|---|
| `--accent` | `#d4a843` | Gold — primary brand colour |
| `--accent-l` / `--accent-d` | lighter/darker gold | Hover states |
| `--accent-glow` | `rgba(212,168,67,.18)` | Box-shadow glows |
| `--bg` / `--bg-2` / `--bg-card` | `#080808` / `#0d0d0d` / `#111` | Section backgrounds |
| `--border` / `--border-a` | white 6% / gold 22% | Borders |
| `--font-h` | Barlow Condensed | All headings (uppercase) |
| `--font-b` | Inter | Body text |
| `--t` | `.3s ease` | Transition shorthand |

Global utility classes available in every component (no import needed): `.container`, `.btn`, `.btn-gold`, `.btn-outline`, `.tag`, `.section-title`, `.accent`, `.section-desc`.

## Scroll Reveal Animation

Elements animate in on scroll via `IntersectionObserver` registered in `index.astro`. To animate any element:

1. Add class `reveal` to the element.
2. Optionally add `d1`–`d5` for staggered delay (`.d1` = 80ms, `.d5` = 400ms).

The observer adds `visible` once the element crosses a 12% threshold.

## Content & Data

All editable content (services list, pricing tiers, testimonials, contact info, stats) is defined as plain JS arrays/objects in the frontmatter (`---` block) of each component — not in separate data files. To update copy or add items, edit the array directly in the relevant component.

**Key content locations:**
- Business name, browser title → `src/layouts/Layout.astro` and navbar/footer logo spans
- Phone, email, address → `src/components/Contact.astro` (`info` array, lines 5–22)
- Services cards → `src/components/Services.astro` (`services` array)
- Pricing tiers → `src/components/Pricing.astro` (`plans` array)
- Gallery items → `src/components/Gallery.astro` — replace CSS gradient blocks with real `<img>` tags
- Testimonials → `src/components/Testimonials.astro` (`reviews` array)
- Stats numbers → `src/components/Stats.astro` (`stats` array)
