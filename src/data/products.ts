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
    urduName: "500 ایم ایل چھوٹی بوتل",
    tagline: "Safar, mehmaan nawazi aur daily use ke liye perfect",
    size: "500 ml",
    pricePkr: 50,
    price: 50,
    originalPricePkr: 60,
    originalPrice: 60,
    unit: "Carton: Rs. 600 (Pack of 12)",
    volume: "500 ml",
    ph: "8.2 Living Mineral",
    tds: "118 mg/L",
    categoryLabel: "Small Bottle",
    idealFor: "Travel, Events, Schools & Meetings",
    badge: "Most Handy",
    imageSrc: "/images/hero-outdoor-bench.jpg",
    features: [
      "Crystal clear leak-proof bottle with black cap",
      "Meetha aur refreshing mineral taste",
      "Carton delivery available across city",
      "PSQCA Certified Safe Drinking Water",
    ],
  },
  {
    id: "nr-1500ml-pack",
    name: "Natural Resources 1.5 Liter Bottle",
    urduName: "1.5 لیٹر فیملی بوتل",
    tagline: "Dining table, family lunch aur dinner ke liye behtareen",
    size: "1.5 Liters",
    pricePkr: 100,
    price: 100,
    originalPricePkr: 120,
    originalPrice: 120,
    unit: "Carton: Rs. 600 (Pack of 6)",
    volume: "1.5 Liters",
    ph: "8.2 Living Mineral",
    tds: "118 mg/L",
    categoryLabel: "Family Bottle",
    idealFor: "Home Dining, Restaurants & Family Outings",
    badge: "Family Pack",
    imageSrc: "/images/natural-resources-bottle.jpg",
    features: [
      "Pure living mineral water for whole family",
      "Easy grip ergonomic bottle",
      "Zero chemical smell, naturally sweet",
      "Bulk carton home delivery at wholesale rate",
    ],
  },
  {
    id: "nr-19l-can",
    name: "19-Liter / 5-Gallon Dispenser Bottle",
    urduName: "19 لیٹر ڈسپنسر کین (Ghar aur Office)",
    tagline: "Ghar aur office ke daily dispenser ke liye doorstep supply",
    size: "19 Liters (5 Gallon)",
    pricePkr: 250,
    price: 250,
    originalPricePkr: 300,
    originalPrice: 300,
    unit: "Per Can Refill (Doorstep)",
    volume: "19 Liters",
    ph: "8.2 Pure Mineral",
    tds: "118 mg/L",
    categoryLabel: "Dispenser Supply",
    idealFor: "Homes, Offices, Hospitals & Gyms",
    badge: "Bestseller Supply",
    imageSrc: "/images/dispenser-kitchen-tap.jpg",
    features: [
      "Doorstep delivery: Khali can le kar naya bhara hua can lagana",
      "Food-grade BPA-Free safe heavy can",
      "Haftawaar ya rozana automated supply schedule",
      "Sab dispensers (Top load aur Bottom load) ke sath compatible",
    ],
  },
  {
    id: "nr-wooden-stand-tap",
    name: "19L Wooden Countertop Stand & Fast Tap Kit",
    urduName: "لکڑی کا کاؤنٹر ٹاپ اسٹینڈ بمعہ فاسٹ ٹیپ",
    tagline: "Kitchen slab aur dining table ke liye aesthetic wooden stand",
    size: "Solid Oak Stand + Tap",
    pricePkr: 2900,
    price: 2900,
    originalPricePkr: 3500,
    originalPrice: 3500,
    unit: "Wooden Stand + Food-Grade Tap",
    volume: "Kitchen Accessory",
    ph: "8.2 Living Mineral",
    tds: "118 mg/L",
    categoryLabel: "Kitchen Gear",
    idealFor: "Modern Kitchens, Dining Counters & Cafes",
    badge: "Trending Decor",
    imageSrc: "/images/dispenser-kitchen-tap.jpg",
    features: [
      "Solid moisture-treated natural wooden aesthetic stand",
      "High-flow food-grade leak proof push tap included",
      "Bijli ke baghair aasan paani dispense karein",
      "Kitchen counter ko elegant aur modern look deta hai",
    ],
  },
  {
    id: "nr-smart-dispenser",
    name: "Natural Resources Electric Water Dispenser",
    urduName: "الیکٹرک واٹر ڈسپنسر (ٹھنڈا اور گرم)",
    tagline: "Chilled thanda aur tea ke liye piping hot paani instant",
    size: "Standard 3-Tap Unit",
    pricePkr: 24500,
    price: 24500,
    originalPricePkr: 27000,
    originalPrice: 27000,
    unit: "Unit + 2 Free 19L Bottles",
    volume: "Electric Unit",
    categoryLabel: "Dispenser Gear",
    idealFor: "Homes & Corporate Offices",
    badge: "Special Offer",
    imageSrc: "/images/bottling-plant.jpg",
    features: [
      "Heavy duty compressor: Fast ice-cold chilling",
      "Instant hot water for tea & coffee",
      "Child-lock safety feature on hot tap",
      "1 Year Official Compressor Warranty",
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
