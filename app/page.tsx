import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Star
} from "lucide-react";
import { AiAssistant } from "@/components/ai-assistant";
import { ContactForm } from "@/components/contact-form";
import { FilterableProjects } from "@/components/filterable-projects";
import { GithubDashboard } from "@/components/github-dashboard";
import { HeroScene } from "@/components/hero-scene";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal, SectionHeading } from "@/components/reveal";
import { RotatingRole } from "@/components/rotating-role";
import { SkillsGrid } from "@/components/skills-grid";
import {
  architectureItems,
  blogPosts,
  contactMethods,
  exploring,
  featureBadges,
  profile,
  roadmap,
  services,
  stats,
  techRadar,
  testimonials,
  timeline
} from "@/lib/data";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden px-4 pb-16 pt-24">
        <div className="container relative grid min-h-[calc(100vh-7rem)] items-center gap-8 lg:grid-cols-[1fr_.9fr]">
          <div className="relative z-10 max-w-3xl">
            <Reveal>
              <div className="mb-5 flex flex-wrap gap-2">
                {profile.availability.map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--card)] px-3 py-2 text-sm backdrop-blur-xl">
                    <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,.8)]" />
                    {item}
                  </span>
                ))}
              </div>
              <h1 className="text-balance text-5xl font-semibold leading-[1.02] md:text-7xl">
                Aaqib builds software that feels premium, fast, and useful.
              </h1>
              <p className="mt-5 text-xl leading-8 text-[color:var(--muted)]">
                I am a <RotatingRole /> focused on full-stack products, AI integrations, recruiter-friendly case studies, and polished interfaces for startups and clients.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton href="#projects">View Projects</MagneticButton>
                <MagneticButton href="#contact" variant="secondary">Hire Me</MagneticButton>
                <MagneticButton href={profile.resumePath} variant="secondary" download>Download Resume</MagneticButton>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-4">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">{stat.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.1} className="relative min-h-[560px]">
            <HeroScene />
            <div className="glass absolute bottom-6 left-6 right-6 rounded-2xl p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-[color:var(--muted)]">Interactive developer workspace</p>
                  <p className="font-semibold">R3F, particles, network globe, floating tech icons</p>
                </div>
                <span className="rounded-full bg-white/12 px-3 py-1 text-xs text-white">GPU optimized</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container grid gap-8 lg:grid-cols-[.88fr_1.12fr]">
          <Reveal className="glass rounded-2xl p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-2)]">About Me</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Software developer with product taste and AI curiosity.</h2>
            <p className="mt-4 leading-7 text-[color:var(--muted)]">
              I build web products that balance engineering clarity with polished user experience. My work spans frontend systems, backend APIs, dashboards, automation, and AI features that help people move faster.
            </p>
            <p className="mt-4 leading-7 text-[color:var(--muted)]">
              Right now I am exploring agentic AI, RAG systems, MCP, LangGraph, system design, and cloud-ready product architecture. My career goal is to become the kind of software developer teams trust with ambiguous, business-critical product work.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {featureBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.label} className="flex items-center gap-3 rounded-2xl border border-[color:var(--line)] p-3">
                    <Icon className="size-5 text-[color:var(--brand-2)]" />
                    <span className="font-medium">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <div className="relative">
            {timeline.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="relative border-l border-[color:var(--line)] pb-8 pl-7 last:pb-0">
                <span className="absolute -left-3 top-0 grid size-6 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                  <CheckCircle2 className="size-3" />
                </span>
                <p className="text-sm font-semibold text-[color:var(--brand-2)]">{item.year}</p>
                <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 leading-7 text-[color:var(--muted)]">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <SectionHeading eyebrow="Skills" title="A broad software stack, organized for scanning." text="Recruiters can quickly see range. Technical interviewers can spot the stack behind the project work." />
          <SkillsGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Currently Exploring" title="Learning roadmap for AI-native product engineering." />
          <div className="grid gap-4 md:grid-cols-3">
            {exploring.map((item, index) => (
              <Reveal key={item} delay={index * 0.04} className="glass rounded-2xl p-5 transition hover:-translate-y-1">
                <div className="mb-5 h-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-orange-400" />
                <h3 className="text-lg font-semibold">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">Actively learning through builds, notes, diagrams, and production-style prototypes.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <SectionHeading eyebrow="Featured Projects" title="Case-study ready projects with architecture, metrics, and outcomes." text="Each project card is structured for a future detailed case study page." />
          <FilterableProjects />
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal className="glass rounded-2xl p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-2)]">Tech Radar</p>
            <h2 className="mt-3 text-3xl font-semibold">Using, learning, and watching.</h2>
            <p className="mt-4 leading-7 text-[color:var(--muted)]">A living snapshot of where my engineering attention is going.</p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(techRadar).map(([group, items], index) => (
              <Reveal key={group} delay={index * 0.06} className="glass rounded-2xl p-5">
                <h3 className="font-semibold">{group}</h3>
                <div className="mt-4 space-y-2">
                  {items.map((item) => (
                    <p key={item} className="rounded-xl border border-[color:var(--line)] px-3 py-2 text-sm text-[color:var(--muted)]">{item}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Future Roadmap" title="Reserved space for upcoming SaaS, AI, and startup ideas." />
          <div className="grid gap-4 md:grid-cols-4">
            {roadmap.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.06} className="glass rounded-2xl p-5">
                  <Icon className="size-8 text-[color:var(--brand-2)]" />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">{item.type}</p>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-[color:var(--muted)]">Coming soon</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="github" className="section">
        <div className="container">
          <SectionHeading eyebrow="GitHub Dashboard" title="Contribution graph, activity, repository showcase, and language signals." />
          <Reveal>
            <GithubDashboard />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="AI Assistant" title="A chatbot surface designed for resume and project RAG." text="The current implementation is a polished local knowledge demo. It is structured so a vector database and streaming API route can be connected next." />
          <AiAssistant />
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <SectionHeading eyebrow="Services" title="Freelance offers for founders, teams, and marketplace clients." />
          <div className="grid gap-4 md:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.06} className="glass rounded-2xl p-5">
                  <Icon className="size-8 text-[color:var(--brand-2)]" />
                  <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{service.text}</p>
                  <p className="mt-5 rounded-full border border-[color:var(--line)] px-3 py-2 text-sm font-semibold">Pricing: {service.price}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Testimonials" title="Ready for future client proof." className="mx-0 text-left" />
            <div className="flex snap-x gap-4 overflow-x-auto pb-2 no-scrollbar">
              {testimonials.map((item) => (
                <div key={item.name} className="glass min-w-[280px] snap-start rounded-2xl p-5">
                  <div className="mb-4 flex gap-1 text-orange-400">
                    {Array.from({ length: item.rating }, (_, index) => <Star key={index} className="size-4 fill-current" />)}
                  </div>
                  <p className="leading-7 text-[color:var(--muted)]">"{item.quote}"</p>
                  <p className="mt-4 font-semibold">{item.name}</p>
                  <p className="text-sm text-[color:var(--muted)]">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
          <Reveal className="glass rounded-2xl p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-2)]">Blog / Insights</p>
            <h2 className="mt-3 text-3xl font-semibold">Prepared for technical writing.</h2>
            <div className="mt-6 space-y-3">
              {blogPosts.map((post) => (
                <Link key={post} href="#" className="flex items-center justify-between rounded-2xl border border-[color:var(--line)] p-4 transition hover:bg-[color:var(--card)]">
                  <span>{post}</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="analytics" className="section">
        <div className="container">
          <SectionHeading eyebrow="Analytics Dashboard" title="Visitor, geography, projects, and page-view signals." />
          <Reveal className="grid gap-4 lg:grid-cols-[1fr_.9fr]">
            <div className="glass rounded-2xl p-5">
              <div className="grid gap-3 sm:grid-cols-3">
                {["12.8k Visitors", "42 Countries", "AI Project #1"].map((item) => (
                  <div key={item} className="rounded-2xl border border-[color:var(--line)] p-4 text-center font-semibold">{item}</div>
                ))}
              </div>
              <div className="mt-6 flex h-56 items-end gap-3">
                {[42, 74, 52, 92, 63, 86, 70, 96, 76].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-600 via-cyan-400 to-orange-400" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-5">
              <MapPin className="size-7 text-[color:var(--brand-2)]" />
              <h3 className="mt-4 text-xl font-semibold">Country distribution</h3>
              <div className="mt-5 space-y-3">
                {["United States", "India", "United Kingdom", "Canada"].map((country, index) => (
                  <div key={country}>
                    <div className="mb-1 flex justify-between text-sm"><span>{country}</span><span>{34 - index * 7}%</span></div>
                    <div className="h-2 rounded-full bg-[color:var(--line)]"><div className="h-full rounded-full bg-[color:var(--brand-2)]" style={{ width: `${34 - index * 7}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Architecture Gallery" title="A dedicated technical depth lane for interviewers." />
          <div className="grid gap-4 md:grid-cols-3">
            {architectureItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="glass rounded-2xl p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{item.text}</p>
                <Link href="/architecture" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-2)]">
                  View diagrams <ArrowUpRight className="size-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-2)]">Contact</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Have a role, project, or technical interview?</h2>
            <p className="mt-4 leading-7 text-[color:var(--muted)]">Send a concise note, book a call, or use your preferred platform. I am available for full-time software developer roles and freelance product work.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 px-5 text-sm font-semibold text-white">
                <Calendar className="size-4" /> Book a Call
              </Link>
              <Link href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[color:var(--line)] px-5 text-sm font-semibold">
                <Mail className="size-4" /> Email Me
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {contactMethods.map((method) => (
                <div key={method} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-3 text-center text-sm">{method}</div>
              ))}
            </div>
            <div className="mt-6 flex gap-2">
              <Link href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid size-11 place-items-center rounded-full border border-[color:var(--line)] text-sm font-semibold">GH</Link>
              <Link href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid size-11 place-items-center rounded-full border border-[color:var(--line)] text-sm font-semibold">IN</Link>
              <Link href={profile.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid size-11 place-items-center rounded-full border border-[color:var(--line)]"><MessageCircle className="size-5" /></Link>
              <Link href={profile.resumePath} target="_blank" rel="noopener noreferrer" aria-label="Download resume" className="grid size-11 place-items-center rounded-full border border-[color:var(--line)]"><Download className="size-5" /></Link>
            </div>
          </Reveal>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
