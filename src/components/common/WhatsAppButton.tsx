import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, businessData } from "@/data/business";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: "floating" | "inline" | "outline";
  label?: string;
}

export function WhatsAppButton({
  message = "Hello Lumière Salon, I would like to inquire about booking an appointment.",
  className,
  variant = "inline",
  label = "WhatsApp Us",
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl(businessData.whatsapp, message);

  if (variant === "floating") {
    return (
      <aside aria-label="WhatsApp quick contact">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with ${businessData.name} on WhatsApp`}
          className={cn(
            "fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]",
            className
          )}
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">
            {label}
          </span>
        </a>
      </aside>
    );
  }

  if (variant === "outline") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Inquire on WhatsApp about: ${message}`}
        className={cn(
          "inline-flex items-center justify-center gap-2 border border-[#25D366] text-charcoal-400 hover:bg-[#25D366] hover:text-white px-5 py-3 text-xs uppercase tracking-widest font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]",
          className
        )}
      >
        <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message ${businessData.name} on WhatsApp`}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white hover:bg-[#20ba59] active:bg-[#1da850] px-6 py-3.5 text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]",
        className
      )}
    >
      <MessageCircle className="w-4 h-4 fill-current" />
      <span>{label}</span>
    </a>
  );
}
