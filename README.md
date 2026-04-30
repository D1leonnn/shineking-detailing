# PlatinumDetailConcepts

Landing page for **PlatinumDetailConcepts**, a premium auto detailing business based in Los Angeles, CA. Built with [Astro](https://astro.build) — outputs a fully static site with zero client-side JavaScript frameworks.

## Live Sections

- **Hero** — Full-screen intro with CTA
- **Services** — Exterior Detailing, Interior Cleaning, Paint Correction, Ceramic Coating
- **Stats** — Social proof numbers
- **Pricing** — Three-tier packages (Basic · Premium · Ultimate)
- **Gallery** — Before & after showcase
- **Testimonials** — Customer reviews
- **Contact** — Booking form with business info

## Tech Stack

| Tool | Purpose |
|---|---|
| [Astro 4](https://astro.build) | Static site framework |
| Vanilla CSS | Scoped component styles + CSS custom properties |
| Vanilla JS | Navbar scroll/mobile menu, scroll-reveal animations |
| Google Fonts | Barlow Condensed (headings) · Inter (body) |

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server → http://localhost:4321
npm run dev

# Production build → dist/
npm run build

# Preview production build locally
npm run preview
```

## Customization

All business content is defined as plain arrays/objects in each component's frontmatter — no CMS or external data files.

| What to change | Where |
|---|---|
| Business name | `src/layouts/Layout.astro`, `src/components/Navbar.astro`, `src/components/Footer.astro` |
| Phone / Email / Address | `src/components/Contact.astro` — `info` array |
| Services | `src/components/Services.astro` — `services` array |
| Pricing & packages | `src/components/Pricing.astro` — `plans` array |
| Gallery photos | `src/components/Gallery.astro` — replace gradient blocks with `<img>` tags |
| Testimonials | `src/components/Testimonials.astro` — `reviews` array |
| Stats numbers | `src/components/Stats.astro` — `stats` array |
| Colors / fonts / tokens | `src/styles/global.css` — `:root` custom properties |

## Contact

**PlatinumDetailConcepts**
- 📍 145 S April St, Los Angeles, CA
- 📞 +1 (646) 886-5877
- ✉️ debibi53@gmail.com
