// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cambia esta URL cuando el dominio propio vuelva a estar activo
const SITE_URL = 'https://abeldiazasesor.netlify.app';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});