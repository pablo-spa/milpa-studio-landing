---
version: "1.0"
name: milpa-design-system
description: Milpa's design language — a custom software studio based in Oaxaca, México. Stone-warm near-blacks and off-whites form the dominant canvas, with a single emerald-green primary for CTAs and a secondary warm orange for editorial accents. Display typography uses DM Serif Display (400) for editorial authority; UI and body copy runs DM Sans. The brand reads as human and direct — warm stone tones, generous whitespace, pill-shaped buttons, no atmospheric gradients. Clients immediately understand what Milpa does and why their software will feel different from generic tools.

colors:
  primary: "#059669"
  primary-deep: "#047857"
  primary-light: "#ecfdf5"
  primary-text: "#047857"
  warm: "#E8893A"
  on-primary: "#ffffff"
  on-dark: "#fafaf9"

  ink: "#1c1917"
  ink-secondary: "#292524"
  ink-mute: "#78716c"
  ink-mute-2: "#a8a29e"
  ink-faint: "#d6d3d1"

  canvas: "#ffffff"
  canvas-soft: "#fafaf9"
  canvas-warm: "#f5f5f4"
  canvas-night: "#1c1917"
  canvas-night-soft: "#292524"

  hairline: "#e7e5e4"
  hairline-strong: "#d6d3d1"
  hairline-dark: "#44403c"

typography:
  display-xxl:
    fontFamily: "DM Serif Display, Georgia, 'Times New Roman', serif"
    fontSize: 60px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0
  display-xl:
    fontFamily: "DM Serif Display, Georgia, 'Times New Roman', serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0
  display-lg:
    fontFamily: "DM Serif Display, Georgia, 'Times New Roman', serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0
  display-md:
    fontFamily: "DM Serif Display, Georgia, 'Times New Roman', serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  heading-lg:
    fontFamily: "DM Sans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.2px
  heading-md:
    fontFamily: "DM Sans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: "DM Sans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "DM Sans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  button-md:
    fontFamily: "DM Sans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0
  label:
    fontFamily: "DM Sans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.12em
  caption:
    fontFamily: "DM Sans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  micro:
    fontFamily: "DM Sans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  code:
    fontFamily: "ui-monospace, Menlo, Monaco, Consolas, 'Liberation Mono', monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  2xl: 16px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  huge: 64px
  section: 96px

components:
  button-primary-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas-soft}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-primary-dark-hover:
    backgroundColor: "{colors.ink-secondary}"
    textColor: "{colors.canvas-soft}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-accent-emerald:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-secondary-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink-mute}"
    border: "1px solid {colors.hairline-strong}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 12px 16px
  card-default:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.2xl}"
    padding: 32px
  card-dark:
    backgroundColor: "{colors.canvas-night-soft}"
    textColor: "{colors.on-dark}"
    border: "1px solid {colors.hairline-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.2xl}"
    padding: 32px
  card-accent:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.primary-text}"
    border: "1px solid #d1fae5"
    typography: "{typography.body-md}"
    rounded: "{rounded.2xl}"
    padding: 32px
  card-pricing-featured:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-dark}"
    border: "none"
    typography: "{typography.body-md}"
    rounded: "{rounded.2xl}"
    padding: 32px
  pill-neutral:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink-mute}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  pill-accent:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.primary-text}"
    typography: "{typography.micro}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  section-label:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    padding: 0
  nav-bar:
    backgroundColor: "{colors.canvas-soft}/90"
    textColor: "{colors.ink}"
    backdropFilter: "blur(8px)"
    border: "1px solid {colors.hairline}"
    typography: "{typography.body-md}"
    height: 64px
  code-block:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.canvas-soft}"
    typography: "{typography.code}"
    rounded: "{rounded.xl}"
    padding: 16px
  footer-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.ink-mute}"
    typography: "{typography.caption}"
    padding: 64px 24px
---

## Overview

Milpa's design language is built on warmth and directness. Marketing surfaces sit on `{colors.canvas-soft}` (`#fafaf9` — a warm off-white, never pure white), with text in `{colors.ink}` (`#1c1917` — the darkest stone, never pure black). The palette is deliberately restrained: everything runs in the **stone** family (warm-tinted greys) with **one primary chromatic event** — the emerald green (`{colors.primary}` — `#059669`) reserved for CTAs and active states. A warm orange (`{colors.warm}` — `#E8893A`) appears once per view maximum as an editorial accent, never on interactive elements.

