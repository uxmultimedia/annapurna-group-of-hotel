"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { banquetFaqs } from "@/data/banquets";

export function BanquetFAQ(){const[open,setOpen]=useState<number|null>(0);return <section aria-labelledby="banquet-faq-title" className="bg-[#f8f3e9] px-6 py-24 sm:px-10 lg:py-32"><div className="mx-auto max-w-[900px]"><div className="text-center"><p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[var(--emerald)]">Planning Notes</p><h2 id="banquet-faq-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.7rem,5vw,4.2rem)] font-medium text-[#173c2b]">Frequently Asked Questions</h2></div><div className="mt-12 divide-y divide-[#173c2b]/10 border-y border-[#173c2b]/10">{banquetFaqs.map((faq,i)=>{const expanded=open===i;return <div key={faq.question}><h3><button onClick={()=>setOpen(expanded?null:i)} aria-expanded={expanded} aria-controls={`banquet-faq-${i}`} className="flex w-full justify-between gap-5 py-6 text-left font-[family-name:var(--font-cormorant)] text-[22px] font-semibold text-[#173c2b]">{faq.question}<ChevronDown size={18} className={`shrink-0 transition-transform ${expanded?"rotate-180":""}`}/></button></h3><div id={`banquet-faq-${i}`} hidden={!expanded} className="pb-6 pr-10 text-[13px] leading-7 text-[#647068]">{faq.answer}</div></div>})}</div></div></section>}
