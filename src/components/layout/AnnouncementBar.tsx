import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { salonConfig } from "@/data/salon";

export function AnnouncementBar() {
  if (!salonConfig.announcement?.text) return null;

  return (
    <aside
      aria-label="Announcement"
      className="bg-primary text-primary-foreground text-xs py-2 px-4 tracking-wider uppercase border-b border-primary-foreground/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 text-center">
        <span className="font-light text-primary-foreground/90 text-[11px] sm:text-xs">
          {salonConfig.announcement.text}
        </span>
        <span className="hidden sm:inline text-accent text-xs">•</span>
        <Link
          href={salonConfig.announcement.href}
          className="inline-flex items-center gap-1 font-semibold text-accent hover:underline underline-offset-4 transition-colors text-[11px] sm:text-xs"
        >
          <span>{salonConfig.announcement.actionText}</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </aside>
  );
}
