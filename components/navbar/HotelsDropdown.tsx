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
  light?: boolean;
};

export function HotelsDropdown({ active = false, light = false }: HotelsDropdownProps) {
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
        className={`group relative flex h-12 items-center gap-1.5 px-1 text-[13px] tracking-[0.08em] transition-colors duration-300 hover:text-[#c8ab6b] ${
          active
            ? "font-semibold text-[var(--emerald)]"
            : `font-medium ${light ? "text-white" : "text-[#243d31]"}`
        }`}
      >
        Hotels
        <ChevronDown
          aria-hidden="true"
          size={14}
          strokeWidth={1.7}
          className={`transition-opacity duration-300 ${open ? "opacity-50" : "opacity-100"}`}
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
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-full w-[850px] -translate-x-1/2 pt-3"
          >
            <div className="rounded-[24px] border border-[#1c503a]/10 bg-[#fffdf8]/98 p-4 shadow-[0_28px_80px_rgba(21,48,36,0.16)] backdrop-blur-xl">
              <div className="mb-3 flex items-center justify-between px-2 pb-3">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#987a40]">
                    Our collection
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-cormorant)] text-[22px] font-medium text-[#183a2b]">
                    Six distinct stays. One standard of care.
                  </p>
                </div>
                <Link href="/hotels" className="text-[10px] font-semibold uppercase tracking-[0.11em] text-[var(--emerald)]">
                  View all hotels
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {hotels.map(([name, description], index) => (
                  <Link
                    key={name}
                    role="menuitem"
                    href={`/hotels/${name.toLowerCase().replaceAll(" ", "-")}`}
                    onClick={() => setOpen(false)}
                    className="group/item grid min-h-[116px] grid-cols-[86px_1fr_auto] items-center gap-3 rounded-[18px] border border-transparent p-2.5 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#1b5b40]/8 hover:bg-[#edf3ed] focus-visible:bg-[#edf3ed]"
                  >
                    <span
                      aria-hidden="true"
                      className="relative grid h-[88px] place-items-center overflow-hidden rounded-[14px] bg-[#dfe9e1] font-[family-name:var(--font-cormorant)] text-[28px] font-medium text-[#698074]"
                    >
                      {String(index + 1).padStart(2, "0")}
                      <span className="absolute bottom-0 right-3 h-8 w-px bg-[#b69b60]/60" />
                    </span>
                    <span>
                      <span className="block font-[family-name:var(--font-cormorant)] text-[17px] font-semibold leading-5 tracking-[-0.01em] text-[#163d2c]">
                        {name}
                      </span>
                      <span className="mt-1.5 block text-[9.5px] leading-[1.5] text-[#66736c]">
                        {description}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      size={16}
                      strokeWidth={1.5}
                      className="shrink-0 text-[var(--emerald)] transition-transform duration-300 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5"
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
