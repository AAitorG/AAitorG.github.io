# aaitorg.github.io

Personal website & online CV of **Aitor González-Marfil** — PhD Candidate in Computer
Science & AI working on biomedical computer vision, self-supervised learning, and
deployment-ready ML pipelines.

Live site: <https://aaitorg.github.io>

## Sections

- **About** — professional summary and focus areas.
- **Publications** — auto-generated from [`_bibliography/papers.bib`](_bibliography/papers.bib)
  with my name shown in **bold** and links/citation badges for each paper.
- **Projects** — selected research and personal projects.
- **CV** — rendered from [`_data/cv.yml`](_data/cv.yml) with a downloadable PDF.
- **Repositories** — GitHub profile stats.

## Editing

- Content: `_pages/`, `_projects/`, `_data/cv.yml`, `_bibliography/papers.bib`.
- Identity & settings: `_config.yml`, `_data/socials.yml`.
- To add a publication, append a BibTeX entry to `_bibliography/papers.bib`; my
  authorship is bolded automatically via the `scholar.last_name` / `scholar.first_name`
  matching in `_config.yml`.

## Build & deploy

Built with [Jekyll](https://jekyllrb.com/) using the
[al-folio](https://github.com/alshedivat/al-folio) theme and deployed to GitHub Pages by
the workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every
push to `main`.

Local preview:

```bash
bundle install
bundle exec jekyll serve
```
