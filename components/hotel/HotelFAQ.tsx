"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { HotelData } from "@/data/hotels";

export function HotelFAQ({ hotel }: { hotel: HotelData }) {
  const [open,setOpen]=useState<number|null>(0);
  return <section aria-labelledby="faq-title" className="bg-[#f8f3e9] px-6 py-24 sm:px-10 lg:py-32"><div className="mx-auto max-w-[900px]"><div className="text-center"><p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[var(--emerald)]">Good To Know</p><h2 id="faq-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.6rem,5vw,4rem)] font-medium text-[#173c2b]">Frequently Asked Questions</h2></div><div className="mt-12 divide-y divide-[#173c2b]/10 border-y border-[#173c2b]/10">{hotel.faqs.map((faq,index)=>{const expanded=open===index; return <div key={faq.question}><h3><button onClick={()=>setOpen(expanded?null:index)} aria-expanded={expanded} aria-controls={`faq-${index}`} className="flex w-full items-center justify-between gap-5 py-6 text-left font-[family-name:var(--font-cormorant)] text-[22px] font-semibold text-[#173c2b]">{faq.question}<ChevronDown size={18} className={`shrink-0 transition-transform ${expanded?"rotate-180":""}`}/></button></h3><div id={`faq-${index}`} hidden={!expanded} className="pb-6 pr-10 text-[13px] leading-7 text-[#657169]">{faq.answer}</div></div>})}</div></div></section>;
}
