"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type SalonTheme = "ivory-luxe" | "rose-atelier" | "mocha-noir" | "sage-modern";
export type AppearanceMode = "system" | "light" | "dark";

export interface ThemeOption {
  id: SalonTheme;
  name: string;
  description: string;
  palette: {
    bg: string;
    text: string;
    accent: string;
    secondary: string;
  };
}

export const SALON_THEMES: ThemeOption[] = [
  {
    id: "ivory-luxe",
    name: "Ivory Luxe",
    description: "Warm ivory, soft taupe, and champagne gold",
    palette: {
      bg: "#FAF8F5",
      text: "#1C1917",
      accent: "#B8976C",
      secondary: "#E7E1D8",
    },
  },
  {
    id: "rose-atelier",
    name: "Rose Atelier",
    description: "Warm cream, dusty blush, and muted rose",
    palette: {
      bg: "#FAF6F5",
      text: "#2D1F22",
      accent: "#C88D88",
      secondary: "#F2E3E1",
    },
  },
  {
    id: "mocha-noir",
    name: "Mocha Noir",
    description: "Sand beige, espresso brown, and soft gold",
    palette: {
      bg: "#F8F5F0",
      text: "#2C221E",
      accent: "#C4A47C",
      secondary: "#EAE2D8",
    },
  },
  {
    id: "sage-modern",
    name: "Sage Modern",
    description: "Porcelain ivory, muted sage, and forest charcoal",
    palette: {
      bg: "#F7F8F5",
      text: "#1D261F",
      accent: "#7E927E",
      secondary: "#E4E8E2",
    },
  },
];

interface ThemeContextType {
  theme: SalonTheme;
  appearance: AppearanceMode;
  resolvedDark: boolean;
  setTheme: (theme: SalonTheme) => void;
  setAppearance: (appearance: AppearanceMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<SalonTheme>("ivory-luxe");
  const [appearance, setAppearanceState] = useState<AppearanceMode>("system");
  const [resolvedDark, setResolvedDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize from localStorage and check system preferences
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("lumiere_theme") as SalonTheme | null;
    const savedAppearance = localStorage.getItem("lumiere_appearance") as AppearanceMode | null;

    if (savedTheme && SALON_THEMES.some((t) => t.id === savedTheme)) {
      setThemeState(savedTheme);
    }

    if (savedAppearance && ["system", "light", "dark"].includes(savedAppearance)) {
      setAppearanceState(savedAppearance);
    }
  }, []);

  // Update classes and attributes on root element
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("lumiere_theme", theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const determineDark = () => {
      if (appearance === "dark") return true;
      if (appearance === "light") return false;
      return mediaQuery.matches;
    };

    const isDark = determineDark();
    setResolvedDark(isDark);

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("lumiere_appearance", appearance);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (appearance === "system") {
        setResolvedDark(e.matches);
        if (e.matches) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, [theme, appearance, mounted]);

  const setTheme = (newTheme: SalonTheme) => {
    setThemeState(newTheme);
  };

  const setAppearance = (newAppearance: AppearanceMode) => {
    setAppearanceState(newAppearance);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        appearance,
        resolvedDark,
        setTheme,
        setAppearance,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
