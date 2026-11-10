export interface MineralDetail {
  name: string;
  chemical: string;
  naturalResources: number;
  tapWater: number;
  purifiedRO: number;
  unit: string;
  benefit: string;
}

export const MINERAL_SPECS: MineralDetail[] = [
  {
    name: "Total Dissolved Solids (TDS)",
    chemical: "TDS",
    naturalResources: 118,
    tapWater: 380,
    purifiedRO: 12,
    unit: "mg/L",
    benefit: "Optimal mineral density creates a smooth, rounded mouthfeel and rapid cellular hydration.",
  },
  {
    name: "pH Balance",
    chemical: "pH",
    naturalResources: 8.4,
    tapWater: 7.1,
    purifiedRO: 5.8,
    unit: "pH",
    benefit: "Naturally alkaline to help buffer dietary acidity, reduce oxidative stress, and assist digestion.",
  },
  {
    name: "Magnesium (Mg)",
    chemical: "Mg²⁺",
    naturalResources: 16.5,
    tapWater: 8.0,
    purifiedRO: 0.1,
    unit: "mg/L",
    benefit: "Crucial for heart rhythm, muscle recovery, neural calming, and enzymatic energy synthesis.",
  },
  {
    name: "Calcium (Ca)",
    chemical: "Ca²⁺",
    naturalResources: 28.2,
    tapWater: 45.0,
    purifiedRO: 0.3,
    unit: "mg/L",
    benefit: "Bioavailable ionic form strengthens bone density and optimizes cellular membrane signaling.",
  },
  {
    name: "Silica (SiO₂)",
    chemical: "SiO₂",
    naturalResources: 19.8,
    tapWater: 2.1,
    purifiedRO: 0.0,
    unit: "mg/L",
    benefit: "The 'beauty mineral' that triggers natural collagen production for radiant skin, nails, and joints.",
  },
  {
    name: "Potassium (K)",
    chemical: "K⁺",
    naturalResources: 4.8,
    tapWater: 1.5,
    purifiedRO: 0.1,
    unit: "mg/L",
    benefit: "Maintains intracellular fluid balance and prevents cramping during intense exertion.",
  },
  {
    name: "Bicarbonate (HCO₃)",
    chemical: "HCO₃⁻",
    naturalResources: 142.0,
    tapWater: 95.0,
    purifiedRO: 4.0,
    unit: "mg/L",
    benefit: "Acts as a biological metabolic buffer, promoting gastrointestinal equilibrium.",
  },
  {
    name: "Microplastics & PFAS",
    chemical: "PFAS/MP",
    naturalResources: 0.0,
    tapWater: 18.4,
    purifiedRO: 2.1,
    unit: "particles/L",
    benefit: "100% verified undetectable down to 0.0001 micron through dual-stage nano-barrier testing.",
  }
];

export interface FiltrationStage {
  stage: number;
  title: string;
  subtitle: string;
  iconName: string;
  tdsIn: string;
  tdsOut: string;
  description: string;
  scientificDetail: string;
}

