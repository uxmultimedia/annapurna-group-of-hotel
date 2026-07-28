"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const trustPoints = [
  { label: "6 Premium Hotels", icon: Building2 },
  { label: "Since 2018", icon: CalendarDays },
  { label: "Prime Locations", icon: MapPin },
  { label: "Business & Family Stay", icon: BriefcaseBusiness },
] as const;

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen overflow-hidden bg-[var(--ivory)]"
    >
      <div className="mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 gap-5 px-6 pb-6 pt-[104px] sm:px-10 sm:pb-10 lg:grid-cols-[41%_59%] lg:gap-7 lg:px-10 lg:pb-8 lg:pt-[112px] xl:px-[60px]"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.09, delayChildren: 0.08 }}
          className="flex flex-col justify-center py-12 lg:py-10 lg:pr-3 xl:pr-8"
        >
          <motion.div
            variants={reveal}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#b69b60]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#785f2d]">
              Since 2018 · Bhopal
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={reveal}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-[650px] font-[family-name:var(--font-cormorant)] text-[clamp(3.5rem,6.1vw,6.35rem)] font-medium leading-[0.88] tracking-[-0.048em] text-[#17241e]"
          >
            Experience
            <span className="mt-2 block italic text-[var(--emerald)]">Comfort.</span>
            <span className="mt-3 block">Experience</span>
            <span className="mt-2 block italic text-[#997a3c]">Hospitality.</span>
          </motion.h1>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-8 max-w-[525px] text-[16px] leading-[1.8] text-[#59625d] xl:text-[17px]"
          >
            Across six hotels in Bhopal, we welcome business travellers and
            families with the same simple promise: attentive hospitality,
            modern comfort, and a stay that feels genuinely considered.
          </motion.p>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-9 flex flex-wrap gap-4 sm:gap-5"
          >
            <Link
              href="/book"
              className="group flex h-[54px] items-center gap-3 rounded-full bg-[var(--emerald)] px-7 text-[11px] font-semibold uppercase tracking-[0.11em] text-white shadow-[0_12px_30px_rgba(15,104,71,0.2)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[var(--emerald-deep)] hover:shadow-[0_16px_34px_rgba(15,104,71,0.25)]"
            >
              Book Your Stay
              <ArrowRight
                aria-hidden="true"
                size={16}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/hotels"
              className="group flex h-[54px] items-center gap-3 rounded-full border border-[#21392e]/14 bg-white px-7 text-[11px] font-semibold uppercase tracking-[0.11em] text-[#234033] shadow-[0_8px_24px_rgba(25,53,40,0.05)] transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[var(--emerald)]/35 hover:bg-[#fffefb]"
            >
              Explore Hotels
              <ArrowRight
                aria-hidden="true"
                size={16}
                strokeWidth={1.6}
                className="text-[var(--emerald)] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-12 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-[#243e32]/10 pt-6"
          >
            {trustPoints.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon
                  aria-hidden="true"
                  size={15}
                  strokeWidth={1.45}
                  className="shrink-0 text-[var(--emerald)]"
                />
                <span className="text-[9.5px] font-semibold uppercase leading-4 tracking-[0.075em] text-[#58645e]">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="relative min-h-[520px] overflow-hidden rounded-[24px] bg-[#dfe6df] shadow-[0_30px_80px_rgba(20,45,34,0.16)] lg:min-h-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Annapurna Group of Hotels hospitality experience"
            className="absolute inset-0 size-full object-cover"
          >
            <source src="/videos/hero/hero.mp4" type="video/mp4" />
          </video>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,32,22,0.16)_0%,transparent_32%,transparent_65%,rgba(8,27,19,0.3)_100%)]"
          />
          <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white sm:bottom-9 sm:left-9 sm:right-9">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Annapurna Group of Hotels
              </p>
              <p className="mt-2 font-[family-name:var(--font-cormorant)] text-[26px] font-medium leading-none">
                Thoughtful stays in Bhopal.
              </p>
            </div>
            <span className="hidden size-12 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md sm:grid">
              <ArrowRight size={17} strokeWidth={1.5} />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
