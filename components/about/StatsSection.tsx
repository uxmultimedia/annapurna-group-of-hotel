"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const stats = [
  { value: 6, suffix: "+", label: "Hotels" },
  { value: 2018, suffix: "", label: "Established" },
  { value: 1000, suffix: "+", label: "Happy Guests" },
  { value: 24, suffix: "×7", label: "Guest Support" },
] as const;

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setCount(value);
      return;
    }
    const start = performance.now();
    const duration = 1100;
    let frame = 0;
    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reducedMotion, value]);

  return <span ref={ref}>{count.toLocaleString("en-IN")}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section aria-labelledby="stats-title" className="bg-white px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <h2 id="stats-title" className="sr-only">Annapurna Group in numbers</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, suffix, label }, index) => (
            <motion.article
              key={label}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-[22px] border border-[#173c2b]/9 bg-white p-8 text-center shadow-[0_15px_42px_rgba(23,60,43,.07)]"
            >
              <strong className="font-[family-name:var(--font-cormorant)] text-[52px] font-medium leading-none text-[var(--emerald)]">
                <Counter value={value} suffix={suffix} />
              </strong>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#647068]">{label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
