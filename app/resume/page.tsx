import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { profile, skillGroups, timeline } from "@/lib/data";

export const metadata = {
  title: "Resume",
  description: "Interactive resume viewer and download for Aaqib."
};

export default function ResumePage() {
  return (
    <main className="section pt-28">
      <div className="container">
        <SectionHeading eyebrow="Resume" title="Interactive resume timeline." text="A recruiter-friendly resume page with a working download route." />
        <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal className="glass rounded-2xl p-6">
            <h1 className="text-3xl font-semibold">{profile.name}</h1>
            <p className="mt-2 text-lg text-[color:var(--muted)]">{profile.title}</p>
            <p className="mt-4 leading-7 text-[color:var(--muted)]">
              Software developer building full-stack products, AI integrations, dashboards, performance-focused websites, and polished portfolio systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={profile.resumePath} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 px-4 text-sm font-semibold text-white">
                <Download className="size-4" /> Download Resume
              </Link>
              <Link href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[color:var(--line)] px-4 text-sm font-semibold">
                <Mail className="size-4" /> Contact
              </Link>
            </div>
            <h2 className="mt-8 font-semibold">Core Skills</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {skillGroups.flatMap((group) => group.skills.slice(0, 2)).map((skill) => (
                <span key={skill} className="rounded-full border border-[color:var(--line)] px-3 py-1 text-sm text-[color:var(--muted)]">{skill}</span>
              ))}
            </div>
          </Reveal>
          <div className="space-y-6">
            <Reveal className="glass overflow-hidden rounded-2xl p-3">
              <iframe
                title="Aaqib Javed Resume PDF"
                src={profile.resumePath}
                className="h-[720px] w-full rounded-xl border border-[color:var(--line)] bg-white"
              />
            </Reveal>
            <div>
              {timeline.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06} className="relative border-l border-[color:var(--line)] pb-8 pl-7 last:pb-0">
                  <span className="absolute -left-2 top-0 size-4 rounded-full bg-[color:var(--brand-2)]" />
                  <p className="text-sm font-semibold text-[color:var(--brand-2)]">{item.year}</p>
                  <h2 className="mt-1 text-xl font-semibold">{item.title}</h2>
                  <p className="mt-2 leading-7 text-[color:var(--muted)]">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
