// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://www.abeldiaz.pro',
  output: 'server',
  adapter: netlify(),
  integrations: [] // Remove the sitemap integration
});