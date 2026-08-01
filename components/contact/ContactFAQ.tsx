"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  ["How can I make a booking?", "Choose a hotel from our collection and use its booking options, or call our reservations team for personal assistance."],
  ["Can I reserve through WhatsApp?", "Yes. Message us on WhatsApp at +91 91791 91110 and our team will help confirm availability and next steps."],
  ["Do you organise corporate stays?", "Yes. We coordinate individual and group business stays, including recurring requirements and extended visits."],
  ["Can I book a banquet?", "Yes. Visit our Banquet page, request a venue visit or contact the events team to discuss your date and guest count."],
  ["How quickly will my enquiry be answered?", "We aim to respond as promptly as possible. Urgent same-day requests are best made by phone or WhatsApp."],
  ["Do you provide parking?", "Parking is available at our properties and event venues, subject to availability and the requirements of your gathering."],
] as const;

export function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <section aria-labelledby="contact-faq-title" className="bg-[#f8f3e9] px-6 py-24 sm:px-10 lg:py-32"><div className="mx-auto max-w-[900px]"><div className="text-center"><p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[var(--emerald)]">Before You Contact Us</p><h2 id="contact-faq-title" className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.7rem,5vw,4.2rem)] font-medium text-[#173c2b]">Frequently Asked Questions</h2></div><div className="mt-12 divide-y divide-[#173c2b]/10 border-y border-[#173c2b]/10">{faqs.map(([question, answer], index) => { const expanded = open === index; return <div key={question}><h3><button onClick={() => setOpen(expanded ? null : index)} aria-expanded={expanded} aria-controls={`contact-faq-${index}`} className="flex w-full justify-between gap-5 py-6 text-left font-[family-name:var(--font-cormorant)] text-[22px] font-semibold text-[#173c2b]">{question}<ChevronDown size={18} className={`shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}/></button></h3><div id={`contact-faq-${index}`} hidden={!expanded} className="pb-6 pr-10 text-[13px] leading-7 text-[#647068]">{answer}</div></div>; })}</div></div></section>;
}
