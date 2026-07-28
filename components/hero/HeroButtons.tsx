"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const buttonMotion = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
};

export function HeroButtons() {
  return (
    <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:gap-5 lg:flex-row">
      <motion.div
        {...buttonMotion}
        transition={{ duration: 0.5, delay: 1.02, ease: "easeOut" }}
        className="w-full sm:w-auto"
      >
        <Link
          href="/book"
          aria-label="Book your stay at Annapurna Group of Hotels"
          className="group flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[var(--emerald)] px-[34px] text-[11px] font-semibold uppercase tracking-[0.11em] text-white shadow-[0_12px_30px_rgba(15,104,71,0.2)] transition-[transform,background-color,box-shadow] duration-[350ms] hover:-translate-y-0.5 hover:bg-[var(--emerald-deep)] hover:shadow-[0_17px_36px_rgba(15,104,71,0.27)] sm:w-auto"
        >
          Book Your Stay
          <ArrowRight
            aria-hidden="true"
            size={16}
            strokeWidth={1.6}
            className="transition-transform duration-[350ms] group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      <motion.div
        {...buttonMotion}
        transition={{ duration: 0.5, delay: 1.14, ease: "easeOut" }}
        className="w-full sm:w-auto"
      >
        <Link
          href="/hotels"
          aria-label="Explore all Annapurna Group hotels"
          className="group flex h-14 w-full items-center justify-center gap-3 rounded-full border border-[#1d563d]/18 bg-white px-[34px] text-[11px] font-semibold uppercase tracking-[0.11em] text-[var(--emerald)] shadow-[0_8px_24px_rgba(25,53,40,0.05)] transition-[transform,border-color,background-color] duration-[350ms] hover:-translate-y-0.5 hover:border-[var(--emerald)] hover:bg-[var(--ivory)] sm:w-auto"
        >
          Explore Hotels
          <ArrowRight
            aria-hidden="true"
            size={16}
            strokeWidth={1.6}
            className="transition-transform duration-[350ms] group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </div>
  );
}