Typography splits cleanly in two: **DM Serif Display** at weight 400 carries all display and heading text, giving the brand an editorial, grounded quality. **DM Sans** handles everything interactive — buttons, nav, body, labels. The contrast between the serif display and the geometric sans creates a voice that is simultaneously credible and approachable.

Dark sections use `{colors.canvas-night}` (`#1c1917`) — the same stone-900 as the primary text, so the palette inverts cleanly without introducing new colors. Buttons are always pill-shaped (`{rounded.full}`). No atmospheric gradients. No hero illustrations. The product's value is communicated through words, not decoration.

**Key Characteristics:**
- Single emerald primary (`{colors.primary}` `#059669`) as the only interactive accent — scarce, reserved for CTAs and success states.
- Warm stone canvas (`{colors.canvas-soft}`) instead of pure white — the stone tones give the brand warmth and distinguish it from sterile SaaS defaults.
- Two-font system: DM Serif Display for display/headings, DM Sans for UI/body. Never mix with other fonts.
- All buttons `{rounded.full}` (pill-shaped) — a defining shape choice that makes Milpa immediately recognizable. Never use squared or low-radius buttons.
- Dark sections are `{colors.canvas-night}` (stone-900), not arbitrary dark colors — the palette remains consistent.
- Stone-toned borders (`{colors.hairline}`) replace drop shadows wherever possible — flat, not floating.
- `{colors.warm}` (`#E8893A`) appears max once per viewport for editorial warmth; never on interactive elements.

---

## Brand Identity

**Name:** Milpa  
**Tagline:** Software hecho para tu negocio. / Software made for your business.  
**Category:** Custom software studio  
**Location:** Oaxaca, México (distributed team, global clients)  
**Languages:** Spanish (primary), English, German (in progress)

### Personality

- **Direct** — no filler, no buzzwords. Say exactly what we do in as few words as possible.
- **Human** — warm but not casual. We talk like people, not corporations.
- **Disruptive** — we challenge why businesses pay for bloated generic software.
- **Confident** — we don't hedge. If we build it, it works.

### What Milpa Is Not

- Not a consultancy reselling someone else's platform
- Not an agency with a portfolio of landing pages
- Not a solo freelancer — we're a small, focused team
- Not premium-for-its-own-sake — accessible price for real, tailored value

---

## Colors

> **Token references:** use `{colors.name}` in component specs and prose.

### Primary & Accent

- **Emerald** (`{colors.primary}` — `#059669`): The only filled CTA color. Used for primary buttons, active nav states, section labels, and link underlines. Appears once per viewport as a filled button. **Do not** use as a background for cards or sections.
- **Emerald Deep** (`{colors.primary-deep}` — `#047857`): Hover/pressed state for the emerald primary.
- **Emerald Light** (`{colors.primary-light}` — `#ecfdf5`): Background tint for accent pills and highlighted cards. Never used as a page background.
- **Emerald Text** (`{colors.primary-text}` — `#047857`): Text rendered on emerald-light surfaces.
- **Warm Orange** (`{colors.warm}` — `#E8893A`): Secondary editorial accent. Max once per viewport. Never on buttons, never in interactive states. Used for illustration points, warmth accents, or a single decorative element.

### Surface

- **Canvas** (`{colors.canvas}` — `#ffffff`): Card interiors and modal surfaces.
- **Canvas Soft** (`{colors.canvas-soft}` — `#fafaf9`): Default page background. The warm off-white that defines the Milpa feel.
- **Canvas Warm** (`{colors.canvas-warm}` — `#f5f5f4`): Subtle alternating section bands, zebra rows, muted surfaces inside cards.
- **Canvas Night** (`{colors.canvas-night}` — `#1c1917`): Dark section background. Same hex as `{colors.ink}` — the palette inverts symmetrically.
- **Canvas Night Soft** (`{colors.canvas-night-soft}` — `#292524`): Cards and nested chrome inside dark sections.

### Text

