"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { salonConfig } from "@/data/salon";

export function BrandPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user already saw the preloader in this browser session
    const hasSeen = sessionStorage.getItem("lumiere_preloader_seen");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasSeen || prefersReducedMotion) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("lumiere_preloader_seen", "true");
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground"
        >
          <div className="relative flex flex-col items-center text-center px-6">
            {/* Wordmark with delicate letter-spacing expansion */}
            <motion.h1
              initial={{ opacity: 0, y: 12, letterSpacing: "0.15em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal uppercase text-foreground"
            >
              {salonConfig.brand.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-accent mt-2 font-medium"
            >
              {salonConfig.brand.eyebrow}
            </motion.p>

            {/* Hairline golden progress bar */}
            <div className="mt-8 w-36 h-[1.5px] bg-border overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full bg-accent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
