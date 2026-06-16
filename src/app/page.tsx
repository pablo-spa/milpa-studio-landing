"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Users,
  FolderKanban,
  BookOpen,
  Calendar,
  Lock,
  LayoutDashboard,
  Zap,
  GitBranch,
  CheckCircle2,
  Mail,
  Database,
  Code2,
  Server,
  Workflow,
  Shield,
} from "lucide-react";

// ─── Translations ─────────────────────────────────────────────────────────────

const translations = {
  es: {
    nav: {
      how: "Cómo funciona",
      work: "Nuestro trabajo",
      about: "Nosotros",
      cta: "Contáctanos",
    },
    hero: {
      badge: "Estudio de software · Oaxaca, México",
      h1: "Las herramientas de una empresa grande. Para negocios que no tienen su presupuesto.",
      sub: "Construimos sistemas de gestión completamente personalizados — tu flujo de trabajo, tu identidad visual, tu código, tus datos. Todo tuyo, para siempre.",
      primary: "Empecemos a hablar",
      secondary: "Ver nuestro trabajo",
      proof: "3 clientes · 2 países · en producción",
    },
    problem: {
      label: "El problema",
      h2: "El software genérico no fue hecho para tu negocio.",
      items: [
        {
          title: "Hecho para todos — ideal para nadie.",
          body: "Odoo, Monday, Notion, Salesforce. Diseñados para cada industria. Terminas adaptándote tú al software, no el software a ti. Tu equipo lo evita en lugar de usarlo.",
        },
        {
          title: "Pagas por lo que nunca usas.",
          body: "Cobros por usuario, por módulo, contratos anuales. Funciones que nadie toca y flujos que no corresponden a cómo trabaja tu negocio.",
        },
        {
          title: "Meses para implementar, años para aprender.",
          body: "Consultores externos, capacitaciones interminables, migraciones de datos complicadas. Seis meses después estás operando — y tu equipo usa el 20% del sistema.",
        },
      ],
    },
    why: {
      label: "Por qué Milpa",
      h2: "Tres cosas juntas que nadie más ofrece a este precio.",
      items: [
        {
          title: "Software que encaja, no que \"sirve\".",
          body: "No es una plantilla con otro color. Es un sistema construido con tus nombres para las cosas, tu proceso, tu forma de trabajar. Tu equipo lo adopta porque tiene sentido para ellos.",
        },
        {
          title: "El código y los datos siempre son tuyos.",
          body: "Código abierto (MIT). Base de datos exportable en cualquier momento. Si mañana quieres cambiar de proveedor, te llevas todo en un archivo. Cero lock-in, cero costo de salida.",
        },
        {
          title: "Nosotros manejamos toda la complejidad técnica.",
          body: "El carpintero no necesita saber qué es Supabase ni Next.js. Nosotros instalamos, configuramos y mantenemos. El cliente solo lo usa.",
        },
      ],
    },
    how: {
      label: "Cómo trabajamos",
      h2: "Proceso simple. Resultados reales.",
      steps: [
        {
          step: "01",
          title: "Conversación",
          body: "Aprendemos cómo opera tu negocio de verdad — los flujos reales, los pasos manuales, lo que falla y lo que ya funciona.",
        },
        {
          step: "02",
          title: "Propuesta",
          body: "Definimos exactamente lo que necesitas. Precio fijo, alcance claro, plazo definido. Sin sorpresas en el camino.",
        },
        {
          step: "03",
          title: "Construcción",
          body: "Módulo por módulo. Empiezas a usarlo en las primeras semanas — no después de meses de implementación.",
        },
        {
          step: "04",
          title: "Evolución",
          body: "Tu software crece con tu negocio. Cambios rápidos, sin burocracia, sin esperar en una cola de soporte.",
        },
      ],
    },
    what: {
      label: "Lo que construimos",
      h2: "Módulos listos. Flujos a medida.",
      sub: "Tenemos una biblioteca de módulos ya construidos para las necesidades más comunes de un negocio. Los seleccionamos, configuramos a tu flujo y desplegamos como tu propio sistema.",
      modules: [
        { label: "Proyectos", desc: "Gestión tipo Basecamp — tareas, hitos, equipo" },
        { label: "Tareas & Kanban", desc: "Tablero de trabajo del equipo" },
        { label: "Wiki interna", desc: "Base de conocimiento del equipo" },
        { label: "Calendario", desc: "Agenda compartida del equipo" },
        { label: "CRM & Contactos", desc: "Clientes, proveedores, historial" },
        { label: "Password Manager", desc: "Credenciales del equipo, encriptadas" },
        { label: "Dashboard", desc: "Métricas y widgets configurables" },
        { label: "Flujos personalizados", desc: "Lo específico de tu operación" },
      ],
      custom: "Inventario · Producción · Nómina · Cotizaciones · Reportes — construimos lo que tu operación necesita.",
    },
    ownership: {
      label: "Sin lock-in",
      h2: "Todo lo que construimos es tuyo.",
      sub: "No eres cliente de nuestra plataforma. Eres dueño de tu sistema. El código, los datos y la infraestructura viven en tus cuentas — no en las nuestras.",
      items: [
        {
          icon: "code" as const,
          title: "Tu código",
          body: "Open source (MIT). Repositorio privado en tu GitHub. Si quieres contratar otro equipo para seguir desarrollando, el código está ahí.",
        },
        {
          icon: "database" as const,
          title: "Tus datos",
          body: "Exportables en CSV y JSON en cualquier momento, sin pedir permiso. Migrar de vuelta a Excel o a cualquier otro sistema siempre es posible.",
        },
        {
          icon: "server" as const,
          title: "Tu infraestructura",
          body: "Todo desplegado en tus propias cuentas — Supabase, Vercel, tu dominio. Nosotros lo configuramos; tú lo posees.",
        },
      ],
    },
    work: {
      label: "Nuestro trabajo",
      h2: "Proyectos reales, en uso real.",
      sub: "Hemos construido sistemas para empresas y organizaciones de distintos sectores.",
      cases: [
        {
          client: "Carpintería Huayapam",
          location: "Oaxaca, México",
          industry: "Manufactura · Madera",
          description:
            "Empresa de carpintería con más de 20 trabajadores. Reemplazamos hojas de cálculo y procesos manuales con un sistema hecho exactamente para su operación.",
          modules: [
            "Gestión de proyectos",
            "Inventario",
            "Compras",
            "Nómina semanal",
            "Cotizaciones",
            "Control de asistencia",
            "Dashboard financiero",
          ],
          stat: "En producción · uso diario",
          live: true,
        },
        {
          client: "Tomates La Era",
          location: "Oaxaca, México",
          industry: "Agroindustria · Producción",
          description:
            "Empresa productora y comercializadora de tomate. Sistema para controlar el ciclo completo — desde la siembra hasta la venta.",
          modules: [
            "Seguimiento de producción",
            "Inventario",
            "Movimientos de producto",
            "Contabilidad básica",
            "Nómina",
          ],
          stat: "En producción",
          live: true,
        },
        {
          client: "Sprachenmehr e.V.",
          location: "Viena, Austria",
          industry: "Organización sin fines de lucro · Educación",
          description:
            "Asociación dedicada al fomento del multilingüismo en Austria. Construimos su presencia digital completa y las herramientas internas del equipo.",
          modules: [
            "Sitio web institucional",
            "Newsletter",
            "Gestión de proyectos",
          ],
          stat: "En desarrollo",
          live: false,
        },
      ],
    },
    about: {
      label: "Nosotros",
      h2: "Un equipo pequeño, a propósito.",
      p1: "Tenemos raíces en Oaxaca, México, y trabajamos desde distintas partes del mundo. Antes de construir software para otros, lo construimos para negocios reales — una carpintería, un invernadero, una empresa de servicios.",
      p2: "Aprendimos que cada negocio tiene una forma única de operar, y que el software debería reflejar eso — no al revés. Ser pequeños nos permite ser rápidos, directos y comprometidos con cada proyecto.",
      p3: "Trabajas directamente con quien construye tu software. Sin intermediarios, sin tickets de soporte, sin esperas de semanas para un cambio pequeño.",
    },
    pricing: {
      label: "Precios",
      h2: "Precios honestos. Sin sorpresas.",
      sub: "Cada proyecto se cotiza según lo que necesitas. Lo definimos juntos antes de empezar.",
      tiers: [
        {
          name: "Setup",
          price: "$500 – $1,000 USD",
          period: "pago único",
          description:
            "Instalación, configuración, diseño con tu identidad visual, migración de datos existentes y capacitación inicial.",
        },
        {
          name: "Soporte mensual",
          price: "$30 – $80 USD",
          period: "por mes",
          description:
            "Hosting, actualizaciones de seguridad, soporte técnico y acceso a nuevos módulos cuando salgan.",
        },
        {
          name: "Personalizaciones",
          price: "$40 – $80 USD",
          period: "por hora",
          description:
            "Cambios y funciones fuera del scope estándar. Sin compromisos mínimos.",
        },
      ],
      principles: [
        "Sin cobros por usuario — agrega todo el equipo al mismo precio.",
        "El código y los datos siempre son tuyos.",
        "Si en algún momento dejas de trabajar con nosotros, te llevas todo.",
      ],
    },
    contact: {
      label: "Contáctanos",
      h2: "Cuéntanos sobre tu negocio.",
      sub: "Sin formularios, sin embudo de ventas. Solo una conversación sobre lo que necesitas y si podemos ayudarte.",
    },
    faq: {
      label: "Preguntas frecuentes",
      h2: "Todo lo que quieres saber antes de empezar.",
      items: [
        {
          q: "¿Cuánto tiempo tarda en estar listo mi sistema?",
          a: "Entre 4 y 8 semanas desde que arrancamos. Los primeros módulos están listos en 2–3 semanas y los vas usando mientras construimos el resto. No esperamos a tener todo terminado para que empieces.",
        },
        {
          q: "¿Qué pasa si quiero agregar funciones después de la entrega?",
          a: "Es lo que esperamos que pase. Tu sistema crece con tu negocio. Los cambios grandes se cotizan por hora ($40–80 USD/hr). Los módulos del catálogo se activan dentro de tu suscripción mensual sin costo extra.",
        },
        {
          q: "¿Necesito saber de tecnología para usar o mantener el sistema?",
          a: "No. El sistema está diseñado para que cualquier persona en tu equipo pueda usarlo sin capacitación técnica. Del mantenimiento, las actualizaciones y el hosting nos encargamos nosotros. Tú solo lo usas.",
        },
        {
          q: "¿Qué pasa si Milpa deja de operar o quiero cambiar de proveedor?",
          a: "Tu sistema sigue funcionando sin nosotros. El código es tuyo, open source (MIT), guardado en tu propio repositorio de GitHub. Tu base de datos vive en tu propia cuenta de Supabase. Si mañana desaparecemos, nada cambia para ti. Sin contratos atados, sin dependencia.",
        },
        {
          q: "¿Cuántos usuarios pueden usar el sistema?",
          a: "Todos los que necesites, al mismo precio. No cobramos por usuario. Agrega a todo tu equipo, cambia de personal, da accesos temporales — sin costo adicional.",
        },
        {
          q: "¿Funciona en celular y tablet?",
          a: "Sí. El sistema funciona en cualquier navegador moderno — Chrome, Safari, Firefox — desde computadora, celular o tablet. No necesitas descargar ninguna app.",
        },
        {
          q: "¿En qué se diferencia de contratar un freelancer?",
          a: "Un freelancer construye algo y se va. Nosotros somos responsables del sistema a largo plazo: lo mantenemos, lo actualizamos y lo hacemos crecer contigo. Además, usamos una biblioteca de módulos ya probados en producción, lo que reduce costos y el riesgo de errores.",
        },
        {
          q: "¿Por qué no simplemente usar Notion, Monday u Odoo?",
          a: "Puedes. Pero terminas adaptando tu negocio a la herramienta, no al revés. Tu equipo usa el 20% de las funciones y sigue resolviendo lo importante en WhatsApp. Nosotros construimos algo que encaja exactamente con cómo trabajas, y el equipo realmente lo adopta.",
        },
        {
          q: "¿Pueden integrarse con mis herramientas actuales?",
          a: "Depende de la herramienta. Con sistemas que tienen API abierta — WhatsApp Business, facturación electrónica, Google Calendar, correo — sí podemos integrar. Lo evaluamos caso por caso en la propuesta. Las integraciones complejas se cotizan como personalización.",
        },
        {
          q: "¿Cómo es el soporte después de la entrega?",
          a: "Respuesta directa por email o WhatsApp — sin tickets, sin filas, sin esperar días. El tiempo de respuesta es de horas. Para problemas en producción, el mismo día.",
        },
        {
          q: "¿Puedo empezar con pocos módulos e ir creciendo?",
          a: "Es lo que recomendamos. Empezamos con los módulos de mayor impacto inmediato para tu operación y activamos los demás conforme los necesites. Cada módulo nuevo se configura sin interrumpir el sistema que ya usas.",
        },
        {
          q: "¿Dónde están guardados mis datos exactamente?",
          a: "En tu propia cuenta de Supabase — una base de datos PostgreSQL que creas tú y que te pertenece. El sistema se aloja en Firebase o Vercel, también bajo tus cuentas. Milpa tiene acceso solo mientras tú nos lo das para soporte. Tú controlas todo.",
        },
      ],
    },
    footer: {
      copy: `© ${new Date().getFullYear()} Milpa · milpa.cloud · Oaxaca, México`,
    },
  },
  en: {
    nav: {
      how: "How it works",
      work: "Our work",
      about: "About",
      cta: "Get in touch",
    },
    hero: {
      badge: "Software studio · Oaxaca, Mexico",
      h1: "The tools big companies have. Built for businesses that don't have their budget.",
      sub: "We build fully custom management systems — your workflows, your branding, your code, your data. All yours, forever.",
      primary: "Start a conversation",
      secondary: "See our work",
      proof: "3 clients · 2 countries · in production",
    },
    problem: {
      label: "The problem",
      h2: "Generic software wasn't built for your business.",
      items: [
        {
          title: "Built for everyone — perfect for no one.",
          body: "Odoo, Monday, Notion, Salesforce. Designed for every industry. You end up adapting to the software — not the other way around. Your team avoids it instead of using it.",
        },
        {
          title: "You pay for what you never use.",
          body: "Per-user fees, per-module charges, annual contracts. Features nobody touches and workflows that don't match how your business actually works.",
        },
        {
          title: "Months to implement, years to learn.",
          body: "External consultants, endless training, complicated data migrations. Six months later you're running — and your team uses 20% of the system.",
        },
      ],
    },
    why: {
      label: "Why Milpa",
      h2: "Three things together that no one else offers at this price.",
      items: [
        {
          title: "Software that fits, not software that \"works\".",
          body: "Not a template with a different color. A system built with your names for things, your process, your way of working. Your team adopts it because it actually makes sense to them.",
        },
        {
          title: "The code and data are always yours.",
          body: "Open source (MIT). Database exportable at any time. If you want to switch providers tomorrow, you take everything in one file. Zero lock-in, zero exit cost.",
        },
        {
          title: "We handle all the technical complexity.",
          body: "The carpenter doesn't need to know what Supabase or Next.js is. We install, configure, and maintain. The client just uses it.",
        },
      ],
    },
    how: {
      label: "How we work",
      h2: "Simple process. Real results.",
      steps: [
        {
          step: "01",
          title: "Conversation",
          body: "We learn how your business actually operates — the real workflows, the manual steps, what fails and what already works.",
        },
        {
          step: "02",
          title: "Proposal",
          body: "We define exactly what you need. Fixed price, clear scope, defined timeline. No surprises along the way.",
        },
        {
          step: "03",
          title: "Build",
          body: "Module by module. You start using it in the first few weeks — not after months of implementation.",
        },
        {
          step: "04",
          title: "Evolve",
          body: "Your software grows with your business. Fast changes, no bureaucracy, no waiting in a support queue.",
        },
      ],
    },
    what: {
      label: "What we build",
      h2: "Ready modules. Custom flows.",
      sub: "We have a library of modules already built for the most common business needs. We select them, configure them for your workflows, and deploy them as your own system.",
      modules: [
        { label: "Projects", desc: "Basecamp-style — tasks, milestones, team" },
        { label: "Tasks & Kanban", desc: "Team work board" },
        { label: "Internal Wiki", desc: "Team knowledge base" },
        { label: "Calendar", desc: "Shared team schedule" },
        { label: "CRM & Contacts", desc: "Clients, vendors, history" },
        { label: "Password Manager", desc: "Encrypted team credentials" },
        { label: "Dashboard", desc: "Configurable metrics & widgets" },
        { label: "Custom Workflows", desc: "What's specific to your operation" },
      ],
      custom: "Inventory · Production · Payroll · Quotes · Reports — we build what your operation needs.",
    },
    ownership: {
      label: "Zero lock-in",
      h2: "Everything we build belongs to you.",
      sub: "You're not a customer of our platform. You own your system. The code, data, and infrastructure live in your accounts — not ours.",
      items: [
        {
          icon: "code" as const,
          title: "Your code",
          body: "Open source (MIT). Private repository in your GitHub. If you want to hire another team to keep developing, the code is right there.",
        },
        {
          icon: "database" as const,
          title: "Your data",
          body: "Exportable in CSV and JSON at any time, without asking permission. Migrating back to Excel or any other system is always possible.",
        },
        {
          icon: "server" as const,
          title: "Your infrastructure",
          body: "Everything deployed in your own accounts — Supabase, Vercel, your domain. We configure it; you own it.",
        },
      ],
    },
    work: {
      label: "Our work",
      h2: "Real projects, in real use.",
      sub: "We've built systems for businesses and organizations across different industries.",
      cases: [
        {
          client: "Carpintería Huayapam",
          location: "Oaxaca, Mexico",
          industry: "Manufacturing · Wood",
          description:
            "A woodworking company with over 20 workers. We replaced spreadsheets and manual processes with a system built exactly for their operation.",
          modules: [
            "Project management",
            "Inventory",
            "Purchasing",
            "Weekly payroll",
            "Quotations",
            "Attendance tracking",
            "Financial dashboard",
          ],
          stat: "In production · used daily",
          live: true,
        },
        {
          client: "Tomates La Era",
          location: "Oaxaca, Mexico",
          industry: "Agribusiness · Production",
          description:
            "A tomato growing and distribution company. A system to track their full cycle — from planting to sale.",
          modules: [
            "Production tracking",
            "Inventory",
            "Product movements",
            "Basic accounting",
            "Payroll",
          ],
          stat: "In production",
          live: true,
        },
        {
          client: "Sprachenmehr e.V.",
          location: "Vienna, Austria",
          industry: "Nonprofit · Education",
          description:
            "An association dedicated to promoting multilingualism in Austria. We're building their complete digital presence and internal team tools.",
          modules: [
            "Institutional website",
            "Newsletter",
            "Project management",
          ],
          stat: "In development",
          live: false,
        },
      ],
    },
    about: {
      label: "About",
      h2: "A small team, on purpose.",
      p1: "We have roots in Oaxaca, Mexico, and work from different parts of the world. Before building software for others, we built it for real businesses — a carpentry workshop, a greenhouse, a service company.",
      p2: "We learned that every business has a unique way of operating, and that software should reflect that — not the other way around. Being small lets us be fast, direct, and fully committed to each project.",
      p3: "You work directly with the people building your software. No middlemen, no support tickets, no weeks of waiting for a small change.",
    },
    pricing: {
      label: "Pricing",
      h2: "Honest pricing. No surprises.",
      sub: "Every project is quoted based on what you need. We define it together before we start.",
      tiers: [
        {
          name: "Setup",
          price: "$500 – $1,000 USD",
          period: "one-time",
          description:
            "Installation, configuration, design with your brand identity, existing data migration, and initial training.",
        },
        {
          name: "Monthly support",
          price: "$30 – $80 USD",
          period: "per month",
          description:
            "Hosting, security updates, technical support, and access to new modules as they're released.",
        },
        {
          name: "Custom work",
          price: "$40 – $80 USD",
          period: "per hour",
          description:
            "Changes and features outside the standard scope. No minimum commitments.",
        },
      ],
      principles: [
        "No per-user fees — add your whole team at the same price.",
        "The code and data are always yours.",
        "If you ever stop working with us, you take everything.",
      ],
    },
    contact: {
      label: "Get in touch",
      h2: "Tell us about your business.",
      sub: "No forms, no sales funnel. Just a conversation about what you need and whether we can help.",
    },
    faq: {
      label: "FAQ",
      h2: "Everything you want to know before getting started.",
      items: [
        {
          q: "How long does it take to have my system ready?",
          a: "Between 4 and 8 weeks from kickoff. The first modules are ready in 2–3 weeks, and you start using them while we build the rest. We don't wait until everything is done to let you start.",
        },
        {
          q: "What if I want to add features after delivery?",
          a: "That's exactly what we expect. Your system grows with your business. Larger changes are quoted by the hour ($40–80 USD/hr). New modules from the catalog can be activated within your monthly subscription at no extra cost.",
        },
        {
          q: "Do I need to know about technology to use or maintain the system?",
          a: "No. The system is designed so that anyone on your team can use it without technical training. We handle maintenance, updates, and hosting. You just use it.",
        },
        {
          q: "What if Milpa stops operating or I want to switch providers?",
          a: "Your system keeps running without us. The code is yours, open source (MIT), stored in your own GitHub repository. Your database lives in your own Supabase account. If we disappear tomorrow, nothing changes for you. No lock-in, no dependency.",
        },
        {
          q: "How many users can use the system?",
          a: "As many as you need, at the same price. We don't charge per user. Add your whole team, change staff, give temporary access — no extra cost.",
        },
        {
          q: "Does it work on mobile and tablet?",
          a: "Yes. The system works in any modern browser — Chrome, Safari, Firefox — from a computer, phone, or tablet. No app to download.",
        },
        {
          q: "How is this different from hiring a freelancer?",
          a: "A freelancer builds something and leaves. We're responsible for the system long-term: we maintain it, update it, and grow it with you. We also use a library of modules already proven in production, which reduces cost and the risk of bugs.",
        },
        {
          q: "Why not just use Notion, Monday, or Odoo?",
          a: "You can. But you'll end up adapting your business to the tool — not the other way around. Your team will use 20% of the features and keep handling the important stuff on WhatsApp. We build something that fits exactly how you work, and your team actually adopts it.",
        },
        {
          q: "Can you integrate with my existing tools?",
          a: "It depends on the tool. With systems that have an open API — WhatsApp Business, invoicing, Google Calendar, email — yes, we can integrate. We evaluate case by case in the proposal. Complex integrations are quoted as customization.",
        },
        {
          q: "What does support look like after delivery?",
          a: "Direct response by email or WhatsApp — no tickets, no queues, no waiting days. Response time is hours. For production issues, same day.",
        },
        {
          q: "Can I start small and grow from there?",
          a: "That's what we recommend. We start with the highest-impact modules for your operation and activate the rest as you need them. Each new module is configured without interrupting the system you're already using.",
        },
        {
          q: "Where exactly is my data stored?",
          a: "In your own Supabase account — a PostgreSQL database that you create and own. The system is hosted on Firebase or Vercel, also under your accounts. Milpa only has access while you grant it for support. You control everything.",
        },
      ],
    },
    footer: {
      copy: `© ${new Date().getFullYear()} Milpa · milpa.cloud · Oaxaca, México`,
    },
  },
} as const;

