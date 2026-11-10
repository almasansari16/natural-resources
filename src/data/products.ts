export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: "glass" | "dispenser" | "bulk" | "accessory";
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  unit: string;
  volume: string;
  ph: string;
  tds: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  description: string;
  features: string[];
  imageType: "bottle-glass" | "carboy-5gal" | "bottle-active" | "bottle-sparkling" | "dispenser" | "stand" | "tanker" | "flask";
  inStock: boolean;
  sustainableReturnable: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "nr-glacier-glass-750",
    name: "Glacier Reserve Glass Edition",
    tagline: "Bottled directly at the glacial mountain source",
    category: "glass",
    categoryLabel: "Artisanal Glass",
    price: 36,
    originalPrice: 42,
    unit: "Case of 12 (750ml each)",
    volume: "9.0 Liters total",
    ph: "8.2 Natural Alkaline",
    tds: "115 mg/L",
    badge: "Bestseller",
    rating: 4.95,
    reviewsCount: 328,
    description: "Ultra-pure spring water bottled in recyclable heavy-base Italian flint glass. Naturally filtered through volcanic basalt layers, imparting crisp silky minerality with zero chemical contact.",
    features: [
      "Zero microplastics guaranteed (Glass hermetic seal)",
      "Naturally balanced silica & calcium electrolytes",
      "UV-C sterilized & nitrogen dosed for supreme freshness",
      "Returnable empty glass program with $6 store credit"
    ],
    imageType: "bottle-glass",
    inStock: true,
    sustainableReturnable: true,
  },
  {
    id: "nr-5gal-carboy",
    name: "Natural Resources 5-Gallon Eco-Carboy",
    tagline: "Smart doorstep supply for homes and high-performance offices",
    category: "dispenser",
    categoryLabel: "5-Gallon & Dispensers",
    price: 18,
    originalPrice: 22,
    unit: "19-Liter Jug (Refill)",
    volume: "19.0 Liters",
    ph: "8.4 Living Alkaline",
    tds: "120 mg/L",
    badge: "Most Popular",
    rating: 4.98,
    reviewsCount: 1420,
    description: "Our flagship doorstep water supply jug. Crafted from medical-grade BPA-free Tritan with an ergonomic molded handle. Fitted with a smart NFC replenishment tag for 1-tap reordering.",
    features: [
      "8-stage nano-filtered with natural Himalayan remineralization",
      "BPA-free, BPS-free, 100% food-grade Tritan carboy",
      "Doorstep delivery with automated empty bottle pickup",
      "Compatible with all top-load and bottom-load dispensers"
    ],
    imageType: "carboy-5gal",
    inStock: true,
    sustainableReturnable: true,
  },
  {
    id: "nr-active-alkaline-1l",
    name: "Alkaline+ Cellular Hydration",
    tagline: "High-pH active water with essential bio-electrolytes",
    category: "glass",
    categoryLabel: "Artisanal Glass",
    price: 38,
    originalPrice: 45,
    unit: "Case of 12 (1 Liter each)",
    volume: "12.0 Liters total",
    ph: "8.8 Active Alkaline",
    tds: "140 mg/L",
    badge: "Performance",
    rating: 4.92,
    reviewsCount: 215,
    description: "Engineered for rapid cellular rehydration and metabolic balance. Naturally enriched with ionic magnesium, potassium, and calcium to neutralize acidity and accelerate recovery.",
    features: [
      "Optimal 8.8 pH level to assist lactic acid buffering",
      "Infused with natural bio-available electrolytes",
      "Zero artificial additives, flavors, or sweeteners",
      "Lightweight shatter-resistant recycled aluminum bottle"
    ],
    imageType: "bottle-active",
    inStock: true,
    sustainableReturnable: false,
  },
  {
    id: "nr-sparkling-alpine",
    name: "Alpine Effervescent Sparkling",
    tagline: "Fine micro-bubbles with crystalline limestone minerality",
    category: "glass",
    categoryLabel: "Artisanal Glass",
    price: 40,
    originalPrice: 48,
    unit: "Case of 12 (750ml each)",
    volume: "9.0 Liters total",
    ph: "7.8 Naturally Crisp",
    tds: "135 mg/L",
    badge: "Epicurean",
    rating: 4.89,
    reviewsCount: 184,
    description: "Fine, velvety carbonation that gently tingles the palate. Perfect for gourmet dining, wine pairings, and signature mocktails.",
    features: [
      "Subtle champagne-grade micro-effervescence",
      "Bottled at source under chilled controlled atmosphere",
      "Elegant embossed cobalt glass bottle",
      "Recommended by Michelin-star culinary sommeliers"
    ],
    imageType: "bottle-sparkling",
    inStock: true,
    sustainableReturnable: true,
  },
  {
    id: "nr-arctic-flow-dispenser",
    name: "Arctic Flow™ Touchless Smart Dispenser",
    tagline: "Medical-grade stainless reservoir with UV-C auto-sanitization",
    category: "dispenser",
    categoryLabel: "5-Gallon & Dispensers",
    price: 289,
    originalPrice: 349,
    unit: "Complete Unit + 1 Free Carboy",
    volume: "Bottom Loading (Fits 3 & 5 Gal)",
    ph: "Maintains 8.4 pH",
    tds: "Precision Flow",
    badge: "Flagship Gear",
    rating: 4.97,
    reviewsCount: 460,
    description: "The ultimate modern water dispenser. Features bottom-loading concealed storage, sensor-driven touchless cup dispense, rapid ice-cold and piping hot tea temperatures, and 24/7 internal UV-C sanitization.",
    features: [
      "Bottom-load design — zero heavy lifting required",
      "Built-in UV-C sterilization cycle runs every 4 hours",
      "Whisper-quiet compressor chilling to 4°C (39°F)",
      "Smart water level LED alert & child-safety hot water lock"
    ],
    imageType: "dispenser",
    inStock: true,
    sustainableReturnable: false,
  },
  {
    id: "nr-ceramic-stand",
    name: "Artisan Ceramic & Bamboo Tabletop Stand",
    tagline: "Zero-electricity gravity water station for minimalist spaces",
    category: "accessory",
    categoryLabel: "Smart Accessories",
    price: 65,
    originalPrice: 79,
    unit: "Complete Stand + Solid Brass Spigot",
    volume: "Supports 3-Gal & 5-Gal Carboys",
    ph: "Pure Gravity",
    tds: "Natural Chill",
    badge: "Eco Design",
    rating: 4.86,
    reviewsCount: 92,
    description: "Handcrafted natural stoneware ceramic reservoir resting on a sustainable cross-cut solid bamboo base. Keeps water naturally cool through microporous evaporative cooling.",
    features: [
      "100% lead-free, food-grade glazed natural ceramic",
      "Solid stainless steel & brass high-flow spigot",
      "Natural evaporative cooling keeps water 10°F below ambient",
      "Zero cords, zero noise, zero energy consumption"
    ],
    imageType: "stand",
    inStock: true,
    sustainableReturnable: false,
  },
  {
    id: "nr-bulk-tanker",
    name: "Commercial Tanker Supply Logistics",
    tagline: "High-capacity food-grade stainless tankers for hospitality and events",
    category: "bulk",
    categoryLabel: "Bulk Supply & Fleet",
    price: 480,
    unit: "5,000 Liters (Starting tier)",
    volume: "5,000L to 25,000L",
    ph: "8.2 Tested Batch",
    tds: "115 mg/L",
    badge: "B2B Logistics",
    rating: 4.99,
    reviewsCount: 88,
    description: "Dedicated fleet of food-grade 316-stainless steel tanker trucks providing bulk pure water dispatch for hotels, hospitals, industrial cleanrooms, emergency reserves, and outdoor festivals.",
    features: [
      "Rapid dispatch within 60 minutes across urban coverage zones",
      "Certified batch laboratory TDS & microbial certificate on delivery",
      "High-pressure food-grade sanitary transfer hoses included",
      "Scheduled contract refill or 24/7 on-call emergency supply"
    ],
    imageType: "tanker",
    inStock: true,
    sustainableReturnable: false,
  },
  {
    id: "nr-thermal-flask",
    name: "Glacier Flask Matte 32oz (950ml)",
    tagline: "Triple-insulated surgical stainless steel personal flask",
    category: "accessory",
    categoryLabel: "Smart Accessories",
    price: 34,
    originalPrice: 42,
    unit: "Includes Chug & Straw Caps",
    volume: "950ml (32 oz)",
    ph: "Universal",
    tds: "Zero Leaching",
    rating: 4.91,
    reviewsCount: 164,
    description: "Double-wall vacuum insulation with a copper thermal barrier. Keeps Natural Resources spring water ice-cold for 36 hours. Powder-coated in deep ocean navy with laser-engraved monogram.",
    features: [
      "18/8 Pro-grade surgical stainless steel",
      "Cold for 36 hours, steaming hot for 16 hours",
      "100% leakproof flex-handle sports lid",
      "Dishwasher safe and condensation-free exterior"
    ],
    imageType: "flask",
    inStock: true,
    sustainableReturnable: false,
  }
];

