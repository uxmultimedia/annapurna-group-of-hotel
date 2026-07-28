"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function HeroVideo() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.08 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative aspect-video min-h-0 overflow-hidden rounded-[26px] bg-[#dfe6df] shadow-[0_32px_90px_rgba(20,45,34,0.18)] lg:aspect-auto lg:min-h-[640px]"
    >
      {!videoFailed ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero/hero-poster.jpg"
          onError={() => setVideoFailed(true)}
          aria-label="A calm view of the Annapurna Group of Hotels hospitality experience"
          className="absolute inset-0 size-full object-cover"
        >
          <source src="/videos/hero/hero.mp4" type="video/mp4" />
          Your browser does not support the hotel experience video. Annapurna
          Group of Hotels offers premium business and family stays in Bhopal.
        </video>
      ) : (
        <div
          role="img"
          aria-label="Annapurna Group of Hotels hospitality experience"
          className="absolute inset-0 bg-[#dfe6df]"
        />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,32,22,0.14)_0%,transparent_36%,transparent_66%,rgba(8,27,19,0.3)_100%)]"
      />
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white sm:bottom-9 sm:left-9 sm:right-9">
        <div>
          <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-[9px]">
            Annapurna Group of Hotels
          </p>
          <p className="mt-2 font-[family-name:var(--font-cormorant)] text-[22px] font-medium leading-none sm:text-[26px]">
            Thoughtful stays in Bhopal.
          </p>
        </div>
        <span className="hidden size-12 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md sm:grid">
          <ArrowRight aria-hidden="true" size={17} strokeWidth={1.5} />
        </span>
      </div>
    </motion.div>
  );
}
