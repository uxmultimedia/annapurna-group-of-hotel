"use client";

import { BriefcaseBusiness, Bus, Landmark, MapPin, Plane, ShoppingBag, Train } from "lucide-react";
import { motion } from "framer-motion";
import type { HotelData } from "@/data/hotels";

const placeIcons = { rail: Train, airport: Plane, bus: Bus, attraction: Landmark, shopping: ShoppingBag, business: BriefcaseBusiness } as const;
export function NearbyPlaces({ hotel }: { hotel: HotelData }) {
  return <section aria-labelledby="nearby-title" className="bg-white px-6 py-24 sm:px-10 lg:py-32"><div className="mx-auto max-w-[1280px]"><div className="text-center"><MapPin className="mx-auto text-[var(--emerald)]" size={24}/><h2 id="nearby-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.6rem,5vw,4rem)] font-medium text-[#173c2b]">Connected to Bhopal</h2><p className="mx-auto mt-4 max-w-[630px] text-[14px] leading-7 text-[#67726b]">Convenient access to transport, business districts, shopping and the city’s most familiar landmarks.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{hotel.nearby.map((place,index)=>{const Icon=placeIcons[place.type as keyof typeof placeIcons]??MapPin; return <motion.article key={place.name} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.07}} className="rounded-[20px] border border-[#173c2b]/9 bg-[#fcfbf7] p-6"><Icon size={20} className="text-[var(--emerald)]"/><h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#173c2b]">{place.name}</h3><div className="mt-4 flex gap-4 text-[10px] uppercase tracking-[.1em] text-[#707b74]"><span>{place.distance}</span><span>·</span><span>{place.time}</span></div></motion.article>})}</div></div></section>;
}
