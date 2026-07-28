"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type CTAButtonProps = {
  href: string;
  label: string;
  ariaLabel: string;
  external?: boolean;
};

export function CTAButton({
  href,
  label,
  ariaLabel,
  external = false,
}: CTAButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mt-auto pt-6"
    >
      <Link
        href={href}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="group/button flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[var(--emerald)] px-6 text-[10px] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_10px_28px_rgba(6,38,25,0.2)] transition-[transform,background-color,box-shadow] duration-[350ms] hover:-translate-y-0.5 hover:bg-[var(--emerald-deep)] hover:shadow-[0_16px_36px_rgba(6,38,25,0.3)]"
      >
        {label}
        <ArrowRight
          aria-hidden="true"
          size={15}
          strokeWidth={1.6}
          className="transition-transform duration-[350ms] group-hover/button:translate-x-1.5"
        />
      </Link>
    </motion.div>
  );
}
