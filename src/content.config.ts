import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// A handful of legacy entries use "" or null where a value is missing;
// normalize those to undefined so optional() handles them.
const blankable = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((v) => (v === '' || v === null ? undefined : v), schema.optional());

/* ------------------------------------------------------------------ *
 * Editorial content (Decap-managed markdown in content/)
 * ------------------------------------------------------------------ */

// news, media posts, and author-corner posts share one folder and shape,
// discriminated by `type`
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/news' }),
  schema: z.object({
    templateKey: z.literal('news'),
    type: z.enum(['news', 'author-corner', 'media']),
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    image: z.string().optional(),
    related_book: z.array(z.string()).optional(),
    related_series: blankable(z.array(z.string())),
    // media posts sometimes carry an embed link
    link: z.string().optional(),
    // NOTE: legacy fields (relbook, related_books, related, path, draft) are
    // intentionally not read — every file carrying them also has the modern
    // related_book field. They get cleaned from the files at cutover.
  }),
});

const bios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/bios' }),
  schema: z.object({
    templateKey: z.literal('bio'),
    title: z.string(),
    staff_name: z.string(),
    name_slug: z.string(),
    job_title: z.string(),
    department: z.array(z.string()),
    email: z.string(),
    phone: z.string().optional(),
    profile_photo: z.string().optional(),
    contact_for: z.string().optional(),
    related_series: blankable(z.array(z.string())),
  }),
});

const bookCollections = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/collections' }),
  schema: z.object({
    templateKey: z.literal('collection'),
    title: z.string(),
    related_book: z.array(z.string()),
  }),
});

const exhibits = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/exhibits' }),
  schema: z.object({
    templateKey: z.literal('exhibit'),
    title: z.string(),
    exhibit_slug: z.string(),
    date: blankable(z.coerce.date()),
    coupon: z.string(),
    bgcolor: z.string(),
    txtcolor: z.string(),
    featured_books: z.array(z.string()),
    related_collection: z.array(z.string()),
    related_blog: z.array(z.string()),
    related_staff: z.array(z.string()).optional(),
    related_series: blankable(z.array(z.string())),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/pages' }),
  schema: z.object({
    // four legacy pages lack templateKey/type; both are optional for that reason
    templateKey: z.string().optional(),
    type: z.string().optional(),
    title: z.string(),
    related_collection: z.array(z.string()).optional(),
  }),
});

const homepage = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/homepage' }),
  schema: z.object({
    templateKey: z.literal('homepage'),
    title: z.string(),
    banner_id: z.string(),
    // TODO(phase 2): tighten once the homepage template defines what a banner needs
    top_banner: z.array(z.record(z.string(), z.any())),
    featured_books: z.array(z.string()),
    related_book: z.array(z.string()),
    related_collection: z.array(z.string()),
  }),
});

const seriesInfo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/seriesinfo' }),
  schema: z.object({
    templateKey: z.literal('series'),
    type: z.string().optional(),
    title: z.string(),
    status: z.string(),
    seriestype: z.string(),
    seriesID: z.string(),
    editors: z.string().optional(),
    moreEditors: z.string().optional(),
    uvaeditors: blankable(z.string()),
    related_staff: blankable(z.array(z.string())),
  }),
});

const imprintInfo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/imprintinfo' }),
  schema: z.object({
    templateKey: z.literal('imprint'),
    title: z.string(),
    imprintID: z.number(),
    editors: z.string().optional(),
    uvaeditors: z.string().optional(),
    related_staff: z.array(z.string()).optional(),
  }),
});

const promos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/promos' }),
  schema: z.object({
    templateKey: z.literal('promo'),
    title: z.string(),
    image: z.string(),
    related: z.array(z.string()),
    related_book: z.array(z.string()),
    related_collection: z.array(z.string()),
  }),
});

const featuredCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/featured-collection' }),
  schema: z.object({
    templateKey: z.literal('featured-collection'),
    title: z.string(),
    related_collection: z.array(z.string()),
  }),
});

const readingSeries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/reading-series' }),
  schema: z.object({
    templateKey: z.literal('reading-series'),
    title: z.string(),
    description: z.string(),
    related: z.array(z.string()),
    related_collection: z.array(z.string()),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/resources' }),
  schema: z.object({
    templateKey: z.literal('resource'),
    title: z.string(),
    attached_book: z.string(),
    attached_links: z.array(z.record(z.string(), z.any())),
  }),
});

// Rotunda publication descriptions (markdown bodies keyed by rid)
const rotundaInfo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/rotunda' }),
  schema: z.object({
    templateKey: z.literal('rotunda'),
    title: z.string(),
    rid: z.string(),
    // legacy `id` field duplicates rid in most files; not read
  }),
});

/* ------------------------------------------------------------------ *
 * Catalog data (src/data/*.json — updated weekly, path unchanged from
 * the Gatsby site so production merges stay clean)
 * ------------------------------------------------------------------ */

// Books: large records; validate the fields the site relies on and keep
// everything else available untyped via the raw entry.
const books = defineCollection({
  loader: file('./src/data/books.json', {
    // The weekly export collapses single-element lists to bare objects
    // (Series on ~half the books); normalize to arrays on read so the
    // file on disk stays exactly what the export produces.
    parser: (text) =>
      JSON.parse(text).map((b: Record<string, unknown>) => ({
        id: String(b.BookID),
        ...b,
        Series: b.Series && !Array.isArray(b.Series) ? [b.Series] : b.Series,
        Subjects: b.Subjects && !Array.isArray(b.Subjects) ? [b.Subjects] : b.Subjects,
      })),
  }),
  schema: z
    .object({
      id: z.string(),
      BookID: z.string(),
      Title: z.string(),
      Subtitle: blankable(z.string()),
      AuthorCredit: blankable(z.string()),
      Rotunda: z.boolean(),
      PublicationDate: blankable(z.string()),
      DaysSincePublication: z.number(),
      Subjects: blankable(z.array(z.object({ name: z.string() }).passthrough())),
      Series: blankable(z.array(z.object({ name: z.string() }).passthrough())),
    })
    .passthrough(),
});

const rotundaData = defineCollection({
  loader: file('./src/data/rotunda.json', {
    parser: (text) =>
      JSON.parse(text).map((r: Record<string, unknown>) => ({ id: String(r.RotID), ...r })),
  }),
  schema: z
    .object({
      id: z.string(),
      RotID: z.string(),
      MainCollection: z.string().optional(),
      SubCollection: z.string().optional(),
      imageFilename: z.string().optional(),
      StartYear: z.number().nullable().optional(),
      EndYear: z.number().nullable().optional(),
    })
    .passthrough(),
});

const seriesData = defineCollection({
  loader: file('./src/data/series.json', {
    parser: (text) =>
      JSON.parse(text).map((s: Record<string, unknown>) => ({ id: String(s.seriesID), ...s })),
  }),
  schema: z.object({ id: z.string(), seriesID: z.string() }).passthrough(),
});

const imprintsData = defineCollection({
  loader: file('./src/data/imprints.json', {
    parser: (text) =>
      JSON.parse(text).map((i: Record<string, unknown>) => ({ id: String(i.imprintID), ...i })),
  }),
  schema: z
    .object({ id: z.string(), imprintID: z.number(), imprintName: z.string() })
    .passthrough(),
});

export const collections = {
  news,
  bios,
  bookCollections,
  exhibits,
  pages,
  homepage,
  seriesInfo,
  imprintInfo,
  promos,
  featuredCollection,
  readingSeries,
  resources,
  rotundaInfo,
  books,
  rotundaData,
  seriesData,
  imprintsData,
};
