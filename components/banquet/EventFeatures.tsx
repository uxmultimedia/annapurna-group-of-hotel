"use client";

import { motion } from "framer-motion";

export function EventFeatures({ features }: { features: readonly string[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      transition={{ staggerChildren: 0.08 }}
      className="mt-6 flex flex-wrap gap-2"
    >
      {features.map((feature) => (
        <motion.span
          key={feature}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="rounded-full border border-[#1d563d]/9 bg-[#f1f5f1] px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.07em] text-[#526158]"
        >
          {feature}
        </motion.span>
      ))}
    </motion.div>
  );
}
