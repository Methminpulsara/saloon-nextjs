"use client";

import React from "react";
import { motion } from "framer-motion";
import { salonConfig } from "@/data/salon";

export function PhilosophyMarquee() {
  const items = [
    "PRECISION CUTTING",
    "FRENCH BALAYAGE",
    "CELLULAR SKIN THERAPY",
    "COUTURE BRIDAL",
    "BIOCONDUCTIVE BOTANICALS",
    "INTENTIONAL CONSULTATION",
    "TRANQUIL SANCTUARY",
  ];

  return (
    <section
      id="philosophy-marquee"
      aria-label="Salon Philosophy Ticker"
      className="py-5 sm:py-6 bg-primary text-primary-foreground border-y border-border/20 overflow-hidden select-none"
    >
      <div className="flex w-max">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
          className="flex items-center whitespace-nowrap gap-8 sm:gap-12"
        >
          {[...items, ...items].map((phrase, idx) => (
            <div key={idx} className="flex items-center gap-8 sm:gap-12">
              <span className="text-xs sm:text-sm font-serif uppercase tracking-[0.25em] font-light text-primary-foreground/90">
                {phrase}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
