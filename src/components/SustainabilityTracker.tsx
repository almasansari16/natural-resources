"use client";

import React, { useState, useEffect } from "react";
import { Leaf, RefreshCw, Award, Shield, Check, HeartHandshake } from "lucide-react";

export function SustainabilityTracker() {
  const [bottlesCount, setBottlesCount] = useState<number>(1842910);

  useEffect(() => {
    // Subtle ticker to reflect live orders saving plastic bottles in real time
    const interval = setInterval(() => {
      setBottlesCount((prev) => prev + Math.floor(Math.random() * 3 + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sustainability" className="py-24 bg-[#020b14] border-t border-cyan-500/10 relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Big Stats Counter */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero-Waste Circular Pledge</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              A Hydration Brand That Gives Back To The Planet
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Every single 5-gallon carboy and Italian glass bottle in our ecosystem is part of a closed-loop zero-landfill cycle. We retrieve empty containers directly from your doorstep, sanitize them with medical-grade 140°C dry steam, and reuse them up to 50 times.
            </p>

            {/* Live Counter Display */}
            <div className="p-6 rounded-3xl bg-[#03182b]/80 border border-emerald-500/30 shadow-[0_10px_35px_rgba(16,185,129,0.15)]">
              <div className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 mb-1">
                Live Community Counter
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
                <span>{bottlesCount.toLocaleString()}</span>
                <span className="text-sm font-sans font-bold text-emerald-400">Bottles</span>
              </div>
              <div className="text-xs text-slate-300 mt-2">
                Single-use PET plastic bottles diverted from oceans and landfills since 2018.
              </div>
            </div>
          </div>

          {/* Right Column: 4 Circular Steps */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                step: "01",
                title: "Doorstep Chilled Drop",
                desc: "Living alkaline water delivered in returnable glass or Tritan carboys.",
                icon: <RefreshCw className="w-5 h-5 text-cyan-400" />,
              },
              {
                step: "02",
                title: "Seamless Empty Pickup",
                desc: "Driver collects empty empties on your next scheduled water replenishment.",
                icon: <Leaf className="w-5 h-5 text-emerald-400" />,
              },
              {
                step: "03",
                title: "Medical Dry Steam",
                desc: "140°C pressurized micro-steam sterilizes every bottle down to 0 CFU pathogens.",
                icon: <Shield className="w-5 h-5 text-sky-400" />,
              },
              {
                step: "04",
                title: "Laser Re-Certification",
                desc: "Optical inspection ensures structural perfection before aseptic refill.",
                icon: <Award className="w-5 h-5 text-teal-400" />,
              },
            ].map((card) => (
              <div key={card.step} className="glass-panel rounded-2xl p-6 glass-panel-hover">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700">
                    {card.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    PHASE {card.step}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{card.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

