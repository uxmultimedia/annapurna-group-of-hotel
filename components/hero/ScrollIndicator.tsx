"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
    >
      <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#516158]/80">
        Scroll
      </span>
      <span className="relative h-7 w-[17px] rounded-full border border-[#41554a]/55">
        <motion.span
          animate={{ y: [4, 12, 4], opacity: [0.8, 0.35, 0.8] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          className="absolute left-1/2 top-0 size-[3px] -translate-x-1/2 rounded-full bg-[#41554a]"
        />
      </span>
    </div>
  );
}
