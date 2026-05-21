"use client";

import Link from "next/link";
import { Command, Download, Menu } from "lucide-react";
import { siteLinks } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--background)]/58 backdrop-blur-2xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold" aria-label="Aaqib home">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 via-cyan-400 to-orange-400 text-white shadow-lg shadow-blue-500/20">
            A
          </span>
          <span>Aaqib</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {siteLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-3 py-2 text-sm text-[color:var(--muted)] transition hover:bg-[color:var(--card)] hover:text-[color:var(--foreground)]">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Open command palette"
            className="hidden min-h-10 items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--card)] px-3 text-sm text-[color:var(--muted)] backdrop-blur-xl md:inline-flex"
            onClick={() => window.dispatchEvent(new Event("open-command-menu"))}
          >
            <Command className="size-4" />
            <span>Ctrl K</span>
          </button>
          <Link
            href={profile.resumePath}
            className="hidden size-10 place-items-center rounded-full border border-[color:var(--line)] bg-[color:var(--card)] backdrop-blur-xl sm:grid"
            aria-label="Download resume"
          >
            <Download className="size-4" />
          </Link>
          <ThemeToggle />
          <button type="button" aria-label="Open menu" className="grid size-10 place-items-center rounded-full border border-[color:var(--line)] md:hidden">
            <Menu className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
