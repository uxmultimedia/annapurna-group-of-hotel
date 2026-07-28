"use client";

import { BellRing, DoorOpen, HeartHandshake, Luggage } from "lucide-react";
import { motion } from "framer-motion";

const stages = [
  { title: "Arrival", text: "A warm welcome and an effortless beginning.", icon: DoorOpen },
  { title: "Stay", text: "Clean comfort, thoughtful details and quiet ease.", icon: Luggage },
  { title: "Support", text: "Attentive help whenever the moment calls for it.", icon: BellRing },
  { title: "Departure", text: "A sincere farewell and a reason to return.", icon: HeartHandshake },
] as const;

export function HospitalityExperience() {
  return (
    <section aria-labelledby="experience-title" className="overflow-hidden bg-[#f3eee3] px-6 py-24 sm:px-10 lg:py-36">
      <div className="mx-auto max-w-[1180px] text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--emerald)]">The Guest Experience</p>
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          id="experience-title"
          className="mx-auto mt-7 max-w-[970px] font-[family-name:var(--font-cormorant)] text-[clamp(2.4rem,5.4vw,4.7rem)] font-medium leading-[1.08] text-[#173c2b]"
        >
          “True hospitality begins long before check-in and continues long after check-out.”
        </motion.blockquote>
        <p className="mx-auto mt-7 max-w-[720px] text-[14px] leading-7 text-[#647068] sm:text-[16px]">
          We think of a stay as a sequence of human moments. Each one should
          feel clear, comfortable and cared for—from the first welcome to the
          final goodbye.
        </p>
        <div className="relative mt-16 grid gap-5 md:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-[#b69b60]/35 md:block" />
          {stages.map(({ title, text, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
              className="relative rounded-[20px] border border-[#173c2b]/9 bg-white/65 p-7 backdrop-blur-sm md:border-0 md:bg-transparent md:p-3"
            >
              <span className="relative z-10 mx-auto grid size-16 place-items-center rounded-full border border-[#b69b60]/35 bg-white text-[var(--emerald)] shadow-[0_8px_25px_rgba(23,60,43,.08)]">
                <Icon size={21} strokeWidth={1.4} />
              </span>
              <h3 className="mt-6 font-[family-name:var(--font-cormorant)] text-[25px] font-semibold text-[#173c2b]">{title}</h3>
              <p className="mt-2 text-[12px] leading-6 text-[#6b756e]">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
