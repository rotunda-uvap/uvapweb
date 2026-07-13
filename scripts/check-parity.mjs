#!/usr/bin/env node
// URL parity check: compares the built site (dist/) against the crawled
// production sitemap (url-inventory.txt). Run after `npm run build`.
//
//   node scripts/check-parity.mjs
//
// Categories:
//   MISSING — in production, not built, not explained → must fix before cutover
//   pending — known not-yet-implemented (scripts/parity-pending.txt)
//   dropped — intentionally removed, needs a redirect (scripts/parity-dropped.txt)
//   extra   — built but not in production sitemap (informational)

import fs from 'node:fs';
import path from 'node:path';

const root = path.dirname(new URL(import.meta.url).pathname) + '/..';
const ORIGIN = 'https://www.upress.virginia.edu';

const readList = (p) =>
  fs.existsSync(p)
    ? fs.readFileSync(p, 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'))
    : [];

// production URLs → decoded paths like "/title/5501/"
const inventory = fs
  .readFileSync(path.join(root, 'url-inventory.txt'), 'utf8')
  .split('\n')
  .filter(Boolean)
  .map((u) => decodeURIComponent(u.replace(ORIGIN, '')) || '/');

const pending = new Set(readList(path.join(root, 'scripts/parity-pending.txt')));
const dropped = new Set(readList(path.join(root, 'scripts/parity-dropped.txt')));

// built pages: every dist/**/index.html → "/path/"
const built = new Set();
(function walk(dir, rel) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) walk(path.join(dir, e.name), `${rel}${e.name}/`);
    else if (e.name === 'index.html') built.add(rel);
  }
})(path.join(root, 'dist'), '/');

const missing = [];
let pendingCount = 0;
let droppedCount = 0;
for (const url of inventory) {
  if (built.has(url)) continue;
  if (pending.has(url)) { pendingCount++; continue; }
  if (dropped.has(url)) { droppedCount++; continue; }
  missing.push(url);
}
const inventorySet = new Set(inventory);
const extra = [...built].filter((u) => !inventorySet.has(u) && !u.startsWith('/pagefind/'));

console.log(`inventory: ${inventory.length}  built: ${built.size}`);
console.log(`matched:   ${inventory.length - missing.length - pendingCount - droppedCount}`);
console.log(`pending:   ${pendingCount} (known, not yet implemented)`);
console.log(`dropped:   ${droppedCount} (intentional, redirect at cutover)`);
console.log(`extra:     ${extra.length}${extra.length ? ' → ' + extra.slice(0, 10).join(', ') : ''}`);
console.log(`MISSING:   ${missing.length}`);
if (missing.length) {
  missing.slice(0, 30).forEach((u) => console.log('  ' + u));
  if (missing.length > 30) console.log(`  … +${missing.length - 30} more`);
  process.exit(1);
}
console.log('✓ URL parity holds (modulo pending/dropped)');
