# aaitorg.github.io

Personal portfolio of **Aitor González-Marfil** — PhD Candidate in Computer Science & AI
working on biomedical computer vision, self-supervised learning, and deployment-ready ML
pipelines.

Live site: <https://aaitorg.github.io>

## Design credit

This site is built as a faithful adaptation of [Brittany Chiang's v4 portfolio template]
(https://github.com/bchiang7/v4) — a clean, dark-themed portfolio. The original is a
Gatsby site; this version ports its structure, design tokens, and component architecture
into a lightweight **React + Vite** single-page app, then layers Aitor's content
(CV, projects, publications) on top. Attribution is included in the footer.

## Stack

- **React** + **Vite** — fast, minimal single-page app
- **Custom CSS** (no UI framework) ported from Brittany Chiang's design system: dark
  theme, navy/green palette, vertical sidebar nav, fixed social + email rails,
  numbered section headings, scroll-reveal animations
- Deployed to **GitHub Pages** via the GitHub Actions workflow in
  [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

## Structure

- `src/config.js` — all content + site config (hero, about, jobs, education, projects,
  publications, social links, attribution)
- `src/components/` — `Sidebar` (Nav), `Social`, `Email`, `Hero`, `About`, `Experience`,
  `Education`, `Projects`, `Publications`, `Contact`, `Footer`, and an `Icon` SVG set
- `src/hooks/useReveal.js` — scroll-reveal animation hook
- `src/index.css` — design tokens and layout

## Sections

- **Hero** — name, role, one-line pitch
- **About** — short bio and skills
- **Experience** — selected ML / research roles (DIPC, UPV/EHU, IXA)
- **Education** — degrees from UPV/EHU
- **Projects** — featured work (Light My Cells, napari-DINOSim, UNETR_2D, 2048 Bot, Fake News Detector)
- **Publications** — highlight linking to Google Scholar
- **Contact** — email CTA

## Editing

All content lives in [`src/config.js`](src/config.js). Update the strings there to change
any text, job, project, or link — no component edits required.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build & deploy

```bash
npm run build    # outputs static site to dist/
```

The GitHub Actions workflow builds and publishes `dist/` to GitHub Pages automatically on
every push to `main`. `.nojekyll` ensures GitHub Pages serves the build as-is.