"use client";

import { HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export function TrustMessage() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
      className="mt-9 flex items-center justify-center gap-2 text-[10px] font-medium tracking-[0.07em] text-white/80"
    >
      <HeartHandshake aria-hidden="true" size={15} strokeWidth={1.45} />
      Serving Guests with Care &amp; Comfort Since 2018
    </motion.p>
  );
}
