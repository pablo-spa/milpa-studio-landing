import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Users,
  FolderKanban,
  Package,
  Clock,
  FileText,
  MessageSquare,
  BarChart3,
  Workflow,
  CheckCircle2,
  Code2,
  Mail,
} from "lucide-react";

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-[family-name:var(--font-display)] text-xl text-stone-900 tracking-tight">
          milpa
        </span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-stone-600">
          <a href="#how" className="hover:text-stone-900 transition-colors">How it works</a>
          <a href="#work" className="hover:text-stone-900 transition-colors">Our work</a>
          <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
        </nav>
        <a
          href="#contact"
          className="text-sm font-medium bg-stone-900 text-stone-50 px-4 py-2 rounded-full hover:bg-stone-700 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-36">
        <Badge variant="outline" className="mb-8 text-stone-500 border-stone-300 rounded-full font-normal">
          Custom software studio · Oaxaca, Mexico
        </Badge>
        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-stone-900 leading-[1.05] mb-6 max-w-3xl">
          Software built around your business.
        </h1>
        <p className="text-lg md:text-xl text-stone-500 max-w-xl leading-relaxed mb-10">
          We build hyper-personalized apps for small and medium businesses —
          modular, affordable, and made to fit how you actually work. Not how a
          manual says you should.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-stone-900 text-stone-50 px-6 py-3 rounded-full font-medium hover:bg-stone-700 transition-colors"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-700 px-6 py-3 rounded-full font-medium hover:bg-stone-100 transition-colors"
          >
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Problem ──────────────────────────────────────────────────────────────────

