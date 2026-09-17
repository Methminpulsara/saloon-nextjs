"use client";

import React, { useState, useRef, useEffect } from "react";
import { Palette, Sun, Moon, Laptop, Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, SALON_THEMES, SalonTheme, AppearanceMode } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeSwitcherProps {
  className?: string;
  isMobile?: boolean;
}

export function ThemeSwitcher({ className, isMobile = false }: ThemeSwitcherProps) {
  const { theme, appearance, resolvedDark, setTheme, setAppearance } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentThemeObj = SALON_THEMES.find((t) => t.id === theme) || SALON_THEMES[0];

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const appearances: { id: AppearanceMode; label: string; icon: React.ElementType }[] = [
    { id: "light", label: "Light", icon: Sun },
    { id: "dark", label: "Dark", icon: Moon },
    { id: "system", label: "System", icon: Laptop },
  ];

  if (isMobile) {
    return (
      <div className={cn("space-y-4 pt-4 border-t border-border", className)}>
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground block mb-2">
            Salon Color Theme
          </span>
          <div className="grid grid-cols-2 gap-2">
            {SALON_THEMES.map((t) => {
              const isActive = theme === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTheme(t.id)}
                  className={cn(
                    "flex items-center gap-2.5 p-2.5 text-left border text-xs transition-all",
                    isActive
                      ? "border-accent bg-accent/10 text-foreground font-semibold shadow-sm"
                      : "border-border bg-card/60 text-muted-foreground hover:border-accent/50"
                  )}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full shrink-0 border border-border shadow-xs"
                    style={{ backgroundColor: t.palette.accent }}
                  />
                  <span className="truncate">{t.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground block mb-2">
            Appearance
          </span>
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-muted border border-border">
            {appearances.map((item) => {
              const Icon = item.icon;
              const isActive = appearance === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setAppearance(item.id)}
                  className={cn(
                    "flex items-center justify-center gap-1.5 py-2 text-xs font-medium transition-all",
                    isActive
                      ? "bg-card text-foreground shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={menuRef} className={cn("relative inline-block text-left", className)}>
      {/* Popover Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={`Theme settings. Current: ${currentThemeObj.name}, Mode: ${appearance}`}
        className="glass-pill group flex items-center gap-2 px-3 py-2 text-xs font-medium text-foreground hover:border-accent transition-all duration-300 shadow-2xs"
      >
        <span
          className="w-2.5 h-2.5 rounded-full border border-border shadow-2xs transition-transform group-hover:scale-110"
          style={{ backgroundColor: currentThemeObj.palette.accent }}
        />
        <span className="tracking-wider uppercase text-[11px] font-semibold hidden xl:inline">
          {currentThemeObj.name}
        </span>
        <span className="text-muted-foreground">
          {resolvedDark ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
        </span>
        <ChevronDown
          className={cn(
            "w-3 h-3 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Floating Glass Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="glass-card absolute right-0 mt-2 w-72 p-4 shadow-xl z-50 border border-glass-border overflow-hidden"
            role="menu"
            aria-label="Select theme and appearance"
          >
            {/* Appearance Mode Segmented Control */}
            <div className="mb-4 pb-3 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground">
                  Appearance
                </span>
                <span className="text-[10px] text-accent font-medium capitalize">
                  {appearance} {appearance === "system" && (resolvedDark ? "(Dark)" : "(Light)")}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1 p-1 bg-muted border border-border">
                {appearances.map((item) => {
                  const Icon = item.icon;
                  const isActive = appearance === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAppearance(item.id)}
                      className={cn(
                        "flex items-center justify-center gap-1.5 py-1.5 text-xs font-medium transition-all",
                        isActive
                          ? "bg-card text-foreground shadow-2xs font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Salon Themes List */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground block mb-2.5">
                Salon Palette
              </span>
              <div className="space-y-1.5">
                {SALON_THEMES.map((t) => {
                  const isActive = theme === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        setTheme(t.id);
                        setIsOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center justify-between p-2.5 text-left transition-colors border",
                        isActive
                          ? "bg-accent/10 border-accent/60 text-foreground font-medium"
                          : "border-transparent hover:bg-muted/70 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {/* 4-Color Swatch Bar */}
                        <div className="flex -space-x-1 shrink-0">
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-card shadow-2xs z-3"
                            style={{ backgroundColor: t.palette.bg }}
                          />
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-card shadow-2xs z-2"
                            style={{ backgroundColor: t.palette.accent }}
                          />
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-card shadow-2xs z-1"
                            style={{ backgroundColor: t.palette.text }}
                          />
                        </div>
                        <div>
                          <p className="text-xs font-serif text-foreground font-medium">
                            {t.name}
                          </p>
                          <p className="text-[10px] text-muted-foreground font-light line-clamp-1">
                            {t.description}
                          </p>
                        </div>
                      </div>

                      {isActive && <Check className="w-4 h-4 text-accent shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
