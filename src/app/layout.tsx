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
import { CustomCursor } from "@/components/common/CustomCursor";
import { BrandPreloader } from "@/components/common/BrandPreloader";
import { salonConfig } from "@/data/salon";

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
  metadataBase: new URL(salonConfig.seo.canonicalUrl),
  title: {
    default: salonConfig.seo.title,
    template: salonConfig.seo.titleTemplate,
  },
  description: salonConfig.seo.description,
  keywords: [
    salonConfig.brand.name,
    salonConfig.brand.shortName,
    ...salonConfig.seo.keywords,
  ],
  authors: [{ name: salonConfig.brand.name }],
  creator: salonConfig.brand.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: salonConfig.seo.canonicalUrl,
    title: `${salonConfig.brand.name} — ${salonConfig.brand.tagline}`,
    description: salonConfig.brand.description,
    siteName: salonConfig.brand.name,
    images: [
      {
        url: salonConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${salonConfig.brand.name} - Modern Beauty Sanctuary`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${salonConfig.brand.name} — ${salonConfig.brand.tagline}`,
    description: salonConfig.brand.description,
    images: [salonConfig.seo.ogImage],
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
  // Anti-flash client script reading salonConfig.theme.defaultTheme
  const themeInitScript = `
    (function() {
      try {
        var theme = localStorage.getItem('lumiere_theme') || '${salonConfig.theme.defaultTheme}';
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${plusJakarta.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent/20 selection:text-foreground">
        <BrandPreloader />
        <CustomCursor />
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
