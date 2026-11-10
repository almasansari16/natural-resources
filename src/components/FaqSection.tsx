"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "How does the empty 5-gallon carboy exchange program work?",
    a: "When your delivery driver arrives with your fresh, sealed 5-gallon carboys, they will collect your empty jugs from your doorstep or pantry. We inspect, steam-sanitize at 140°C, and refill them. You never have to worry about disposing of bulky plastic or cluttering your home.",
  },
  {
    q: "Why is 118 TDS living alkaline water superior to ordinary RO or tap water?",
    a: "Municipal tap water often carries chlorine byproducts, scale, and pipe leaching. Ordinary home RO filters strip out ALL minerals, leaving water acidic (pH 5.8) and aggressive. Natural Resources purifies water down to 0.0001 micron, then naturally remineralizes it through volcanic basalt and calcite crystals to an optimal 118 TDS and pH 8.4—giving it a velvety mouthfeel and rapid cellular absorption.",
  },
  {
    q: "What is the 'L.S.L' standard printed on the bottle label?",
    a: "L.S.L stands for Living Source Laboratory—our verified medical-grade testing protocol. It guarantees zero detectable microplastics, 0 CFU microbiological pathogens, sub-ppb heavy metal screening, and an uncompromised ionic electrolyte balance certified by independent third-party laboratories.",
  },
  {
    q: "Can I pause or change my weekly water subscription when traveling?",
    a: "Yes, absolutely! There are zero cancellation fees or lock-in contracts. You can pause your subscription with 1-click in your customer account, skip a delivery week, or increase your quantity when hosting dinner parties or corporate events.",
  },
  {
    q: "How do the Arctic Flow™ touchless smart dispensers keep water sanitized?",
    a: "Our Arctic Flow dispensers feature an internal 254nm UV-C germicidal reactor that runs automatically every 4 hours, sterilizing the stainless steel cold reservoir and spigot interior. Combined with bottom-loading bottle placement, you never have to lift heavy jugs or worry about stagnant bacterial biofilms.",
  },
  {
    q: "Do you supply bulk water for events, commercial facilities, and hotels?",
    a: "Yes. Our commercial fleet includes food-grade 316-stainless steel bulk tankers ranging from 5,000 to 25,000 Liters, as well as custom laser-etched glass bottles for high-end dining tables and executive hotel suites.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>Clarity & Answers</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-300 text-sm sm:text-base">
          Everything you need to know about our living water source, doorstep carboy exchange, and smart delivery fleet.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQS.map((item, idx) => (
          <div
            key={idx}
            className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
              openIndex === idx
                ? "border-cyan-500/40 bg-slate-900/80 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                : "border-slate-800/80 hover:border-slate-700"
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
            >
              <span className="text-sm sm:text-base font-bold text-white">
                {item.q}
              </span>
              <div
                className={`w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  openIndex === idx
                    ? "rotate-180 bg-cyan-400 text-slate-950 border-cyan-300"
                    : "text-slate-400"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {openIndex === idx && (
              <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-fade-in">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

