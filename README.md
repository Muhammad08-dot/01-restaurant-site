# Saffron & Ash — Restaurant Website

A production-quality demo site for a fictional wood-fire Anatolian restaurant in
Portland. Warm editorial design system: cream paper, charcoal ink, one
terracotta accent, Fraunces + Inter.

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS 3.4** — all colors/type/spacing tokens defined in
  [`tailwind.config.ts`](tailwind.config.ts)
- **lucide-react** icons (single stroke family, no emoji)
- Google Fonts (Fraunces + Inter) self-hosted at build time via `next/font`
- Zero runtime data dependencies — content lives in `src/lib/data.ts`

## Run it

```bash
npm install
npm run dev        # http://localhost:3001
```

Production check (static export — the build emits a pure `out/` folder, no
Node server needed):

```bash
npm run build      # next build with output: 'export' → out/
npx serve out      # preview the exact deployable artifact at http://localhost:3000
```

## Deploy (static — Netlify / Vercel)

`netlify.toml` and `vercel.json` are already in this repo, so deploys are three
commands:

```bash
# Netlify
npm install && npm run build
npx netlify deploy --prod --dir=out

# Vercel
npm install && npm run build
npx vercel deploy --prod
```

No environment variables or server runtime are required — the whole site is
static HTML/CSS/JS.

## Pages & features

| Route | What's there |
| --- | --- |
| `/` | Full-bleed hero, editorial intro, fire-section feature card, pull-quote band, meze split, hours/visit strip |
| `/menu` | 5 categories, tab filtering, dotted price leaders, dietary legend, house notes |
| `/about` | Chef profile, 5-step timeline band, private-room CTA |
| `/gallery` | Masonry grid with captions + keyboard-accessible lightbox (Esc / ← →) |
| `/reservation` | Validated booking form (email/phone/date rules incl. "closed Mondays", 60-day window), live re-validation, success state |
| `/contact` | Phone/email/press/private-dining, hours, transit directions, Google Maps embed |
| any bad URL | Branded 404 |

## Design system (tokens)

- Surfaces: `cream #F7F2EA`, `parchment #EFE7DA`, `paper #FDFBF7`
- Ink: `#22201D` / soft `#5B564D` / faint `#8C8578`
- Accent: terracotta `#B5532E` (+ dark/light/wash steps) — the only hue
- Radius `4px`, one shadow step, 4/8px spacing scale, `max-w-shell 76rem`
- Motion: single scroll-reveal (fade + 18px slide), `prefers-reduced-motion`
  honored, 150–300ms hovers only

## Accessibility & SEO

- Semantic landmarks, skip link, visible focus rings, `aria-current`, labelled
  form errors with focus management
- Per-page `title`/`description`, OpenGraph + Twitter cards, descriptive alt text
- Images via `next/image` with explicit `sizes`, lazy-loaded below the fold

## Notes

- The reservation form is front-end only (demo). `RESERVATIONS_WEBHOOK_URL` in
  `.env.example` marks where a real endpoint plugs in.
- Photography is Unsplash (verified live URLs), matched to each dish/room
  context described in the captions.

## Screenshots

Responsive QA captures (375 / 768 / 1280 px, production build) live in
[`_screenshots/01-restaurant/`](../_screenshots/01-restaurant).
