"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import type { HotelData } from "@/data/hotels";

export function RelatedHotels({ hotels }: { hotels: HotelData[] }) {
  return <section aria-labelledby="related-title" className="bg-[#f8f3e9] px-6 py-24 sm:px-10 lg:py-32"><div className="mx-auto max-w-[1280px]"><p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[var(--emerald)]">Continue Exploring</p><h2 id="related-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.6rem,5vw,4rem)] font-medium text-[#173c2b]">Related Hotels</h2><div className="mt-12 grid gap-6 lg:grid-cols-3">{hotels.map((hotel,index)=><motion.article key={hotel.slug} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}} className="group overflow-hidden rounded-[22px] bg-white shadow-[0_13px_42px_rgba(23,60,43,.08)]"><div className="relative aspect-[4/3] bg-[#e4e9e4]"><SafeImage src={`/images/hotels/${hotel.slug}/hero.webp`} alt={hotel.name} fill sizes="(max-width:1023px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" fallbackLabel={hotel.name}/></div><div className="p-7"><h3 className="font-[family-name:var(--font-cormorant)] text-[29px] font-semibold text-[#173c2b]">{hotel.name}</h3><p className="mt-3 line-clamp-2 text-[12px] leading-6 text-[#68736c]">{hotel.shortDescription}</p><Link href={`/hotels/${hotel.slug}`} className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--emerald)]">Explore Hotel <ArrowRight size={14}/></Link></div></motion.article>)}</div></div></section>;
}
