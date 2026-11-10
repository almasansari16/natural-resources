"use client";

import React, { useState } from "react";
import { Users, Droplets, Calendar, MessageCircle, Check, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

interface PlanTier {
  id: string;
  label: string;
  members: string;
  icon: string;
  cansPerWeek: number;
  pricePerCan: number;
  cartonsRecommend: string;
  idealFor: string;
}

const TIERS: PlanTier[] = [
  {
    id: "couple",
    label: "Small Family / Couple",
    members: "1 - 2 People",
    icon: "🏠",
    cansPerWeek: 1,
    pricePerCan: 250,
    cartonsRecommend: "1x 19L Can weekly or 1 Carton of 1.5L bottles",
    idealFor: "Apartments, small residences & couples",
  },
  {
    id: "family",
    label: "Standard Household",
    members: "3 - 5 People",
    icon: "👨‍👩‍👧‍👦",
    cansPerWeek: 3,
    pricePerCan: 250,
    cartonsRecommend: "3x 19L Cans weekly + 1 Carton of 500ml bottles",
    idealFor: "Family residences (DHA, Bahria Town, Gulberg, etc.)",
  },
  {
    id: "joint-family",
    label: "Large Household",
    members: "6 - 9 People",
    icon: "🏡",
    cansPerWeek: 5,
    pricePerCan: 250,
    cartonsRecommend: "5x 19L Cans weekly doorstep refill",
    idealFor: "Large households with daily cooking & hydration needs",
  },
  {
    id: "office",
    label: "Corporate Office / Clinic",
    members: "10 - 25 People",
    icon: "🏢",
    cansPerWeek: 10,
    pricePerCan: 240, // Corporate slight discount
    cartonsRecommend: "10x 19L Cans weekly + Dispenser Unit",
    idealFor: "Tech companies, corporate offices, clinics & gyms",
  },
];

export function WaterPlanCalculator() {
  const [selectedTier, setSelectedTier] = useState<PlanTier>(TIERS[1]); // Default standard family

  const weeklyCost = selectedTier.cansPerWeek * selectedTier.pricePerCan;
  const monthlyCost = weeklyCost * 4;

  const whatsappMessage = `Hello! I would like to set up the "${selectedTier.label}" plan (${selectedTier.cansPerWeek} Cans weekly - Monthly estimate Rs. ${monthlyCost.toLocaleString()}). Please assist me with delivery.`;
  const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50/50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full sky-badge text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Interactive Hydration Planner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Calculate Your Home or Office <span className="text-[#0284c7]">Monthly Water Plan</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Select your household or team size to see the recommended weekly supply and transparent monthly budget in PKR.
          </p>
        </div>

        {/* Plan Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {TIERS.map((tier) => {
            const isSelected = selectedTier.id === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? "bg-[#1b4332] text-white border-[#1b4332] shadow-lg scale-105"
                    : "bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="text-2xl mb-2">{tier.icon}</div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-80">
                  {tier.members}
                </div>
                <div className="text-sm font-black mt-0.5 leading-snug">
                  {tier.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Calculator Output Card */}
        <div className="max-w-4xl mx-auto clean-card rounded-3xl p-6 sm:p-10 border-2 border-sky-100 shadow-xl bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100/50 rounded-full blur-2xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Breakdown */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full brand-badge text-xs font-bold">
                <span>Recommended Supply:</span>
                <span className="font-extrabold">{selectedTier.label}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {selectedTier.cansPerWeek} x 19-Liter Cans <span className="text-[#0284c7]">Per Week</span>
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                Supplies <strong>{selectedTier.cansPerWeek * 19} Liters</strong> of 100% pure, naturally sweet mineral water delivered directly to your kitchen or office dispenser every week.
              </p>

              {/* Perks */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free doorstep delivery: We take your empty can and install a fresh sealed can</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Reliable delivery schedules between 8:00 AM and 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Easy payment via Cash on Delivery (COD), JazzCash, or EasyPaisa</span>
                </div>
              </div>
            </div>

            {/* Right Cost Box & Action */}
            <div className="md:col-span-5 bg-gradient-to-br from-slate-900 to-[#1b4332] text-white p-6 sm:p-7 rounded-2xl space-y-4 shadow-xl">
              <div>
                <span className="text-[11px] text-emerald-300 font-bold uppercase tracking-wider">
                  Estimated Monthly Investment (PKR)
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-white">
                    Rs. {monthlyCost.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">/ Month</span>
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  (Rs. {weeklyCost.toLocaleString()} per week • Rs. {selectedTier.pricePerCan} / can)
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 animate-whatsapp"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Start This Plan on WhatsApp</span>
                </a>
              </div>

              <p className="text-[10px] text-slate-300 text-center leading-tight">
                No advance lock-ins. You can pause, reschedule, or cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
