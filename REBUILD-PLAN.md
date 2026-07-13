# Astro Rebuild Plan — upress.virginia.edu

> Ground-up rewrite of the UVA Press website in Astro + Decap CMS.
> Created 2026-07-13. Update as decisions land or phases complete.

---

## Decisions (locked)

| Decision | Choice | Rationale |
|---|---|---|
| Approach | Full rewrite in Astro, not a port | Gatsby GraphQL data layer doesn't transfer; refactoring Gatsby code first = paying twice |
| Search | **Pagefind** (replaces Algolia) | Free, static, indexes built HTML at deploy time; drops a recurring cost and an external dependency. Algolia Recommend widgets already disabled in current site |
| Hosting | **Netlify** | Native Decap/GitHub OAuth support, `_redirects` file handles all redirect needs including 200 proxy rewrites |
| URLs | **Exact parity required** | Book pages are the commerce funnel; years of SEO. Trailing slashes stay (`trailingSlash: always`) |
| CMS | Decap, config.yml ports nearly as-is | Content paths unchanged; fix the fragile `auth_type: implicit` GitHub auth with Netlify's OAuth |
| Repo strategy | **`astro` branch in this repo** (not a fork/new repo) | Content is live during the rebuild (Decap news edits + weekly books.json land on `production`); content paths are unchanged in Astro and code files are disjoint, so periodic `merge production → astro` stays clean. Second Netlify site builds the `astro` branch as staging. Cutover = merge to `production` + DNS. Keeps news-post git history. **Weekly books.json commits stay on `production`** — the merge carries them over |
| Mailchimp | Plain HTML form, no plugin | Current plugin just POSTs to the list-manage endpoint already in gatsby-config; a static form (+ optional small fetch for inline messages) does the same thing to the same list. Must POST to the existing endpoint: `virginia.us5.list-manage.com/subscribe/post?u=ef1bb24fccf12e802068da002&id=471ea965df` — verify subscribers land in the right audience before cutover |
| Styling | **Tailwind v4** | Current design is encoded as Tailwind classes across all 45 components — near-verbatim port. v4 drops the config file and the PurgeCSS safelist hack. Emotion and Less are removed. Visual redesign, if wanted, is a separate later project |

## Open questions

1. **Kill list** — which of the 33 top-level pages and 26 exhibits (many past-conference one-offs) survive?
2. **`netlify/functions/deploy-status.js`** — what consumes it? Port or drop.
3. **`api/auth.ts` / `api/callback.ts`** — leftover Vercel OAuth handlers; likely dead once Netlify OAuth is set up. Confirm and drop.

---

## Rebuild principles (Patricia, 2026-07-13)

Port the **what**, not the **how**. The rough design, features, and URLs stay; the implementation does not. Much of the Gatsby code is bespoke learning-era React — the rebuild works from each page's *rendered design and behavior*, not from its component code. Goals, in order: stable and efficient codebase, easier editing for CMS editors, same design/features. Practical implications:

- Phase 2 is "rebuild ~12 page types from their visible design," not "translate 45 components." Expect many bespoke components to collapse into a few simple Astro patterns.
- The CMS config is a design surface, not a port target: clearer labels/hints, sensible required fields, dead fields removed (`draft`, legacy relation names), collections organized around how editors actually work.
- When old code does something convoluted, ask "what was this *for*?" and build that — don't replicate the mechanism.

---

## Current-state findings (review, 2026-07-13)

**Two data worlds:**
1. **Editorial content** (~745 files, Decap-managed): 492 news, 57 collections, 32 bios, 26 exhibits, 17 pages, + homepage/promos/seriesinfo/imprintinfo/rotunda/resources.
2. **Book catalog** (`src/data/`): `books.json` (8.7MB, updated weekly by hand — the "weekly" commits), `booklist.json`, `series.json`, `imprints.json`, `rotunda.json`, `customers.json`. Drives all `/title/`, `/subject/`, `/series/`, `/imprints/`, `/collection/` pages and the search index.

**Integrations:** Algolia (build-time index + InstantSearch on book-search page → replaced by Pagefind), GTM (`GTM-MRC4NJR`), Mailchimp (one form on `/mailinglist/`), Decap at `/admin` (GitHub backend, `rotunda-uvap/uvapweb`, branch `production`).

**Cruft the rewrite sheds:** three styling systems (Tailwind + Emotion + Less) with PurgeCSS safelist hacks; dead `gatsby-plugin-gatsby-cloud` (Gatsby Cloud shut down 2023); custom `gatsby-plugin-slug` fork; webpack workarounds (TimelineJS null-loader, netlify-identity ignore); react-helmet; commented-out plugin config.

**GraphQL `mapping` in gatsby-config** (frontmatter → JSON joins: `related_book → BooklistJson.BookID`, `related_series → SeriesJson.seriesID`, etc.) becomes content-collection `reference()` fields or lookup helpers in Astro.

