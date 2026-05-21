"use client";

import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { useState } from "react";

export function SkillsGrid() {
  const [active, setActive] = useState("All");
  const tabs = ["All", ...skillGroups.map((group) => group.title)];
  const visible = active === "All" ? skillGroups : skillGroups.filter((group) => group.title === active);

  return (
    <div>
      <Reveal className="mb-8 flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === tab ? "border-transparent bg-[color:var(--foreground)] text-[color:var(--background)]" : "border-[color:var(--line)] bg-[color:var(--card)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {visible.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={index * 0.05} className="glass rounded-2xl p-5 transition hover:-translate-y-1">
              <div className="mb-4 flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-400 to-orange-400 text-white">
                  <Icon className="size-5" />
                </span>
                <span className="text-sm font-semibold text-[color:var(--muted)]">{group.level}%</span>
              </div>
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-[color:var(--line)]">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-orange-400" style={{ width: `${group.level}%` }} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-[color:var(--line)] px-2.5 py-1 text-xs text-[color:var(--muted)]">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
