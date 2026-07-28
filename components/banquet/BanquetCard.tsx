"use client";

import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Soup,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { CapacityCard } from "./CapacityCard";
import { EventFeatures } from "./EventFeatures";

export type BanquetVenue = {
  name: string;
  slug: string;
  image: string;
  description: string;
  features: readonly [string, string, string, string];
  capacity: string;
  reverse?: boolean;
};

export function BanquetCard({ venue }: { venue: BanquetVenue }) {
  const direction = venue.reverse ? 42 : -42;

  return (
    <motion.article
      initial={{ opacity: 0, x: direction }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className={`grid grid-cols-1 items-center gap-7 lg:gap-10 ${
        venue.reverse ? "lg:grid-cols-[2fr_3fr]" : "lg:grid-cols-[3fr_2fr]"
      }`}
    >
      <div
        className={`group/image relative order-1 aspect-[16/10] overflow-hidden rounded-[26px] bg-[#e2e8e2] shadow-[0_28px_75px_rgba(25,52,39,0.15)] ${
          venue.reverse ? "lg:order-2" : ""
        }`}
      >
        <SafeImage
          src={venue.image}
          alt={`${venue.name} prepared for an elegant celebration`}
          fallbackLabel={venue.name}
          fill
          sizes="(max-width: 1023px) 100vw, 60vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover/image:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-[#0b3322]/0 transition-colors duration-[350ms] group-hover/image:bg-[#0b3322]/22" />
        <span className="absolute inset-x-0 bottom-8 translate-y-3 text-center text-[10px] font-semibold uppercase tracking-[0.17em] text-white opacity-0 transition-[opacity,transform] duration-[350ms] group-hover/image:translate-y-0 group-hover/image:opacity-100">
          Celebrate With Us
        </span>
      </div>

      <div
        className={`order-2 rounded-[24px] border border-[#234233]/8 bg-white p-7 shadow-[0_18px_55px_rgba(29,53,42,0.075)] sm:p-9 ${
          venue.reverse ? "lg:order-1" : ""
        }`}
      >
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#987a40]">
          Annapurna Celebrations
        </p>
        <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-[35px] font-medium leading-none tracking-[-0.03em] text-[#183529] sm:text-[41px]">
          {venue.name}
        </h3>
        <p className="mt-5 line-clamp-3 text-[13px] leading-[1.8] text-[#68716c]">
          {venue.description}
        </p>

        <EventFeatures features={venue.features} />

        <div className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-3">
          <CapacityCard
            icon={UsersRound}
            label="Capacity"
            value={venue.capacity}
          />
          <CapacityCard
            icon={Soup}
            label="Catering"
            value="Available"
          />
          <CapacityCard
            icon={MapPin}
            label="Location"
            value="Prime Bhopal"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href={`/banquet#enquiry`}
            aria-label={`Book an event at ${venue.name}`}
            className="group/button flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--emerald)] px-6 text-[10px] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_10px_26px_rgba(15,104,71,0.18)] transition-[transform,background-color,box-shadow] duration-[350ms] hover:-translate-y-0.5 hover:bg-[var(--emerald-deep)] hover:shadow-[0_14px_32px_rgba(15,104,71,0.25)] sm:w-fit"
          >
            Book Event
            <ArrowRight
              aria-hidden="true"
              size={15}
              strokeWidth={1.6}
              className="transition-transform duration-[350ms] group-hover/button:translate-x-1.5"
            />
          </Link>
          <Link
            href={`/banquet#${venue.slug}`}
            aria-label={`View details for ${venue.name}`}
            className="group/details flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#1d563d]/18 px-6 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--emerald)] transition-[transform,border-color,background-color] duration-[350ms] hover:-translate-y-0.5 hover:border-[var(--emerald)] hover:bg-[#f2f6f2] sm:w-fit"
          >
            View Details
            <ArrowRight
              aria-hidden="true"
              size={15}
              strokeWidth={1.6}
              className="transition-transform duration-[350ms] group-hover/details:translate-x-1.5"
            />
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}
