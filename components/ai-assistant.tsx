"use client";

import { aiAnswers } from "@/lib/data";
import { Bot, Send, Sparkles, Upload } from "lucide-react";
import { useMemo, useState } from "react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

const starters = [
  "Who is Aaqib?",
  "What projects has he built?",
  "What technologies does he know?",
  "Can I hire him?",
  "How do I contact him?"
];

function answerFor(input: string) {
  const value = input.toLowerCase();
  if (value.includes("project")) return aiAnswers.projects;
  if (value.includes("tech") || value.includes("know") || value.includes("skill")) return aiAnswers.technologies;
  if (value.includes("hire") || value.includes("available") || value.includes("freelance")) return aiAnswers.hire;
  if (value.includes("contact") || value.includes("email")) return aiAnswers.contact;
  return aiAnswers.who;
}

export function AiAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Ask me about Aaqib's projects, skills, availability, services, or resume fit." }
  ]);
  const [input, setInput] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [analysis, setAnalysis] = useState<null | {
    score: number;
    matched: string[];
    missing: string[];
    summary: string;
  }>(null);
  const [isThinking, setThinking] = useState(false);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  function send(value = input) {
    if (!value.trim()) return;
    setMessages((items) => [...items, { role: "user", text: value }]);
    setInput("");
    setThinking(true);
    window.setTimeout(() => {
      setMessages((items) => [...items, { role: "assistant", text: answerFor(value) }]);
      setThinking(false);
    }, 520);
  }

  function analyzeFit() {
    const jd = jobDescription.toLowerCase();
    const profileKeywords = [
      "next.js",
      "nextjs",
      "react",
      "typescript",
      "javascript",
      "tailwind",
      "node",
      "api",
      "database",
      "postgresql",
      "mongodb",
      "vercel",
      "ai",
      "rag",
      "llm",
      "frontend",
      "backend",
      "full stack",
      "software developer",
      "testing",
      "performance",
      "accessibility"
    ];
    const matched = profileKeywords.filter((keyword) => jd.includes(keyword));
    const important = ["react", "typescript", "api", "database", "testing", "cloud", "system design", "node"];
    const missing = important.filter((keyword) => !jd.includes(keyword));
    const score = Math.min(96, Math.round((matched.length / profileKeywords.length) * 100 + 24));
    setAnalysis({
      score,
      matched: matched.slice(0, 10),
      missing: missing.slice(0, 6),
      summary:
        score >= 72
          ? "Strong match. Lead with full-stack product work, Next.js/React depth, API experience, and AI/project evidence."
          : "Partial match. The profile can still fit, but the resume should emphasize the missing keywords with concrete project proof."
    });
  }

  return (
    <div id="ai-assistant" className="glass overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between gap-4 border-b border-[color:var(--line)] p-4">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-400 to-orange-400 text-white">
            <Bot className="size-5" />
          </span>
          <div>
            <h3 className="font-semibold">AI Portfolio Assistant</h3>
            <p className="text-sm text-[color:var(--muted)]">RAG-ready interface with streaming-style responses.</p>
          </div>
        </div>
        <span className="hidden items-center gap-2 rounded-full border border-[color:var(--line)] px-3 py-1 text-xs sm:flex">
          <Sparkles className="size-3" /> Vector DB ready
        </span>
      </div>
      <div className="grid gap-5 p-4 lg:grid-cols-[1fr_.72fr]">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {starters.map((starter) => (
              <button key={starter} type="button" onClick={() => send(starter)} className="rounded-full border border-[color:var(--line)] px-3 py-2 text-xs transition hover:bg-[color:var(--card)]">
                {starter}
              </button>
            ))}
          </div>
          <div className="h-80 space-y-3 overflow-y-auto rounded-2xl border border-[color:var(--line)] bg-[color:var(--background)]/42 p-3">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <p className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "bg-[color:var(--foreground)] text-[color:var(--background)]" : "bg-[color:var(--card)]"}`}>
                  {message.text}
                </p>
              </div>
            ))}
            {isThinking ? <p className="text-sm text-[color:var(--muted)]">Reading resume vectors...</p> : null}
          </div>
          <form
            className="mt-3 flex gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              if (canSend) send();
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask a recruiter-style question..."
              className="min-h-12 flex-1 rounded-full border border-[color:var(--line)] bg-[color:var(--card)] px-4 outline-none"
            />
            <button type="submit" disabled={!canSend} aria-label="Send message" className="grid size-12 place-items-center rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] disabled:opacity-45">
              <Send className="size-4" />
            </button>
          </form>
        </div>
        <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-4">
          <div className="mb-3 flex items-center gap-2">
            <Upload className="size-4 text-[color:var(--brand-2)]" />
            <h4 className="font-semibold">AI Resume Analyzer</h4>
          </div>
          <textarea
            value={jobDescription}
            onChange={(event) => setJobDescription(event.target.value)}
            placeholder="Paste a job description here. The production version can score profile match, missing keywords, and project evidence."
            className="min-h-44 w-full resize-none rounded-xl border border-[color:var(--line)] bg-transparent p-3 text-sm outline-none"
          />
          <button
            type="button"
            onClick={analyzeFit}
            disabled={!jobDescription.trim()}
            className="mt-3 min-h-11 w-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 px-4 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Analyze Fit
          </button>
          {analysis ? (
            <div className="mt-4 rounded-2xl border border-[color:var(--line)] bg-[color:var(--background)]/45 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold">Profile Match</span>
                <span className="text-2xl font-semibold text-[color:var(--brand-2)]">{analysis.score}%</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{analysis.summary}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">Matched</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {analysis.matched.length ? analysis.matched.map((item) => (
                  <span key={item} className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs text-emerald-300">{item}</span>
                )) : <span className="text-sm text-[color:var(--muted)]">No strong keyword matches yet.</span>}
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">Mention More</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {analysis.missing.map((item) => (
                  <span key={item} className="rounded-full bg-orange-500/15 px-2.5 py-1 text-xs text-orange-300">{item}</span>
                ))}
              </div>
            </div>
          ) : null}
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
            {["Resume", "Projects", "Skills"].map((item) => (
              <div key={item} className="rounded-xl border border-[color:var(--line)] p-3">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
