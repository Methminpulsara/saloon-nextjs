import { SalonConfig } from "@/types";

/**
 * =========================================================================
 * MASTER SALON CONFIGURATION — SINGLE SOURCE OF TRUTH
 * =========================================================================
 * To rebrand this entire website for a new salon client:
 * 1. Modify the values in this file (brand, contact, location, hours, services, etc.)
 * 2. Update service & gallery images if desired.
 * 3. All components, navigation, schema, metadata, and CTAs update automatically.
 * =========================================================================
 */
export const salonConfig: SalonConfig = {
  brand: {
    name: "Salon Dreams",
    shortName: "Salon Dreams",
    tagline: "Modern beauty, thoughtfully created.",
    eyebrow: "HAIR • BEAUTY • BRIDAL SANCTUARY",
    description:
      "Thoughtful styling, modern beauty rituals and personalized care in an intimate sanctuary designed around your natural beauty.",
    shortAbout:
      "Lumière was founded on the belief that beauty rituals should be a source of calm, renewal, and artistic precision. From bespoke haircuts to luminous color and restorative beauty therapies, our dedicated team crafts tailored experiences that elevate your personal style.",
    establishedYear: "2018",
    philosophyTitle: "Beauty is personal. Not manufactured.",
    philosophyQuote:
      "We conceived Lumière as an antidote to hurried, noisy salon spaces. Here, time slows down so that your hair, skin, and personal aesthetic receive the undivided attention and thoughtful precision they deserve.",
  },

  contact: {
    phone: "+94 761062493",
    displayPhone: "+94 761062493",
    whatsapp: "94 761062493", // Clean number for wa.me API (digits only with country code)
    displayWhatsapp: "+94 761062493",
    email: "concierge@lumieresalon.com",
  },

  location: {
    street: "482 Boutique Boulevard",
    suite: "Suite 300",
    city: "Horana",
    state: "CA",
    postalCode: "",
    country: "Sri Lanka",
    neighborhood: "Union Square",
    full: "",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192882207945!2d-122.40822702336336!3d37.78953181131109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858089452b478d%3A0x6a2c2627e163b27b!2sUnion%20Square%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    googleMapsDirectionsUrl:
      "https://maps.google.com/?q=Union+Square,+San+Francisco,+CA",
    latitude: "37.7895",
    longitude: "-122.4082",
  },

  hours: {
    monday: "Closed for private bookings & master education",
    tuesday: "9:00 AM – 7:00 PM",
    wednesday: "9:00 AM – 7:00 PM",
    thursday: "9:00 AM – 7:00 PM",
    friday: "9:00 AM – 7:00 PM",
    saturday: "9:00 AM – 6:00 PM",
    sunday: "10:00 AM – 4:00 PM",
    summary: "Tue – Sat: 9am – 7pm | Sun: 10am – 4pm",
    formattedList: [
      { days: "Tuesday – Friday", hours: "9:00 AM – 7:00 PM" },
      { days: "Saturday", hours: "9:00 AM – 6:00 PM" },
      { days: "Sunday", hours: "10:00 AM – 4:00 PM" },
      {
        days: "Monday",
        hours: "Closed for private bookings & education",
        isClosed: true,
      },
    ],
  },

  social: {
    instagram: "https://instagram.com/lumieresalon.demo",
    instagramHandle: "@lumieresalon.demo",
    facebook: "https://facebook.com/lumieresalon.demo",
    tiktok: "https://tiktok.com/@lumieresalon.demo",
    youtube: "https://youtube.com/@lumieresalon.demo",
    pinterest: "https://pinterest.com/lumieresalon.demo",
  },

  services: [
    // --- HAIR SERVICES ---
    {
      id: "bespoke-haircut",
      name: "Bespoke Precision Haircut",
      category: "hair",
      categoryLabel: "Hair Artistry",
      subcategory: "Cuts & Styling",
      shortDescription:
        "Tailored haircut sculpted to your face shape, hair density, and daily styling rituals.",
      fullDescription:
        "Includes a thorough individual consultation, nourishing botanical cleanse, scalp massage with warm aromatherapy towels, precision cutting technique, and our signature editorial blowout finish.",
      startingPrice: 120,
      duration: "60 mins",
      featured: true,
      imageUrl:
        "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200&auto=format&fit=crop",
      benefits: [
        "Custom silhouette analysis",
        "Botanical wash & scalp massage",
        "Signature blowout styling",
      ],
    },
    {
      id: "signature-blowout",
      name: "Signature Editorial Blowout",
      category: "hair",
      categoryLabel: "Hair Artistry",
      subcategory: "Cuts & Styling",
      shortDescription:
        "Voluminous, glass-like blowout styled for effortless movement and lasting shine.",
      fullDescription:
        "Experience an invigorating double wash with moisture-rich organic shampoo, intensive leave-in heat defense treatment, and skilled round-brush styling that lasts for days.",
      startingPrice: 75,
      duration: "45 mins",
      featured: true,
      imageUrl:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
      benefits: [
        "Anti-humidity thermal seal",
        "Lasting 72-hour hold",
        "Feather-light texture",
      ],
    },
    {
      id: "artisan-hair-styling",
      name: "Event & Updo Hair Styling",
      category: "hair",
      categoryLabel: "Hair Artistry",
      subcategory: "Cuts & Styling",
      shortDescription:
        "Refined up-dos, textured chignons, and Hollywood waves tailored for special occasions.",
      fullDescription:
        "Designed for galas, red carpet events, and special evenings. We structure, texture, and pin your hair with couture attention to detail, maintaining weightless elegance all evening.",
      startingPrice: 140,
      duration: "75 mins",
      featured: false,
      imageUrl:
        "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop",
      benefits: [
        "Long-wear pinning architecture",
        "Custom accessory placement",
        "Flexible non-stiff hold",
      ],
    },
    {
      id: "dimensional-balayage",
      name: "Signature Dimensional Balayage",
      category: "hair",
      categoryLabel: "Hair Artistry",
      subcategory: "Color & Light",
      shortDescription:
        "Hand-painted sunlit ribbons that grow out seamlessly with zero harsh demarcation.",
      fullDescription:
        "Our signature French balayage technique. Each stroke is customized to accentuate your natural movement. Includes custom gloss toner, bond-building treatment, and luxury blowout.",
      startingPrice: 280,
      duration: "180 mins",
      featured: true,
      imageUrl:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop",
      benefits: [
        "Seamless multi-tonal blend",
        "Low-maintenance 4–6 month grow out",
        "Bond-strengthening infusion",
      ],
    },
    {
      id: "full-luminous-highlights",
      name: "Foil Highlights & Baby-Lights",
      category: "hair",
      categoryLabel: "Hair Artistry",
      subcategory: "Color & Light",
      shortDescription:
        "Micro-fine weaving for all-over luminosity, creamy Scandinavian blondes, or rich brunette dimension.",
      fullDescription:
        "Ultra-fine precision foil placement from root to tip. Infused with protective bonding serums to preserve hair integrity while achieving bright, multidimensional radiance.",
      startingPrice: 240,
      duration: "150 mins",
      featured: false,
      imageUrl:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop",
      benefits: [
        "Seamless root transition",
        "Clean luminous lift",
        "Customized tone gloss",
      ],
    },
    {
      id: "all-over-luxury-colour",
      name: "All-Over Gloss & Rich Color",
      category: "hair",
      categoryLabel: "Hair Artistry",
      subcategory: "Color & Light",
      shortDescription:
        "Rich, multi-reflective single process color enriched with botanical oils for mirror shine.",
      fullDescription:
        "Custom-blended ammonia-free formulation that enriches depth, eliminates brassiness, and completely covers grays while sealing the cuticle with radiant moisture.",
      startingPrice: 165,
      duration: "90 mins",
      featured: false,
      imageUrl:
        "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1200&auto=format&fit=crop",
      benefits: [
        "Ammonia-free gentle formula",
        "100% translucent gray coverage",
        "Mirror-glaze shine",
      ],
    },
    {
      id: "restorative-keratin-treatment",
      name: "Restorative Caviar & Keratin Therapy",
      category: "hair",
      categoryLabel: "Hair Artistry",
      subcategory: "Treatments",
      shortDescription:
        "Deep molecular bond reconstruction repairing frizz, heat damage, and porosity.",
      fullDescription:
        "An intensive spa treatment penetrating the deepest layers of the hair fiber. Restores amino acids, smoothes stubborn flyaways, and dramatically cuts home drying time in half.",
      startingPrice: 195,
      duration: "90 mins",
      featured: true,
      imageUrl:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
      benefits: [
        "Eliminates up to 90% frizz",
        "Thermal repair lock",
        "Results last 3–5 months",
      ],
    },

    // --- BEAUTY SERVICES ---
    {
      id: "lumiere-glow-facial",
      name: "Bespoke Hydro-Glow Facial",
      category: "beauty",
      categoryLabel: "Skin & Beauty",
      subcategory: "Skin Therapies",
      shortDescription:
        "Cellular renewal facial combining lymphatic drainage, gentle peel, and deep peptide infusion.",
      fullDescription:
        "A restorative 75-minute treatment tailored to your skin's current barrier health. Features double cleansing, ultrasonic exfoliation, cryo-sculpting globes, custom botanical mask, and LED phototherapy.",
      startingPrice: 180,
      duration: "75 mins",
      featured: true,
      imageUrl:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
      benefits: [
        "Instant barrier hydration",
        "Gentle non-invasive resurfacing",
        "Sculpting lymphatic drainage",
      ],
    },
    {
      id: "editorial-makeup-application",
      name: "Editorial & Evening Makeup",
      category: "beauty",
      categoryLabel: "Skin & Beauty",
      subcategory: "Makeup Artistry",
      shortDescription:
        "Luminous complexion, refined contouring, and bespoke eye artistry tailored to your features.",
      fullDescription:
        "Using luxury clean beauty brands, our artists craft an effortlessly elevated makeup look. Includes luxury skin prep, custom lash application, and touch-up care kit.",
      startingPrice: 150,
      duration: "60 mins",
      featured: false,
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
      benefits: [
        "Camera-ready skin prep",
        "Individual luxury lash clusters",
        "Complimentary touch-up kit",
      ],
    },
    {
      id: "couture-manicure",
      name: "Couture Spa Manicure",
      category: "beauty",
      categoryLabel: "Skin & Beauty",
      subcategory: "Nail Care",
      shortDescription:
        "Russian cuticle detailing, organic sugar scrub, hand massage, and long-wear bio-gel or lacquer.",
      fullDescription:
        "Precision nail shaping, cuticle nourishment with cold-pressed jojoba, exfoliating mask wrapped in hot towels, and flawless high-shine gel or toxin-free lacquer application.",
      startingPrice: 65,
      duration: "50 mins",
      featured: false,
      imageUrl:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
      benefits: [
        "Clean Russian cuticle technique",
        "Warm herbal compress",
        "Non-toxic 10-free formulas",
      ],
    },
    {
      id: "wellness-pedicure",
      name: "Botanical Wellness Pedicure",
      category: "beauty",
      categoryLabel: "Skin & Beauty",
      subcategory: "Nail Care",
      shortDescription:
        "Mineral foot soak, calloused skin softening, rosemary scrub, and restorative calf massage.",
      fullDescription:
        "Relax in our private ergonomic pedicure lounge. Includes lavender dead-sea salt soak, gentle callus smoothing, revitalizing mint scrub, hot stone massage, and chip-resistant lacquer.",
      startingPrice: 85,
      duration: "60 mins",
      featured: false,
      imageUrl:
        "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=1200&auto=format&fit=crop",
      benefits: [
        "Himalayan salt soak",
        "Hot stone pressure therapy",
        "Deep hydration paraffin mask",
      ],
    },

    // --- BRIDAL SERVICES ---
    {
      id: "bridal-couture-hair",
      name: "Bridal Couture Hair Design",
      category: "bridal",
      categoryLabel: "Bridal Sanctuary",
      subcategory: "Bridal",
      shortDescription:
        "Timeless wedding hair design crafted for all-day comfort, veil integration, and camera angles.",
      fullDescription:
        "Includes preview styling trial, veil and accessory placement architecture, veil removal coaching, and high-performance weatherproofing to ensure your look stays pristine from vows to late dance.",
      startingPrice: 250,
      duration: "90 mins",
      featured: true,
      imageUrl:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1200&auto=format&fit=crop",
      benefits: [
        "Pre-wedding preview consultation",
        "Veil & jewelry placement",
        "Full-day all-weather hold",
      ],
    },
    {
      id: "bridal-radiance-makeup",
      name: "Bridal Radiance Makeup",
      category: "bridal",
      categoryLabel: "Bridal Sanctuary",
      subcategory: "Bridal",
      shortDescription:
        "Luminous, enduring bridal makeup designed to look breathtaking in natural light and photography.",
      fullDescription:
        "Includes comprehensive preview makeup session, customized skincare regimen guide, luxury individual lash application, airbrush or luminous foundation blend, and full-day touch-up essentials.",
      startingPrice: 240,
      duration: "90 mins",
      featured: false,
      imageUrl:
        "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop",
      benefits: [
        "HD photo & 4K video tested",
        "Waterproof sweat-resistant formula",
        "Deluxe touch-up clutch kit",
      ],
    },
    {
      id: "full-bridal-sanctuary-package",
      name: "Complete Bridal Sanctuary Experience",
      category: "bridal",
      categoryLabel: "Bridal Sanctuary",
      subcategory: "Bridal",
      shortDescription:
        "The ultimate wedding day immersion: Hair, makeup, champagne brunch, and dedicated bridal suite.",
      fullDescription:
        "Exclusive morning use of our private Bridal Sanctuary. Includes bridal hair & makeup with preview trials, manicures, mimosas, artisanal grazing board, and dressing assistance for the bride and maid of honor.",
      startingPrice: 650,
      duration: "240 mins",
      featured: true,
      imageUrl:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      benefits: [
        "Private bridal suite buyout",
        "Artisanal catering & champagne",
        "Includes bride + maid of honor styling",
      ],
    },
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Dimensional French Balayage",
      category: "colour",
      categoryLabel: "Colour",
      imageUrl:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop",
      aspectRatio: "portrait",
      alt: "Hand-painted dimensional balayage with golden blonde ribbons on long wavy hair",
      description:
        "Multi-tonal balayage created with customized beige tones and bond-strengthening gloss.",
    },
    {
      id: "gal-2",
      title: "Sculpted French Bob",
      category: "hair",
      categoryLabel: "Hair",
      imageUrl:
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1200&auto=format&fit=crop",
      aspectRatio: "square",
      alt: "Precision chin-length textured French bob haircut with subtle fringe",
      description:
        "Architectural line cut paired with textured ends for lived-in Parisian sophistication.",
    },
    {
      id: "gal-3",
      title: "Couture Bridal Updo & Pearl Pins",
      category: "bridal",
      categoryLabel: "Bridal",
      imageUrl:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1200&auto=format&fit=crop",
      aspectRatio: "portrait",
      alt: "Romantic bridal textured low chignon adorned with delicate freshwater pearls",
      description:
        "Designed for a coastal ceremony with an all-day weather-resistant structure.",
    },
    {
      id: "gal-4",
      title: "Dewy Glass-Skin Makeup",
      category: "makeup",
      categoryLabel: "Makeup",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
      aspectRatio: "portrait",
      alt: "Flawless dewy complexion with champagne highlight and brushed feathery brows",
      description:
        "Clean aesthetic editorial makeup highlighting healthy radiance and natural textures.",
    },
    {
      id: "gal-5",
      title: "Glazed Almond Manicure",
      category: "nails",
      categoryLabel: "Nails",
      imageUrl:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
      aspectRatio: "square",
      alt: "Elegant glazed neutral almond gel manicure with subtle chrome sheen",
      description:
        "Precision Russian cuticle treatment finished with a pearlized semi-sheer topcoat.",
    },
    {
      id: "gal-6",
      title: "Bridal Veil & Hollywood Waves",
      category: "bridal",
      categoryLabel: "Bridal",
      imageUrl:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      aspectRatio: "landscape",
      alt: "Classic bridal styling featuring sculpted Hollywood waves under an illusion tulle veil",
      description:
        "Seamlessly styled for cathedral entrance and transitioning to a modern evening gala.",
    },
    {
      id: "gal-7",
      title: "Nordic Buttercream Highlights",
      category: "colour",
      categoryLabel: "Colour",
      imageUrl:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop",
      aspectRatio: "portrait",
      alt: "Bright Scandinavian baby-lights and buttery blonde tones on layered silk hair",
      description:
        "Ultra-fine weave foils preserving the natural root base with brilliant brightening.",
    },
    {
      id: "gal-8",
      title: "Golden Hour Waves & Blowout",
      category: "hair",
      categoryLabel: "Hair",
      imageUrl:
        "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200&auto=format&fit=crop",
      aspectRatio: "portrait",
      alt: "Full-bodied voluminous hair blowout catching warm golden sunlight",
      description:
        "Signature round-brush thermal styling with botanical heat protection.",
    },
    {
      id: "gal-9",
      title: "Minimalist Sculptural Nails",
      category: "nails",
      categoryLabel: "Nails",
      imageUrl:
        "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop",
      aspectRatio: "square",
      alt: "Nude sheer nails with hand-painted micro gold line accents",
      description: "Subtle metallic accents on a neutral milky base.",
    },
    {
      id: "gal-10",
      title: "Soft Bronze Evening Glam",
      category: "makeup",
      categoryLabel: "Makeup",
      imageUrl:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop",
      aspectRatio: "square",
      alt: "Warm bronze eyeshadow with fluttery individual lashes and velvet nude lip",
      description:
        "Refined glamour tailored for black-tie galas and editorial shoots.",
    },
    {
      id: "gal-11",
      title: "Espresso Gloss & Curtain Bangs",
      category: "colour",
      categoryLabel: "Colour",
      imageUrl:
        "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1200&auto=format&fit=crop",
      aspectRatio: "portrait",
      alt: "Deep reflective espresso brunette hair with face-framing curtain fringe",
      description:
        "Rich non-oxidizing color gloss imparting maximum light reflection.",
    },
    {
      id: "gal-12",
      title: "Romantic Half-Up Bridal Weave",
      category: "bridal",
      categoryLabel: "Bridal",
      imageUrl:
        "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop",
      aspectRatio: "landscape",
      alt: "Intricate half-up braided bridal hair with soft wisps and delicate crystal comb",
      description:
        "Effortless bohemian romance combined with structured evening durability.",
    },
  ],

  testimonials: [
    {
      id: "review-1",
      name: "Amelia R.",
      service: "Signature Dimensional Balayage",
      rating: 5,
      comment:
        "The balayage here is pure alchemy. My colorist listened intently to what I wanted and created soft, sunlit tones that look completely organic. The salon atmosphere feels like a boutique sanctuary where you can truly exhale.",
      date: "Verified Guest • 2 weeks ago",
      isDemo: true,
    },
    {
      id: "review-2",
      name: "Sophie M.",
      service: "Full Bridal Sanctuary Package",
      rating: 5,
      comment:
        "Having our wedding morning at the sanctuary was the most peaceful part of our entire weekend. My hair and makeup felt weightless and lasted through endless tears and dancing. Every detail was executed with calm perfection.",
      date: "Verified Guest • 1 month ago",
      isDemo: true,
    },
    {
      id: "review-3",
      name: "Nadia K.",
      service: "Bespoke Precision Haircut",
      rating: 5,
      comment:
        "Finding a stylist who understands delicate, wavy texture has taken me years. The precision cut gave my hair instant shape and volume without requiring an hour of styling at home. Exceptional craftsmanship.",
      date: "Verified Guest • 3 weeks ago",
      isDemo: true,
    },
    {
      id: "review-4",
      name: "Elena V.",
      service: "Bespoke Hydro-Glow Facial",
      rating: 5,
      comment:
        "My skin has never looked so luminous and calm. The lymphatic massage combined with gentle botanicals completely erased a month of travel fatigue. The personalized product advice was refreshingly honest.",
      date: "Verified Guest • 1 month ago",
      isDemo: true,
    },
    {
      id: "review-5",
      name: "Claire D.",
      service: "Couture Spa Manicure & Nail Art",
      rating: 5,
      comment:
        "The Russian manicure technique is unmatched. Clean, meticulous, and zero damage to my nail bed. The subtle gold leaf design was understated luxury at its finest.",
      date: "Verified Guest • 2 months ago",
      isDemo: true,
    },
    {
      id: "review-6",
      name: "Julian B.",
      service: "Restorative Caviar & Keratin Therapy",
      rating: 5,
      comment:
        "As someone who swims regularly, chlorine had wrecked my hair texture. One session of the caviar treatment completely restored the softness and shine. Incredibly knowledgeable team.",
      date: "Verified Guest • 2 months ago",
      isDemo: true,
    },
  ],

  team: [
    {
      id: "team-1",
      name: "Genevieve Laurent",
      role: "Founder & Creative Hair Director",
      experience: "14+ Years",
      bio: "Trained in Paris and London, Genevieve brings an architectural approach to dry precision cutting and lived-in balayage. She envisioned the sanctuary as a serene space where style honors individual character.",
      specialties: ["Precision Cutting", "French Balayage", "Texture Architecture"],
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "team-2",
      name: "Marcus Vance",
      role: "Master Colorist & Blonde Specialist",
      experience: "10+ Years",
      bio: "Marcus is renowned for his light-reflective color formulations and healthy Scandinavian blondes. His philosophy centers on preserving hair vitality while creating luminous, long-lasting dimension.",
      specialties: ["Luminous Blondes", "Color Correction", "Bond Therapy"],
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "team-3",
      name: "Camille Moreau",
      role: "Head of Bridal Artistry & Styling",
      experience: "8+ Years",
      bio: "With a background in runway and high-fashion editorial, Camille designs bespoke bridal hairstyles and ethereal makeup looks that maintain weightless elegance and photo-perfection throughout wedding festivities.",
      specialties: ["Bridal Up-Dos", "Airbrush Makeup", "Veil Placement"],
      imageUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "team-4",
      name: "Seraphina Lin",
      role: "Senior Aesthetician & Skin Therapist",
      experience: "9+ Years",
      bio: "Seraphina believes in biocompatible skin therapy that works in harmony with the body's natural regenerative cycles. Her lymphatic sculpting facials are revered for producing instant radiance.",
      specialties: ["Lymphatic Sculpting", "Hydro-Glow Facials", "Clean Chemistry"],
      imageUrl:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    },
  ],

  navigation: {
    mainNav: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "Reviews", href: "/reviews" },
      { label: "Contact", href: "/contact" },
    ],
    footerServices: [
      { label: "Bespoke Precision Haircuts", href: "/services#bespoke-haircut" },
      { label: "Dimensional French Balayage", href: "/services#dimensional-balayage" },
      { label: "Signature Editorial Blowout", href: "/services#signature-blowout" },
      { label: "Restorative Caviar Therapy", href: "/services#restorative-keratin-treatment" },
      { label: "Hydro-Glow Facials", href: "/services#lumiere-glow-facial" },
      { label: "Bridal Sanctuary Packages", href: "/services#full-bridal-sanctuary-package" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cancellation Policy", href: "#" },
    ],
  },

  booking: {
    enabled: true,
    url: "/contact",
    label: "Book Appointment",
    ctaHeadline: "Ready for your next look?",
    ctaDescription:
      "Tell us what you're looking for and we'll help you find the right service. Whether it's a subtle refresh or a complete couture metamorphosis, our sanctuary welcomes you.",
    phoneBookingNote: "Direct concierge line available during atelier hours.",
  },

  seo: {
    title: "Lumière Salon | Hair & Beauty Sanctuary",
    titleTemplate: "%s | Lumière Salon",
    description:
      "Thoughtful styling, modern beauty treatments and personalized care in a tranquil space designed around your natural beauty.",
    keywords: [
      "luxury hair salon",
      "French balayage",
      "precision haircut",
      "bridal hair and makeup",
      "hydro-glow facial",
      "editorial hair styling",
      "couture beauty",
      "hair color sanctuary",
    ],
    ogImage:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200&auto=format&fit=crop",
    canonicalUrl: "https://lumieresalon.demo",
  },

  theme: {
    defaultTheme: "ivory-luxe",
    accent: "#B8976C",
  },

  stats: [
    {
      value: "8+",
      label: "Years Experience",
      description: "Dedicated to editorial hair & beauty craft",
    },
    {
      value: "5K+",
      label: "Happy Clients",
      description: "Bespoke experiences tailored to individuals",
    },
    {
      value: "4.9 / 5.0",
      label: "Client Rating",
      description: "Demonstration rating based on client love",
    },
    {
      value: "15+",
      label: "Beauty Rituals",
      description: "Hair artistry, skin renewal, and bridal",
    },
  ],

  benefits: [
    {
      title: "Master Stylists & Artists",
      description:
        "Our specialists continuously train with international academies in Paris and London to deliver modern, bespoke artistry.",
      iconName: "Sparkles",
    },
    {
      title: "Personalized Consultations",
      description:
        "Every appointment begins with an in-depth conversation exploring your lifestyle, hair texture, and aesthetic vision.",
      iconName: "Compass",
    },
    {
      title: "Clean & Luxury Formulations",
      description:
        "We partner exclusively with low-tox, high-performance formulations that nourish and protect cellular health.",
      iconName: "ShieldCheck",
    },
    {
      title: "Serene Private Environment",
      description:
        "Unwind with artisanal refreshments, warm aromatherapy towels, and an intimate sanctuary setting.",
      iconName: "Coffee",
    },
  ],

  trustRating: {
    score: "4.9 / 5.0",
    label: "Client Rating",
    reviewsCount: "Demo Portfolio Review",
  },

  announcement: {
    text: "Appointments available this week for styling & rituals",
    actionText: "Reserve a visit",
    href: "/contact",
  },
};

/**
 * =========================================================================
 * REUSABLE BRAND & COMMUNICATION HELPERS
 * =========================================================================
 */
export function getSalonName(): string {
  return salonConfig.brand.name;
}

export function getSalonShortName(): string {
  return salonConfig.brand.shortName;
}

export function getSalonTagline(): string {
  return salonConfig.brand.tagline;
}

export function getPhoneHref(): string {
  const cleanPhone = salonConfig.contact.phone.replace(/[^0-9+]/g, "");
  return `tel:${cleanPhone}`;
}

export function getEmailHref(subject?: string): string {
  const base = `mailto:${salonConfig.contact.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}

export function getGoogleMapsHref(): string {
  return (
    salonConfig.location.googleMapsDirectionsUrl ||
    `https://maps.google.com/?q=${encodeURIComponent(salonConfig.location.full)}`
  );
}

export function getWhatsAppHref(customMessage?: string): string {
  const cleanPhone = salonConfig.contact.whatsapp.replace(/[^0-9]/g, "");
  const defaultMsg = `Hello ${salonConfig.brand.name}, I would like to inquire about booking an appointment.`;
  const encodedText = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function formatPrice(price: number): string {
  return `$${price}`;
}
