---
name: editorial-web-design
description: Anti-AI-slop editorial web design rules, visual craft standards, and browser verification workflow for the Abel Díaz website. Read before designing, writing, or modifying any UI, CSS, layout, or copy in this repository.
---

# Editorial Web Design & Anti-AI-Slop Skill

This skill governs all visual design, layout, typography, motion, copywriting, and QA for this project. It synthesizes principles from open-source anti-slop craft frameworks ([pbakaus/impeccable](https://github.com/pbakaus/impeccable), [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill), and [funboy322/avoid-ai-design](https://github.com/funboy322/avoid-ai-design)) adapted to a warm, trustworthy personal-advisor brand.

Always read [DESIGN.md](../../../DESIGN.md) at the repository root before creating or editing pages so all pages share one coherent system.

## 1. Core Philosophy

- **Subject-first, never template-first.** Every visual decision derives from Abel Díaz as a real human advisor — his actual portrait, his calm tailored palette, and his Spanish-speaking clients in Mexico and the US.
- **Calm authority over visual noise.** People trust an insurance and wealth advisor who feels composed, clear, and unhurried — not loud, flashy, or pushy.
- **Less, but better.** Every border, rule, animation, and sentence must earn its place. When in doubt, remove chrome and add whitespace.
- **Zero unverified UI.** Never ship a layout change without rendering it in a real browser at desktop (`1440x900`) and mobile (`390x844`) viewports and visually inspecting the result.

## 2. Banned AI-Slop Tells (First-Order & Second-Order)

Do **not** introduce any of the following patterns:

### First-Order AI Defaults (Banned)
- Purple/indigo/neon-blue gradients or glowing box shadows.
- `background-clip: text` gradient headline fills.
- Bright `#ffd700` yellow pills/badges above every section heading.
- Centered hero stacked over three identical rounded feature cards with icon-in-a-tinted-square chips.
- Checkmarks inside tiny colored circles (`✓`) repeated across every card.
- Glassmorphism (`backdrop-filter: blur`) used decoratively on cards or navbars.
- Faint SVG dot-grid or mesh backgrounds behind sections.
- Stock cruise-ship / handshake / piggy-bank imagery where a real portrait or clean editorial layout belongs.
- Infinite auto-scrolling testimonial marquees or emoji-labeled authors (`👨‍💼`, `🏡`).
- `Inter` or untouched system font stacks for every word.
- `rounded-2xl shadow-lg` slapped uniformly onto every container.

### Second-Order AI Defaults (Also Banned)
Avoid the clichés AI reaches for when told "don't look AI":
- Generic cream + terracotta ("Claude default") when the brand's actual palette is bone + tailored navy + restrained antique brass.
- Highlighting or italicizing one random accent word in every sans headline (`T3` / `SD5`).
- Reflexive all-caps monospace eyebrow pills above every section title.
- Decorative giant `01 / 02 / 03` badges in boxed cards.
- Colored left/top accent border strips on hover cards.
- Fake stat counters (`+500 familias felices`, `99.9% satisfacción`) unless backed by verified real numbers.
- Over-nested cards inside cards.

## 3. Typography & Hierarchy

- **Display / Headings:** `Newsreader` (optical editorial serif with full Spanish diacritic support: `á, é, í, ó, ú, ñ, ¿, ¡`). Use tight negative tracking (`-0.02em` to `-0.03em`) at display sizes and natural editorial rhythm (`line-height: 1.06–1.18`).
- **Body / UI:** `Plus Jakarta Sans` (warm humanist sans-serif) for readable prose (`1rem–1.125rem`, `line-height: 1.65`), navigation, buttons, and metadata.
- **Single `<h1>` per page.** Respect semantic heading hierarchy (`h1 -> h2 -> h3`).
- **Measure:** Keep prose lines between `52ch` and `68ch`. Never stretch body copy edge-to-edge on wide screens.
- **Spanish typography:** Use proper inverted punctuation (`¿...?`, `¡...!`), proper accents, and natural Mexican Spanish phrasing (warm, respectful, clear — never robotic marketing translationese).

## 4. Color & Surface Discipline

- Follow the exact tokens in `DESIGN.md`: warm paper grounds (`#F6F3EC`, `#EFEAE0`, `#FBF9F5`), deep tailored navy ink (`#132238`), secondary slate (`#435166`), restrained antique brass (`#8F6D2E` for text/icons, `#B48D44` for subtle accents on dark), and stone hairlines (`#DDD6C8`).
- Maintain **WCAG AA contrast** (`>= 4.5:1` for body text, `>= 3:1` for large text and UI controls) on both light paper and dark navy sections.
- Prefer **hairline `1px` rules and generous spacing** over heavy drop shadows to separate editorial sections.

## 5. Layout & Composition

- **Asymmetric editorial grids:** Pair portrait photography with open typographic margins; use structured index lists or editorial 2-column grids for services rather than repetitive icon-card boxes.
- **Equal left and right margins:** Maintain a consistent container max-width (`1180px`) and horizontal gutter (`clamp(1.25rem, 4vw, 3rem)`) across all sections so edges align cleanly down the page.
- **One clear focal point per viewport.** On mobile (`390px`), ensure zero horizontal overflow, comfortable `>= 44px` tap targets, and effortless reach to WhatsApp / contact actions.

## 6. Motion & Interactivity

- **Restraint:** Subtle, smooth reveals (`opacity` + `translateY(14px)`, `500–650ms`, `cubic-bezier(0.22, 1, 0.36, 1)`) triggered once via a single shared `IntersectionObserver`.
- **No jarring parallax, no infinite marquees, no pulsing dots.**
- **Accessibility:** Always honor `@media (prefers-reduced-motion: reduce)` by disabling entrance transforms and transitions cleanly.
- **Complete states:** Every interactive link, button, accordion, and card must define clear `:hover`, `:focus-visible`, and `:active` states.

## 7. Copywriting Rules (Spanish)

- Write like a real, thoughtful advisor speaking face-to-face — never like a corporate brochure or AI sales funnel.
- Ban empty filler words: *"revolucionario"*, *"soluciones integrales de vanguardia"*, *"potencia tu futuro"*, *"lleva tus finanzas al siguiente nivel"*.
- Prefer concrete, plain Spanish: explain *what happens in real life* (e.g., an unexpected hospitalization, retiring without depending on anyone, protecting your children's education).
- Clearly mark all placeholder copy in `src/data/site.ts` with `// TODO:` comments so real details can be swapped in cleanly.

## 8. Browser Verification Checklist (Required Before Finishing)

1. Run `npm run build` and verify zero errors or broken links.
2. Serve the built `dist/` folder locally and capture real screenshots with headless Chrome/Playwright at:
   - Desktop (`1440x900`, full page)
   - Mobile (`390x844`, full page)
   - Any secondary routes (`/servicios/...`, `/tarjeta`)
3. Inspect the screenshots visually and verify:
   - Zero horizontal scroll (`scrollWidth <= innerWidth`).
   - Portrait crop keeps Abel's face and eyes well framed on desktop and mobile.
   - Fonts (`Newsreader` + `Plus Jakarta Sans`) loaded cleanly.
   - Contrast, alignment, spacing rhythm, and touch targets look intentional and non-generic.
