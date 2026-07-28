"use client";

import { motion } from "framer-motion";
import { HeroContent } from "./HeroContent";
import { HeroVideo } from "./HeroVideo";
import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen overflow-hidden bg-[var(--ivory)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[12%] top-[10%] size-[720px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0)_70%)]"
      />

      <div className="relative mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 gap-8 px-6 pb-8 pt-[104px] sm:px-10 sm:pb-10 lg:grid-cols-[45%_55%] lg:gap-7 lg:px-10 lg:pb-8 lg:pt-[112px] xl:grid-cols-[40%_60%] xl:px-[60px]">
        <HeroContent />
        <HeroVideo />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
