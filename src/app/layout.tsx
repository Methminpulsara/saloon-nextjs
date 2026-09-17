import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { businessData } from "@/data/business";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumieresalon.demo"),
  title: {
    default: `${businessData.name} | Hair & Beauty Sanctuary`,
    template: `%s | ${businessData.name}`,
  },
  description: businessData.description,
  keywords: [
    "Lumière Salon",
    "luxury hair salon",
    "French balayage",
    "precision haircut",
    "bridal hair and makeup",
    "hydro-glow facial",
    "San Francisco hair salon",
    "editorial hair styling",
    "couture beauty",
  ],
  authors: [{ name: businessData.name }],
  creator: businessData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lumieresalon.demo",
    title: `${businessData.name} — ${businessData.tagline}`,
    description: businessData.description,
    siteName: businessData.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: `${businessData.name} - Modern Beauty Sanctuary`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessData.name} — ${businessData.tagline}`,
    description: businessData.description,
    images: ["https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Anti-flash client script
  const themeInitScript = `
    (function() {
      try {
        var theme = localStorage.getItem('lumiere_theme') || 'ivory-luxe';
        var appearance = localStorage.getItem('lumiere_appearance') || 'system';
        document.documentElement.setAttribute('data-theme', theme);
        var isDark = appearance === 'dark' || (appearance === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent/20 selection:text-foreground">
        <ThemeProvider>
          <SmoothScroll>
            <AnnouncementBar />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton variant="floating" />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
