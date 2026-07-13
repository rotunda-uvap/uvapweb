# University of Virginia Press Website

The website for [UVA Press](https://www.upress.virginia.edu), built with
[Astro](https://astro.build) and [Decap CMS](https://decapcms.org).
Hosted on Netlify.

> **Rebuild in progress** — this branch (`astro`) is the ground-up Astro
> rewrite of the Gatsby site that lives on `production`. See
> [REBUILD-PLAN.md](./REBUILD-PLAN.md) for decisions, phases, and status.

## Layout

- `content/` — editorial content (markdown, managed via Decap CMS at `/admin`)
- `src/data/` — book catalog JSON (`books.json` updated weekly on `production`)
- `src/content.config.ts` — content collection schemas (the data layer)
- `static/` — served at the site root (Decap media in `static/assets`)

## Commands

| Command | Action |
| --- | --- |
| `npm install` | install dependencies |
| `npm run dev` | dev server at `localhost:4321` |
| `npm run build` | production build to `dist/`, then Pagefind search index |
| `npm run preview` | preview the production build locally |

## Content sync during the rebuild

Editorial changes land on `production` (live site). Pull them into this
branch with `git merge production` — content paths are identical in both
architectures, so merges are clean. Weekly `books.json` commits belong on
`production`, never here.
