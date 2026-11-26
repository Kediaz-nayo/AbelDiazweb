# Abel Díaz — Sitio Web Personal

Carta de presentación digital, catálogo de servicios y tarjeta de contacto para **Abel Díaz** (Asesor Patrimonial y de Seguros).

## Arquitectura y Stack

- **Framework:** Astro 5 (`output: 'static'`) — 100% estático, sin servidor ni dependencias de IA en producción.
- **Estilos:** Vanilla CSS bajo el sistema editorial documentado en [DESIGN.md](./DESIGN.md).
- **Skill de diseño del proyecto:** [.agents/skills/editorial-web-design/SKILL.md](./.agents/skills/editorial-web-design/SKILL.md).
- **Rutas principales:**
  - `/` — Carta de presentación completa (Hero con retrato, credenciales, acerca de mí, índice de servicios, proceso de asesoría, testimonios y contacto).
  - `/servicios/[slug]` — Fichas individuales y compartibles por WhatsApp para cada cobertura.
  - `/tarjeta` — Tarjeta digital móvil / link-in-bio con código QR y descarga de contacto (`.vcf`).

## Cómo actualizar el contenido real

Todo el texto, teléfono, correo, redes, servicios, preguntas frecuentes, aseguradoras, cédula y testimonios viven en un solo archivo:

- [src/data/site.ts](./src/data/site.ts) — Busca los comentarios `// TODO:` para reemplazar placeholders con la información final.
- [public/abel-diaz.vcf](./public/abel-diaz.vcf) — Archivo vCard para "Guardar contacto".
- [astro.config.mjs](./astro.config.mjs) y `SITE.url` en [src/data/site.ts](./src/data/site.ts) — Cambia la URL cuando el dominio propio esté activo.

## Comandos

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala dependencias |
| `npm run dev` | Inicia servidor local en `localhost:4321` |
| `npm run build` | Genera la versión estática en `./dist/` |
| `npm run preview` | Previsualiza el build de producción |
