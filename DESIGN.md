# DESIGN.md — Abel Díaz | Asesor Patrimonial y de Seguros

Single source of truth for the visual system, typography, layout rules, and brand voice of this website. All pages (`/`, `/servicios/[slug]`, `/tarjeta`) must adhere to this contract.

---

## 1. Brand & Aesthetic Direction

- **Direction:** Warm Editorial — calm, human, trustworthy personal presentation (*carta de presentación*).
- **Subject Grounding:** Palette and mood are derived directly from Abel Díaz's real portrait (`src/assets/abeldiaz.jpeg`: deep navy tailored blazer, crisp white shirt, warm plaster interior) and his gold shield monogram (`src/assets/logo.jpeg`).
- **Language:** Spanish (`es-MX`) exclusively.
- **Primary Audience:** Individuals, families, and business owners in Mexico (Aguascalientes, Guadalajara, nationwide) and Mexican/bi-national clients in the United States who receive Abel's link via WhatsApp, Instagram (`@abel.patrimonial`), LinkedIn, or referral.

---

## 2. Color System

| Token | Hex | Role |
|---|---|---|
| `--bg-paper` | `#F6F3EC` | Primary warm bone page ground |
| `--bg-linen` | `#EDE8DC` | Subtle alternating section surface |
| `--bg-card` | `#FBF9F5` | Elevated crisp paper card / sheet surface |
| `--ink-navy` | `#132238` | Primary headlines, brand mark, dark editorial bands |
| `--ink-navy-deep` | `#0C1727` | Deep navy for dark footer / card contrast |
| `--ink-body` | `#243042` | Primary body copy (high contrast on `#F6F3EC`) |
| `--ink-muted` | `#556275` | Secondary metadata, captions, subtle descriptions (`>= 4.6:1` on paper) |
| `--brass` | `#8F6D2E` | Restrained antique brass for light-surface accents, active rules, links |
| `--brass-soft` | `#C7A661` | Antique gold accent strictly on dark `--ink-navy` surfaces |
| `--border-hairline` | `#DDD6C7` | Editorial 1px dividers and subtle frames |
| `--border-strong` | `#C5BCAE` | Hover borders and interactive inputs |
| `--whatsapp` | `#1F6E43` | Grounded deep forest green for primary WhatsApp CTA hover/icon accent (no neon `#25D366` clash) |

**Rules:**
- Never use neon yellow (`#FFD700`), electric blue (`#0052FF`), purple gradients, or pure `#000000` / `#FFFFFF` harsh contrast.
- Dark navy (`--ink-navy`) is reserved for high-impact editorial anchors (e.g., contact band, footer, `/tarjeta` header) so the overall site feels warm, open, and breathable.

---

## 3. Typography

- **Display / Editorial Serif:** `Newsreader` (weights 400, 500, 600 + italic 400). Used for `h1`, `h2`, `h3`, pull quotes, and the `Abel Díaz` wordmark.
- **UI / Body Sans:** `Plus Jakarta Sans` (weights 400, 500, 600). Used for body paragraphs, navigation, buttons, labels, and lists.

### Type Scale
- **Hero `h1`:** `clamp(2.5rem, 5.2vw, 4.35rem)`, `line-height: 1.06`, `letter-spacing: -0.025em`, `font-weight: 500`
- **Section `h2`:** `clamp(1.9rem, 3.4vw, 2.85rem)`, `line-height: 1.14`, `letter-spacing: -0.02em`, `font-weight: 500`
- **Subsection `h3`:** `clamp(1.25rem, 2vw, 1.55rem)`, `line-height: 1.25`, `font-weight: 500`
- **Body lead:** `1.125rem` (`18px`), `line-height: 1.65`
- **Body default:** `1rem` (`16px`), `line-height: 1.68`
- **Small / Meta:** `0.875rem` (`14px`), `line-height: 1.5`

---

## 4. Layout & Spacing Rhythm

- **Max container width:** `1160px` (`--container-max`)
- **Horizontal gutter:** `clamp(1.25rem, 4vw, 3rem)`
- **Section vertical rhythm:** `clamp(4.5rem, 8vw, 7.5rem)`
- **Radius discipline:** Sharp-editorial softness — `2px` to `6px` for cards/buttons/images (`--radius-sm: 4px`, `--radius-md: 8px`), full pill only for compact tags when truly needed (never as loud section badges).
- **Shadows:** Minimal. Rely on surface contrast (`--bg-paper` vs `--bg-card` vs `--bg-linen`) and `1px solid var(--border-hairline)`.

---

## 5. Site Architecture (Hybrid)

1. **`/` (Home — Standalone *Carta de Presentación*):**
   - Minimal sticky top bar: Shield emblem + `Abel Díaz` wordmark, 4 calm links (`Acerca`, `Servicios`, `Cómo trabajo`, `Contacto`), direct `WhatsApp` link.
   - Asymmetric Editorial Hero: Left = headline, concise personal positioning, primary `Escribir por WhatsApp` + secondary `Guardar contacto` (`.vcf`), quiet location line (`Aguascalientes · Guadalajara · Atención en México y EE.UU.`). Right = Abel's real portrait framed cleanly with an editorial caption.
   - Credentials & Insurers Band: Quiet horizontal ledger for Cédula CNSF (placeholder), México & EE.UU. coverage, and insurer partners (placeholder).
   - Acerca de Abel: Editorial two-column bio/philosophy — human voice, zero sales clichés.
   - Servicios (Editorial Index): Clean 2-column hairline-ruled editorial index of the 6 core coverage areas. Each entry shows a concise plain-Spanish explanation, link to its dedicated sheet (`/servicios/[slug]`), and direct contextual WhatsApp action.
   - Cómo es una asesoría conmigo: Calm 3-part horizontal progression separated by hairlines (no numbered circles, no boxed cards).
   - Testimonios: 3 grounded, editorial pull-quotes (no marquee, no emojis, clearly marked placeholders until real client approvals).
   - Contacto y Redes: Deep navy editorial closing section with direct WhatsApp, Email, Phone, Save Contact (`.vcf`), Instagram, LinkedIn, and link to `/tarjeta`.
2. **`/servicios/[slug]` (Shareable Service Briefs):**
   - One dedicated static page per service so Abel can send a single focused link in WhatsApp and Google can index each topic cleanly.
   - Structure: Breadcrumb → Service headline & plain-Spanish summary → Qué protege / Para quién es → Preguntas frecuentes (clean native `<details>` accordion) → Contextual WhatsApp CTA → Related services.
3. **`/tarjeta` (Digital Business Card / Link-in-Bio):**
   - Mobile-first vertical editorial card designed for Instagram bio (`@abel.patrimonial`), LinkedIn, and QR sharing.
   - Portrait, name, title, Cédula CNSF placeholder, primary WhatsApp, one-tap `Guardar contacto (.vcf)`, email, phone, Instagram, LinkedIn, link to full website, and a clean scannable QR code.

---

## 6. Central Content Source

All editable content (contact info, active domain URL, bio, credentials, insurers, services, FAQs, testimonials) lives in `src/data/site.ts`. Replacing placeholders with Abel's final verified details requires editing only `src/data/site.ts` and images in `src/assets/`.
