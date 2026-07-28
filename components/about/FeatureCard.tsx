"use client";

import type { LucideIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const featureVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.article
      variants={featureVariants}
      className="group flex gap-4 rounded-[20px] border border-[#233f32]/8 bg-[#fcfbf8] p-5 transition-[transform,background-color,border-color,box-shadow] duration-[350ms] hover:-translate-y-1 hover:border-[var(--emerald)]/20 hover:bg-white hover:shadow-[0_12px_32px_rgba(27,55,42,0.07)]"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#e9f0ea] text-[var(--emerald)] transition-colors duration-[350ms] group-hover:bg-[#dce9df]">
        <Icon aria-hidden="true" size={18} strokeWidth={1.5} />
      </span>
      <div>
        <h3 className="font-[family-name:var(--font-cormorant)] text-[21px] font-semibold leading-none text-[#1b382b]">
          {title}
        </h3>
        <p className="mt-2 text-[12px] leading-[1.7] text-[#69726d]">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
