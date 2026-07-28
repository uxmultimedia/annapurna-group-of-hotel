"use client";

import {
  BedDouble,
  Building2,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const trustPoints = [
  { label: "6 Premium Hotels", icon: Building2 },
  { label: "Since 2018", icon: CalendarDays },
  { label: "Prime Locations", icon: MapPin },
  { label: "Business & Family Stay", icon: BedDouble },
] as const;

export function TrustStrip() {
  return (
    <div className="mt-12 grid grid-cols-2 border-y border-[#243e32]/10 py-5 lg:grid-cols-4">
      {trustPoints.map(({ label, icon: Icon }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.28 + index * 0.08,
            ease: "easeOut",
          }}
          className={`flex min-h-11 items-center gap-2.5 px-3 first:pl-0 lg:min-h-0 lg:justify-center lg:border-l lg:border-[#243e32]/10 lg:first:border-l-0 lg:first:justify-start ${
            index > 1 ? "mt-3 border-t border-[#243e32]/10 pt-3 lg:mt-0 lg:border-t-0 lg:pt-0" : ""
          }`}
        >
          <Icon
            aria-hidden="true"
            size={15}
            strokeWidth={1.4}
            className="shrink-0 text-[#52645b]"
          />
          <span className="text-[9px] font-semibold uppercase leading-4 tracking-[0.065em] text-[#58645e]">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
