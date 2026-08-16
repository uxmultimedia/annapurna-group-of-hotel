"use client";

import type { LucideIcon } from "lucide-react";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

type Card = {
  title: string;
  value: string;
  icon: LucideIcon;
  href?: string;
};

const cards: Card[] = [
  { title: "Phone", value: "+91 91791 91110", href: "tel:+919179191110", icon: Phone },
  { title: "Email", value: "info@annapurnagroupofhotels.com", href: "mailto:info@annapurnagroupofhotels.com", icon: Mail },
  { title: "Location", value: "Bhopal, Madhya Pradesh", icon: MapPin },
  { title: "Working Hours", value: "Open 24×7", icon: Clock3 },
];

export function ContactCards() {
  return <section id="quick-contact" aria-label="Quick contact options" className="relative z-20 bg-[#f8f3e9] px-6 pb-20 sm:px-10"><div className="mx-auto grid max-w-[1280px] -translate-y-8 gap-4 sm:grid-cols-2 lg:grid-cols-4">{cards.map(({ title, value, icon: Icon, href }, index) => { const content = <><span className="grid size-12 place-items-center rounded-full bg-[#edf3ed] text-[var(--emerald)]"><Icon size={20} /></span><p className="mt-6 text-[9px] font-semibold uppercase tracking-[.18em] text-[#8b7750]">{title}</p><p className="mt-2 break-words font-[family-name:var(--font-cormorant)] text-[22px] font-semibold leading-7 text-[#173c2b]">{value}</p></>; return <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="rounded-[24px] border border-white/60 bg-white/85 p-7 shadow-[0_18px_50px_rgba(23,60,43,.1)] backdrop-blur-xl transition hover:-translate-y-1">{href ? <a href={href} aria-label={`${title}: ${value}`} className="block">{content}</a> : content}</motion.article>; })}</div></section>;
}
