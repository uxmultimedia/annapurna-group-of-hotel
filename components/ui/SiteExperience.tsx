"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function SiteExperience() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 28, mass: .25 });

  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    }
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[200] h-[2px] origin-left bg-[var(--gold)]"
      style={{ scaleX }}
    />
  );
}
