"use client";

import Link from "next/link";
import { ArrowRight, Menu, MessageCircle, Phone } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HotelsDropdown } from "./HotelsDropdown";
import { MobileMenu } from "./MobileMenu";
import BrandLogo from "@/components/ui/BrandLogo";
import { inquiryPhoneDisplay, inquiryPhoneHref, whatsappChatUrl } from "@/data/contact";

export function Navbar() {
  const pathname = usePathname();
  const darkHero =
    pathname === "/about" ||
    pathname === "/banquet" ||
    pathname === "/contact" ||
    pathname.startsWith("/hotels/");
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const solid =
    scrolled ||
    pathname === "/hotels" ||
    ["/privacy", "/terms", "/sitemap"].includes(pathname);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 18);
  });

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ height: solid ? 76 : 92, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
          solid
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
            <BrandLogo
              priority
              variant={darkHero && !solid ? "light" : "dark"}
              imageClassName={`w-auto object-contain transition-[height] duration-300 ${
                solid ? "h-[44px]" : "h-[52px]"
              }`}
            />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 lg:flex xl:gap-12"
          >
            <NavLink label="About" href="/about" active={pathname === "/about"} light={darkHero && !solid} />
            <HotelsDropdown active={pathname.startsWith("/hotels")} light={darkHero && !solid} />
            <NavLink
              label="Banquets"
              href="/banquet"
              active={pathname === "/banquet"}
              light={darkHero && !solid}
            />
            <NavLink
              label="Contact"
              href="/contact"
              active={pathname === "/contact"}
              light={darkHero && !solid}
            />
          </nav>

          <div className="hidden items-center justify-self-end gap-2 lg:flex xl:gap-4">
            <a
              href={inquiryPhoneHref}
              aria-label={`Call Annapurna Group of Hotels at ${inquiryPhoneDisplay}`}
              className={`group flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.055em] transition-colors hover:text-[#c8ab6b] ${
                darkHero && !solid ? "text-white" : "text-[#264638]"
              }`}
            >
              <span className={`grid size-8 place-items-center rounded-full border transition-colors ${
                darkHero && !solid ? "border-white/25" : "border-[#173c2b]/13"
              }`}>
                <Phone size={14} strokeWidth={1.7} />
              </span>
              <span className="hidden xl:inline">{inquiryPhoneDisplay}</span>
            </a>
            <a
              href={whatsappChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Annapurna Group of Hotels on WhatsApp"
              className="group flex h-11 items-center gap-2 rounded-full bg-[#d66a2c] px-4 text-[11px] font-semibold tracking-[0.08em] text-white shadow-[0_8px_22px_rgba(214,106,44,0.24)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#bd5720] hover:shadow-[0_10px_28px_rgba(214,106,44,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f29a62] focus-visible:ring-offset-2 xl:px-5"
            >
              <MessageCircle aria-hidden="true" size={15} strokeWidth={1.7} />
              Chat Now
            </a>
            <Link
              href="/#booking"
              className="group flex h-11 items-center gap-0 overflow-hidden rounded-full bg-[var(--emerald)] px-4 text-[11px] font-semibold tracking-[0.08em] text-white shadow-[0_8px_22px_rgba(15,104,71,0.2)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[var(--emerald-deep)] hover:shadow-[0_11px_28px_rgba(15,104,71,0.28)] xl:px-5"
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
            className={`col-start-3 row-start-1 grid size-11 justify-self-end place-items-center rounded-full border transition-colors hover:bg-white/10 lg:hidden ${
              darkHero && !solid
                ? "border-white/30 text-white"
                : "border-[#173c2b]/15 text-[#173c2b]"
            }`}
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
  light,
}: {
  label: string;
  href: string;
  active: boolean;
  light: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`group relative flex h-12 items-center px-1 text-[13px] tracking-[0.08em] transition-colors duration-300 hover:text-[#c8ab6b] ${
        active
          ? "font-semibold text-[var(--emerald)]"
          : `font-medium ${light ? "text-white" : "text-[#243d31]"}`
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
