"use client";

import { roles } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((value) => (value + 1) % roles.length), 1900);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex min-h-[1.18em] min-w-[22ch] items-center overflow-hidden align-[-0.08em] leading-none sm:min-w-[21ch]">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap leading-none"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
