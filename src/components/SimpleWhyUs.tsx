"use client";

import React from "react";
import { Droplet, Factory, Truck, ShieldCheck, Heart, Award, Sparkles } from "lucide-react";

export function SimpleWhyUs() {
  const benefits = [
    {
      icon: <Droplet className="w-6 h-6 text-[#0284c7]" />,
      title: "Naturally Sweet & Crisp Taste",
      subtitle: "Pure Mineral Hydration",
      desc: "Natural Resources water offers a light, naturally sweet, and refreshing mineral taste with zero chemical odor, making it easy to drink and gentle on digestion.",
    },
    {
      icon: <Factory className="w-6 h-6 text-[#1b4332]" />,
      title: "Touchless Robotic Bottling",
      subtitle: "Hygienic Conveyor System",
      desc: "Bottled without human contact on stainless steel automated conveyor lines with multi-stage UV-C sterilization and tamper-proof airtight capping.",
    },
    {
      icon: <Truck className="w-6 h-6 text-[#0284c7]" />,
      title: "Punctual Doorstep Delivery",
      subtitle: "Home & Office Can Exchange",
      desc: "Our courteous delivery fleet picks up empty carboys and installs fresh, sealed 19L cans on reliable scheduled timings (8:00 AM to 8:00 PM).",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#1b4332]" />,
      title: "PSQCA & Halal Certified",
      subtitle: "Government Standard Compliance",
      desc: "Complies fully with Pakistan Standards and Quality Control Authority (PSQCA) regulations, with comprehensive daily lab testing for every batch.",
    },
  ];

  return (
    <section id="why-us" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full brand-badge text-xs font-bold uppercase tracking-wider mb-2">
          Why Choose Natural Resources?
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Pure Living Water Your Family Can Trust
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Protect your loved ones with guaranteed purity, safe living minerals, and certified food-grade packaging.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <div key={i} className="clean-card rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-5">
                {b.icon}
              </div>
              <h3 className="text-base font-black text-slate-900 mb-1">
                {b.title}
              </h3>
              <div className="text-xs font-bold text-[#1b4332] mb-3">
                {b.subtitle}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {b.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4 text-[11px] font-bold text-[#0284c7] flex items-center gap-1">
              <span>Verified Standard</span>
              <span>✓</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
