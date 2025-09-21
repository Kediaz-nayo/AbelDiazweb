// @ts-check
import { defineConfig } from 'astro/config';

// Importamos el adaptador de Netlify
import netlify from '@astrojs/netlify';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Add your site's URL here
  site: 'https://www.abeldiaz.pro', // ⚠️ Replace this with your actual domain

  // ESTA ES LA ÚNICA LÍNEA QUE NECESITAMOS AÑADIR
  output: 'server',

  adapter: netlify(),
  integrations: [sitemap()]
});