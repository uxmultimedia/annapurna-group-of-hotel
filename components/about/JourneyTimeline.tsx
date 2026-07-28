"use client";

import { Building2, Hotel, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
  { year: "2018", title: "Company Founded", description: "A thoughtful hospitality vision takes shape in Bhopal.", icon: Building2 },
  { year: "2020", title: "Expansion", description: "Our reach grows while our standards remain personal.", icon: TrendingUp },
  { year: "2022", title: "Multiple Properties", description: "A wider collection begins welcoming business and family guests.", icon: Hotel },
  { year: "2024", title: "Stronger Standards", description: "Shared service and cleanliness practices unite every property.", icon: ShieldCheck },
  { year: "Today", title: "A Trusted Brand", description: "Six hotels, connected by one sincere approach to guest care.", icon: Sparkles },
] as const;

export function JourneyTimeline() {
  return (
    <section aria-labelledby="journey-title" className="bg-[#f8f3e9] px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--emerald)]">Since 2018</p>
          <h2 id="journey-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,5vw,4rem)] font-medium text-[#173c2b]">Our Journey</h2>
        </div>
        <div className="relative mt-16 grid gap-7 lg:grid-cols-5 lg:gap-4">
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-[#b69b60]/35 lg:block" />
          {milestones.map(({ year, title, description, icon: Icon }, index) => (
            <motion.article
              key={year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="relative rounded-[20px] border border-[#173c2b]/10 bg-white p-7 shadow-[0_12px_35px_rgba(27,53,41,.06)] lg:border-0 lg:bg-transparent lg:p-0 lg:text-center lg:shadow-none"
            >
              <span className="relative z-10 inline-grid size-14 place-items-center rounded-full border border-[#b69b60]/35 bg-white text-[var(--emerald)] shadow-[0_8px_25px_rgba(27,53,41,.08)]">
                <Icon size={20} strokeWidth={1.45} />
              </span>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#b08e4f]">{year}</p>
              <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#173c2b]">{title}</h3>
              <p className="mt-3 text-[12px] leading-6 text-[#647068]">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
