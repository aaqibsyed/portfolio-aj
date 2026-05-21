"use client";

import { commandItems } from "@/lib/data";
import { Command, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-menu", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-menu", onOpen);
    };
  }, []);

  const filtered = useMemo(
    () => commandItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-start bg-slate-950/45 px-4 pt-24 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div className="glass mx-auto w-full max-w-xl overflow-hidden rounded-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-[color:var(--line)] px-4 py-3">
          <Search className="size-5 text-[color:var(--muted)]" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pages, projects, services..."
            className="min-h-11 flex-1 bg-transparent outline-none"
          />
          <Command className="size-4 text-[color:var(--muted)]" />
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-sm transition hover:bg-[color:var(--card)]"
            >
              <span>{item.label}</span>
              <span className="text-[color:var(--muted)]">Open</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