function Problem() {
  const problems = [
    {
      title: "Built for everyone — perfect for no one.",
      body: "Odoo, SAP, Salesforce. Designed for every industry, every country, every workflow. You spend more time adapting to the software than it adapts to you.",
    },
    {
      title: "You pay for features you never touch.",
      body: "Per-user fees, per-module fees, annual contracts. Paying for a complete ERP when you only need three things to work well.",
    },
    {
      title: "Months to implement, years to learn.",
      body: "Implementation consultants, training sessions, data migrations. Six months later you're live — and your team still doesn't use half of it.",
    },
  ];

  return (
    <section className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-4">The problem</p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-stone-900 mb-16 max-w-2xl leading-tight">
          Generic software wasn&apos;t built for your business.
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {problems.map((p, i) => (
            <div key={i}>
              <p className="text-xs font-medium text-stone-300 mb-3">0{i + 1}</p>
              <h3 className="font-semibold text-stone-900 mb-2 leading-snug">{p.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How we work ──────────────────────────────────────────────────────────────

function HowWeWork() {
  const steps = [
    {
      step: "01",
      title: "Discovery",
      body: "We learn how your business actually operates — the real workflows, the manual steps, the spreadsheets held together with hope.",
    },
    {
      step: "02",
      title: "Proposal",
      body: "We scope exactly what you need. Fixed price, defined modules, clear timeline. No surprises.",
    },
    {
      step: "03",
      title: "Build",
      body: "We build module by module. You start using it from day one — not after a six-month implementation.",
    },
    {
      step: "04",
      title: "Iterate",
      body: "As your business grows, your software grows with it. Add modules, adjust workflows, extend what works.",
    },
  ];

  return (
    <section id="how" className="bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-4">How we work</p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-stone-900 mb-16 max-w-xl leading-tight">
          Simple process. Real results.
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step}>
              <p className="font-[family-name:var(--font-display)] text-4xl text-stone-200 mb-4">{s.step}</p>
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

const MODULES = [
  { icon: Users, label: "Contacts & CRM" },
  { icon: FolderKanban, label: "Projects & Tracking" },
  { icon: Package, label: "Inventory & Purchasing" },
  { icon: Clock, label: "HR & Attendance" },
  { icon: FileText, label: "Quotes & Billing" },
  { icon: MessageSquare, label: "Internal Chat" },
  { icon: BarChart3, label: "Reports & Dashboards" },
  { icon: Workflow, label: "Custom Workflows" },
];

function WhatWeBuild() {
  return (
    <section className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-4">What we build</p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-stone-900 mb-4 max-w-xl leading-tight">
          Whatever your business needs. Nothing more.
        </h2>
        <p className="text-stone-500 mb-14 max-w-lg">
          Every project starts from a library of proven modules. We pick the
          ones that solve your problems and configure them around your workflow.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MODULES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col gap-3 hover:border-stone-400 transition-colors"
            >
              <Icon className="w-5 h-5 text-stone-400" />
              <span className="text-sm font-medium text-stone-700">{label}</span>
            </div>
          ))}
          <div className="bg-stone-100 border border-dashed border-stone-300 rounded-xl p-5 flex items-center justify-center col-span-2 md:col-span-4">
            <p className="text-sm text-stone-400 text-center">
              + anything else your business needs. We build custom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Case Study ───────────────────────────────────────────────────────────────

function CaseStudy() {
  const builtModules = [
    "Contacts & CRM", "Projects", "Weekly Payroll",
    "Inventory", "Purchase Orders", "Tool Management",
    "Quotations", "Attendance Clock", "Finance Dashboard", "Admin & Roles",
  ];

  return (
    <section id="work" className="bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-4">Case study</p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-stone-900 mb-6 leading-tight">
              We built our own ERP first.
            </h2>
            <p className="text-stone-500 leading-relaxed mb-6">
              Before building software for anyone else, we built a full ERP for
              Carpintería Huayapam — a woodworking company in Oaxaca, Mexico.
              Used daily for payroll, projects, inventory, purchasing, and more.
            </p>
            <p className="text-stone-500 leading-relaxed mb-8">
              If it works for a carpintería with 20 workers and 40+ moving
              parts, it can work for your business.
            </p>
            <div className="flex items-center gap-2 text-sm text-stone-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>44 modules · in production · used daily</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-4">Modules built</p>
            <div className="flex flex-wrap gap-2">
              {builtModules.map((m) => (
                <span
                  key={m}
                  className="text-xs bg-stone-100 text-stone-600 px-3 py-1.5 rounded-full border border-stone-200"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Beekeeper Libre ──────────────────────────────────────────────────────────

function BeekeeperLibre() {
  return (
    <section className="bg-emerald-950 border-b border-emerald-900">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Open source · coming soon</p>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-4 leading-tight">
              Beekeeper Libre
            </h2>
            <p className="text-emerald-300 leading-relaxed">
              A free, open-source mobile communication platform for frontline
              workers. Announcements, group chat, tasks, and shift schedules —
              for the people who don&apos;t sit at a desk. Built to connect to any
              Milpa deployment.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-block border border-emerald-700 text-emerald-400 text-sm px-5 py-2.5 rounded-full cursor-pointer hover:bg-emerald-900 transition-colors">
              Star on GitHub →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-4">About</p>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-stone-900 mb-6 leading-tight">
              Built by a business owner, for business owners.
            </h2>
          </div>
          <div className="space-y-5 text-stone-500 leading-relaxed">
            <p>
              I&apos;m Pablo Spada. Before I wrote software, I ran a woodworking
              company in Oaxaca, Mexico. I know what it&apos;s like to lose hours to
              spreadsheets, to explain the same thing three times because
              there&apos;s no system, to pay for software you barely understand.
            </p>
            <p>
              I built software for my own business first. When it worked, I
              realized it could work for others too — businesses like mine, with
              real workflows, real teams, and real problems that generic ERPs
              never quite solve.
            </p>
            <p>
              Milpa is small on purpose. Small means fast, personal, and
              accountable. You work directly with me — not a support ticket.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

function Pricing() {
  const principles = [
    "Fixed price per project. No hourly surprises.",
    "No per-user fees. Add 5 people or 50 — same price.",
    "No platform subscriptions. You own your software.",
    "You own the code and the data, always.",
  ];

  return (
    <section className="bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-4">Pricing</p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-stone-900 mb-6 leading-tight">
              Honest pricing. No surprises.
            </h2>
            <p className="text-stone-500 leading-relaxed">
              Every project is quoted based on the modules you need. We scope
              it together, agree on a number, and that&apos;s what you pay.
            </p>
          </div>
          <div className="space-y-4 pt-2">
            {principles.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-stone-700">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="bg-stone-900">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-36 text-center">
        <p className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-4">Get in touch</p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-white mb-6 leading-tight">
          Tell us about your business.
        </h2>
        <p className="text-stone-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
          No forms, no sales funnel. Just a conversation about what you&apos;re
          trying to do and whether we can help.
        </p>
        <a
          href="mailto:pablo@milpa.cloud"
          className="inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-stone-100 transition-colors text-lg"
        >
          <Mail className="w-5 h-5" />
          pablo@milpa.cloud
        </a>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-[family-name:var(--font-display)] text-stone-500">milpa</span>
        <p className="text-sm text-stone-600">
          © {new Date().getFullYear()} Milpa · milpa.cloud · Oaxaca, Mexico
        </p>
        <div className="flex items-center gap-6 text-sm text-stone-600">
          <a href="https://github.com" className="hover:text-stone-400 transition-colors flex items-center gap-1.5">
            <Code2 className="w-4 h-4" />
            GitHub
          </a>
          <a href="mailto:pablo@milpa.cloud" className="hover:text-stone-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Separator />
        <Problem />
        <HowWeWork />
        <WhatWeBuild />
        <CaseStudy />
        <BeekeeperLibre />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
