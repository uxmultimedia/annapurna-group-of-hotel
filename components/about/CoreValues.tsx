"use client";

import { BadgeCheck, HeartHandshake, Shield, Sparkles, SprayCan, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { title: "Guest First", text: "Every decision begins with the comfort and confidence of our guests.", icon: HeartHandshake },
  { title: "Integrity", text: "Clear communication and dependable service shape every relationship.", icon: Shield },
  { title: "Quality", text: "Consistent standards guide each room, meal and guest interaction.", icon: BadgeCheck },
  { title: "Cleanliness", text: "Careful routines create spaces that feel fresh, calm and reassuring.", icon: SprayCan },
  { title: "Professional Service", text: "Attentive teams respond with warmth, discretion and capability.", icon: Sparkles },
  { title: "Continuous Improvement", text: "We listen, learn and refine the experience with every stay.", icon: TrendingUp },
] as const;

export function CoreValues() {
  return (
    <section aria-labelledby="values-title" className="bg-white px-6 py-24 sm:px-10 lg:py-36">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--emerald)]">What Guides Us</p>
          <h2 id="values-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,5vw,4rem)] font-medium text-[#173c2b]">Our Values</h2>
          <p className="mt-5 text-[14px] leading-7 text-[#667168]">Quiet principles that keep the experience consistent, personal and worthy of our guests’ trust.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map(({ title, text, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.48, delay: index * 0.08, ease: "easeOut" }}
              className="group rounded-[20px] border border-[#173c2b]/9 bg-[#fcfbf7] p-8 shadow-[0_10px_30px_rgba(23,60,43,.05)] transition duration-300 hover:-translate-y-1 hover:border-[#0f6847]/25 hover:shadow-[0_18px_40px_rgba(23,60,43,.09)]"
            >
              <Icon size={25} strokeWidth={1.4} className="text-[var(--emerald)] transition-transform duration-300 group-hover:scale-105" />
              <h3 className="mt-7 font-[family-name:var(--font-cormorant)] text-[27px] font-semibold text-[#173c2b]">{title}</h3>
              <p className="mt-3 text-[13px] leading-6 text-[#667168]">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
