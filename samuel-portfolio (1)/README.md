# Samuel Richard — Portfolio

Self-built Next.js portfolio. Static, fast, no database.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Vercel (5 minutes)
Option A — CLI:
```bash
npm i -g vercel   # or: npx vercel
vercel            # log in, accept defaults
vercel --prod
```
Option B — GitHub: push this folder to a repo, then vercel.com → Add New Project → import the repo. Every push auto-deploys.

## Before sharing with recruiters
Search the code for `todo` / `[ADD` — every placeholder is marked:
- Real campaign metrics (spend, CPL, partner counts) in `app/page.tsx`
- NetTrack demo video + write-up links
- Celeray live URL + screenshots
- GitHub repo link in the footer
- Update `metadataBase` in `app/layout.tsx` to your final domain

## Editing
- All content: `app/page.tsx`
- All styling/design tokens: `app/globals.css` (colors at the top)
