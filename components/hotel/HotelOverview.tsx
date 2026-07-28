"use client";

import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import type { HotelData } from "@/data/hotels";

export function HotelOverview({ hotel }: { hotel: HotelData }) {
  return (
    <section id="overview" aria-labelledby="overview-title" className="bg-white px-6 py-24 sm:px-10 lg:py-36">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, scale: 1.03 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .2 }} className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#e4e9e4] shadow-[0_28px_70px_rgba(23,60,43,.14)]">
          <SafeImage src={`/images/hotels/${hotel.slug}/overview.webp`} alt={`A welcoming interior at ${hotel.name}`} fill sizes="(max-width:1023px) 100vw, 46vw" className="object-cover" fallbackLabel={`${hotel.name} interior`} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }}>
          <p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[var(--emerald)]">A Thoughtful Bhopal Stay</p>
          <h2 id="overview-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.6rem,5vw,4.3rem)] font-medium leading-[1.02] text-[#173c2b]">Welcome to {hotel.name}</h2>
          <div className="mt-8 space-y-6 text-[15px] leading-8 text-[#5f6c64] sm:text-[17px]">{hotel.overview.map((text) => <p key={text}>{text}</p>)}</div>
          <dl className="mt-10 grid grid-cols-2 gap-5 border-t border-[#173c2b]/10 pt-8">
            <div><dt className="text-[9px] uppercase tracking-[.16em] text-[#7a847e]">Location</dt><dd className="mt-2 font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#173c2b]">{hotel.location}</dd></div>
            <div><dt className="text-[9px] uppercase tracking-[.16em] text-[#7a847e]">Guest Rating</dt><dd className="mt-2 font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#173c2b]">{hotel.rating} / 5</dd></div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
