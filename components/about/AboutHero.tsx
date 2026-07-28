"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative flex min-h-[680px] h-[75svh] items-center justify-center overflow-hidden bg-[#173c2b]"
    >
      <SafeImage
        src="/images/about/about-hero.webp"
        alt="An elegant Annapurna hotel interior in Bhopal"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        fallbackLabel="Annapurna hospitality"
        fallbackClassName="bg-[#173c2b] text-white/70"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,15,.47),rgba(10,20,15,.58))]" />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-[980px] px-6 pt-20 text-center text-white sm:px-10"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-white/80">
          About Us
        </p>
        <h1
          id="about-hero-title"
          className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,6.3vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.03em]"
        >
          Creating Exceptional
          <span className="block text-[#d5c08d]">Hospitality Since 2018</span>
        </h1>
        <p className="mx-auto mt-7 max-w-[720px] text-[14px] leading-7 text-white/82 sm:text-[16px]">
          Annapurna Group of Hotels is a trusted Bhopal hospitality brand,
          bringing together premium comfort, warm service and thoughtfully
          memorable experiences across six distinctive hotels.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/#hotels"
            className="group flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[var(--emerald)] px-7 text-[10px] font-semibold uppercase tracking-[0.13em] text-white shadow-[0_14px_32px_rgba(0,0,0,.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--emerald-deep)] sm:w-auto"
          >
            Explore Our Hotels
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="flex h-14 w-full items-center justify-center rounded-full border border-white/35 bg-white/8 px-7 text-[10px] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
      <motion.a
        href="#our-story"
        aria-label="Scroll to our story"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/65"
      >
        <ArrowDown size={20} strokeWidth={1.3} />
      </motion.a>
    </section>
  );
}