- **Ink** (`{colors.ink}` — `#1c1917`): Default body text. Near-black, stone-warm, never pure.
- **Ink Secondary** (`{colors.ink-secondary}` — `#292524`): Slightly lighter near-black for body emphasis inside dark sections.
- **Ink Mute** (`{colors.ink-mute}` — `#78716c`): Secondary text, helper copy, nav links.
- **Ink Mute 2** (`{colors.ink-mute-2}` — `#a8a29e`): Tertiary text, meta, timestamps on light backgrounds. Also secondary text on dark backgrounds.
- **Ink Faint** (`{colors.ink-faint}` — `#d6d3d1`): Placeholder text, disabled state.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Text on the emerald fill. White on green for Milpa (different from Supabase's dark-on-green convention).
- **On Dark** (`{colors.on-dark}` — `#fafaf9`): Primary text on `canvas-night` surfaces — the same warm off-white as the page background.

### Borders

- **Hairline** (`{colors.hairline}` — `#e7e5e4`): Default 1px border on cards, inputs, and separators.
- **Hairline Strong** (`{colors.hairline-strong}` — `#d6d3d1`): Emphasized border, secondary button ring.
- **Hairline Dark** (`{colors.hairline-dark}` — `#44403c`): Borders inside dark (`canvas-night`) sections.

---

## Typography

### Font Families

Two fonts. No exceptions.

| Role | Font | CSS Variable | Fallback |
|---|---|---|---|
| Display / Headings | DM Serif Display | `--font-display` | Georgia, 'Times New Roman', serif |
| Body / UI | DM Sans | `--font-sans` | 'Helvetica Neue', Helvetica, Arial, sans-serif |
| Code | System mono | — | ui-monospace, Menlo, Monaco, Consolas |

Both loaded via `next/font/google` in `layout.tsx`. Do not import fonts any other way in this project.

### Hierarchy

| Token | Font | Size | Weight | Line Height | Letter Spacing | Tailwind | Use |
|---|---|---|---|---|---|---|---|
| `{typography.display-xxl}` | Display | 60px | 400 | 1.05 | 0 | `text-6xl` | Hero h1 |
| `{typography.display-xl}` | Display | 48px | 400 | 1.1 | 0 | `text-5xl` | Section opener |
| `{typography.display-lg}` | Display | 36px | 400 | 1.15 | 0 | `text-4xl` | Card header, case study title |
| `{typography.display-md}` | Display | 28px | 400 | 1.2 | 0 | `text-3xl` | Sub-section header |
| `{typography.heading-lg}` | Sans | 22px | 600 | 1.2 | -0.2px | `text-xl font-semibold` | Compact heading, card title |
| `{typography.heading-md}` | Sans | 18px | 600 | 1.35 | 0 | `text-lg font-semibold` | Section sub-heading |
| `{typography.body-lg}` | Sans | 18px | 400 | 1.6 | 0 | `text-lg` | Hero subheading, marketing lead |
| `{typography.body-md}` | Sans | 16px | 400 | 1.55 | 0 | `text-base` | Default body |
| `{typography.button-md}` | Sans | 14px | 600 | 1.0 | 0 | `text-sm font-semibold` | All button labels |
| `{typography.label}` | Sans | 12px | 700 | 1.0 | 0.12em | `text-xs font-bold tracking-widest uppercase` | Section labels, always all-caps |
| `{typography.caption}` | Sans | 13px | 400 | 1.45 | 0 | `text-xs` | Helper text, footnotes |
| `{typography.micro}` | Sans | 12px | 400 | 1.45 | 0 | `text-xs` | Pill labels, fine print |
| `{typography.code}` | Mono | 13px | 400 | 1.6 | 0 | `font-mono text-sm` | Code snippet content |

### Principles

- **DM Serif Display at weight 400 only.** It ships with no other weights. Do not fake-bold it.
- **No negative letter-spacing on display.** DM Serif Display has natural editorial spacing — tight tracking looks wrong. Leave at 0.
- **Positive tracking only on labels.** `{typography.label}` uses `letter-spacing: 0.12em` with uppercase to separate it visually from body copy.
- **Mono for code.** System mono only — no webfont for code blocks.
- **DM Sans weight 600 for buttons and compact headings**, 400 for body, 700 for labels. Never 800 or 900.

### Section Label Pattern

Every major section begins with a small uppercase label above the heading:

```tsx
<p className="text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3">
  Cómo trabajamos
</p>
<h2 className="text-4xl text-stone-900" style={{ fontFamily: "var(--font-display)" }}>
  Proceso simple. Resultados reales.
</h2>
```

---

## Layout

### Spacing System

Base unit: **8px**. All spacing tokens are multiples or sub-multiples of 8.

| Token | Value | Tailwind | Use |
|---|---|---|---|
| `{spacing.xxs}` | 2px | — | Fine chrome, inner border offsets |
| `{spacing.xs}` | 4px | `p-1`, `gap-1` | Icon gap, tight padding |
| `{spacing.sm}` | 8px | `p-2`, `gap-2` | Compact internal padding |
| `{spacing.md}` | 12px | `p-3`, `gap-3` | Input padding, label-to-field |
| `{spacing.lg}` | 16px | `p-4`, `gap-4` | Standard inline spacing |
| `{spacing.xl}` | 24px | `p-6`, `gap-6` | Default grid gap, card inner margin |
| `{spacing.xxl}` | 32px | `p-8`, `gap-8` | Card padding, section inner spacing |
| `{spacing.huge}` | 64px | `p-16` | Footer padding, large internal gaps |
| `{spacing.section}` | 96px | `py-24` | Between major page sections |

### Container

```tsx
<div className="max-w-5xl mx-auto px-4 sm:px-6">
  {/* content */}
</div>
```

- Max width: `max-w-5xl` (1024px). Never wider than `max-w-6xl`.
- Horizontal padding: `px-4` on mobile, `px-6` on sm+.
- Content always stays inside the container — no edge-bleed sections.

### Grid System

| Layout | Class | Use |
|---|---|---|
| 2-column | `grid md:grid-cols-2 gap-6` | Feature pairs, case study cards |
| 3-column | `grid md:grid-cols-3 gap-6` | Module list, value props |
| 4-column | `grid grid-cols-2 md:grid-cols-4 gap-4` | Icon + label grids |
| Step list | Single column, stacked | How it works, numbered steps |

### Whitespace Philosophy

Sections breathe. `{spacing.section}` (96px) between major sections — the warm canvas is part of the design. Do not fill whitespace with decorative elements, gradients, or illustrations. Let headings and text carry the weight of each section.

---

## Elevation & Depth

Milpa avoids drop shadows in favor of 1px hairline borders. Shadows are reserved for floating elements only.

| Level | Treatment | Tailwind | Use |
|---|---|---|---|
| 0 | 1px `{colors.hairline}` border, no shadow | `border border-stone-200` | Default cards, inputs |
| 1 | `box-shadow: 0 1px 4px rgba(28,25,23,0.06)` | `shadow-sm` | Subtle card lift on hover |
| 2 | `box-shadow: 0 8px 24px rgba(28,25,23,0.08)` | `shadow-md` | Dropdowns, tooltips |
| 3 | `box-shadow: 0 16px 48px rgba(28,25,23,0.12)` | `shadow-xl` | Modal dialogs |

**Note on shadow color:** Use `rgba(28,25,23,...)` (stone-based) instead of `rgba(0,0,0,...)` — warmer shadows match the stone palette.

### Decorative Depth

Depth is communicated through **color contrast between sections**, not shadows. A `{colors.canvas-night}` dark section following a `{colors.canvas-soft}` light section creates visual hierarchy without any shadow at all.

---

## Shapes

### Border Radius Scale

| Token | Value | Tailwind | Use |
|---|---|---|---|
| `{rounded.sm}` | 4px | `rounded` | Fine chrome, tight badges |
| `{rounded.md}` | 6px | `rounded-md` | Code blocks, compact tags |
| `{rounded.lg}` | 8px | `rounded-lg` | Form inputs, compact cards |
| `{rounded.xl}` | 12px | `rounded-xl` | Code blocks shown to users |
| `{rounded.2xl}` | 16px | `rounded-2xl` | Feature cards, pricing cards |
| `{rounded.full}` | 9999px | `rounded-full` | **All buttons**, pills, avatars |

### Critical Shape Rule

All buttons are `{rounded.full}`. This is the brand's most distinctive shape choice and must be applied without exception. A squared or lightly-rounded button is immediately off-brand.

---

## Components

### Buttons

**`button-primary-dark`** — the default CTA on light backgrounds.
- Background `{colors.ink}`, text `{colors.canvas-soft}`, padding `{spacing.md} {spacing.xxl}` (12px 24px), `{rounded.full}`.
- Hover shifts to `{colors.ink-secondary}` (slightly lighter stone).
- Used for the primary call-to-action in nav, hero, and contact sections.

**`button-accent-emerald`** — the emerald CTA, used once per view for highest emphasis.
- Background `{colors.primary}`, text `{colors.on-primary}` (white), same shape.
- Hover shifts to `{colors.primary-deep}`.
- Reserved for the one most important action per section — not for every CTA.

**`button-secondary-outline`** — secondary action alongside a primary button.
- Background `transparent`, text `{colors.ink-mute}`, border `1px solid {colors.hairline-strong}`, same shape.
- Hover: border shifts to `{colors.hairline}` darker, text shifts to `{colors.ink}`.

All three buttons share: `{rounded.full}`, `{typography.button-md}`, `transition-colors` (150ms).

```tsx
// Primary dark
<button className="bg-stone-900 text-stone-50 px-6 py-3 rounded-full text-sm font-semibold hover:bg-stone-800 transition-colors">
  Empecemos a hablar
</button>

// Accent emerald
<button className="bg-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors">
  Ver propuesta
</button>

// Secondary outline
<button className="border border-stone-300 text-stone-500 px-6 py-3 rounded-full text-sm font-semibold hover:border-stone-400 hover:text-stone-700 transition-colors">
  Ver nuestro trabajo
</button>
```

### Cards

**`card-default`** — standard card on light surfaces.
- Background `{colors.canvas}`, 1px `{colors.hairline}` border, `{rounded.2xl}`, padding `{spacing.xxl}`.
- No drop shadow at rest. Optional `shadow-sm` on hover.

**`card-dark`** — card inside a dark section.
- Background `{colors.canvas-night-soft}`, 1px `{colors.hairline-dark}` border, same shape.

**`card-accent`** — highlighted card, used to call out a recommendation or best option.
- Background `{colors.primary-light}`, border `#d1fae5`, text `{colors.primary-text}`, same shape.

**`card-pricing-featured`** — the recommended pricing tier.
- Background `{colors.canvas-night}`, no border, text `{colors.on-dark}`, `{rounded.2xl}`, padding `{spacing.xxl}`.

```tsx
// Default
<div className="bg-white rounded-2xl p-8 border border-stone-200">

// Dark
<div className="bg-stone-800 rounded-2xl p-8 border border-stone-700">

// Accent
<div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">

// Featured pricing
<div className="bg-stone-900 rounded-2xl p-8 text-stone-50">
```

### Pills & Tags

**`pill-neutral`** — neutral label, no semantic meaning.
- Background `{colors.canvas-warm}`, text `{colors.ink-mute}`, `{rounded.full}`, padding `{spacing.xs} {spacing.md}`.

**`pill-accent`** — success, active, or highlighted state.
- Background `{colors.primary-light}`, text `{colors.primary-text}`, same shape.

```tsx
// Neutral
<span className="bg-stone-100 text-stone-500 text-xs font-semibold px-3 py-1 rounded-full">
  Oaxaca, México
</span>

// Accent
<span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
  En producción
</span>
```

### Navigation

**`nav-bar`** — sticky top nav across all Milpa properties.
- Background `{colors.canvas-soft}/90` with `backdrop-blur`, 1px bottom `{colors.hairline}` border, height 64px.
- Left: "milpa" wordmark in `{typography.display-md}` using `--font-display`.
- Center: nav links in `{typography.body-md}`, `{colors.ink-mute}`.
- Right: language toggle + primary CTA button.

```tsx
<nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur border-b border-stone-200">
  <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
    {/* wordmark | links | [lang] [cta] */}
  </div>
</nav>
```

### Inputs & Forms

**`text-input`** — standard text field.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, `{rounded.xl}`, padding `{spacing.md} {spacing.lg}` (12px 16px).
- Focus: border shifts to `{colors.ink}` (stone-900), no glow ring.

```tsx
<input className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 focus:border-stone-900 outline-none transition-colors" />
```

### Code Blocks

**`code-block`** — code snippet for technical content.
- Background `{colors.canvas-night}`, text `{colors.canvas-soft}`, `{typography.code}`, `{rounded.xl}`, padding `{spacing.lg}`.
- Syntax highlighting: use stone and emerald tones only — no arbitrary rainbow colors.

```tsx
<pre className="bg-stone-900 text-stone-50 rounded-xl p-4 font-mono text-sm leading-relaxed overflow-x-auto">
  <code>{snippet}</code>
</pre>
```

### Footer

**`footer-dark`** — site-wide footer.
- Background `{colors.canvas-night}`, text `{colors.ink-mute}`, `{typography.caption}`, padding `{spacing.huge} {spacing.xl}`.
- Three columns: logo + tagline | navigation links | legal.
- No social icons until accounts are active.

### Separator / Divider

Use `<Separator />` from `@/components/ui/separator` (shadcn/ui). Color: `{colors.hairline}`.

### Icons

Library: `lucide-react`. Not all icons are available in the installed version.

**Confirmed available:** `ArrowRight`, `Users`, `FolderKanban`, `Package`, `Clock`, `FileText`, `BarChart3`, `Workflow`, `CheckCircle2`, `Code2`, `Mail`, `DollarSign`, `GitBranch`, `Download`, `Wrench`

**`Github` is NOT available.** Use `GitBranch` as the substitute.

Sizes: `w-5 h-5` inline, `w-6 h-6` in cards, `w-8 h-8` for large feature icons.

---

## Section Patterns

### Hero
- Light background (`{colors.canvas-soft}`)
- `{pill-neutral}` location badge → `{typography.display-xxl}` h1 → `{typography.body-lg}` subheading → two CTA buttons side by side
- No hero image or illustration — headline and sub do the work

### Problem / Pain
- Dark background (`{colors.canvas-night}`)
- Three pain points in a `grid md:grid-cols-3 gap-6`
- Each: `{heading-lg}` bold title + `{body-md}` paragraph. No icons.
- The contrast with the previous light section creates impact

### How It Works
- Light background, numbered steps `01 02 03 04` in `{typography.display-lg}` using display font
- Single column or two-column grid
- Each step: large number + title + short paragraph

### Case Studies / Work
- Light background, two-column grid
- `border-t {colors.hairline}` separating each entry
- Client name + location + short description + tag pills for what was built
- No screenshots — text and pills carry it

### Open Source
- Dark or accent background
- Three columns: Download / Customize / Own
- Message: free to get, value is in the customization, client owns the code

### Pricing
- Three tiers in a grid
- Middle tier uses `{card-pricing-featured}` (stone-900 background, inverted)
- Fixed price only — no per-user, no per-month for base modules

### Contact / CTA
- Light background, centered
- Heading + short paragraph + one primary button
- No form — direct to conversation (no email address until one exists)

### Footer
- `{footer-dark}` — stone-900 background
- Three-column layout: wordmark + tagline | links | legal text

---

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` emerald for the single filled CTA per viewport and for section labels.
- Use `{rounded.full}` on every button — pill shape is the brand signature.
- Keep the stone palette consistent: stone-50 backgrounds, stone-900 text, stone-200 borders.
- Use `{colors.canvas-soft}` (`#fafaf9`) as the page background — never pure white.
- Let dark sections (`{colors.canvas-night}`) do the work of separating content zones instead of decorations.
- Apply `{colors.warm}` (`#E8893A`) at most once per viewport, and never on buttons.
- Use `{typography.label}` (uppercase, wide tracking, emerald) as the first element in every major section.
- Apply system mono for all code blocks.
- Use stone-based shadows (`rgba(28,25,23,...)`) when a shadow is needed.

### Don't
- Don't use pill-shaped buttons with less than `{rounded.full}` — any lesser radius is off-brand.
- Don't add atmospheric gradients to section backgrounds — the stone canvas is the design.
- Don't introduce colors outside the stone + emerald + `{colors.warm}` palette as system colors.
- Don't use `{colors.warm}` on buttons, links, or active states — it's an editorial accent, not an interactive color.
- Don't use pure `#000000` or `#ffffff` — always stone variants.
- Don't use DM Serif Display for body copy, labels, or buttons — only for display headings.
- Don't use drop shadows on flat cards — use `{colors.hairline}` borders instead.
- Don't bold DM Serif Display — it only ships at weight 400.
- Don't use `gray` or `neutral` Tailwind palettes — use `stone` throughout.

---

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1280px | Container at full `max-w-5xl`; generous side whitespace |
| Desktop | 1024–1279px | Default experience; all grids at full column count |
| Tablet | 768–1023px | 2-col grids stay; 3-col and 4-col collapse to 2-col |
| Mobile | < 768px | All grids collapse to 1-col; nav becomes stacked; hero h1 drops to `display-lg` |

### Type Collapsing

| Token | Desktop | Tablet | Mobile |
|---|---|---|---|
| Hero h1 | `display-xxl` (60px) | `display-xl` (48px) | `display-lg` (36px) |
| Section header | `display-xl` (48px) | `display-lg` (36px) | `display-md` (28px) |
| Card title | `display-md` (28px) | `heading-lg` (22px) | `heading-lg` (22px) |

### Touch Targets

- All buttons: minimum 44×44px on mobile — increase vertical padding to `py-3.5` if needed.
- Form fields: minimum height 44px.
- Nav links: minimum 44px tap target height.

### Nav on Mobile

- Logo stays visible.
- Nav links collapse behind a hamburger (or hide entirely if the page is a landing with one CTA).
- CTA button stays visible in the top-right corner.

---

## Bilingual / Multilingual Pattern

All user-facing strings live in a `translations` constant. Components receive `t` as a prop — never hardcode strings in JSX.

```tsx
const translations = {
  es: {
    nav: { cta: "Contáctanos" },
    hero: { h1: "Software hecho para tu negocio.", sub: "..." },
  },
  en: {
    nav: { cta: "Let's talk" },
    hero: { h1: "Software made for your business.", sub: "..." },
  },
} as const;

type Lang = keyof typeof translations;
type T = typeof translations[Lang];

// Usage
function HeroSection({ t }: { t: T }) {
  return <h1>{t.hero.h1}</h1>;
}
```

- Default language: `"es"` (Spanish)
- Language toggle in Nav, `useState<Lang>("es")`
- German (`de`) is planned — add a third key when implemented
- Never add a `de` translation as a partial — implement fully or not at all

---

## Module Design (Milpa Open-Source Library)

Each module Milpa publishes follows this structure:

```
module-name/
  README.md    # Human-readable: what it does, how to run it
  SKILL.md     # Agent-readable: wiring guide, config keys, anti-patterns
  src/         # Next.js app or shared library
  package.json
```

### SKILL.md Template

```markdown
# Skill: [Module Name]

## What this does
One paragraph — capability, not implementation.

## Who uses this
Roles or personas in a business who interact with this module.

## Dependencies
- npm packages
- External services and what they're used for
- Required environment variables

## How to wire it
Step-by-step with exact file paths and code patterns.

## Config
KEY=value pairs with explanations.

## Customization points
What changes per client, and how to change it safely.

## Anti-patterns
Common mistakes when extending this module.

## Testing
How to verify the module is working correctly.
```

---

## Iteration Guide

1. Focus on **one component at a time** — reference token names directly (`{colors.primary}`, `{rounded.full}`) rather than hardcoding hex values.
2. Before adding a new color, check if an existing stone or emerald token covers the use case.
3. Before adding a new font, remember: two fonts only. If you want to vary weight or style, use DM Sans weights 400 / 600 / 700.
4. Default body copy to `{typography.body-md}`; use `{typography.code}` for any developer-facing snippet.
5. Keep emerald scarce — one filled emerald button per viewport maximum.
6. Every new section must start with a `{section-label}` component (uppercase, wide tracking, emerald) before the display heading.
7. Stone canvas is non-negotiable — do not introduce background gradients or hero illustrations.
8. Run `npx @google/design.md lint DESIGN.md` after significant changes.

---

## File Reference

| File | Purpose |
|---|---|
| `src/app/layout.tsx` | Root layout, font loading (`--font-display`, `--font-sans`), OpenGraph metadata |
| `src/app/page.tsx` | Main landing page — all sections, bilingual translations |
| `src/app/icon.svg` | Favicon — "m" lettermark in DM Serif Display on stone-900 background |
| `src/app/globals.css` | Tailwind v4 base styles |
| `next.config.ts` | `output: "export"` for static Firebase Hosting |
| `firebase.json` | Hosting config, site: `milpa-studio-landing` |
| `DESIGN.md` | This file — design system for AI coding agents |
| `../docs/launchkit-module-reference.md` | Research on LaunchKit's module architecture |

---

*Last updated: June 2026*  
*Milpa · milpa.cloud · Oaxaca, México*
