"use client";

import { motion } from "framer-motion";

export function SectionHeading() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.55 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-[820px] text-center"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--emerald)] sm:tracking-[0.4em]">
        Discover our collection
      </p>
      <h2
        id="hotels-heading"
        className="mt-6 font-[family-name:var(--font-cormorant)] text-[34px] font-medium leading-[1.04] tracking-[-0.035em] text-[var(--charcoal)] sm:text-[46px] lg:text-[60px]"
      >
        Six Hotels.
        <span className="block text-[var(--emerald)]">
          One Standard of Hospitality.
        </span>
      </h2>
      <p className="mx-auto mt-7 max-w-[760px] text-[15px] leading-[1.9] text-[#626b66] sm:text-[17px]">
        Annapurna Group brings together six thoughtfully designed hotels across
        Bhopal—each offering modern comfort, attentive hospitality, and
        convenient locations for business and leisure travellers.
      </p>
    </motion.header>
  );
}
