"use client";

import { ChefHat, Coffee, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import type { HotelData } from "@/data/hotels";

export function RestaurantSection({ hotel }: { hotel: HotelData }) {
  const meals = [[Coffee, "Breakfast"], [Sun, "Lunch"], [Moon, "Dinner"], [ChefHat, "Fine Dining"]] as const;
  return <section aria-labelledby="restaurant-title" className="bg-white px-6 py-24 sm:px-10 lg:py-36"><div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-2 lg:gap-20"><div><p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[var(--emerald)]">Restaurant & Dining</p><h2 id="restaurant-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.6rem,5vw,4rem)] font-medium leading-[1.02] text-[#173c2b]">Flavours served with warmth</h2><p className="mt-7 text-[15px] leading-8 text-[#647068]">The restaurant at {hotel.name} offers familiar Indian favourites and carefully prepared contemporary dishes in a relaxed setting. From an energising breakfast to an unhurried family dinner, service remains thoughtful and the atmosphere comfortably refined.</p><div className="mt-9 grid grid-cols-2 gap-3">{meals.map(([Icon,label])=><div key={label} className="flex items-center gap-3 rounded-[16px] border border-[#173c2b]/9 bg-[#fbfaf6] p-4 text-[11px] font-medium text-[#425449]"><Icon size={17} className="text-[var(--emerald)]"/>{label}</div>)}</div></div><motion.div initial={{ opacity: 0, scale: 1.03 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .2 }} className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#e4e9e4] shadow-[0_25px_65px_rgba(23,60,43,.13)]"><SafeImage src={`/images/hotels/${hotel.slug}/restaurant.webp`} alt={`Restaurant at ${hotel.name}`} fill sizes="(max-width:1023px) 100vw, 50vw" className="object-cover" fallbackLabel="Restaurant & dining" /></motion.div></div></section>;
}
