# Raislinn Hell

Brand / studio site for **Raislinn Hell** — practical horror visual effects.

**Practical nightmares for camera.**  
Horror FX · Prosthetics · Creature · On-set bloodwork

Domain: [raislinnhell.com](https://raislinnhell.com)

This is the studio site, not a curriculum dump. `/academy` is an offline stub.

## Stack

- Next.js 16 App Router (TypeScript)
- Tailwind CSS v4
- Raw WebGL fragment shader (fog, wireframe sphere, phosphor/blood streaks)
- CSS CRT chrome (scanlines, vignette, grain, bezel, corner brackets)
- Static export (`output: 'export'`) for GitHub Pages

## Run locally

```bash
cd /workspace/raislinn-hell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build (also what GitHub Pages gets):

```bash
npm run build
```

Static files land in `out/`. Preview with any static server:

```bash
npx serve out
```

Or the Next server (after a non-export build — this repo is configured to export):

```bash
# already exported; use serve, or:
npx serve out
```

## Routes

| Route | What it is |
| --- | --- |
| `/` | Terminal boot → ENTER → shader hero + wordmark + Work / Contact |
| `/work` | Sample portfolio grid (invented records, labeled placeholder) |
| `/services` | Prosthetics, creature, blood/gore, aging/illness, on-set |
| `/about` | Short studio mythos |
| `/contact` | Mailto form (Formspree-ready — swap `action` when wired) |
| `/academy` | Hidden stub. Learning content may come later. |

## Deploy

### GitHub Pages (static)

`next.config.ts` sets `output: 'export'`, `trailingSlash: true`, and unoptimized images.

1. Push this repo.
2. GitHub Actions (or Pages from `/docs` / `out`): publish the `out/` directory after `npm run build`.
3. Point custom domain `raislinnhell.com` at Pages.
4. No `basePath` needed for a root custom domain. If the site lives at `https://user.github.io/repo/`, add:

```ts
basePath: "/repo",
```

### Vercel

Vercel also works without the export flag. If you prefer the Node server there, remove `output: 'export'` and keep the rest. Environment: none required.

## Contact form

The contact UI posts via `mailto:studio@raislinnhell.com`. To go live with Formspree, set the `<form action>` to your Formspree endpoint and `method="POST"` — fields are already named.

## Visual blend

- **Unseen Studio layer:** full-viewport hero, glitch/chromatic wordmark (RAISLINN / HELL), WebGL fog + wireframe sphere, ENTER gate, minimal nav.
- **DbD terminal chrome (feeling only — no trademarks):** CRT scanlines, phosphor green `#3DFF6E` + dried blood `#8B1E1E` on void `#050505`, beveled frame, corner brackets, `SYSTEM ONLINE`, blinking cursor, fake path `C:\ENTITY\ARCHIVE\FX`, status bar, monospace chrome.
- **Neon energy language:** vertical light streaks in the shader, recolored phosphor / blood.
- Reduced-motion: shader draws a single frame; glitch/grain/cursor animations disable.

## Brand (locked)

- Name: Raislinn Hell
- Tagline: Practical nightmares for camera.
- Palette: void `#050505`, phosphor `#3DFF6E`, bone `#E8E0D5`, dried blood `#8B1E1E`, warning amber `#C9A227`
