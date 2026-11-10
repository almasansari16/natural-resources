"use client";

import React from "react";
import { Check, X, ShieldAlert, Sparkles, HeartPulse, Droplet } from "lucide-react";

export function TasteComparison() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full brand-badge text-xs font-bold uppercase tracking-wider mb-2">
          Purity & Health Comparison
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Ordinary Tap Water <span className="text-slate-400 font-light">vs</span> <span className="text-[#0284c7]">Natural Resources</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          See the undeniable difference in health, taste, and safety for your family:
        </p>
      </div>

      {/* Comparison Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Bad: Ordinary Tap Water */}
        <div className="rounded-3xl p-6 sm:p-8 bg-slate-100 border-2 border-slate-200 text-slate-700 relative overflow-hidden">
          <div className="flex items-center justify-between pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1">
                <ShieldAlert className="w-4 h-4" />
                Common Household Dilemma
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                Ordinary Tap & Tanker Water
              </h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-black text-xl">
              ✕
            </div>
          </div>

          <ul className="space-y-4 pt-6 text-sm">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✕
              </div>
              <div>
                <strong className="text-slate-900">Chlorine Odor & Metallic Taste:</strong> Old municipal pipeline rust and heavy chlorination create a bitter, scratchy taste in the throat.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✕
              </div>
              <div>
                <strong className="text-slate-900">Stomach Upset & Heavy Impurities:</strong> Waterborne microbes and fluctuating dissolved solids cause frequent digestive strain and kidney load.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✕
              </div>
              <div>
                <strong className="text-slate-900">Boiling Hassle & Flat Taste:</strong> Boiling daily consumes expensive gas, takes hours to cool, and still leaves water taste dull and de-mineralized.
              </div>
            </li>
          </ul>
        </div>

        {/* Good: Natural Resources */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white via-sky-50 to-emerald-50 border-2 border-emerald-300 text-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/40 rounded-full blur-2xl pointer-events-none -z-10" />

          <div className="flex items-center justify-between pb-6 border-b border-emerald-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Certified Living Mineral Water
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                Natural Resources Mineral Water
              </h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xl">
              ✓
            </div>
          </div>

          <ul className="space-y-4 pt-6 text-sm">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <div>
                <strong className="text-slate-900">Naturally Sweet & Crisp:</strong> Zero chemical smell, zero bitterness—every sip is naturally balanced, light, and delicious.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <div>
                <strong className="text-slate-900">Optimal 118 TDS Mineral Profile:</strong> Balanced Calcium and Magnesium ions that support bone health, cellular hydration, and immunity.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <div>
                <strong className="text-slate-900">Doorstep Can Exchange:</strong> Scheduled delivery drivers pick up empty containers and place fresh sealed cans directly at your dispenser.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
