"use client";

import { profile } from "@/lib/data";
import { Code2, ExternalLink, GitFork, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

type GithubUser = {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export function GithubDashboard() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<GithubUser | null>(null);
  const [status, setStatus] = useState("Loading GitHub data...");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const [userResponse, repoResponse] = await Promise.all([
          fetch("https://api.github.com/users/aaqibsyed"),
          fetch("https://api.github.com/users/aaqibsyed/repos?sort=updated&per_page=6")
        ]);
        if (!userResponse.ok || !repoResponse.ok) throw new Error("GitHub API unavailable");
        const [userData, repoData] = await Promise.all([userResponse.json(), repoResponse.json()]);
        if (!cancelled) {
          setUser(userData);
          setRepos(repoData);
          setStatus("Live GitHub data");
        }
      } catch {
        if (!cancelled) setStatus("GitHub data could not load right now. Profile link is still available.");
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const languageCounts = useMemo(() => {
    const counts = repos.reduce<Record<string, number>>((acc, repo) => {
      if (repo.language) acc[repo.language] = (acc[repo.language] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [repos]);

  return (
    <div className="glass overflow-hidden rounded-2xl p-5">
      <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-400 to-orange-400 text-white">
            <Code2 className="size-5" />
          </span>
          <div>
            <h3 className="font-semibold">github.com/aaqibsyed</h3>
            <p className="text-sm text-[color:var(--muted)]">{status}</p>
          </div>
        </div>
        <Link href={profile.socials.github} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[color:var(--line)] px-4 text-sm font-semibold">
          Open GitHub <ExternalLink className="size-4" />
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-4">
        {[
          ["Public repos", user?.public_repos ?? repos.length],
          ["Followers", user?.followers ?? "-"],
          ["Following", user?.following ?? "-"],
          ["Top language", languageCounts[0]?.[0] ?? "Loading"]
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-[color:var(--line)] p-4">
            <p className="text-2xl font-semibold">{value}</p>
            <p className="text-sm text-[color:var(--muted)]">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[.72fr_1.28fr]">
        <div className="rounded-2xl border border-[color:var(--line)] p-4">
          <h4 className="font-semibold">Most Used Languages</h4>
          <div className="mt-4 space-y-3">
            {(languageCounts.length ? languageCounts : [["TypeScript", 3], ["JavaScript", 2], ["CSS", 1]]).map(([language, count]) => (
              <div key={language}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>{language}</span>
                  <span>{count}</span>
                </div>
                <div className="h-2 rounded-full bg-[color:var(--line)]">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-orange-400" style={{ width: `${Math.max(20, Number(count) * 22)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {repos.length ? repos.map((repo) => (
            <Link key={repo.id} href={repo.html_url} className="rounded-2xl border border-[color:var(--line)] p-4 transition hover:bg-[color:var(--card)]">
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-semibold">{repo.name}</h4>
                <ExternalLink className="size-4 text-[color:var(--muted)]" />
              </div>
              <p className="mt-2 min-h-10 text-sm leading-5 text-[color:var(--muted)]">{repo.description || "Repository details available on GitHub."}</p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-[color:var(--muted)]">
                {repo.language ? <span>{repo.language}</span> : null}
                <span className="inline-flex items-center gap-1"><Star className="size-3" /> {repo.stargazers_count}</span>
                <span className="inline-flex items-center gap-1"><GitFork className="size-3" /> {repo.forks_count}</span>
              </div>
            </Link>
          )) : (
            <p className="rounded-2xl border border-[color:var(--line)] p-4 text-sm text-[color:var(--muted)] md:col-span-2">
              Repository showcase will populate from GitHub when the API is reachable.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
