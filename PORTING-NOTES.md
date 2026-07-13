# Porting conventions — Gatsby → Astro

Rules for porting pages/templates from the Gatsby site (worktree at
`/Users/pls4e/Projects/websites/uvapweb`, branch `production`) into this Astro
project (`/Users/pls4e/Projects/websites/uvapweb-astro`, branch `astro`).

## Prime directive
Port the **design and behavior**, not the mechanism. Keep Tailwind class
strings verbatim (design fidelity), but simplify the implementation: no React,
no client JS unless the page is genuinely interactive.

## Reference implementations (read these first)
- `src/layouts/Base.astro` — page shell (header/footer/fonts/meta). Every page wraps in this; props: `title`, `description`, `image`.
- `src/components/BookPage.astro` — the canonical big port (chips, ImageKit, icon usage)
- `src/components/Header.astro`, `Footer.astro` — data-driven markup, zero-JS toggles
- `src/components/BookTabs.astro`, `CoverCarousel.astro` — the pattern for interactivity: semantic HTML + a few lines of `<script>`
- `src/content.config.ts` — every collection and its fields. Collection names: `news`, `bios`, `bookCollections`, `exhibits`, `pages`, `homepage`, `seriesInfo`, `imprintInfo`, `promos`, `featuredCollection`, `readingSeries`, `resources`, `rotundaInfo`, `books`, `rotundaData`, `seriesData`, `imprintsData`.
- Existing small components: `PageHeader.astro`, `GoToTop.astro`, `SectionHeader.astro`, `Icon.astro`, `Interim.astro` (delete usages of Interim when you replace a template).

## Translation table
| Gatsby | Astro |
| --- | --- |
| `<Link to={...}>` | `<a href="/path/">` — absolute, **always trailing slash** (`../../series/X` → `/series/X/`) |
| `useStaticQuery`/page GraphQL | `await getCollection('name')` (+ filter fn). Markdown body: `const { Content } = await render(entry)` for JSX, or `entry.rendered?.html ?? ''` for an HTML string |
| `dangerouslySetInnerHTML` + sanitizeHtml | `set:html={...}` (no sanitize dependency — content is first-party) |
| `GatsbyImage`/`StaticImage` of `src/images/X` | `import img from '../assets/X'` + `<Image src={img} .../>` from `astro:assets`. If the file is missing, copy it: `cp /Users/pls4e/Projects/websites/uvapweb/src/images/X src/assets/` |
| `IKImage path={p} transformation=[{width: w}]` | `<img src={\`https://ik.imagekit.io/uvapress/${p}?tr=w-${w},c-at_max\`}>` |
| react-icons (`FaX`) | `<Icon icon={faX} class="..."/>` with defs from `@fortawesome/free-solid-svg-icons` / `free-brands-svg-icons` (fa6 names, e.g. `FaArrowAltCircleRight` → `faCircleArrowRight`) |
| `<Helmet>` / `SeO` component | `Base` props (`title`, `description`) |
| react state for tabs/accordions | semantic HTML + small `<script>` (see BookTabs) or checkbox/details if simpler |

## Data gotchas
- `related_book` frontmatter fields are arrays of **BookID strings** (the GraphQL mapping that joined them to book objects doesn't exist). Look titles up via `new Map(books.map(b => [b.data.BookID, b.data.Title]))`.
- `books` entries: schema types only key fields; access the rest via `const b = book.data as any` (Bindings, Reviews, BioNote, CoverImageMain, InternalSeriesVolume, isDigitalOA, Prizes...). `Series`/`Subjects` are normalized arrays.
- Gatsby page queries like `markdownRemark(frontmatter: {title: {eq: "X"}})` → `getCollection('pages', (p) => p.data.title === 'X')` then `[0]`.
- news collection holds three types discriminated by `data.type`: `news`, `author-corner`, `media`. Post URL = `/${type}/${entry.id}/`.
- Dates: `entry.data.date` is a `Date`. Format like the original (usually `YYYY-MM-DD` via `.toISOString().slice(0,10)`, or long form via `toLocaleDateString('en-US', {..., timeZone: 'UTC'})`).
- Subject/imprint URL slugs: `kebabCase` from `lodash-es/kebabCase`.

## Typography (invisible-cascade warning)
The site-wide default font is Antonio (`font-sans` on body); `p` elements are
Crimson Text via a global rule. The old code often relies on this inheritance —
do NOT add font classes the original markup didn't have, and don't remove ones
it did.

## Semantics
Where the old code used a styled `div`/`span` for something interactive, use
the right element (`button`, `nav`, `article`). Where it used a heading tag
purely for its font, keep the visual class but choose the semantically correct
element. Never change the rendered appearance.

## Process rules for agents
- Write `.astro` files only; TypeScript in frontmatter is fine.
- Static page URL = file path: `/about/` → `src/pages/about.astro`.
- Dynamic templates live at their existing route files (e.g. `src/pages/series/[sid].astro`) — replace the Interim usage in place, keep the `getStaticPaths` params EXACTLY as they are (URL parity is verified and enforced).
- Do NOT run `astro build`/`dev`, do NOT `git commit`, do NOT edit `scripts/parity-pending.txt`, `content.config.ts`, `Base.astro`, or another agent's files.
- If the old page pulls data you can't find in a collection, leave a `{/* TODO(port): ... */}` comment and render what you can — don't invent data.
