"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const REVIEWS = [
  {
    author: "Chef Laurent Mercier",
    role: "Michelin-Starred Executive Chef, L'Azur",
    quote: "In haute cuisine, water is the canvas of every reduction, broth, and espresso. Natural Resources Glacier Reserve is unmatched — perfectly balanced 118 TDS with zero sulfur or chlorine taint. Our sommeliers use it exclusively for palate cleansing.",
    rating: 5,
    tag: "Fine Dining Partner",
  },
  {
    author: "Dr. Alistair Vance, MD",
    role: "Chief of Preventative Medicine",
    quote: "With rising concerns regarding nanoplastics in bottled water, Natural Resources' glass and medical-grade Tritan carboy supply is the only brand I recommend to my patients. Their third-party lab transparency is unprecedented in the beverage industry.",
    rating: 5,
    tag: "Clinical Purity",
  },
  {
    author: "Sarah Jenkins",
    role: "Head of Workplace Operations, Nexus BioTech",
    quote: "Managing hydration for 450 tech engineers used to mean piles of plastic bottles and messy pantries. Switching to Natural Resources 5-Gallon smart dispensers saved us over $18,000 annually while completely eliminating single-use plastic.",
    rating: 5,
    tag: "Enterprise Client",
  },
  {
    author: "Kamran & Zoya Siddiqui",
    role: "Residents, Downtown Boulevard",
    quote: "The automated delivery fleet is phenomenal. The driver swaps our two 5-gallon jugs right into our kitchen dispenser every Tuesday without us even having to call. You can immediately taste the crisp mountain sweetness in your morning tea.",
    rating: 5,
    tag: "Verified Family Subscription",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Star className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
          <span>Voices of Distinction</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Trusted by Connoisseurs & Families
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Over 45,000 discerning households and top-tier hospitality institutions rely on Natural Resources™ every day.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {REVIEWS.map((r, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-3xl p-8 flex flex-col justify-between glass-panel-hover relative"
          >
            <div>
              {/* Star Rating & Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-300">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-300" />
                  ))}
                </div>
                <span className="text-[10px] uppercase font-bold text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30">
                  {r.tag}
                </span>
              </div>

              {/* Quote Body */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
                "{r.quote}"
              </p>
            </div>

            {/* Author Info */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{r.author}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-xs text-slate-400">{r.role}</div>
              </div>
              <Quote className="w-8 h-8 text-cyan-500/20" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

