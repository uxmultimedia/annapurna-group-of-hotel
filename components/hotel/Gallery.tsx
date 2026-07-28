"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import type { HotelData } from "@/data/hotels";

const labels = ["Lobby", "Rooms", "Restaurant", "Exterior", "Reception", "Conference", "Banquet", "Amenities"];

export function Gallery({ hotel }: { hotel: HotelData }) {
  const [active, setActive] = useState<number | null>(null);
  const images = labels.map((label) => ({ label, src: `/images/hotels/${hotel.slug}/gallery/${label.toLowerCase()}.webp` }));
  useEffect(() => {
    if (active === null) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((value) => value === null ? 0 : (value + 1) % images.length);
      if (event.key === "ArrowLeft") setActive((value) => value === null ? 0 : (value - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handler); };
  }, [active, images.length]);
  return (
    <section aria-labelledby="gallery-title" className="bg-[#f8f3e9] px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[var(--emerald)]">A Closer Look</p>
        <h2 id="gallery-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.6rem,5vw,4rem)] font-medium text-[#173c2b]">Inside {hotel.name}</h2>
        <div className="mt-12 grid auto-rows-[210px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.button key={image.label} type="button" onClick={() => setActive(index)} aria-label={`Open ${image.label} image`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: index * .05 }} className={`group relative overflow-hidden rounded-[20px] bg-[#e3e9e4] text-left ${index === 0 || index === 5 ? "sm:row-span-2" : ""} ${index === 2 ? "lg:col-span-2" : ""}`}>
              <SafeImage src={image.src} alt={`${image.label} at ${hotel.name}`} fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" fallbackLabel={image.label} />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-5 pb-4 pt-12 text-[10px] font-semibold uppercase tracking-[.15em] text-white">{image.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active !== null && (
          <motion.div role="dialog" aria-modal="true" aria-label={`${images[active].label} gallery image`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[120] grid place-items-center bg-black/90 p-5">
            <div className="relative h-[80vh] w-full max-w-[1100px]">
              <SafeImage src={images[active].src} alt={`${images[active].label} at ${hotel.name}`} fill sizes="100vw" className="object-contain" fallbackLabel={images[active].label} fallbackClassName="bg-[#173c2b] text-white" />
            </div>
            <button autoFocus onClick={() => setActive(null)} aria-label="Close gallery" className="absolute right-5 top-5 grid size-12 place-items-center rounded-full border border-white/25 text-white"><X /></button>
            <button onClick={() => setActive((active - 1 + images.length) % images.length)} aria-label="Previous image" className="absolute left-4 grid size-12 place-items-center rounded-full bg-white/10 text-white"><ChevronLeft /></button>
            <button onClick={() => setActive((active + 1) % images.length)} aria-label="Next image" className="absolute right-4 grid size-12 place-items-center rounded-full bg-white/10 text-white"><ChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
