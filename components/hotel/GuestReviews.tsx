"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { HotelData } from "@/data/hotels";

export function GuestReviews({ hotel }: { hotel: HotelData }) {
  const [active,setActive]=useState(0); const review=hotel.reviews[active];
  return <section aria-labelledby="reviews-title" className="bg-[#173c2b] px-6 py-24 text-white sm:px-10 lg:py-32"><div className="mx-auto max-w-[900px] text-center"><p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[#d4bd80]">Guest Stories</p><h2 id="reviews-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.6rem,5vw,4rem)] font-medium">What our guests remember</h2><div aria-live="polite" className="mt-12 min-h-[280px]"><AnimatePresence mode="wait"><motion.blockquote key={active} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}} className="rounded-[24px] border border-white/10 bg-white/[.06] p-8 backdrop-blur-md sm:p-12"><div className="flex justify-center gap-1 text-[#d4bd80]">{Array.from({length:review.rating}).map((_,i)=><Star key={i} size={15} fill="currentColor"/>)}</div><p className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(1.6rem,3vw,2.3rem)] italic leading-[1.35] text-white/90">“{review.review}”</p><footer className="mt-7 text-[10px] uppercase tracking-[.14em] text-white/55">{review.name} · {review.location}</footer></motion.blockquote></AnimatePresence></div><div className="mt-7 flex justify-center gap-3"><button onClick={()=>setActive((active-1+hotel.reviews.length)%hotel.reviews.length)} aria-label="Previous review" className="grid size-11 place-items-center rounded-full border border-white/20"><ChevronLeft size={18}/></button><button onClick={()=>setActive((active+1)%hotel.reviews.length)} aria-label="Next review" className="grid size-11 place-items-center rounded-full border border-white/20"><ChevronRight size={18}/></button></div></div></section>;
}
