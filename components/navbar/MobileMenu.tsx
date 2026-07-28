"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { hotels } from "./HotelsDropdown";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const mobileLinks = [
  ["Banquets", "/banquets"],
  ["Contact", "/contact"],
] as const;

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [hotelsOpen, setHotelsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] overflow-y-auto bg-[#f8f3e9]"
        >
          <motion.div
            initial={{ y: -24 }}
            animate={{ y: 0 }}
            exit={{ y: -18 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex min-h-full w-full max-w-[760px] flex-col px-6 pb-8 pt-5 sm:px-10"
          >
            <div className="flex items-center justify-between border-b border-[#193f2e]/12 pb-5">
              <Link href="/" onClick={onClose} aria-label="Annapurna Group of Hotels, home">
                <Image
                  src="/images/logo/logo.png"
                  alt="Annapurna Group of Hotels"
                  width={204}
                  height={48}
                  className="h-[48px] w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="grid size-11 place-items-center rounded-full border border-[#173c2b]/15 text-[#173c2b] transition-colors hover:bg-white/70"
              >
                <X size={21} strokeWidth={1.6} />
              </button>
            </div>

            <nav aria-label="Mobile primary navigation" className="flex-1 py-8">
              <Link
                href="/about"
                onClick={onClose}
                className="block border-b border-[#193f2e]/10 py-4 font-[family-name:var(--font-cormorant)] text-[clamp(2rem,8vw,3rem)] font-medium leading-none text-[#173c2b]"
              >
                About
              </Link>
              <div className="border-b border-[#193f2e]/10">
                <button
                  type="button"
                  aria-expanded={hotelsOpen}
                  onClick={() => setHotelsOpen((value) => !value)}
                  className="flex w-full items-center justify-between py-4 text-left font-[family-name:var(--font-cormorant)] text-[clamp(2rem,8vw,3rem)] font-medium leading-none text-[#173c2b]"
                >
                  Hotels
                  <ChevronDown
                    size={22}
                    strokeWidth={1.4}
                    className={`transition-transform duration-300 ${hotelsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {hotelsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-1 pb-5 sm:grid-cols-2">
                        {hotels.map(([name]) => (
                          <Link
                            key={name}
                            href={`/hotels/${name.toLowerCase().replaceAll(" ", "-")}`}
                            onClick={onClose}
                            className="flex items-center justify-between rounded-xl bg-white/45 px-4 py-3 text-[12px] font-semibold tracking-[0.04em] text-[#305242]"
                          >
                            {name}
                            <ArrowRight size={14} />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {mobileLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={onClose}
                  className="block border-b border-[#193f2e]/10 py-4 font-[family-name:var(--font-cormorant)] text-[clamp(2rem,8vw,3rem)] font-medium leading-none text-[#173c2b]"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-[#193f2e]/12 pt-6">
              <Link
                href="/book"
                onClick={onClose}
                className="flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[var(--emerald)] px-6 text-[12px] font-semibold tracking-[0.09em] text-white shadow-[0_10px_26px_rgba(15,104,71,0.22)]"
              >
                Book Your Stay <ArrowRight size={15} />
              </Link>
              <div className="mt-5 flex items-center justify-between">
                <a
                  href="tel:+917566500040"
                  className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.05em] text-[#234535]"
                >
                  <Phone size={15} strokeWidth={1.7} /> 75665 00040
                </a>
                <div aria-label="Social links" className="flex items-center gap-2">
                  {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      aria-label={["Instagram", "Facebook", "LinkedIn"][index]}
                      className="grid size-9 place-items-center rounded-full border border-[#173c2b]/15 text-[#234535]"
                    >
                      <Icon size={15} strokeWidth={1.6} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
