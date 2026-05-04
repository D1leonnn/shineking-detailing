# PlatinumDetailConcepts

Landing page for **PlatinumDetailConcepts**, a premium auto detailing business based in Los Angeles, CA. Built with [Astro](https://astro.build) and includes an AI receptionist powered by [Groq](https://groq.com) (Llama 3.3).

## Live Sections

- **Hero** — Full-screen intro with CTA
- **Services** — Exterior Detailing, Interior Cleaning, Paint Correction, Ceramic Coating
- **Stats** — Social proof numbers
- **Pricing** — Three-tier packages (Basic · Premium · Ultimate)
- **Gallery** — Before & after showcase
- **Testimonials** — Customer reviews
- **Contact** — Booking form with business info
- **AI Receptionist** — Floating chat widget that answers questions about services, pricing, and bookings

## Tech Stack

| Tool | Purpose |
|---|---|
| [Astro](https://astro.build) | Site framework (SSR + static) |
| [Groq SDK](https://console.groq.com) | AI receptionist (Llama 3.3 70B, free tier) |
| Vanilla CSS | Scoped component styles + CSS custom properties |
| Vanilla JS | Navbar scroll, mobile menu, scroll-reveal, chat widget |
| Google Fonts | Barlow Condensed (headings) · Inter (body) |

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Add your Groq API key (get one free at https://console.groq.com)
echo "GROQ_API_KEY=your_key_here" > .env

# Start dev server → http://localhost:4321
npm run dev

# Production build → dist/
npm run build
```

## Deploying to Render (Free)

1. Go to [render.com](https://render.com) and sign in with GitHub
2. Click **New → Web Service** and select this repo
3. Set these values:
   - **Build Command:** `npm run build`
   - **Start Command:** `node dist/server/entry.mjs`
   - **Environment:** Node
4. Under **Environment Variables**, add `GROQ_API_KEY` with your key
5. Click **Deploy** — Render gives you a public `*.onrender.com` URL

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
| AI receptionist system prompt | `src/pages/api/chat.ts` — `SYSTEM_PROMPT` constant |

## Contact

**PlatinumDetailConcepts**
- 145 S April St, Los Angeles, CA
- +1 (646) 886-5877
- debibi53@gmail.com
