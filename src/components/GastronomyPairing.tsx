"use client";

import React, { useState } from "react";
import { Coffee, Wine, Dumbbell, Baby, Sparkles, Check } from "lucide-react";

const PAIRING_CATEGORIES = [
  {
    id: "coffee",
    title: "Specialty Espresso & Coffee",
    icon: <Coffee className="w-5 h-5 text-amber-400" />,
    badge: "Specialty Coffee Assn. Compliant",
    headline: "Unlocks Subtle Terroir & Sweet Crema",
    desc: "Water makes up 98.5% of brewed coffee. The balanced magnesium and calcium ions in Natural Resources™ bond selectively with oxygenated flavor compounds in single-origin beans, preventing flat sourness or harsh bitterness.",
    metrics: [
      { label: "Optimal TDS for Extraction", value: "118 mg/L" },
      { label: "Total Hardness (CaCO3)", value: "68 mg/L" },
      { label: "Crema Density Boost", value: "+32%" },
    ],
  },
  {
    id: "wine",
    title: "Vintage Wine & Haute Cuisine",
    icon: <Wine className="w-5 h-5 text-rose-400" />,
    badge: "Sommelier Choice",
    headline: "Cleanses The Palate Without Stripping Tannins",
    desc: "High-sulfate or chlorinated tap water damages the delicate bouquet of grand cru vintages. Natural Resources Glacier Reserve presents a pristine neutral canvas, cleansing the tongue between courses while allowing natural acidity to shine.",
    metrics: [
      { label: "Palate Neutrality Score", value: "99.8%" },
      { label: "pH Harmony", value: "8.2 pH" },
      { label: "Zero Chlorine Taint", value: "0.00 ppb" },
    ],
  },
  {
    id: "athletics",
    title: "High-Performance Athletic Recovery",
    icon: <Dumbbell className="w-5 h-5 text-cyan-400" />,
    badge: "Cellular Osmosis",
    headline: "Rapid Rehydration Without Gastric Sloshing",
    desc: "Micro-clustered living alkaline water passes rapidly through cellular aquaporin channels. Naturally replenishes active electrolytes lost in sweat to prevent lactic acid cramps and sustain peak aerobic output.",
    metrics: [
      { label: "Cellular Uptake Speed", value: "3× Faster" },
      { label: "Ionic Electrolytes", value: "Enriched" },
      { label: "Lactic Buffering", value: "pH 8.8" },
    ],
  },
  {
    id: "infant",
    title: "Family & Infant Formula Safe",
    icon: <Baby className="w-5 h-5 text-emerald-400" />,
    badge: "Pediatric Purity",
    headline: "Ultra-Low Sodium & Zero Nitrates",
    desc: "Delicate infant kidneys require water with zero chemical nitrates, zero fluoride, and minimal sodium. Natural Resources fulfills all pediatric guidelines for preparing baby formula and nursery meals.",
    metrics: [
      { label: "Nitrate / Nitrite", value: "<0.01 mg/L" },
      { label: "Sodium Level", value: "3.2 mg/L" },
      { label: "Microbial Count", value: "0 CFU" },
    ],
  },
];

export function GastronomyPairing() {
  const [selectedId, setSelectedId] = useState("coffee");
  const activePairing = PAIRING_CATEGORIES.find((p) => p.id === selectedId) || PAIRING_CATEGORIES[0];

  return (
    <section className="py-24 bg-[#020912] border-t border-cyan-500/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Art of Water Gastronomy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            How Living Water Elevates Life & Flavor
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Water is not just hydration — it is the primary flavor medium in gastronomy and the foundational solvent of human cellular physiology.
          </p>
        </div>

        {/* 4 Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {PAIRING_CATEGORIES.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3 ${
                selectedId === p.id
                  ? "bg-cyan-950/60 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.25)] scale-[1.02]"
                  : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
              }`}
            >
              <div className="p-2 rounded-xl bg-slate-800/80 shrink-0">
                {p.icon}
              </div>
              <div className="text-xs font-bold text-white line-clamp-1">{p.title}</div>
            </button>
          ))}
        </div>

        {/* Active Pairing Detail Showcase */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border-cyan-500/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30">
                {activePairing.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {activePairing.headline}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activePairing.desc}
              </p>
            </div>

            <div className="lg:col-span-4 space-y-3">
              {activePairing.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#020b14]/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{m.label}</span>
                  <span className="text-sm font-black text-white font-mono">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

