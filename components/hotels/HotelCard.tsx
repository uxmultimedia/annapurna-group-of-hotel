"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { FeatureChip } from "./FeatureChip";

export type Hotel = {
  name: string;
  slug: string;
  image: string;
  description: string;
  features: readonly [string, string, string];
  offset?: boolean;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <motion.article
      variants={cardVariants}
      tabIndex={0}
      className={`group flex h-fit flex-col overflow-hidden rounded-[24px] border border-[#233e31]/8 bg-white shadow-[0_14px_48px_rgba(29,53,42,0.07)] transition-[transform,border-color,box-shadow] duration-[450ms] ease-out hover:-translate-y-2 hover:border-[var(--emerald)]/35 hover:shadow-[0_26px_65px_rgba(27,61,45,0.14)] focus-visible:-translate-y-2 focus-visible:border-[var(--emerald)]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--emerald)]/30 ${
        hotel.offset ? "lg:mt-10" : ""
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e4e9e4]">
        <SafeImage
          src={hotel.image}
          alt={`${hotel.name} exterior and hospitality setting`}
          fallbackLabel={hotel.name}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08] group-focus-visible:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-[#0c3323]/0 transition-colors duration-[350ms] group-hover:bg-[#0c3323]/22 group-focus-visible:bg-[#0c3323]/22" />
        <span className="absolute inset-x-0 bottom-7 translate-y-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white opacity-0 transition-[opacity,transform] duration-[350ms] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          Explore Hotel
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-[family-name:var(--font-cormorant)] text-[30px] font-medium leading-none tracking-[-0.025em] text-[#183529]">
          {hotel.name}
        </h3>
        <p className="mt-4 line-clamp-2 text-[13px] leading-[1.75] text-[#69716d]">
          {hotel.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {hotel.features.map((feature) => (
            <FeatureChip key={feature}>{feature}</FeatureChip>
          ))}
        </div>

        <Link
          href={`/hotels/${hotel.slug}`}
          aria-label={`Explore ${hotel.name}`}
          className="group/button mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#1d563d]/18 bg-transparent px-5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--emerald)] transition-[background-color,color,border-color] duration-[350ms] hover:border-[var(--emerald)] hover:bg-[var(--emerald)] hover:text-white sm:w-fit sm:justify-start"
        >
          Explore Hotel
          <ArrowRight
            aria-hidden="true"
            size={15}
            strokeWidth={1.6}
            className="transition-transform duration-[350ms] group-hover/button:translate-x-1.5"
          />
        </Link>
      </div>
    </motion.article>
  );
}
