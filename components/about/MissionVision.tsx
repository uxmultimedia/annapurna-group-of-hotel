"use client";

import { Compass, Target } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    label: "Our Mission",
    icon: Target,
    text: "Deliver comfortable, reliable and memorable hospitality experiences through exceptional service, thoughtfully managed properties and guest-first values.",
  },
  {
    label: "Our Vision",
    icon: Compass,
    text: "Become one of Central India’s most trusted hospitality brands, recognised for quality, consistency and genuine guest care.",
  },
] as const;

export function MissionVision() {
  return (
    <section aria-label="Our mission and vision" className="relative overflow-hidden bg-[#173c2b] px-6 py-24 sm:px-10 lg:py-32">
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto grid max-w-[1160px] gap-6 lg:grid-cols-2">
        {cards.map(({ label, icon: Icon, text }, index) => (
          <motion.article
            key={label}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
            className="group rounded-[24px] border border-white/12 bg-white/[0.075] p-8 shadow-[0_18px_50px_rgba(0,0,0,.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-[#d1b979]/45 sm:p-11"
          >
            <span className="grid size-16 place-items-center rounded-full border border-[#d1b979]/35 bg-white/8 text-[#d7c38d]">
              <Icon size={28} strokeWidth={1.35} />
            </span>
            <h2 className="mt-8 font-[family-name:var(--font-cormorant)] text-[clamp(2.2rem,4vw,3.3rem)] font-medium text-white">{label}</h2>
            <p className="mt-5 max-w-[480px] text-[14px] leading-7 text-white/70 sm:text-[16px] sm:leading-8">{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
