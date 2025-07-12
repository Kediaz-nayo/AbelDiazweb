import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify'; // <-- 1. IMPORTA EL ADAPTADOR

// https://astro.build/config
export default defineConfig({
  output: 'server', // <-- 2. AÑADE ESTA LÍNEA CRUCIAL
  adapter: netlify(), // <-- 3. AÑADE ESTA LÍNEA
});