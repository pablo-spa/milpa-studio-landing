@AGENTS.md
@DESIGN.md

# studio-landing — Landing page de Milpa

Landing page pública de Milpa en `milpa.cloud`. Construida con Next.js + Tailwind + Firebase Hosting.

## Stack

- Next.js 16.2.9, App Router, `output: "export"`
- TypeScript + Tailwind CSS v4 + shadcn/ui (badge, button, card, separator)
- DM Serif Display (display/headings) + DM Sans (body/UI) via `next/font/google`
- lucide-react para iconos
- Firebase Hosting → site: `milpa-studio-landing`

## Estructura

```
src/
  app/
    layout.tsx    — root layout, fuentes, metadata OpenGraph
    page.tsx      — toda la landing en un solo archivo (bilingual)
    globals.css   — Tailwind v4 + shadcn tokens
  components/ui/ — shadcn/ui components
  lib/utils.ts   — cn() helper
```

## Arquitectura del page.tsx

Un solo archivo con:
1. `translations` — objeto `{ es: {...}, en: {...} }` con todos los strings
2. Componentes por sección (`Hero`, `Problem`, `WhyMilpa`, `HowWeWork`, etc.)
3. Cada componente recibe `t: T` y nunca hardcodea strings en JSX
4. `Home` component: `useState<Lang>("es")` para el toggle de idioma

### Secciones en orden

`Hero` → `Problem` → `WhyMilpa` → `HowWeWork` → `WhatWeBuild` → `Ownership` → `Work` → `About` → `Pricing` → `Contact`

### Iconos disponibles en lucide-react (versión instalada)

`ArrowRight, Users, FolderKanban, BookOpen, Calendar, Lock, LayoutDashboard, Zap, GitBranch, CheckCircle2, Mail, Database, Code2, Server, Workflow, Shield, Separator`

**`Github` NO existe** — usar `GitBranch` como sustituto.

## Design system

Ver `DESIGN.md` en este directorio para la referencia completa. Puntos clave:
- Paleta: solo `stone` de Tailwind. Acento: `emerald-600`. Nunca `gray` o `neutral`.
- Botones: siempre `rounded-full`. Sin excepción.
- Headings: `font-display` (DM Serif Display), `tracking-tight`, weight 400 únicamente.
- Sección label: `text-xs font-bold tracking-widest uppercase text-emerald-600`.
- Cards: `border border-stone-200 rounded-xl` — sin sombras en estáticos.
- Transiciones: `duration-150` en todos los hovers.

## Deploy

```bash
npm run build
firebase deploy --only hosting
```

## Idiomas

Español (default) + inglés. Alemán planificado pero NO implementar parcial — solo cuando esté completo.