**URL inventory to preserve** (from gatsby-node.js `createPages`):
- `/title/{BookID}/` (books, Rotunda: false) and `/title/{RotID}/` (rotunda titles)
- `/staff/{name_slug}/`, `/collections/{title}/`, `/news{slug}/`, `/media{slug}/`, `/author-corner{slug}/`
- `/exhibits/{exhibit_slug}/`, `/subject/{kebab-case-name}/`, `/series/{seriesID}/`
- `/imprints/{kebab-case-name}/`, `/collection/{MainCollection}/` (rotunda)
- 33 static pages in `src/pages/`
- ~25 hardcoded redirects in gatsby-node.js:70–94, including two **200 proxy rewrites** to `legacy.upress.virginia.edu` (`/plunkett/mfp.html`, `/epub/pyatt/nchome.html`) — Netlify `_redirects` supports these natively

---

## Phases

### Phase 0 — Audit & prep (no code)
- [x] Crawl current production sitemap → URL inventory file (the cutover parity checklist)
      → **`url-inventory.txt`** (2,685 URLs, crawled 2026-07-13): 2,163 title · 190 author-corner · 83 news · 61 series · 57 collections · 39 subject · 27 exhibits · 21 staff · 8 media · 3 imprints · 3 collection · ~30 static pages.
      Note: `content/news/` holds 492 files but only 281 become pages (news + media + author-corner types); the folder mixes page content with images/assets — expect this when defining collections in Phase 1.
- [x] Kill list (analysis run 2026-07-13; deletions happen **on the `astro` branch only** — production stays untouched, dropped URLs get redirects at cutover):
  - **Exhibits: nothing to kill.** All 24 dated exhibits are 2025–2026 conference pages (actively maintained). The 2 undated ones (`conrad-m-hall-symposium-for-virginia-history-2025`, `the-sar-annual-conference-on-the-american-revolution`) are also current.
  - **Collections — DECIDED 2026-07-13 (Patricia): delete any collection with no page referencing it.** Verified against frontmatter references from all content AND body links to `/collections/...` across all years (news bodies contain none). **27 of 57 deleted on this branch** (10 from 2024-and-earlier, 8 orphaned 2025 conference collections, 9 unused thematic: Colonial America, African American History, African History, Black History, Early Republic, European History, Legal History, Twentieth Century, VMHC Symposium — plus AHA 25, ASALH 24, ASECS 25, AWP 25, DC History 25, EVENT 2024, HSS 24, MLA 24, MLA 25, OAH 24, OAH 25, SAH 24, SCWH 24, SHA 24, SHEAR 24, VA FORUM 25, VAF 25, VAF24).
    → At cutover: redirect the 27 dropped `/collections/...` URLs (present in url-inventory.txt) in Netlify `_redirects`.
    - *Kept (30):* all conference collections referenced by 2025–26 exhibits, plus Atlantic History, Eighteenth-Century Studies, Urban Studies, trade, uvamag, Homepage Featured, US 250, SAR Books, Reading Series 2021.
  - **News/author-corner/media: keep all.** `draft` field is always `"false"` (no real drafts exist) — drop the field from files and CMS config.
- [ ] Static-pages kill list (the ~30 top-level pages) — still open
- [x] Styling decision: Tailwind v4
- [x] Frontmatter consistency pass on `content/` (run 2026-07-13) — **content is in good shape overall; ~16 files need small fixes before schemas will validate:**
  - [x] `seriesinfo/displacement-migration-and-social-justice/index.md` — malformed YAML key — fixed by Patricia 2026-07-13
  - [x] 2 exhibits with `date: ""` → handled in schema (`blankable()` preprocess); no file edits
  - [x] 4 pages missing `templateKey`/`type` → optional in schema (pages are statically routed anyway); no file edits
  - [x] 3 rotunda entries missing `id` → schema reads `rid` only (`id` was a duplicate); no file edits
  - [x] 6 news posts with legacy field names → verified each also carries a correct `related_book`; schemas don't read the legacy fields. File cleanup deferred to cutover to avoid content divergence from production
  - [x] `draft` field (44 posts, always `"false"`) → not read by schema; remove from files + CMS config at cutover
  - Schema notes (no file fixes needed): empty arrays (`related_series: []`) and occasional `null` values (seriesinfo `related_staff`/`uvaeditors`) → make these fields optional/nullable; `imprintinfo` has `editors` vs `uvaeditors` drift across its 3 files
  - Structure note: images are co-located with content (208 in `news/`, 10 in `bios/`) — fine for Astro glob collections (`**/index.md`), keep the pattern
- [ ] Register GitHub OAuth app for Decap; confirm Netlify site + OAuth settings

