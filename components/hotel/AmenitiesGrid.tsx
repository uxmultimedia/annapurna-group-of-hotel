"use client";

import { Bath, Bed, BellRing, Building2, Car, ChefHat, ConciergeBell, Droplets, Dumbbell, Fan, Lamp, Shirt, Sparkles, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import type { HotelData } from "@/data/hotels";

const icons = [Wifi, Car, ChefHat, Fan, BellRing, Shirt, Building2, Sparkles, ConciergeBell, Bed, Lamp, Building2, Bath, Droplets];

export function AmenitiesGrid({ hotel }: { hotel: HotelData }) {
  return (
    <section aria-labelledby="amenities-title" className="bg-[#173c2b] px-6 py-24 text-white sm:px-10 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center"><p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[#d4bd80]">Everything You Need</p><h2 id="amenities-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.6rem,5vw,4rem)] font-medium">Hotel Amenities</h2></div>
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {hotel.amenities.map((item, index) => { const Icon = icons[index] ?? Dumbbell; return <motion.div key={item} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .04 }} className="rounded-[18px] border border-white/10 bg-white/[.055] p-5 text-center transition hover:-translate-y-1 hover:border-[#d4bd80]/35 hover:bg-white/[.08]"><Icon size={21} strokeWidth={1.35} className="mx-auto text-[#d4bd80]" /><p className="mt-4 text-[9px] font-medium leading-4 tracking-[.05em] text-white/75">{item}</p></motion.div>; })}
        </div>
      </div>
    </section>
  );
}
