"use client";

import { projects } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Code2, ExternalLink, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

export function FilterableProjects() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(
    () =>
      projects.filter((project) => {
        const matchesCategory = category === "All" || project.category === category;
        const matchesQuery = `${project.title} ${project.summary} ${project.tech.join(" ")}`
          .toLowerCase()
          .includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
      }),
    [category, query]
  );

  return (
    <div>
      <Reveal className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                category === item ? "border-transparent bg-[color:var(--foreground)] text-[color:var(--background)]" : "border-[color:var(--line)] bg-[color:var(--card)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="flex min-h-11 items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--card)] px-4 backdrop-blur-xl md:min-w-72">
          <Search className="size-4 text-[color:var(--muted)]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects"
            className="w-full bg-transparent text-sm outline-none"
          />
        </label>
      </Reveal>
      <div className="grid gap-5 lg:grid-cols-3">
        {visible.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08} className="glass group overflow-hidden rounded-2xl">
            <div className="h-48 transition duration-500 group-hover:scale-[1.03]" style={{ background: project.image }} />
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="rounded-full bg-[color:var(--foreground)] px-3 py-1 text-xs font-semibold text-[color:var(--background)]">
                  {project.category}
                </span>
                <div className="flex gap-2">
                  <Link href={project.live} aria-label={`${project.title} live demo`} className="grid size-9 place-items-center rounded-full border border-[color:var(--line)]">
                    <ExternalLink className="size-4" />
                  </Link>
                  <Link href={project.github} aria-label={`${project.title} GitHub repository`} className="grid size-9 place-items-center rounded-full border border-[color:var(--line)]">
                    <Code2 className="size-4" />
                  </Link>
                </div>
              </div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 space-y-3 text-sm">
                <p><strong>Architecture:</strong> {project.features.join(", ")}</p>
                <p className="text-[color:var(--muted)]"><strong>Challenge:</strong> {project.challenge}</p>
                <p className="text-[color:var(--muted)]"><strong>Result:</strong> {project.result}</p>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {project.metrics.map((metric) => (
                  <div key={metric} className="rounded-xl border border-[color:var(--line)] bg-[color:var(--card)] p-2 text-center text-xs font-semibold">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
