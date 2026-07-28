"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "6+", label: "Hotels" },
  { value: "2018", label: "Established" },
  { value: "1000+", label: "Happy Guests" },
  { value: "24×7", label: "Guest Support" },
] as const;

export function AboutStats() {
  return (
    <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
            ease: "easeOut",
          }}
          className="rounded-[18px] border border-[#234233]/8 bg-white px-5 py-5 shadow-[0_8px_26px_rgba(27,55,42,0.05)] transition-[transform,box-shadow,border-color] duration-[350ms] hover:-translate-y-1 hover:border-[var(--emerald)]/22 hover:shadow-[0_14px_34px_rgba(27,55,42,0.09)]"
        >
          <strong className="block font-[family-name:var(--font-cormorant)] text-[29px] font-medium leading-none text-[var(--emerald)]">
            {stat.value}
          </strong>
          <span className="mt-2 block text-[9px] font-semibold uppercase tracking-[0.12em] text-[#65706a]">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
