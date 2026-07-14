#!/usr/bin/env node
// Lowercase internal link hrefs in the built HTML. Netlify force-lowercases
// URLs with a 301; pages are now built at lowercase paths (route params are
// lowercased), and this pass makes every internal link point there directly
// so visitors skip the redirect hop. Runs as part of `npm run build`.
import fs from 'node:fs';
import path from 'node:path';

const root = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const dist = path.join(root, 'dist');

// only these URL namespaces carry mixed case; leave everything else untouched
const LINK = /(href=")(\/(?:series|title|collections|collection|exhibits|staff)\/[^"#?]*)/g;

let files = 0;
let changed = 0;
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) {
      files++;
      const src = fs.readFileSync(p, 'utf8');
      const out = src.replace(LINK, (_, pre, url) => pre + url.toLowerCase());
      if (out !== src) {
        fs.writeFileSync(p, out);
        changed++;
      }
    }
  }
})(dist);
console.log(`fix-link-case: ${changed} of ${files} HTML files updated`);
