import { ArrowRight, Database, Network, Workflow } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { architectureItems } from "@/lib/data";

export const metadata = {
  title: "Architecture Gallery",
  description: "System design diagrams, database designs, flow diagrams, and technical documentation."
};

const diagramIcons = [Workflow, Network, Database];

export default function ArchitecturePage() {
  return (
    <main className="section pt-28">
      <div className="container">
        <SectionHeading eyebrow="Architecture" title="Project architecture gallery." text="A technical documentation space for system design, database design, flow diagrams, and implementation notes." />
        <div className="grid gap-5">
          {architectureItems.map((item, index) => {
            const Icon = diagramIcons[index % diagramIcons.length];
            return (
              <Reveal key={item.title} delay={index * 0.06} className="glass rounded-2xl p-6">
                <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
                  <div>
                    <Icon className="size-9 text-[color:var(--brand-2)]" />
                    <h2 className="mt-5 text-2xl font-semibold">{item.title}</h2>
                    <p className="mt-3 leading-7 text-[color:var(--muted)]">{item.text}</p>
                  </div>
                  <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--background)]/42 p-5">
                    <div className="grid grid-cols-3 items-center gap-3 text-center text-sm">
                      {["Input", "Processing", "Output"].map((step, stepIndex) => (
                        <div key={step} className="flex items-center gap-3">
                          <div className="min-h-20 flex-1 rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-3 font-semibold">{step}</div>
                          {stepIndex < 2 ? <ArrowRight className="hidden size-5 text-[color:var(--brand-2)] sm:block" /> : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </main>
  );
}
