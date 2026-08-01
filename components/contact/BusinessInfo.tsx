"use client";

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Building2, CalendarCheck, Handshake, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const channels = [
  { title: "Reservations", text: "Room guidance and booking support across all six hotels.", cta: "Explore Hotels", href: "/#hotels", icon: CalendarCheck },
  { title: "24×7 Guest Support", text: "Responsive assistance before, during and after your stay.", cta: "Call Support", href: "tel:+919179191110", icon: Headphones },
  { title: "Corporate Bookings", text: "Coordinated stays for teams, projects and regular travel.", cta: "Contact Team", href: "#contact-form", icon: BriefcaseBusiness },
  { title: "Banquet Enquiries", text: "Venue visits, menus and tailored celebration planning.", cta: "View Banquets", href: "/banquet", icon: Building2 },
  { title: "Business Partnerships", text: "Professional conversations for aligned opportunities.", cta: "Start a Conversation", href: "mailto:info@annapurnagroupofhotels.com?subject=Business%20Partnership", icon: Handshake },
] as const;

export function BusinessInfo() {
  return <section aria-labelledby="business-title" className="bg-white px-6 py-24 sm:px-10 lg:py-32"><div className="mx-auto max-w-[1280px]"><div className="max-w-[720px]"><p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[var(--emerald)]">The Right Team, Quickly</p><h2 id="business-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.7rem,5vw,4.2rem)] font-medium leading-[1.02] text-[#173c2b]">How can we assist?</h2></div><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{channels.map(({ title, text, cta, href, icon: Icon }, index) => <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .07 }} className="group rounded-[20px] border border-[#173c2b]/9 bg-[#fcfbf7] p-8 transition hover:-translate-y-1 hover:border-[#b69b60]/35 hover:shadow-[0_18px_42px_rgba(23,60,43,.08)]"><Icon size={24} className="text-[var(--emerald)]"/><h3 className="mt-7 font-[family-name:var(--font-cormorant)] text-[27px] font-semibold text-[#173c2b]">{title}</h3><p className="mt-3 text-[13px] leading-6 text-[#68736c]">{text}</p><Link href={href} className="mt-6 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.12em] text-[var(--emerald)]">{cta}<ArrowRight size={13} className="transition-transform group-hover:translate-x-1"/></Link></motion.article>)}</div></div></section>;
}
