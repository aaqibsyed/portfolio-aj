"use client";

import { Send } from "lucide-react";
import { useMemo, useState } from "react";
import { profile } from "@/lib/data";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("Full-time opportunity");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const canSend = useMemo(() => name.trim() && email.trim() && message.trim(), [name, email, message]);

  function sendInquiry() {
    if (!canSend) return;
    const subject = encodeURIComponent(`${type} inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInquiry type: ${type}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      className="glass rounded-2xl p-5"
      onSubmit={(event) => {
        event.preventDefault();
        sendInquiry();
      }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <input value={name} onChange={(event) => setName(event.target.value)} className="min-h-12 rounded-xl border border-[color:var(--line)] bg-[color:var(--card)] px-4 text-[color:var(--foreground)] outline-none" placeholder="Name" />
        <input value={email} onChange={(event) => setEmail(event.target.value)} className="min-h-12 rounded-xl border border-[color:var(--line)] bg-[color:var(--card)] px-4 text-[color:var(--foreground)] outline-none" placeholder="Email" type="email" />
      </div>
      <select value={type} onChange={(event) => setType(event.target.value)} className="mt-3 min-h-12 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--card)] px-4 text-[color:var(--foreground)] outline-none">
        <option>Full-time opportunity</option>
        <option>Freelance project</option>
        <option>AI integration</option>
        <option>Technical interview</option>
      </select>
      <textarea value={message} onChange={(event) => setMessage(event.target.value)} className="mt-3 min-h-32 w-full resize-none rounded-xl border border-[color:var(--line)] bg-[color:var(--card)] p-4 text-[color:var(--foreground)] outline-none" placeholder="Tell me about the role or project..." />
      <button type="submit" disabled={!canSend} className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 px-5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50">
        Send Inquiry <Send className="size-4" />
      </button>
      {sent ? <p className="mt-3 text-sm text-[color:var(--muted)]">Your email app should open with the inquiry ready to send.</p> : null}
    </form>
  );
}
