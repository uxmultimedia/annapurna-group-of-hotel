"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const hotels = [
  ["Hotel Arch Manor", "Refined stays in the heart of Bhopal."],
  ["Hotel Mohit Regency", "Contemporary comfort for modern travellers."],
  ["Hotel Kamla Regency", "Warm hospitality with effortless convenience."],
  ["Hotel Divine Casa", "An intimate address with elevated service."],
  ["Hotel CT Palace", "Business-ready stays with a welcoming spirit."],
  ["Hotel Smriti Star", "Thoughtful comfort, moments from the city."],
] as const;

type HotelsDropdownProps = {
  active?: boolean;
};

export function HotelsDropdown({ active = false }: HotelsDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          event.currentTarget.querySelector("button")?.focus();
        }
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        className={`group relative flex h-12 items-center gap-1.5 px-1 text-[13px] tracking-[0.08em] transition-colors duration-300 hover:text-[var(--emerald)] ${
          active ? "font-semibold text-[var(--emerald)]" : "font-medium"
        }`}
      >
        Hotels
        <ChevronDown
          aria-hidden="true"
          size={14}
          strokeWidth={1.7}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
        <span
          className={`absolute bottom-1.5 left-1 h-px bg-[var(--emerald)] transition-all duration-300 ${
            active ? "w-[calc(100%-0.5rem)]" : "w-0 group-hover:w-[calc(100%-0.5rem)]"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            aria-label="Our hotels"
            initial={{ opacity: 0, y: 10, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full w-[610px] -translate-x-1/2 pt-3"
          >
            <div className="rounded-[22px] border border-[#1c503a]/10 bg-[#fffdf8]/98 p-3 shadow-[0_24px_70px_rgba(21,48,36,0.16)] backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-1">
                {hotels.map(([name, description]) => (
                  <Link
                    key={name}
                    role="menuitem"
                    href={`/hotels/${name.toLowerCase().replaceAll(" ", "-")}`}
                    onClick={() => setOpen(false)}
                    className="group/item flex min-h-[86px] items-center justify-between rounded-2xl px-4 py-3 transition-colors duration-200 hover:bg-[#edf3ed] focus-visible:bg-[#edf3ed]"
                  >
                    <span>
                      <span className="block font-[family-name:var(--font-cormorant)] text-[19px] font-semibold tracking-[-0.01em] text-[#163d2c]">
                        {name}
                      </span>
                      <span className="mt-1 block text-[10.5px] leading-4 text-[#66736c]">
                        {description}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      size={16}
                      strokeWidth={1.5}
                      className="ml-3 shrink-0 text-[var(--emerald)] transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
