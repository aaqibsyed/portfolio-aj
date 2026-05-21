"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  className
}: {
  eyebrow: string;
  title: string;
  text?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("mx-auto mb-10 max-w-3xl text-center", className)}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-2)]">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold md:text-5xl">{title}</h2>
      {text ? <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-[color:var(--muted)]">{text}</p> : null}
    </Reveal>
  );
}
