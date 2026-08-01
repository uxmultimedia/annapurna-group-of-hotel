"use client";

import Link from "next/link";
import { ArrowDown, Car, MapPin, Phone, Star, Users, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import type { HotelData } from "@/data/hotels";

export function HotelHero({ hotel }: { hotel: HotelData }) {
  const badges = [
    [Users, "Business Friendly"], [Users, "Family Friendly"], [Wifi, "Free WiFi"], [Car, "Parking"],
  ] as const;
  return (
    <section aria-labelledby="hotel-title" className="relative flex min-h-[760px] h-[100svh] items-end overflow-hidden bg-[#173c2b]">
      <SafeImage src={`/images/hotels/${hotel.slug}/hero.webp`} alt={`${hotel.name} in Bhopal`} fill priority sizes="100vw" className="object-cover" fallbackLabel={hotel.name} fallbackClassName="bg-[#173c2b] text-white/65" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,.28),rgba(7,18,13,.78))]" />
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: "easeOut" }} className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 pt-32 text-white sm:px-10 lg:pb-20">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[9px] font-semibold uppercase tracking-[.17em] text-white/65">
          <Link href="/">Home</Link><span>/</span><Link href="/#hotels">Hotels</Link><span>/</span><span aria-current="page">{hotel.name}</span>
        </nav>
        <h1 id="hotel-title" className="mt-6 max-w-[950px] font-[family-name:var(--font-cormorant)] text-[clamp(3.4rem,8vw,7.5rem)] font-medium leading-[.88] tracking-[-.045em]">{hotel.name}</h1>
        <div className="mt-7 flex flex-wrap items-center gap-5 text-[12px] text-white/78">
          <span className="flex items-center gap-2"><MapPin size={15} />{hotel.location}</span>
          <span className="flex items-center gap-2 text-[#e1c988]"><Star size={15} fill="currentColor" />{hotel.rating} guest rating</span>
        </div>
        <p className="mt-5 max-w-[650px] text-[14px] leading-7 text-white/78 sm:text-[16px]">{hotel.shortDescription}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="#booking-widget" className="flex h-14 items-center justify-center rounded-full bg-[var(--emerald)] px-8 text-[10px] font-semibold uppercase tracking-[.13em] shadow-xl transition hover:-translate-y-0.5 hover:bg-[var(--emerald-deep)]">Book Your Stay</Link>
          <a href="tel:+919179191110" className="flex h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/8 px-8 text-[10px] font-semibold uppercase tracking-[.13em] backdrop-blur-md transition hover:bg-white/15"><Phone size={15} />Call Now</a>
        </div>
        <div className="mt-9 flex flex-wrap gap-2.5">
          {badges.map(([Icon, label]) => <span key={label} className="flex items-center gap-2 rounded-full border border-white/17 bg-black/15 px-3.5 py-2 text-[9px] font-medium tracking-[.05em] text-white/75 backdrop-blur-md"><Icon size={13} />{label}</span>)}
        </div>
      </motion.div>
      <motion.a href="#overview" aria-label="Scroll to hotel overview" animate={{ y: [0, 7, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-7 right-7 z-10 text-white/60"><ArrowDown size={21} /></motion.a>
    </section>
  );
}
