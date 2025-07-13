// @ts-check
import { defineConfig } from 'astro/config';

// Importamos el adaptador de Netlify
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  // ESTA ES LA ÚNICA LÍNEA QUE NECESITAMOS AÑADIR
  output: 'server', 
  
  adapter: netlify()
});