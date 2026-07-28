"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { BackToTop } from "./BackToTop";
import { ContactInfo } from "./ContactInfo";
import { FooterBottom } from "./FooterBottom";
import { FooterBrand } from "./FooterBrand";
import { HotelLinks } from "./HotelLinks";
import { QuickLinks } from "./QuickLinks";

const promises = [
  "Comfortable Stay",
  "Prime Locations",
  "Friendly Hospitality",
  "Modern Amenities",
] as const;

const footerColumns = [FooterBrand, QuickLinks, HotelLinks, ContactInfo] as const;

const columnVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Footer() {
  return (
    <>
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        transition={{ staggerChildren: 0.1 }}
        className="border-t border-[#b69b60]/15 bg-[#1f1f1b] px-6 pb-10 pt-[100px] text-center sm:px-10 md:text-left"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-x-20 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((Column, index) => (
                <motion.div
                  key={index}
                  variants={columnVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Column />
                </motion.div>
              ))}
          </div>

          <motion.div
            variants={columnVariants}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-16 rounded-[22px] border border-white/10 bg-white/[0.035] px-6 py-7 shadow-[0_14px_40px_rgba(0,0,0,0.1)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:px-8"
          >
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              <h2 className="font-[family-name:var(--font-cormorant)] text-[23px] font-medium text-white">
                Why Guests Choose Annapurna
              </h2>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-3 text-left sm:grid-cols-2 lg:grid-cols-4">
                {promises.map((promise) => (
                  <li
                    key={promise}
                    className="flex items-center gap-2 text-[10px] font-medium tracking-[0.035em] text-white/65"
                  >
                    <Check
                      aria-hidden="true"
                      size={14}
                      strokeWidth={1.7}
                      className="text-[#4faf7b]"
                    />
                    {promise}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <FooterBottom />
        </div>
      </motion.footer>
      <BackToTop />
    </>
  );
}
