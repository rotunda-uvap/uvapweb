# University of Virginia Press Website

The website for [UVA Press](https://www.upress.virginia.edu), built with
[Astro](https://astro.build) and [Decap CMS](https://decapcms.org).
Hosted on Netlify.

## How the site gets updated

There is one branch, `production`, and it *is* the live site. Every push to
it triggers a Netlify build; the change is live about two minutes later.
Three kinds of changes land there:

1. **Editorial content** — staff edit news, exhibits, collections, bios,
   etc. in Decap at [`/admin`](https://www.upress.virginia.edu/admin/).
   Each save is a commit to `production`, made under the editor's GitHub
   account.
2. **The weekly catalog update** — refreshed book data (see below).
3. **Code changes** — templates, styles, config, made locally and pushed.

Because Decap commits to `production` all the time, **run `git pull`
before starting any local work**, or your push will be rejected.

There is no staging site. For a risky code change, work on a branch and
open a pull request; with Deploy Previews enabled in Netlify, each pull
request gets its own preview URL to check before merging.

## Editing content (Decap)

Most people only ever touch the site through `/admin`.

- Log in with GitHub. You need write access to this repository.
- **Publish means live.** There's no draft or review step; a saved entry
  goes to the public site within a couple of minutes.
- Mistakes are recoverable: every save is a commit, so any earlier
  version can be restored from the repository history.
- **Resize photos before uploading** (about 2000px wide is plenty). Full
  camera files (10–25 MB) still display fine but bloat the repository
  permanently.
- Book pickers search by title or BookID. A book only appears there after
  the weekly catalog update that adds it.

## Weekly catalog update

The book catalog lives in `src/data/`, not in Decap. It comes from the
press's ONIX export, which arrives every Monday. From each export these
files are regenerated together and committed to `production` (commit
message: "weekly"):

- `src/data/books.xml`, `src/data/books.json` — full catalog records
  (the site reads the JSON)
- `src/data/booklist.json` — the book list the site reads
- `content/booklist_cms.json` — BookID/title list behind the Decap book pickers

The XSLT transforms and support files that turn the ONIX export into
these files live in the private `onix` repository, in the same GitHub
organization as this one.

The site's loader tolerates the export's quirks (e.g. a single `Series`
exported as an object instead of a list), so the files are committed as
generated. Don't hand-edit them.

## Layout

- `content/` — editorial content (markdown, managed via Decap). Images
  for news posts and bios sit beside their `index.md`
- `src/data/` — book catalog and other reference data (series, imprints,
  Rotunda titles and customers)
- `src/content.config.ts` — content collection schemas (the data layer).
  If a build fails with a validation error, the message names the file
  and field
- `src/pages/` — one file per page or URL pattern (`title/`, `series/`, `news/`, …)
- `src/components/`, `src/layouts/Base.astro` — templates; `Base.astro`
  is the shell every page uses (header, footer, meta, Google Tag Manager)
- `static/` — served at the site root
  - `static/admin/` — Decap CMS (`config.yml` defines every editing form)
  - `static/assets/` — Decap media uploads
  - `static/downloads/` — author and marketing forms, catalogs
  - `static/_redirects` — Netlify redirect rules (legacy URLs, proxies)
- `scripts/` — post-build steps and the URL parity checker
- `netlify/functions/deploy-notify.mjs` — Slack deploy notifications

## Commands

| Command | Action |
| --- | --- |
| `npm ci` | install dependencies exactly as locked in `package-lock.json` |
| `npm run dev` | dev server at `localhost:4321` |
| `npm run build` | production build to `dist/` (see below) |
| `npm run preview` | preview the production build locally |
| `node scripts/check-parity.mjs` | after a build: compare built URLs against `url-inventory.txt` |
| `npx decap-server` | run beside `npm run dev` to use `/admin` locally, no GitHub login; edits write to your local files |

Use Node 22 (the version Netlify builds with; set in `netlify.toml`).

`npm run build` does four things in order: `astro build`, lowercase
internal links (`scripts/fix-link-case.mjs`), delete full-resolution
images no page uses (`scripts/prune-unused-assets.mjs`), then build the
Pagefind search index used by `/book-search/`.

## Things to know before changing code

- **URLs are load-bearing.** Book pages are the commerce funnel and carry
  years of search ranking. Page URLs come from content folder names and
  BookIDs, so renaming a content folder changes a public URL. If a URL
  must change, add a 301 in `static/_redirects`. URLs keep trailing slashes.
- **Decap is pinned to an exact version** in `static/admin/index.html`.
  A floating version once let a bad Decap release break the editor
  overnight. To upgrade, read the release notes, bump the number, and test
  the homepage editor (the most complex form) before pushing.
- **Series need `type: series`** in their front matter to appear on
  `/series/`. Decap sets it; hand-made files may not.
- **Netlify settings that live outside this repo:** the GitHub OAuth app
  that Decap logs in through (Site configuration → Access & security →
  OAuth), the `SLACK_WEBHOOK` environment variable, and the deploy
  webhooks that call `deploy-notify`.

## History

The site was rebuilt from Gatsby to Astro in July 2026, with URLs kept
identical. [REBUILD-PLAN.md](./REBUILD-PLAN.md) records the decisions and
why they were made; [PORTING-NOTES.md](./PORTING-NOTES.md) holds the
conventions used during the port. Both are historical records, not
current instructions.
