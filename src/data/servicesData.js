// Central dictionary for every bookable package.
// Update this file to add, remove, or reprice services — every page reads from here.

export const categories = [
  {
    id: "facial-bundles",
    label: "Facial & Bleach Bundles",
    icon: "sparkles",
  },
  {
    id: "cleanup-packs",
    label: "Cleanups & Honey Wax Packs",
    icon: "droplet",
  },
  {
    id: "skin-bridal",
    label: "Skin Care & Bridal",
    icon: "gem",
  },
  {
    id: "full-body-waxing",
    label: "Full Body Waxing & Grooming",
    icon: "flame",
  },
  {
    id: "mani-pedi",
    label: "Mani-Pedi & Salon Combos",
    icon: "hand",
  },
];

export const packages = [
  // Facial & Bleach Bundles
  {
    id: "vlcc-anti-tan-facial-combo",
    category: "facial-bundles",
    title: "VLCC Anti-Tan Facial Combo",
    price: 1999,
    items: [
      "VLCC Anti Tan Facial",
      "Face & Neck Bleach",
      "Full Arms Wax Honey",
      "Half Legs Wax Honey",
      "Underarms Wax Honey",
      "VLCC Pedicure",
      "Any Threadwork",
    ],
  },
  {
    id: "fyc-dtan-facial-hair-spa-combo",
    category: "facial-bundles",
    title: "FYC D-Tan Facial & Hair Spa Combo",
    price: 1599,
    items: [
      "FYC D-Tan Facial",
      "Loreal Hair Spa",
      "Face & Neck Bleach",
      "Any Threadwork",
    ],
    bonus: "Complementary Back Half Bleach",
  },
  {
    id: "fyc-hydra-facial-chocolate-special",
    category: "facial-bundles",
    title: "FYC Hydra Facial Chocolate Special",
    price: 2499,
    items: [
      "FYC Hydra Facial",
      "Face & Neck Bleach",
      "Full Legs Wax Chocolate",
      "Full Arms Wax Chocolate",
      "Underarms Wax Chocolate",
      "FYC Pedicure & Manicure",
      "Any Threadwork",
    ],
  },
  {
    id: "o3-luxury-facial-rica-combo",
    category: "facial-bundles",
    title: "O3+ Luxury Facial Rica Combo",
    price: 2999,
    items: [
      "O3+ Facial",
      "Full Arms Wax Rica",
      "Full Legs Wax Rica",
      "Underarms Wax Rica",
      "Face Bleach",
      "Any Threadwork",
    ],
  },

  // Cleanups & Honey Wax Packs
  {
    id: "ozone-dtan-express-cleanse",
    category: "cleanup-packs",
    title: "Ozone D-Tan Express Cleanse",
    price: 1199,
    items: [
      "Ozone D-Tan Cleanup",
      "Ozone Face & Neck D-Tan",
      "Head Massage",
      "Any Threadwork",
    ],
  },
  {
    id: "oxy-life-brightening-cleanse-pack",
    category: "cleanup-packs",
    title: "Oxy Life Brightening Cleanse Pack",
    price: 1299,
    items: [
      "Oxy Life Cleanup",
      "Full Arms Wax Honey",
      "Half Legs Wax Honey",
      "Underarms Wax Honey",
      "Face Bleach",
      "Any Threadwork",
    ],
  },
  {
    id: "fruit-essential-refresh-cleanup",
    category: "cleanup-packs",
    title: "Fruit Essential Refresh Cleanup",
    price: 999,
    items: [
      "Fruit Cleanup",
      "Fruit Bleach",
      "Full Arms Wax Honey",
      "Half Legs Wax Honey",
      "Head Massage",
      "Any Threadwork",
    ],
  },

  // Skin Care & Bridal
  {
    id: "aroma-magic-organic-fruit-facial",
    category: "skin-bridal",
    title: "Aroma Magic Organic Fruit Facial",
    price: 999,
    items: ["Aroma Magic Facial Fruit", "Face Bleach", "Any Threadwork"],
  },
  {
    id: "oxy-facial-premium-hair-spa",
    category: "skin-bridal",
    title: "Oxy Facial Premium Hair Spa",
    price: 1299,
    items: ["Oxy Facial", "Loreal Hair Spa", "Face Bleach", "Any Threadwork"],
  },
  {
    id: "blossom-kochhar-bridal-glow-care",
    category: "skin-bridal",
    title: "Blossom Kochhar Bridal Glow Care",
    price: 1499,
    items: [
      "Blossom Kochhar Bridal Facial",
      "Face Bleach / D-Tan",
      "Full Arms Wax Honey",
      "Underarms Wax Honey",
      "Any Threadwork",
    ],
  },
  {
    id: "ozone-gold-facial-therapy",
    category: "skin-bridal",
    title: "Ozone Gold Facial Therapy",
    price: 1499,
    items: [
      "Ozone Gold Facial",
      "Gold Bleach",
      "Full Arms Wax Honey",
      "Underarms Wax Honey",
      "Head Massage",
      "Any Threadwork",
    ],
  },
  {
    id: "lotus-whitening-premium-chocolate-bundle",
    category: "skin-bridal",
    title: "Lotus Whitening Premium Chocolate Bundle",
    price: 2199,
    items: [
      "Lotus Whitening Facial",
      "Full Arms Wax Chocolate",
      "Full Legs Wax Chocolate",
      "Underarms Wax Chocolate",
      "Face & Neck Bleach",
      "Any Threadwork",
    ],
    bonus: "Complementary 20 Min Head Massage",
  },

  // Full Body Waxing & Grooming
  {
    id: "full-body-honey-wax-basics",
    category: "full-body-waxing",
    title: "Full Body Honey Wax Basics",
    price: 999,
    items: ["Full Body Honey Wax", "15 Min Head Massage", "Any Threadwork"],
  },
  {
    id: "full-body-honey-bikini-pack",
    category: "full-body-waxing",
    title: "Full Body Honey Bikini Pack",
    price: 1499,
    items: ["Full Body Wax Honey", "Bikini Wax", "Any Threadwork"],
  },
  {
    id: "full-body-chocolate-premium-glow",
    category: "full-body-waxing",
    title: "Full Body Chocolate Premium Glow",
    price: 1899,
    items: ["Full Body Wax Chocolate", "Bikini Wax Chocolate", "Any Threadwork"],
  },
  {
    id: "full-body-rica-luxury-grooming",
    category: "full-body-waxing",
    title: "Full Body Rica Luxury Grooming",
    price: 2299,
    items: ["Full Body Rica Wax", "Bikini Wax Rica", "Any Threadwork"],
  },
  {
    id: "honey-wax-grooming-essentials",
    category: "full-body-waxing",
    title: "Honey Wax Grooming Essentials",
    price: 999,
    items: [
      "Face Bleach",
      "Full Arms Wax Honey",
      "Full Legs Wax Honey",
      "Underarms Wax Honey",
      "Head Massage",
      "Any Threadwork",
    ],
  },
  {
    id: "chocolate-wax-deep-smoothness-pack",
    category: "full-body-waxing",
    title: "Chocolate Wax Deep Smoothness Pack",
    price: 1499,
    items: [
      "Full Arms Wax Chocolate",
      "Full Legs Wax Chocolate",
      "Underarms Wax Chocolate",
      "Hand & Foot D-Tan",
      "Any Threadwork",
    ],
  },

  // Mani-Pedi & Salon Combos
  {
    id: "o3-bubblegum-luxury-pedicure-combo",
    category: "mani-pedi",
    title: "O3+ Bubblegum Luxury Pedicure Combo",
    price: 999,
    items: ["O3+ Pedicure Bubblegum", "O3+ Manicure Bubblegum", "Any Threadwork"],
  },
  {
    id: "oxy-life-express-mani-pedi",
    category: "mani-pedi",
    title: "Oxy Life Express Mani-Pedi",
    price: 999,
    items: ["Oxy Life Pedicure / Manicure", "Head Massage", "Any Threadwork"],
  },
  {
    id: "aroma-magic-blueberry-nourishment-pack",
    category: "mani-pedi",
    title: "Aroma Magic Blueberry Nourishment Pack",
    price: 1499,
    items: [
      "Aroma Magic Blueberry Pedi / Mani",
      "Full Arms Wax Honey",
      "Half Legs Wax Honey",
      "Any Threadwork",
    ],
  },
  {
    id: "sara-dtan-hair-revitalization-combo",
    category: "mani-pedi",
    title: "Sara D-Tan Hair Revitalization Combo",
    price: 1199,
    items: [
      "Sara D-Tan / Rose Pedicure / Manicure",
      "Loreal Hair Spa",
      "Any Threadwork",
    ],
  },
  {
    id: "rica-luxury-waxing-massage-treatment",
    category: "mani-pedi",
    title: "Rica Luxury Waxing & Massage Treatment",
    price: 1799,
    items: [
      "Full Arms Wax Rica",
      "Full Legs Wax Rica",
      "Underarms Wax Rica",
      "Face Massage 15 Min",
      "Head Massage 15 Min",
      "Any Threadwork",
    ],
  },
];

export function getPackagesByCategory(categoryId) {
  return packages.filter((pkg) => pkg.category === categoryId);
}

// Deals surfaced on the Home page — the widest-margin, most-booked bundles.
export const homeDeals = [
  "vlcc-anti-tan-facial-combo",
  "fyc-hydra-facial-chocolate-special",
  "full-body-honey-bikini-pack",
  "aroma-magic-blueberry-nourishment-pack",
].map((id) => packages.find((pkg) => pkg.id === id));

// WhatsApp business number — replace with the real operational number before launch.
export const WHATSAPP_NUMBER = "91XXXXXXXXXX";

export function buildWhatsAppLink(pkg) {
  const message = `Hi, I want to book the ${pkg.title} for ₹${pkg.price.toLocaleString(
    "en-IN"
  )}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
