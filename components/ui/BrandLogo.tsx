"use client";

import { useState } from "react";

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  variant?: "dark" | "light";
}

const LOGO_SRC = "/images/logo/annpurna-logo-transparent.png";

export default function BrandLogo({
  className = "",
  imageClassName = "h-[52px] w-auto",
  priority = false,
  variant = "dark",
}: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`inline-flex flex-col leading-none ${variant === "light" ? "text-white" : "text-[#18382b]"} ${className}`}
        aria-label="Annapurna Group of Hotels"
      >
        <span className="font-serif text-2xl tracking-[0.03em]">Annapurna</span>
        <span className="mt-1 text-[8px] font-semibold tracking-[0.25em] opacity-75">
          GROUP OF HOTELS
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex ${className}`}>
      <img
        src={LOGO_SRC}
        alt="Annapurna Group of Hotels"
        className={`object-contain ${imageClassName}`}
        onError={() => setFailed(true)}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </span>
  );
}
