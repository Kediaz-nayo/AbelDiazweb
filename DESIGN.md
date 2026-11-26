# DESIGN.md — Abel Díaz | Banca Privada Moderna & Asesoría de Seguros

Sistema visual y contrato de dirección creativa para el sitio web de **Abel Díaz**.

---

## 1. Dirección Creativa

- **Concepto:** Banca Privada Moderna & Arquitectura Contemporánea — el nivel de acabado, fotografía, escala tipográfica y coreografía de scroll de los mejores sitios modernos (Awwwards / Apple / Stripe / banca privada contemporánea).
- **Idioma:** Español (`es-MX`) exclusivamente.
- **Objetivo:** Carta de presentación digital de alto impacto para compartir por WhatsApp, Instagram (`@abel.patrimonial`), LinkedIn o en persona — que transmita confianza inmediata, claridad y trato humano directo.

---

## 2. Sistema de Color

| Token | Hex | Uso |
|---|---|---|
| `--bg-chalk` | `#F6F6F3` | Superficie principal arquitectónica luminosa |
| `--bg-white` | `#FFFFFF` | Tarjetas elevadas y superficies puras |
| `--bg-travertine` | `#EAE6DF` | Banda cálida secundaria (piedra natural) |
| `--bg-obsidian` | `#090C12` | Capítulos cinematográficos oscuros (Servicios, Contacto, Tarjeta) |
| `--bg-obsidian-elevated` | `#111622` | Tarjetas y paneles sobre fondo oscuro |
| `--ink-primary` | `#0B111C` | Titulares y texto de alto contraste sobre claro |
| `--ink-secondary` | `#4A5568` | Párrafos y descripciones sobre claro |
| `--ink-muted` | `#717D91` | Metadatos y subtítulos sutiles |
| `--ink-on-dark` | `#F5F6F8` | Titulares sobre fondo obsidiana |
| `--ink-on-dark-muted` | `#96A1B5` | Cuerpo de texto sobre fondo obsidiana |
| `--gold` | `#B8934A` | Latón/champagne sobrio para acentos sobre claro |
| `--gold-bright` | `#D6B571` | Oro champagne sobre obsidiana |
| `--whatsapp` | `#168A4A` | Verde sobrio para CTA principal de WhatsApp |
| `--border-light` | `rgba(11, 17, 28, 0.09)` | Líneas finas sobre claro |
| `--border-dark` | `rgba(245, 246, 248, 0.11)` | Líneas finas sobre obsidiana |

---

## 3. Tipografía

- **Principal (Display + UI + Cuerpo):** `Plus Jakarta Sans` (400, 500, 600, 700, 800) con tracking ajustado (`-0.04em` en display monumental) para una presencia moderna, limpia y arquitectónica.
- **Acento editorial puntual:** `Instrument Serif` (italic 400) usada con moderación únicamente para palabras emocionales clave dentro de grandes titulares.

---

## 4. Coreografía de Movimiento (Lenis + GSAP ScrollTrigger)

- **Smooth Scroll:** `Lenis` sincronizado con `GSAP ScrollTrigger` para un desplazamiento fluido con peso físico.
- **Hero Expandible:** El marco arquitectónico panorámico debajo del titular principal se expande fluidamente hacia pantalla completa al iniciar el scroll.
- **Manifiesto Iluminado:** Cada palabra del manifiesto personal se ilumina progresivamente al ritmo del scroll.
- **Retrato Fijo (Sticky Split):** El retrato real de Abel permanece anclado mientras se deslizan sus principios y credenciales.
- **Explorador de Servicios con Preview Flotante:** Sobre capítulo obsidiana, cada servicio revela al pasar el cursor una vista previa fotográfica flotante interpolada con resorte.
- **Tarjetas Apilables (Sticky Stack):** Los 3 pasos de asesoría se apilan físicamente con profundidad sutil al hacer scroll.
- **Botón Magnético y Tarjeta 3D:** CTA principal con atracción magnética sutil y vista previa 3D interactiva de la tarjeta digital negra/dorada.
- **Accesibilidad:** Todo el movimiento respeta `@media (prefers-reduced-motion: reduce)`.