export const FILTRATION_STAGES: FiltrationStage[] = [
  {
    stage: 1,
    title: "Protected Glacial Catchment",
    subtitle: "Pristine High-Elevation Spring Aquifer",
    iconName: "Mountain",
    tdsIn: "145 mg/L",
    tdsOut: "140 mg/L",
    description: "Sourced directly from private deep-bore glacial aquifers sealed 600 feet below impermeable bedrock, naturally protected from industrial run-off and agricultural chemicals.",
    scientificDetail: "Hydrogeologically shielded artesian aquifer with a continuous positive hydrostatic pressure barrier.",
  },
  {
    stage: 2,
    title: "Multi-Depth Sediment Clarification",
    subtitle: "5-Micron Polypropylene Graded Matrix",
    iconName: "Layers",
    tdsIn: "140 mg/L",
    tdsOut: "135 mg/L",
    description: "Removes all microscopic suspended solids, silt, and natural volcanic dust without disturbing essential dissolved ionic electrolytes.",
    scientificDetail: "Gradient density thermal-bonded microfibers prevent surface blinding and ensure laminar fluid transit.",
  },
  {
    stage: 3,
    title: "Silver-Catalyzed Activated Carbon",
    subtitle: "Coconut Shell Microporous Bed",
    iconName: "Sparkles",
    tdsIn: "135 mg/L",
    tdsOut: "130 mg/L",
    description: "Ultra-high surface area (1,150 m²/g) virgin coconut shell carbon captures volatile organic compounds (VOCs), residual chlorine, and off-taste aromatics.",
    scientificDetail: "Impregnated with bactericidal colloidal silver ions to inhibit internal microbial colonization permanently.",
  },
  {
    stage: 4,
    title: "Dual-Pass Precision Nano-Filtration",
    subtitle: "0.0001 Micron Selective Separation",
    iconName: "Filter",
    tdsIn: "130 mg/L",
    tdsOut: "15 mg/L",
    description: "Cross-flow spiral-wound polyamide membranes reject heavy metals (lead, arsenic, mercury), nitrates, pharmaceuticals, and synthetic PFAS chemicals.",
    scientificDetail: "Operated at controlled transmembrane osmotic pressure to eliminate 99.999% of inorganic contaminants.",
  },
  {
    stage: 5,
    title: "Volcanic Remineralization & Bio-Activation",
    subtitle: "Himalayan & Basalt Mineral Bed",
    iconName: "Gem",
    tdsIn: "15 mg/L",
    tdsOut: "118 mg/L",
    description: "Purified water is slowly passed over curated volcanic basalt, Maifan stones, and calcite crystals, enriching it with bioavailable magnesium, calcium, and silica.",
    scientificDetail: "Naturally adjusts the water to an alkaline pH 8.4 while creating a velvety micro-clustered water structure.",
  },
  {
    stage: 6,
    title: "Dual-Band UV-C Sterilization",
    subtitle: "254nm High-Intensity Germicidal Reactor",
    iconName: "Sun",
    tdsIn: "118 mg/L",
    tdsOut: "118 mg/L",
    description: "Cold ultraviolet photons penetrate microbial DNA and RNA, inactivating 99.9999% of bacteria, viruses, and cryptosporidium without using chlorine or heat.",
    scientificDetail: "Continuous 40 mJ/cm² dosage with internal quartz sleeve automated wiper mechanisms.",
  },
  {
    stage: 7,
    title: "Ozone Micro-Bubble Polishing",
    subtitle: "Nascent Oxygen Bio-Sanitization",
    iconName: "ShieldCheck",
    tdsIn: "118 mg/L",
    tdsOut: "118 mg/L",
    description: "Dissolved tri-atomic oxygen (O₃) sanitizes the water and the container interior upon bottling, then breaks down naturally into pure breathable oxygen within 20 minutes.",
    scientificDetail: "Creates an aseptic environment inside every sealed glass bottle and 5-gallon carboy with zero chemical residues.",
  },
  {
    stage: 8,
    title: "Cleanroom ISO-5 Aseptic Bottling",
    subtitle: "Nitrogen Purge & Laser Batch Authentication",
    iconName: "CheckCircle",
    tdsIn: "118 mg/L",
    tdsOut: "118 mg/L (Certified)",
    description: "Hermetically filled inside a positive-pressure medical cleanroom. Every bottle receives a laser-etched batch code linked to live certified laboratory test results.",
    scientificDetail: "HEPA 99.997% air-filtered containment with robotic contactless cap sealing.",
  }
];

export const LAB_CERTIFICATES = {
  batchNumber: "NR-2026-B849",
  testDate: "November 08, 2026",
  laboratory: "Eurofins Scientific & SGS Global Water Analytics",
  purityScore: "99.998%",
  phResult: "8.42 ± 0.05",
  tdsResult: "118.4 mg/L",
  microbialTest: "0 CFU/100mL (Absent)",
  heavyMetals: "Undetectable (<0.001 ppb)",
  microplastics: "0 Particles / Liter",
  certifications: [
    { title: "NSF/ANSI Standard 60 & 61", status: "Certified" },
    { title: "ISO 22000 Food Safety Management", status: "Verified" },
    { title: "WHO Drinking Water Guidelines Compliant", status: "Compliant" },
    { title: "IBWA (Intl. Bottled Water Assn.) Excellence", status: "Gold Standard" },
  ]
};

