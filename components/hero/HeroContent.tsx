"use client";

import { motion } from "framer-motion";
import { HeroButtons } from "./HeroButtons";
import { TrustStrip } from "./TrustStrip";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col justify-center py-12 lg:py-10 lg:pr-4 xl:pr-9">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="mb-7 flex items-center gap-3"
      >
        <span className="h-px w-8 bg-[var(--gold)]" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#785f2d]">
          Since 2018 · Bhopal
        </span>
      </motion.div>

      <h1
        id="hero-heading"
        className="max-w-[680px] font-[family-name:var(--font-cormorant)] text-[clamp(3.45rem,5.8vw,5.85rem)] font-medium leading-[0.94] tracking-[-0.046em] text-[var(--charcoal)]"
      >
        <motion.span
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="block"
        >
          Experience <em className="font-medium text-[var(--emerald)]">Comfort.</em>
        </motion.span>
        <motion.span
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-2 block"
        >
          Experience <em className="font-medium text-[#997a3c]">Hospitality.</em>
        </motion.span>
      </h1>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
        className="mt-8 max-w-[620px] text-[16px] leading-[1.9] text-[#59625d] xl:text-[17px]"
      >
        Across six hotels in Bhopal, we welcome business travellers and
        families with the same simple promise: attentive hospitality, modern
        comfort, and a stay that feels genuinely considered.
      </motion.p>

      <HeroButtons />
      <TrustStrip />
    </div>
  );
}
