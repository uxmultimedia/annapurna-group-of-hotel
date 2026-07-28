"use client";

import { motion } from "framer-motion";
import { HotelCard, type Hotel } from "./HotelCard";

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.12,
    },
  },
};

export function HotelGrid({ hotels }: { hotels: readonly Hotel[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={gridVariants}
      className="mt-16 grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10 lg:mt-20 lg:grid-cols-3"
    >
      {hotels.map((hotel) => (
        <HotelCard key={hotel.slug} hotel={hotel} />
      ))}
    </motion.div>
  );
}
