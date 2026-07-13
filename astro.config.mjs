// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.upress.virginia.edu',
  // URL parity with the Gatsby site: every page is /path/ with a trailing slash
  trailingSlash: 'always',
  // Serve the existing static/ folder at the site root (Decap media lives in
  // static/assets and must keep resolving to /assets/*)
  publicDir: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
