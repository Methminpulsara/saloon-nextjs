# LUMIÈRE SALON — Master Salon Template

> A luxury, editorial-grade salon & beauty website template built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lenis. Designed specifically for boutique hair salons, spas, aesthetic clinics, and bridal beauty studios.

---

## ✦ Key Highlights

- **Master Template Architecture**: Replace branding, services, gallery, team, pricing, and contact info in centralized configuration files without editing page templates.
- **4 Bespoke Salon Themes**:
  1. **Ivory Luxe** (*Default*): Warm ivory, deep charcoal, soft taupe, and champagne gold.
  2. **Rose Atelier**: Warm cream, dusty blush, muted rose, and deep burgundy charcoal.
  3. **Mocha Noir**: Warm sand/beige, rich espresso brown, mocha surfaces, and soft gold/taupe.
  4. **Sage Modern**: Porcelain ivory, deep forest charcoal, soft stone, and muted sage.
- **Full Appearance Control**: Seamless support for **System** (auto OS detection), **Light**, and **Dark** modes with anti-flash client hydration.
- **Lenis Smooth Scrolling**: Momentum-based, buttery smooth scrolling with automatic pause for modals/drawers and reduced-motion fallback.
- **Framer Motion Scroll Reveals**: Subtle, expensive viewport entrances (`FadeUp`, `FadeIn`, `StaggerContainer`) respecting `prefers-reduced-motion`.
- **Editorial Asymmetric Gallery & Lightbox**: Non-standard grid featuring hero frames, portraits, and detail squares with full-screen lightbox navigation (`ArrowLeft`, `ArrowRight`, `Escape`).
- **Completely Fixed Mobile Navigation**: Accessible slide-out drawer with body scroll lock, touch prevention, outside-click close, and embedded theme controls.
- **Pure Frontend (No Backend Required)**: Fully functional without databases or APIs. Clearly documented integration points for future booking systems or CRMs.
- **Production-Ready SEO**: Unique page metadata, Open Graph / Twitter cards, dynamic `sitemap.xml`, `robots.txt`, and Google-compliant `LocalBusiness` JSON-LD structured data (strictly free of simulated review schema manipulation).
- **Direct WhatsApp Messaging**: Pre-configured WhatsApp deep-linking for instant client booking and style requests.

---

## ✦ Route Structure

| Route | Page Name | Key Features |
| :--- | :--- | :--- |
| `/` | **Home** | Top announcement bar, editorial asymmetrical hero with LCP priority, trust counters, signature services showcase, brand story preview, curated gallery collage, core pillars, client reflections, Instagram grid, conversion booking CTA, and location section with interactive map. |
| `/about` | **About** | The Atelier story, genesis narrative, philosophy pillars, core values, master artisan team showcase, salon environment tour, and appointment invitation. |
| `/services` | **Services** | Complete categorized menu (Hair Artistry, Skin & Beauty, Bridal Sanctuary), individual durations, starting prices, treatment inclusions, transparent pricing guide, and service FAQs. |
| `/gallery` | **Gallery** | Category filtering (All, Hair, Colour, Bridal, Makeup, Nails), varied aspect ratios (portrait, square, landscape), and interactive full-screen lightbox modal with keyboard navigation. |
| `/reviews` | **Reviews** | Comprehensive guest satisfaction score card, client reflections, service tags, transparent template disclosure notice, and booking CTA. |
| `/contact` | **Contact** | Direct phone/email/WhatsApp links, opening hours, salon address with Google Maps directions trigger, interactive consultation inquiry form (with demo confirmation banner & backend integration point), and responsive embedded map. |
| `/sitemap.xml` | **Sitemap** | Next.js App Router dynamically generated sitemap XML. |
| `/robots.txt` | **Robots** | Standard search crawler instructions pointing to sitemap. |

---

## ✦ How to Customize This Template for a New Client

All business information, service menus, team bios, and images are decoupled from page code into `src/data/`:

### 1. Business Info & Contact (`src/data/business.ts`)
Update:
- `businessData.name`: Salon business name (e.g. `"LUMIÈRE SALON"`)
- `businessData.tagline`: Slogan or brand promise
- `businessData.phone`: Telephone number for `tel:` links
- `businessData.whatsapp`: Clean phone number for WhatsApp links (digits only with country code, e.g. `"15552345678"`)
- `businessData.email`: Concierge email address
- `businessData.address`: Physical address components and full address string
- `businessData.hours`: Opening days and operating times
- `businessData.mapEmbedUrl`: Google Maps embed iframe URL
- `businessData.socialLinks`: Instagram, Pinterest, and Facebook profile handles and URLs

### 2. Services & Pricing (`src/data/services.ts`)
Add, edit, or remove services:
- `name`: Service title
- `category`: `"hair"` | `"beauty"` | `"bridal"`
- `startingPrice`: Base price (formatted automatically via `formatPrice`)
- `duration`: e.g. `"60 mins"`
- `fullDescription`: Comprehensive treatment description
- `benefits`: Key treatment inclusions shown on the service card
- `imageUrl`: Featured photography

### 3. Gallery Images (`src/data/gallery.ts`)
Add new high-resolution portfolio photos:
- `imageUrl`: Remote or local image path
- `category`: `"hair"` | `"colour"` | `"bridal"` | `"makeup"` | `"nails"`
- `aspectRatio`: `"portrait"` | `"square"` | `"landscape"`
- `title` & `alt`: Descriptive titles and accessibility text

### 4. Client Testimonials (`src/data/testimonials.ts`)
Replace demonstration reviews with real customer testimonials:
- `name`: Client name (e.g. `"Amelia R."`)
- `service`: Treatment received
- `rating`: Numeric star rating (1 to 5)
- `comment`: Customer feedback quote

### 5. Team Members (`src/data/team.ts`)
Update stylists, colorists, and aestheticians:
- `name`, `role`, `experience`, `bio`, `specialties`, and `imageUrl`

### 6. Colors & Theming (`src/app/globals.css`)
Easily shift the brand palette by updating CSS variables in `:root` or custom `[data-theme]`:
```css
:root,
[data-theme="ivory-luxe"] {
  --background: #FAF8F5; /* Warm ivory canvas */
  --foreground: #1C1917; /* Deep charcoal typography */
  --card: #FFFFFF;       /* Pure card surface */
  --muted: #F4EFEA;      /* Warm beige secondary tone */
  --primary: #1C1917;    /* Primary button dark charcoal */
  --accent: #B8976C;     /* Champagne bronze accent */
  --border: #E8E1D7;     /* Soft stone divider */
}
```

---

## ✦ Connecting a Backend or Booking Engine

When you are ready to connect this template to a real booking engine (e.g., Mindbody, Vagaro, Fresha, Calendly, or custom API):

1. **Contact Form Submission**:
   Inspect `src/components/contact/ContactForm.tsx`. Locate the `// TODO: BACKEND INTEGRATION POINT` comment inside `handleSubmit`. Replace the simulated delay with your API route or webhook:
   ```typescript
   await fetch("/api/appointments", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData),
   });
   ```

2. **External Booking Platform Links**:
   In `src/components/common/Button.tsx` and `src/components/layout/Navbar.tsx`, update the `"Book an Appointment"` button `href` to point directly to your client's external booking portal.

---

## ✦ Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Production Build
```bash
npm run build
npm run start
```
