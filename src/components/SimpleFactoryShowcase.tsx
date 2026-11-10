"use client";

import React from "react";
import { ShieldCheck, CheckCircle2, Factory, Sparkles, Award } from "lucide-react";

export function SimpleFactoryShowcase() {
  return (
    <section id="plant" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full brand-badge text-xs font-bold uppercase tracking-wider mb-2">
          State of the Art Bottling Plant
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Our Modern Bottling Facility
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Natural Resources water is purified and bottled on fully automated, touchless stainless steel conveyor lines under strict pharmaceutical-grade standards.
        </p>
      </div>

      <div className="clean-card rounded-3xl p-6 sm:p-10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Real Photo of Factory Line */}
          <div className="lg:col-span-7 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/bottling-plant.jpg"
              alt="Natural Resources Bottling Factory Plant"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Automated High-Speed Bottling Line</span>
            </div>
          </div>

          {/* Plant Features */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-2xl font-black text-slate-900 leading-snug">
              Pure Health & Naturally Crisp Taste in Every Sip
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Drawn from deep natural aquifers, water passes through multi-stage silica, activated carbon, and sub-micron filtration before being balanced with essential minerals like Calcium and Magnesium for a refreshing, sweet taste.
            </p>

            <div className="space-y-3 pt-2">
              {[
                {
                  title: "100% Contactless Filling",
                  desc: "Automated robotic nozzles perform filling and capping in a sterile, positive-pressure cleanroom.",
                },
                {
                  title: "UV-C & Dual Ozone Disinfection",
                  desc: "Guarantees 100% microbiological safety with zero chemical odors or chlorine residue.",
                },
                {
                  title: "PSQCA & Food Authority Certified",
                  desc: "Every single production batch undergoes certified daily physical and chemical laboratory testing.",
                },
                {
                  title: "Laser Batch & Expiration Traceability",
                  desc: "Every bottle neck and base features high-precision laser-etched manufacturing batch data.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#1b4332] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
