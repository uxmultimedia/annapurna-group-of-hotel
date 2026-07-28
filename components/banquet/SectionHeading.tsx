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
        Events &amp; Celebrations
      </p>
      <h2
        id="banquet-heading"
        className="mt-6 font-[family-name:var(--font-cormorant)] text-[36px] font-medium leading-[1.04] tracking-[-0.035em] text-[var(--charcoal)] sm:text-[48px] lg:text-[60px]"
      >
        Celebrate Every Occasion{" "}
        <span className="text-[var(--emerald)]">with Elegance</span>
      </h2>
      <p className="mx-auto mt-7 max-w-[760px] text-[15px] leading-[1.9] text-[#626b66] sm:text-[17px]">
        From weddings and family gatherings to corporate meetings and birthday
        celebrations, Annapurna Group offers elegant venues where thoughtful
        service and warm hospitality bring every special occasion to life.
      </p>
    </motion.header>
  );
}
