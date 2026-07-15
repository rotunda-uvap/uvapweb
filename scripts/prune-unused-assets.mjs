#!/usr/bin/env node
// Delete images from dist/_astro that no built file references. Vite emits
// every image matched by an import.meta.glob (all of content/news/ and
// content/bios/) even though the templates only render optimized variants —
// that's ~200MB of full-resolution Decap uploads nothing links to. Runs as
// part of `npm run build`, after fix-link-case and before pagefind.
import fs from 'node:fs';
import path from 'node:path';

const root = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const dist = path.join(root, 'dist');
const astroDir = path.join(dist, '_astro');

// only prune images; fonts/css/js stay no matter what
const PRUNABLE = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg']);

// collect every /_astro/<file> mentioned in built html/css/js (href, src,
// srcset, url(), og:image, inlined JS strings)
const referenced = new Set();
const REF = /\/_astro\/([^"'()\s?#,]+)/g;
(function scan(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) scan(p);
    else if (/\.(html|css|js|xml|json)$/.test(e.name)) {
      const text = fs.readFileSync(p, 'utf8');
      for (const m of text.matchAll(REF)) {
        referenced.add(m[1]);
        // filenames with spaces appear percent-encoded in URLs
        try {
          referenced.add(decodeURIComponent(m[1]));
        } catch {}
      }
    }
  }
})(dist);

let removed = 0;
let freed = 0;
for (const name of fs.readdirSync(astroDir)) {
  if (!PRUNABLE.has(path.extname(name).toLowerCase())) continue;
  if (referenced.has(name)) continue;
  freed += fs.statSync(path.join(astroDir, name)).size;
  fs.unlinkSync(path.join(astroDir, name));
  removed++;
}
console.log(
  `prune-unused-assets: removed ${removed} unreferenced images, freed ${(freed / 1024 / 1024).toFixed(1)}MB`
);
