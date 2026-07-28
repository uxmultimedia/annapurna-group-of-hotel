"use client";

import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";

export function OurStory() {
  return (
    <section id="our-story" aria-labelledby="story-title" className="bg-white px-6 py-24 sm:px-10 lg:py-36">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 1.035 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#e6ece7] shadow-[0_28px_75px_rgba(26,55,42,.15)]"
        >
          <SafeImage
            src="/images/about/story.webp"
            alt="A warm hospitality moment at Annapurna Group of Hotels"
            fill
            sizes="(max-width: 1023px) 100vw, 46vw"
            className="object-cover"
            fallbackLabel="Our hospitality story"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--emerald)]">
            The Annapurna Story
          </p>
          <h2 id="story-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.02] text-[#173c2b]">
            Our Story
          </h2>
          <div className="mt-8 space-y-6 text-[15px] leading-8 text-[#536158] sm:text-[17px]">
            <p>
              Annapurna Group of Hotels began in 2018 with a grounded idea: to
              make hospitality in Bhopal feel more considered. From the start,
              our attention has been on the details guests notice most—clean,
              comfortable rooms, a reassuring welcome and people who respond
              with sincerity.
            </p>
            <p>
              As the group has grown to six hotels, that guest-first philosophy
              has remained unchanged. Each property is managed with the same
              discipline around cleanliness, service and consistent quality,
              while retaining a character suited to its location and the
              travellers it welcomes.
            </p>
          </div>
          <div className="mt-10 h-px w-24 bg-[#b69b60]" />
          <p className="mt-5 font-[family-name:var(--font-cormorant)] text-2xl italic text-[#3e5247]">
            Comfort, delivered with care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
