"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function MagneticButton({
  href,
  children,
  variant = "primary",
  download
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  return (
    <motion.span
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-flex"
    >
      <Link
        href={href}
        download={download}
        className={cn(
          "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-2)]",
          variant === "primary"
            ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 text-white shadow-2xl shadow-blue-500/25"
            : "border border-[color:var(--line)] bg-[color:var(--card)] text-[color:var(--foreground)] backdrop-blur-xl"
        )}
      >
        {children}
        <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
      </Link>
    </motion.span>
  );
}
