import { BookOpen, BrainCircuit, Rocket, Target } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { exploring, projects } from "@/lib/data";

const focus = [
  { title: "Current focus", icon: Target, items: ["Full-stack portfolio systems", "AI integrations", "Recruiter-friendly case studies"] },
  { title: "Current learning", icon: BrainCircuit, items: exploring.slice(0, 5) },
  { title: "Current projects", icon: Rocket, items: projects.map((project) => project.title) },
  { title: "Books and courses", icon: BookOpen, items: ["System design fundamentals", "LLM application patterns", "Cloud deployment practices"] }
];

export const metadata = {
  title: "Now",
  description: "What Aaqib is currently focused on, learning, building, and studying."
};

export default function NowPage() {
  return (
    <main className="section pt-28">
      <div className="container">
        <SectionHeading eyebrow="Now" title="What I am focused on right now." text="A lightweight status page for recruiters, founders, and collaborators who want the freshest signal." />
        <div className="grid gap-4 md:grid-cols-2">
          {focus.map((block, index) => {
            const Icon = block.icon;
            return (
              <Reveal key={block.title} delay={index * 0.06} className="glass rounded-2xl p-6">
                <Icon className="size-8 text-[color:var(--brand-2)]" />
                <h2 className="mt-5 text-2xl font-semibold">{block.title}</h2>
                <div className="mt-5 space-y-2">
                  {block.items.map((item) => (
                    <p key={item} className="rounded-xl border border-[color:var(--line)] p-3 text-[color:var(--muted)]">{item}</p>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </main>
  );
}
