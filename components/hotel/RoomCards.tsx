"use client";

import Link from "next/link";
import { ArrowRight, BedDouble, Maximize2, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import type { HotelData } from "@/data/hotels";

export function RoomCards({ hotel }: { hotel: HotelData }) {
  return (
    <section aria-labelledby="rooms-title" className="bg-white px-6 py-24 sm:px-10 lg:py-36">
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-[700px]"><p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[var(--emerald)]">Rooms & Suites</p><h2 id="rooms-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.6rem,5vw,4rem)] font-medium text-[#173c2b]">Space to settle in</h2><p className="mt-5 text-[14px] leading-7 text-[#667168]">Comfortable categories for focused business visits, family journeys and unhurried city stays.</p></div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {hotel.rooms.map((room, index) => (
            <motion.article key={room.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .1 }} className="group overflow-hidden rounded-[24px] border border-[#173c2b]/9 bg-white shadow-[0_15px_45px_rgba(23,60,43,.07)]">
              <div className="relative aspect-[4/3] bg-[#e4e9e4]"><SafeImage src={room.image} alt={`${room.name} at ${hotel.name}`} fill sizes="(max-width:1023px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" fallbackLabel={room.name} /></div>
              <div className="p-7">
                <h3 className="font-[family-name:var(--font-cormorant)] text-[30px] font-semibold text-[#173c2b]">{room.name}</h3>
                <p className="mt-3 text-[13px] leading-6 text-[#667168]">{room.description}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-[10px] text-[#536158]"><span className="flex gap-1.5"><Users size={14}/>{room.occupancy}</span><span className="flex gap-1.5"><BedDouble size={14}/>{room.bed}</span><span className="flex gap-1.5"><Maximize2 size={14}/>{room.size}</span></div>
                <ul className="mt-5 space-y-2 text-[11px] text-[#68736c]">{room.amenities.map((item) => <li key={item}>— {item}</li>)}</ul>
                <p className="mt-6 text-[9px] uppercase tracking-[.12em] text-[#8a918d]">{room.price}</p>
                <Link href="#booking-widget" className="group/button mt-5 flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--emerald)] text-[10px] font-semibold uppercase tracking-[.12em] text-white transition hover:bg-[var(--emerald-deep)]">Book Now <ArrowRight size={14} className="transition-transform group-hover/button:translate-x-1" /></Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
