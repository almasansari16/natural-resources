"use client";

import React, { useState } from "react";
import { FILTRATION_STAGES } from "@/data/labData";
import { Mountain, Layers, Sparkles, Filter, Gem, Sun, ShieldCheck, CheckCircle, ArrowRight, Activity, Microscope } from "lucide-react";

export function PurityProcess() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = FILTRATION_STAGES[activeStageIndex];

  const getIcon = (name: string) => {
    switch (name) {
      case "Mountain":
        return <Mountain className="w-5 h-5" />;
      case "Layers":
        return <Layers className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Filter":
        return <Filter className="w-5 h-5" />;
      case "Gem":
        return <Gem className="w-5 h-5" />;
      case "Sun":
        return <Sun className="w-5 h-5" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <CheckCircle className="w-5 h-5" />;
    }
  };

  return (
    <section id="purity-lab" className="py-24 bg-[#020912] border-t border-cyan-500/10 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-600/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Microscope className="w-3.5 h-3.5 text-cyan-400" />
            <span>Cellular Bio-Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            The 8-Stage Purity Journey
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Standard filtration strips water dead. Natural Resources™ purifies water to the sub-micron molecular level, then breathes life back into it through volcanic basalt and calcite crystal remineralization.
          </p>
        </div>

        {/* Interactive Steps Horizontal Scroller / Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-12">
          {FILTRATION_STAGES.map((s, idx) => (
            <button
              key={s.stage}
              onClick={() => setActiveStageIndex(idx)}
              className={`p-3 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-2 group ${
                activeStageIndex === idx
                  ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] scale-[1.03]"
                  : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                  activeStageIndex === idx
                    ? "bg-cyan-400 text-slate-950 font-bold"
                    : "bg-slate-800/80 text-slate-400 group-hover:text-cyan-400"
                }`}
              >
                {getIcon(s.iconName)}
              </div>
              <div className="text-[10px] font-black uppercase tracking-wider">
                Stage 0{s.stage}
              </div>
              <div className="text-[11px] font-bold text-slate-200 line-clamp-1">
                {s.title.split(" ")[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Stage In-Depth Focus Panel */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border-cyan-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <span className="px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-400/40">
                  Phase 0{currentStage.stage} of 08
                </span>
                <span>{currentStage.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {currentStage.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {currentStage.description}
              </p>

              {/* Scientific Parameter Box */}
              <div className="p-4 rounded-2xl bg-[#020b14]/80 border border-slate-800 mb-6">
                <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-1 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Technical Bio-Mechanism</span>
                </div>
                <div className="text-xs text-slate-300 font-mono">
                  {currentStage.scientificDetail}
                </div>
              </div>

              {/* TDS In vs Out Transition */}
              <div className="flex items-center gap-4 text-xs font-semibold">
                <div className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Incoming TDS: </span>
                  <span className="text-white font-mono">{currentStage.tdsIn}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
                <div className="px-3.5 py-2 rounded-xl bg-cyan-950/60 border border-cyan-500/40">
                  <span className="text-cyan-300">Outgoing TDS: </span>
                  <span className="text-cyan-400 font-mono font-bold">{currentStage.tdsOut}</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Visual Diagram */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full aspect-square max-w-[340px] rounded-3xl bg-gradient-to-br from-cyan-950/50 via-[#031526]/80 to-[#020b14] border border-cyan-500/30 p-8 flex flex-col items-center justify-between text-center overflow-hidden">
                {/* Visualizer Pulsing Core */}
                <div className="w-24 h-24 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-[0_0_35px_rgba(0,240,255,0.4)] animate-pulse-glow">
                  {getIcon(currentStage.iconName)}
                </div>

                <div>
                  <div className="text-lg font-bold text-white mb-1">
                    Continuous Hydro-Purity
                  </div>
                  <div className="text-xs text-cyan-400 font-mono">
                    Zero Chlorination • 100% Biocompatible
                  </div>
                </div>

                {/* Microscopic Cleanliness Gauge */}
                <div className="w-full bg-slate-900/80 rounded-full h-3 border border-slate-700/60 overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-cyan-300 transition-all duration-500"
                    style={{
                      width: `${(currentStage.stage / 8) * 100}%`,
                    }}
                  />
                </div>
                <div className="text-[10px] text-slate-400">
                  Filtration Progression: {Math.round((currentStage.stage / 8) * 100)}% Complete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

