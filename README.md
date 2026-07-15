# aaitorg.github.io

Personal portfolio of **Aitor González-Marfil** — PhD Candidate in Computer Science & AI
working on biomedical computer vision, self-supervised learning, and deployment-ready ML
pipelines.

Live site: <https://aaitorg.github.io>

## Stack

- **React** + **Vite** — fast, minimal single-page app
- **Custom CSS** (no UI framework) inspired by the Brittany Chiang portfolio: dark theme,
  restrained scroll-based reveal animations, vertical sidebar navigation
- Deployed to **GitHub Pages** via the GitHub Actions workflow in
  [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

## Sections

- **Hero** — name, role, one-line pitch
- **About** — short bio and skills
- **Experience** — selected ML / research roles
- **Projects** — featured work (Light My Cells, 2048 Bot, Fake News Detector)
- **Publications** — highlight linking to Google Scholar
- **Contact** — email CTA

## Editing

All content lives in [`src/content.js`](src/content.js). Update the strings there to change
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