### Phase 1 — Scaffold & data layer
- [x] New Astro project on the `astro` branch (scaffolded 2026-07-13: Astro 5 + Tailwind v4 + @astrojs/sitemap + Pagefind + sharp; 0 npm vulnerabilities vs 119 on the Gatsby tree). Gatsby code removed; `content/` and `src/data/` paths unchanged; `downloads/` moved to `static/downloads` (URLs unchanged); `publicDir: 'static'` preserves `/assets` Decap media paths; `trailingSlash: 'always'` preserved
- [x] Content collections with zod schemas for every `content/` dir + `file()` loaders for `src/data/*.json` — **full build validates: 2,129 press books + 34 rotunda = 2,163 title pages (matches sitemap exactly), 281 posts, 30 collections, 26 exhibits, 66 series, 21 bios**
  - books.json quirks handled in the loader parser, file on disk untouched: single-element `Series` collapsed to bare object on ~1,036 books (XML→JSON export artifact), `Series: null` on some
- [x] Weekly books.json update workflow carries over unchanged (path identical; loader normalizes on read)
- [x] Slug/URL helpers replicating gatsby-plugin-slug + kebab-case behavior **exactly** — entry ids preserve raw folder names (custom `generateId`, no re-slugification); subjects/imprints use lodash `kebabCase`. **Verified empirically: 2,627/2,627 dynamic URLs match the production sitemap, 0 missing, 0 extra** (`node scripts/check-parity.mjs` after any build)
- Scaffold placeholder: `src/pages/index.astro` is a data-layer proof page (collection counts); replaced by the real homepage in Phase 2. GTM deliberately omitted until cutover so staging traffic isn't tracked.

### Phase 2 — Templates & pages
- [x] All 11 dynamic route files with correct getStaticPaths (title incl. rotunda, news, author-corner, media, staff, collections, exhibits, subject, series, imprints, rotunda collection) — **interim templates**: real data, plain layout. Full build = 2,627 pages in ~12s
- [x] Site chrome (2026-07-13): header/mega-menu (defined once in nav-data.ts, was duplicated in Gatsby), footer, fonts (fontsource, same weights), global typography. react-icons → build-time inline SVGs
- [x] **Book page** (2026-07-13) — full design port, visually verified against production side by side: ImageKit covers, bindings, OA/digital branches, chips, awards, tabs (react-tabs → vanilla), share intents (react-share dropped), related news
- [ ] Design port, remaining page types: homepage → news/AC/media → series/subject/collections → staff/exhibits/imprints/rotunda (old components on `production` branch for reference)
- [ ] Surviving static pages (31 tracked in `scripts/parity-pending.txt` — remove lines as pages land; parity check enforces the rest)
- [ ] Islands only where interactive: Pagefind search UI, mobile nav if needed
- [ ] Mailchimp: static form POSTing to the existing list-manage endpoint
- [ ] Images: gatsby-image → `astro:assets`; verify Decap media paths (`static/assets` → `/assets`) resolve

### Phase 3 — Decap CMS
- [ ] Serve `/admin` statically; port `static/admin/config.yml` (collections unchanged)
- [ ] Netlify GitHub OAuth replaces `auth_type: implicit`
- [ ] `decap-server` for local editing; drop the one preview template or rebuild later
- [ ] Editor-experience pass on config.yml: clear labels/hints on every field, correct required/optional flags, remove dead fields (`draft`, legacy relation names), widget choices that match how editors work (relation widgets for related_book/related_collection instead of raw string lists)

### Phase 4 — Integrations, redirects, SEO
- [ ] All redirects → Netlify `_redirects` (301s + the two 200 proxies)
- [ ] GTM in base layout; `@astrojs/sitemap`; robots.txt (port the bot disallow list)
- [ ] Pagefind indexing in build command (`astro build && pagefind --site dist`)
- [ ] Meta/OG tags port (replaces react-helmet SeoComponent)

### Phase 5 — Parity check & cutover
- [ ] Diff new build URLs vs Phase 0 inventory — zero unexplained missing URLs
- [ ] Spot-check: book pages, search, Decap editing round-trip, Mailchimp signup, redirects
- [ ] Lighthouse pass; DNS cutover; Gatsby repo archived untouched

---

## Risks / watch items

- **URL parity** is the make-or-break item; the Phase 0 inventory + Phase 5 diff is the safety net.
- **Frontmatter drift** across 492 news posts will surface as schema errors in Phase 1 — budget time for it.
- **Pagefind vs Algolia UX**: no typo-tolerance/ranking polish; fine for a catalog this size but verify against real queries (author names, partial titles) before cutover. Related-books on book pages should come from series/subject matching (static), not search.
- **Decap implicit auth** may already be broken/deprecated on GitHub — the Netlify OAuth fix benefits editors immediately.
- Scope discipline: this is a rebuild of the *same site* on new architecture. Visual redesign, if wanted, is a separate project.
