"use client";

import {
  BedDouble,
  HeartHandshake,
  MapPin,
  Wifi,
} from "lucide-react";
import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { AboutCTA } from "./AboutCTA";
import { AboutStats } from "./AboutStats";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: BedDouble,
    title: "Comfortable Stay",
    description: "Thoughtfully designed rooms for relaxing stays.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Stay close to business districts and city attractions.",
  },
  {
    icon: HeartHandshake,
    title: "Warm Hospitality",
    description: "Friendly staff and personalised service.",
  },
  {
    icon: Wifi,
    title: "Modern Amenities",
    description: "WiFi, parking, conference facilities and more.",
  },
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
};

export function AboutPreview() {
  return (
    <section
      id="about"
      aria-labelledby="about-preview-heading"
      className="relative overflow-hidden bg-white px-6 py-[110px] sm:px-10 lg:py-[140px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-[58%] opacity-[0.035] [background-image:repeating-linear-gradient(90deg,#0f6847_0,#0f6847_1px,transparent_1px,transparent_52px)]"
      />

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 lg:grid-cols-[45%_55%] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[28px] bg-[#e5e9e5] shadow-[0_30px_80px_rgba(26,52,40,0.15)] lg:mx-0"
        >
          <SafeImage
            src="/images/about/about-preview.webp"
            alt="A warm and comfortable guest experience at Annapurna Group of Hotels"
            fallbackLabel="Annapurna hospitality"
            fill
            sizes="(max-width: 1023px) 100vw, 45vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,transparent_65%,rgba(12,38,27,0.18)_100%)]"
          />
        </motion.div>

        <div>
          <motion.p
            {...fadeUp}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--emerald)] sm:tracking-[0.4em]"
          >
            About Annapurna
          </motion.p>

          <motion.h2
            id="about-preview-heading"
            {...fadeUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="mt-6 max-w-[690px] font-[family-name:var(--font-cormorant)] text-[34px] font-medium leading-[1.03] tracking-[-0.035em] text-[var(--charcoal)] sm:text-[46px] lg:text-[56px]"
          >
            Creating Comfortable Stays{" "}
            <span className="text-[var(--emerald)]">Since 2018</span>
          </motion.h2>

          <motion.div
            {...fadeUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
            className="mt-7 max-w-[700px] space-y-5 text-[15px] leading-[1.9] text-[#626b66] sm:text-[16px]"
          >
            <p>
              Annapurna Group of Hotels is one of Bhopal&apos;s trusted
              hospitality groups, bringing together six thoughtfully managed
              hotels for business travellers, families and leisure guests.
            </p>
            <p>
              We focus on what makes a stay feel genuinely comfortable:
              cleanliness, thoughtful service, strategic locations and modern
              amenities, supported by a team that takes the time to understand
              each guest.
            </p>
          </motion.div>

          <AboutStats />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.08 }}
            className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </motion.div>

          <motion.div
            {...fadeUp}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <AboutCTA />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
