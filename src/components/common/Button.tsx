import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent" | "glass" | "floating";
  size?: "sm" | "md" | "lg" | "icon";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none group select-none";

    const variants = {
      primary:
        "bg-primary text-primary-foreground border border-primary hover:bg-primary-hover hover:border-primary-hover active:scale-[0.98] shadow-sm hover:shadow-md",
      secondary:
        "bg-muted text-foreground hover:bg-muted/75 border border-border active:scale-[0.98]",
      outline:
        "bg-transparent border border-foreground/75 text-foreground hover:bg-foreground hover:text-background active:scale-[0.98] transition-colors duration-300",
      ghost:
        "bg-transparent text-foreground hover:bg-muted/60 active:scale-[0.98]",
      accent:
        "bg-accent text-accent-foreground border border-accent hover:opacity-90 active:scale-[0.98] shadow-sm hover:shadow-md",
      glass:
        "glass-pill text-foreground hover:border-accent hover:shadow-lg active:scale-[0.98] backdrop-blur-md",
      floating:
        "glass-pill text-foreground shadow-xl hover:shadow-2xl hover:border-accent active:scale-[0.98] border border-glass-border",
    };

    const sizes = {
      sm: "text-[11px] px-4 py-2 uppercase tracking-[0.2em] font-semibold",
      md: "text-xs px-6 py-3 uppercase tracking-[0.25em] font-semibold",
      lg: "text-sm px-8 py-4 uppercase tracking-[0.25em] font-semibold",
      icon: "p-2.5 aspect-square",
    };

    const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
