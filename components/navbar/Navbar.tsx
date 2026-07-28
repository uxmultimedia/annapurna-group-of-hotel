"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, Phone } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HotelsDropdown } from "./HotelsDropdown";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 18);
  });

  return (
    <>
      <motion.header
        initial={false}
        animate={{ height: scrolled ? 76 : 92 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled
            ? "border-[#183f2d]/8 bg-[#f8f3e9]/90 shadow-[0_7px_30px_rgba(24,55,41,0.08)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto grid h-full max-w-[1480px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 sm:px-8 lg:px-10 xl:px-14">
          <Link
            href="/"
            aria-label="Annapurna Group of Hotels, home"
            className="justify-self-start rounded-sm"
          >
            <Image
              src="/images/logo/logo.png"
              alt="Annapurna Group of Hotels"
              width={220}
              height={52}
              priority
              className={`w-auto object-contain transition-[height] duration-300 ${
                scrolled ? "h-[44px]" : "h-[52px]"
              }`}
            />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-9 lg:flex xl:gap-11"
          >
            <NavLink label="About" href="/about" active={pathname === "/about"} />
            <HotelsDropdown active={pathname.startsWith("/hotels")} />
            <NavLink
              label="Banquets"
              href="/banquets"
              active={pathname === "/banquets"}
            />
            <NavLink
              label="Contact"
              href="/contact"
              active={pathname === "/contact"}
            />
          </nav>

          <div className="hidden items-center justify-self-end gap-5 lg:flex xl:gap-7">
            <a
              href="tel:+917566500040"
              aria-label="Call Annapurna Group of Hotels at 75665 00040"
              className="group flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.055em] text-[#264638] transition-colors hover:text-[var(--emerald)]"
            >
              <span className="grid size-8 place-items-center rounded-full border border-[#173c2b]/13 transition-colors group-hover:border-[var(--emerald)]/25">
                <Phone size={14} strokeWidth={1.7} />
              </span>
              <span className="hidden xl:inline">75665 00040</span>
            </a>
            <Link
              href="/book"
              className="group flex h-11 items-center gap-0 overflow-hidden rounded-full bg-[var(--emerald)] px-5 text-[11px] font-semibold tracking-[0.08em] text-white shadow-[0_8px_22px_rgba(15,104,71,0.2)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[var(--emerald-deep)] hover:shadow-[0_11px_28px_rgba(15,104,71,0.28)]"
            >
              Book Your Stay
              <span className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:w-4 group-hover:opacity-100">
                <ArrowRight size={15} strokeWidth={1.7} />
              </span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            className="grid size-11 justify-self-end place-items-center rounded-full border border-[#173c2b]/15 text-[#173c2b] transition-colors hover:bg-white/60 lg:hidden"
          >
            <Menu size={21} strokeWidth={1.6} />
          </button>
        </div>
      </motion.header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function NavLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`group relative flex h-12 items-center px-1 text-[13px] tracking-[0.08em] transition-colors duration-300 hover:text-[var(--emerald)] ${
        active ? "font-semibold text-[var(--emerald)]" : "font-medium"
      }`}
    >
      {label}
      <span
        className={`absolute bottom-1.5 left-1 h-px bg-[var(--emerald)] transition-all duration-300 ${
          active ? "w-[calc(100%-0.5rem)]" : "w-0 group-hover:w-[calc(100%-0.5rem)]"
        }`}
      />
    </Link>
  );
}
