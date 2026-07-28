"use client";

import Link from "next/link";
import { ArrowDown, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";

export function ContactHero() {
  return (
    <section aria-labelledby="contact-hero-title" className="relative flex min-h-[620px] h-[65svh] items-center overflow-hidden bg-[#173c2b]">
      <SafeImage src="/images/contact/contact-hero.webp" alt="A welcoming Annapurna hotel lobby" fill priority sizes="100vw" className="object-cover" fallbackLabel="Annapurna guest support" fallbackClassName="bg-[#173c2b] text-white/65" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,20,14,.72),rgba(8,20,14,.34))]" />
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-24 text-white sm:px-10">
        <nav aria-label="Breadcrumb" className="flex gap-2 text-[9px] font-semibold uppercase tracking-[.16em] text-white/65"><Link href="/">Home</Link><span>/</span><span aria-current="page">Contact</span></nav>
        <p className="mt-10 text-[10px] font-semibold uppercase tracking-[.4em] text-[#d7c187]">Get In Touch</p>
        <h1 id="contact-hero-title" className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3.8rem,8vw,7rem)] font-medium leading-[.9] tracking-[-.04em]">We&apos;re Here To Help</h1>
        <p className="mt-7 max-w-[650px] text-[14px] leading-7 text-white/78 sm:text-[16px]">Whether you are planning a hotel stay, considering a banquet or simply need an answer, the Annapurna team is ready to assist with warmth, clarity and care.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="tel:+917566500040" className="flex h-14 items-center justify-center gap-2 rounded-full bg-[var(--emerald)] px-8 text-[10px] font-semibold uppercase tracking-[.12em] text-white"><Phone size={15}/>Call Now</a>
          <Link href="/#hotels" className="flex h-14 items-center justify-center rounded-full border border-white/30 bg-white/8 px-8 text-[10px] font-semibold uppercase tracking-[.12em] text-white backdrop-blur-md">Explore Hotels</Link>
        </div>
      </motion.div>
      <motion.a href="#quick-contact" aria-label="Scroll to contact options" animate={{ y: [0, 7, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-7 left-1/2 z-10 text-white/60"><ArrowDown /></motion.a>
    </section>
  );
}
