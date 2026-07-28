"use client";

import { BriefcaseBusiness, Building2, HeartHandshake, MapPin, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";

const features = [
  { title: "Prime Locations", text: "Connected addresses close to business and city essentials.", icon: MapPin },
  { title: "Comfortable Rooms", text: "Calm, considered spaces made for restorative stays.", icon: Building2 },
  { title: "Professional Hospitality", text: "Responsive teams who understand thoughtful service.", icon: HeartHandshake },
  { title: "Modern Amenities", text: "The practical comforts today’s travellers genuinely need.", icon: Sparkles },
  { title: "Business Friendly", text: "Reliable stays shaped around productive city visits.", icon: BriefcaseBusiness },
  { title: "Family Friendly", text: "Welcoming spaces for shared journeys and special moments.", icon: Users },
] as const;

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="bg-[#f8f3e9] px-6 py-24 sm:px-10 lg:py-36">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--emerald)]">The Annapurna Difference</p>
          <h2 id="why-title" className="mt-5 max-w-[650px] font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.03] text-[#173c2b]">Why Guests Choose Annapurna</h2>
          <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {features.map(({ title, text, icon: Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
                className="flex gap-4"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-[var(--emerald)] shadow-[0_7px_20px_rgba(23,60,43,.08)]">
                  <Icon size={18} strokeWidth={1.45} />
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-[22px] font-semibold text-[#173c2b]">{title}</h3>
                  <p className="mt-1.5 text-[12px] leading-6 text-[#69736d]">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.035 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#e4e9e4] shadow-[0_28px_70px_rgba(25,54,40,.15)]"
        >
          <SafeImage
            src="/images/about/why-us.webp"
            alt="A welcoming and comfortable Annapurna hotel room"
            fill
            sizes="(max-width: 1023px) 100vw, 44vw"
            className="object-cover"
            fallbackLabel="The Annapurna experience"
          />
        </motion.div>
      </div>
    </section>
  );
}
