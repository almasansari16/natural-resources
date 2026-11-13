export interface Product {
  id: string;
  name: string;
  urduName?: string;
  tagline: string;
  size: string;
  pricePkr: number;
  originalPricePkr?: number;
  price: number;
  originalPrice?: number;
  unit: string;
  volume: string;
  ph?: string;
  tds?: string;
  idealFor?: string;
  badge?: string;
  category?: string;
  categoryLabel?: string;
  rating?: number;
  reviewsCount?: number;
  description?: string;
  imageSrc?: string;
  imageType?: string;
  sustainableReturnable?: boolean;
  features: string[];
}

export const PAKISTAN_PRODUCTS: Product[] = [
  {
    id: "nr-500ml-pack",
    name: "Natural Resources 500ml Bottle",
    tagline: "Perfect for on-the-go hydration, sports, travel, and guest hospitality",
    size: "500 ml",
    pricePkr: 30,
    price: 30,
    originalPricePkr: 40,
    originalPrice: 40,
    unit: "Single: Rs. 30 | PET Pack: Rs. 330 (Pack of 12)",
    volume: "500 ml",
    ph: "8.2 Living Mineral",
    tds: "118 mg/L",
    categoryLabel: "Personal Bottle",
    idealFor: "Travel, Events, Schools & Boardroom Meetings",
    badge: "Most Popular",
    imageSrc: "/images/friends-cheers-bottles.jpg",
    features: [
      "Single Bottle: Rs. 30 | PET Pack (12 Bottles): Rs. 330",
      "Crystal-clear ergonomic bottle with leak-proof seal",
      "Naturally sweet, crisp, and refreshing mineral taste",
      "Carton doorstep delivery available across all major cities",
      "PSQCA Certified Safe Drinking Water",
    ],
  },
  {
    id: "nr-1500ml-pack",
    name: "Natural Resources 1.5 Liter Bottle",
    tagline: "Ideal for family dining tables, restaurants, and healthy daily hydration",
    size: "1.5 Liters",
    pricePkr: 60,
    price: 60,
    originalPricePkr: 75,
    originalPrice: 75,
    unit: "Single: Rs. 60 | PET Pack: Rs. 330 (Pack of 6)",
    volume: "1.5 Liters",
    ph: "8.2 Living Mineral",
    tds: "118 mg/L",
    categoryLabel: "Family Pack",
    idealFor: "Home Dining, Restaurants & Family Outings",
    badge: "Best Value",
    imageSrc: "/images/natural-resources-bottle.jpg",
    features: [
      "Single Bottle: Rs. 60 | PET Pack (6 Bottles): Rs. 330",
      "Pure living mineral water for the whole family",
      "Easy-grip bottle design for effortless pouring",
      "Zero chemical smell, naturally balanced electrolytes",
      "Convenient doorstep carton delivery at wholesale rates",
    ],
  },
  {
    id: "nr-19l-can",
    name: "19-Liter / 5-Gallon Dispenser Bottle",
    tagline: "Reliable weekly doorstep delivery & empty can exchange for homes & offices",
    size: "19 Liters (5 Gallons)",
    pricePkr: 250,
    price: 250,
    originalPricePkr: 300,
    originalPrice: 300,
    unit: "Per Can Refill (Doorstep)",
    volume: "19 Liters",
    ph: "8.2 Pure Mineral",
    tds: "118 mg/L",
    categoryLabel: "Doorstep Supply",
    idealFor: "Homes, Corporate Offices, Clinics & Gyms",
    badge: "Bestseller Supply",
    imageSrc: "/images/dispenser-kitchen-tap.jpg",
    features: [
      "Doorstep delivery: We collect empty bottles and set up fresh sealed cans",
      "Food-grade BPA-Free durable heavy-duty container",
      "Flexible weekly or bi-weekly automated delivery schedules",
      "Compatible with all standard top-load, bottom-load & table dispensers",
    ],
  },
  {
    id: "nr-wooden-stand-tap",
    name: "19L Wooden Countertop Stand & Fast Tap Kit",
    tagline: "Elegant solid oak countertop stand with high-flow push tap for kitchen slabs",
    size: "Solid Oak Stand + Tap",
    pricePkr: 2900,
    price: 2900,
    originalPricePkr: 3500,
    originalPrice: 3500,
    unit: "Wooden Stand + Food-Grade Tap",
    volume: "Kitchen Accessory",
    ph: "8.2 Living Mineral",
    tds: "118 mg/L",
    categoryLabel: "Kitchen Decor",
    idealFor: "Modern Kitchens, Dining Counters & Cafes",
    badge: "Trending Decor",
    imageSrc: "/images/dispenser-kitchen-tap.jpg",
    features: [
      "Crafted from premium moisture-resistant solid wood",
      "Includes high-flow food-grade leak-proof push tap",
      "Dispenses fresh water effortlessly without electricity",
      "Elevates kitchen countertops with a warm, modern aesthetic",
    ],
  },
  {
    id: "nr-smart-dispenser",
    name: "Natural Resources Electric Water Dispenser",
    tagline: "Instant chilled cold water and piping hot water for tea & coffee",
    size: "Standard 3-Tap Unit",
    pricePkr: 24500,
    price: 24500,
    originalPricePkr: 27000,
    originalPrice: 27000,
    unit: "Unit + 2 Free 19L Bottles",
    volume: "Electric Unit",
    categoryLabel: "Appliance",
    idealFor: "Homes & Corporate Offices",
    badge: "Special Offer",
    imageSrc: "/images/bottling-plant.jpg",
    features: [
      "Heavy-duty tropicalized compressor for rapid ice-cold water",
      "Instant heating tap perfect for black tea, green tea & coffee",
      "Built-in child safety lock on the hot water tap",
      "1-Year official compressor warranty with doorstep service",
    ],
  },
];

export const PRODUCTS: Product[] = PAKISTAN_PRODUCTS;

export const PAKISTAN_CITIES = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Gujranwala",
  "Sialkot",
  "Peshawar",
];
