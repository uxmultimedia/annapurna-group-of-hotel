"use client";

import type { LucideIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { CTAButton } from "./CTAButtons";

export type BookingOption = {
  title: string;
  detail: string;
  icon: LucideIcon;
  href: string;
  buttonLabel: string;
  ariaLabel: string;
  external?: boolean;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function BookingCard({
  option,
  centered = false,
}: {
  option: BookingOption;
  centered?: boolean;
}) {
  const Icon = option.icon;

  return (
    <motion.article
      variants={cardVariants}
      tabIndex={0}
      className={`group flex min-h-[245px] w-full flex-col rounded-[24px] border border-white/15 bg-white/[0.12] p-6 text-center shadow-[0_16px_50px_rgba(0,0,0,0.12)] backdrop-blur-[18px] transition-[transform,border-color,box-shadow,background-color] duration-[350ms] hover:-translate-y-1.5 hover:border-[#64b78c]/70 hover:bg-white/[0.15] hover:shadow-[0_24px_60px_rgba(0,0,0,0.2)] focus-visible:-translate-y-1.5 focus-visible:border-[#64b78c]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/45 ${
        centered
          ? "md:col-span-2 md:max-w-[calc(50%-0.5rem)] md:justify-self-center lg:col-span-1 lg:max-w-none"
          : ""
      }`}
    >
      <span className="mx-auto grid size-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition-transform duration-[350ms] group-hover:-translate-y-1">
        <Icon aria-hidden="true" size={19} strokeWidth={1.5} />
      </span>
      <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-[27px] font-medium leading-none text-white">
        {option.title}
      </h3>
      {option.href.startsWith("tel:") ? (
        <a
          href={option.href}
          className="mt-3 text-[12px] font-medium tracking-[0.06em] text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          {option.detail}
        </a>
      ) : (
        <p className="mt-3 text-[12px] leading-5 text-white/75">
          {option.detail}
        </p>
      )}
      <CTAButton
        href={option.href}
        label={option.buttonLabel}
        ariaLabel={option.ariaLabel}
        external={option.external}
      />
    </motion.article>
  );
}
