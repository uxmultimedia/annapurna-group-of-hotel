"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import type { HotelData } from "@/data/hotels";

const filters = ["All", "Business", "Family", "Events"] as const;

export function HotelSearch({ hotels }: { hotels: HotelData[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    return hotels.filter((hotel) => {
      const matchesText = !term || `${hotel.name} ${hotel.location} ${hotel.shortDescription}`.toLowerCase().includes(term);
      const body = `${hotel.shortDescription} ${hotel.overview.join(" ")}`.toLowerCase();
      const matchesFilter = filter === "All" || (filter === "Business" && body.includes("business")) || (filter === "Family" && body.includes("famil")) || (filter === "Events" && hotel.banquetCapacity);
      return matchesText && matchesFilter;
    });
  }, [filter, hotels, query]);
  const reset = () => { setQuery(""); setFilter("All"); };

  return (
    <section aria-labelledby="hotel-search-title" className="bg-[#f8f3e9] px-6 pb-28 pt-36 sm:px-10 lg:pb-36 lg:pt-44">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[var(--emerald)]">Our Collection</p>
        <h1 id="hotel-search-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(3.4rem,7vw,6.3rem)] font-medium leading-[.95] text-[#173c2b]">Find your Annapurna stay</h1>
        <p className="mt-6 max-w-[690px] text-[14px] leading-7 text-[#647068]">Six thoughtfully managed Bhopal hotels, connected by warm service and a dependable standard of comfort.</p>
        <div className="mt-10 rounded-[22px] border border-[#173c2b]/9 bg-white p-4 shadow-[0_15px_45px_rgba(23,60,43,.07)]">
          <label className="flex h-13 items-center gap-3 rounded-[15px] border border-[#173c2b]/10 px-4"><Search size={17} className="text-[var(--emerald)]"/><span className="sr-only">Search hotels</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by hotel, location or experience" className="min-w-0 flex-1 bg-transparent text-[13px] outline-none"/>{query && <button onClick={() => setQuery("")} aria-label="Clear search" className="grid size-9 place-items-center"><X size={15}/></button>}</label>
          <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter hotels">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={`min-h-11 rounded-full px-5 text-[9px] font-semibold uppercase tracking-[.1em] transition ${filter === item ? "bg-[var(--emerald)] text-white" : "border border-[#173c2b]/10 text-[#536158]"}`}>{item}</button>)}</div>
        </div>
        <p aria-live="polite" className="mt-8 text-[10px] uppercase tracking-[.14em] text-[#738078]">{results.length} {results.length === 1 ? "hotel" : "hotels"} found</p>
        {results.length ? <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{results.map((hotel, index) => <motion.article layout key={hotel.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .05 }} className="group overflow-hidden rounded-[24px] bg-white shadow-[0_14px_45px_rgba(23,60,43,.08)]"><div className="relative aspect-[4/3] bg-[#e4e9e4]"><SafeImage src={`/images/hotels/${hotel.slug}/hero.webp`} alt={hotel.name} fill sizes="(max-width:767px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" fallbackLabel={hotel.name}/></div><div className="p-7"><p className="text-[9px] uppercase tracking-[.14em] text-[#987a40]">{hotel.location}</p><h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-[31px] font-semibold text-[#173c2b]">{hotel.name}</h2><p className="mt-3 line-clamp-2 text-[12px] leading-6 text-[#68736c]">{hotel.shortDescription}</p><Link href={`/hotels/${hotel.slug}`} className="mt-6 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.12em] text-[var(--emerald)]">Explore Hotel <ArrowRight size={14}/></Link></div></motion.article>)}</div> : <div className="mt-7 rounded-[24px] border border-[#173c2b]/10 bg-white p-10 text-center"><h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#173c2b]">No stays match those details.</h2><p className="mt-3 text-[13px] text-[#68736c]">Try a broader search or clear the current filters.</p><button onClick={reset} className="mt-6 h-12 rounded-full bg-[var(--emerald)] px-7 text-[9px] font-semibold uppercase tracking-[.12em] text-white">Reset Filters</button></div>}
      </div>
    </section>
  );
}