type Lang = keyof typeof translations;
type T = (typeof translations)[Lang];

const MODULE_ICONS = [FolderKanban, Workflow, BookOpen, Calendar, Users, Lock, LayoutDashboard, Zap];
const OWNERSHIP_ICONS = { code: Code2, database: Database, server: Server };
const WHY_ICONS = [Workflow, Shield, Zap];

// ─── Logo mark ────────────────────────────────────────────────────────────────

function LogoMark({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  // Fixed 18×18 viewBox. bw=4, gap=3 → 3×4 + 2×3 = 18 (fills exactly).
  // Heights: 11 (medium/bean), 18 (tall/corn), 7 (short/squash) — three milpa crops.
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x={0}  y={7}  width={4} height={11} rx={2} fill={color} />
      <rect x={7}  y={0}  width={4} height={18} rx={2} fill={color} />
      <rect x={14} y={11} width={4} height={7}  rx={2} fill={color} />
    </svg>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav({ t, lang, setLang }: { t: T; lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <LogoMark size={18} color="#1c1917" />
          <span
            className="text-xl text-stone-900 leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            milpa
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-stone-500">
          <a href="#how" className="hover:text-stone-900 transition-colors duration-150">{t.nav.how}</a>
          <a href="#work" className="hover:text-stone-900 transition-colors duration-150">{t.nav.work}</a>
          <a href="#about" className="hover:text-stone-900 transition-colors duration-150">{t.nav.about}</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="text-xs font-semibold text-stone-400 hover:text-stone-700 transition-colors duration-150 tracking-widest uppercase"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a
            href="https://equipo.milpa.cloud"
            className="text-xs font-medium text-stone-400 hover:text-stone-600 transition-colors duration-150"
          >
            Equipo →
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold bg-stone-900 text-stone-50 px-5 py-2 rounded-full hover:bg-stone-700 transition-colors duration-150"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero({ t }: { t: T }) {
  return (
    <section className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-28">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-6">
          {t.hero.badge}
        </span>
        <h1
          className="text-stone-900 text-5xl md:text-7xl leading-[1.02] tracking-tight mb-7 max-w-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.hero.h1}
        </h1>
        <p className="text-lg text-stone-500 max-w-lg leading-relaxed mb-10">
          {t.hero.sub}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mb-14">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-stone-900 text-stone-50 px-6 py-3 rounded-full text-sm font-semibold hover:bg-stone-700 transition-colors duration-150"
          >
            {t.hero.primary}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-600 px-6 py-3 rounded-full text-sm font-semibold hover:border-stone-400 hover:text-stone-800 transition-colors duration-150"
          >
            {t.hero.secondary}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <p className="text-xs font-semibold text-stone-400 tracking-wide">{t.hero.proof}</p>
        </div>
      </div>
    </section>
  );
}

// ─── Problem ──────────────────────────────────────────────────────────────────

function Problem({ t }: { t: T }) {
  return (
    <section className="bg-stone-900 border-b border-stone-800">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-bold tracking-widest uppercase text-emerald-500 mb-4">
          {t.problem.label}
        </p>
        <h2
          className="text-stone-50 text-3xl md:text-5xl mb-16 max-w-2xl leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.problem.h2}
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {t.problem.items.map((p, i) => (
            <div key={i}>
              <p className="text-xs font-bold text-stone-600 mb-4 font-mono">0{i + 1}</p>
              <h3 className="font-semibold text-stone-100 mb-3 leading-snug">{p.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Milpa ────────────────────────────────────────────────────────────────

function WhyMilpa({ t }: { t: T }) {
  return (
    <section className="bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-bold tracking-widest uppercase text-emerald-600 mb-4">
          {t.why.label}
        </p>
        <h2
          className="text-stone-900 text-3xl md:text-5xl mb-14 max-w-xl leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.why.h2}
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {t.why.items.map((item, i) => {
            const Icon = WHY_ICONS[i];
            return (
              <div
                key={i}
                className="bg-stone-50 border border-stone-200 rounded-xl p-6 hover:border-stone-300 transition-colors duration-150"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                  <Icon className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2 leading-snug">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── How we work ──────────────────────────────────────────────────────────────

function HowWeWork({ t }: { t: T }) {
  return (
    <section id="how" className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-bold tracking-widest uppercase text-emerald-600 mb-4">
          {t.how.label}
        </p>
        <h2
          className="text-stone-900 text-3xl md:text-5xl mb-16 max-w-xl leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.how.h2}
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {t.how.steps.map((s) => (
            <div key={s.step}>
              <p
                className="text-4xl text-stone-200 mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.step}
              </p>
              <h3 className="font-semibold text-stone-900 mb-2">{s.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── What we build ────────────────────────────────────────────────────────────

function WhatWeBuild({ t }: { t: T }) {
  return (
    <section className="bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-bold tracking-widest uppercase text-emerald-600 mb-4">
          {t.what.label}
        </p>
        <h2
          className="text-stone-900 text-3xl md:text-5xl mb-4 max-w-xl leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.what.h2}
        </h2>
        <p className="text-stone-500 mb-14 max-w-lg leading-relaxed">{t.what.sub}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {t.what.modules.map((mod, i) => {
            const Icon = MODULE_ICONS[i];
            return (
              <div
                key={mod.label}
                className="bg-stone-50 border border-stone-200 rounded-xl p-5 flex flex-col gap-2.5 hover:border-stone-300 transition-colors duration-150"
              >
                <Icon className="w-5 h-5 text-stone-400" />
                <div>
                  <span className="text-sm font-semibold text-stone-700 leading-snug block">{mod.label}</span>
                  <span className="text-xs text-stone-400 leading-snug">{mod.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-stone-400 mt-6 font-mono">{t.what.custom}</p>
      </div>
    </section>
  );
}

// ─── Ownership / Zero lock-in ─────────────────────────────────────────────────

function Ownership({ t }: { t: T }) {
  return (
    <section className="bg-stone-900 border-b border-stone-800">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="flex items-center gap-2 mb-4">
          <GitBranch className="w-3.5 h-3.5 text-emerald-500" />
          <p className="text-xs font-bold tracking-widest uppercase text-emerald-500">
            {t.ownership.label}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-end">
          <h2
            className="text-white text-3xl md:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.ownership.h2}
          </h2>
          <p className="text-stone-400 leading-relaxed">{t.ownership.sub}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {t.ownership.items.map((item) => {
            const Icon = OWNERSHIP_ICONS[item.icon];
            return (
              <div key={item.title} className="bg-stone-800 border border-stone-700 rounded-xl p-6">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-900 flex items-center justify-center mb-5">
                  <Icon className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Work / Case Studies ──────────────────────────────────────────────────────

function Work({ t }: { t: T }) {
  return (
    <section id="work" className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-bold tracking-widest uppercase text-emerald-600 mb-4">
          {t.work.label}
        </p>
        <h2
          className="text-stone-900 text-3xl md:text-5xl mb-4 leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.work.h2}
        </h2>
        <p className="text-stone-500 mb-14 max-w-lg leading-relaxed">{t.work.sub}</p>
        <div className="grid md:grid-cols-3 gap-5">
          {t.work.cases.map((c) => (
            <div
              key={c.client}
              className="bg-white border border-stone-200 rounded-xl p-7 flex flex-col gap-5 hover:border-stone-300 transition-colors duration-150"
            >
              <div>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">
                  {c.industry}
                </p>
                <h3
                  className="text-stone-900 text-xl leading-tight tracking-tight mb-0.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {c.client}
                </h3>
                <p className="text-xs text-stone-400">{c.location}</p>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed flex-1">{c.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.modules.map((m) => (
                  <span
                    key={m}
                    className="text-xs bg-stone-100 text-stone-500 px-2.5 py-1 rounded-full border border-stone-200"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-stone-100">
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.live ? "bg-emerald-500" : "bg-amber-400"}`}
                />
                <span className="text-xs text-stone-400 font-medium">{c.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About({ t }: { t: T }) {
  return (
    <section id="about" className="bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-bold tracking-widest uppercase text-emerald-600 mb-4">
          {t.about.label}
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <h2
            className="text-stone-900 text-3xl md:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.about.h2}
          </h2>
          <div className="space-y-5 text-stone-500 leading-relaxed">
            <p>{t.about.p1}</p>
            <Separator className="bg-stone-100" />
            <p>{t.about.p2}</p>
            <Separator className="bg-stone-100" />
            <p>{t.about.p3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

function Pricing({ t }: { t: T }) {
  return (
    <section className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-bold tracking-widest uppercase text-emerald-600 mb-4">
          {t.pricing.label}
        </p>
        <h2
          className="text-stone-900 text-3xl md:text-5xl mb-4 leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.pricing.h2}
        </h2>
        <p className="text-stone-500 mb-14 max-w-lg leading-relaxed">{t.pricing.sub}</p>
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {t.pricing.tiers.map((tier) => (
            <div key={tier.name} className="bg-white border border-stone-200 rounded-xl p-6">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">{tier.name}</p>
              <p
                className="text-2xl font-semibold text-stone-900 leading-none mb-0.5 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {tier.price}
              </p>
              <p className="text-xs text-stone-400 mb-5">{tier.period}</p>
              <p className="text-sm text-stone-500 leading-relaxed">{tier.description}</p>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {t.pricing.principles.map((p) => (
            <div key={p} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-sm text-stone-600 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ({ t }: { t: T }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-bold tracking-widest uppercase text-emerald-600 mb-4">
          {t.faq.label}
        </p>
        <h2
          className="text-stone-900 text-3xl md:text-5xl mb-14 leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.faq.h2}
        </h2>
        <div className="border-t border-stone-200">
          {t.faq.items.map((item, i) => (
            <div key={i} className="border-b border-stone-200">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between py-5 text-left gap-6 group"
              >
                <span className="text-stone-900 font-semibold leading-snug group-hover:text-emerald-700 transition-colors duration-150">
                  {item.q}
                </span>
                <span
                  className="text-stone-400 text-xl leading-none shrink-0 mt-0.5 select-none transition-transform duration-150"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p className="text-sm text-stone-500 leading-relaxed pb-5 max-w-2xl">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact({ t }: { t: T }) {
  return (
    <section id="contact" className="bg-stone-900">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-36 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-emerald-500 mb-5">
          {t.contact.label}
        </p>
        <h2
          className="text-white text-4xl md:text-6xl mb-6 leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.contact.h2}
        </h2>
        <p className="text-stone-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
          {t.contact.sub}
        </p>
        <a
          href="mailto:hola@milpa.cloud"
          className="inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 rounded-full font-semibold hover:bg-stone-100 transition-colors duration-150"
        >
          <Mail className="w-5 h-5" />
          hola@milpa.cloud
        </a>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ t }: { t: T }) {
  return (
    <footer className="bg-stone-900 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2.5">
          <LogoMark size={14} color="#57534e" />
          <span className="text-stone-500" style={{ fontFamily: "var(--font-display)" }}>
            milpa
          </span>
        </div>
        <p className="text-sm text-stone-600">{t.footer.copy}</p>
        <div className="flex items-center gap-6 text-sm text-stone-600">
          <a
            href="https://github.com/milpa-cloud"
            className="hover:text-stone-400 transition-colors duration-150 flex items-center gap-1.5"
          >
            <GitBranch className="w-4 h-4" />
            GitHub
          </a>
          <a href="#contact" className="hover:text-stone-400 transition-colors duration-150">
            Contacto
          </a>
          <a href="https://equipo.milpa.cloud" className="hover:text-stone-400 transition-colors duration-150">
            Equipo
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const t = translations[lang];

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <Problem t={t} />
        <WhyMilpa t={t} />
        <HowWeWork t={t} />
        <WhatWeBuild t={t} />
        <Ownership t={t} />
        <Work t={t} />
        <About t={t} />
        <Pricing t={t} />
        <FAQ t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
