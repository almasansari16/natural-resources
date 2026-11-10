"use client";

import React, { useState } from "react";
import { Droplet, Sparkles, RefreshCw, Zap, Shield, Heart } from "lucide-react";
import confetti from "canvas-confetti";

export function PourExperience() {
  const [fillLevel, setFillLevel] = useState(0); // 0 to 100%
  const [isPouring, setIsPouring] = useState(false);

  const handlePour = () => {
    if (fillLevel >= 100) return;
    setIsPouring(true);

    const interval = setInterval(() => {
      setFillLevel((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsPouring(false);
          confetti({
            particleCount: 30,
            spread: 50,
            origin: { y: 0.6 },
            colors: ["#00f0ff", "#38bdf8", "#e0f2fe"],
          });
          return 100;
        }
        return prev + 5;
      });
    }, 80);
  };

  const handleReset = () => {
    setFillLevel(0);
    setIsPouring(false);
  };

  return (
    <section className="py-24 bg-[#010811] relative overflow-hidden border-t border-cyan-500/10">
      {/* Background glow orb */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Bio-absorption Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tactile Sensory Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Pour A Glass Of Pure Mountain Vitality
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Every glass of Natural Resources™ delivers living ionic electrolytes in their natural bioavailable state. Micro-clustered water molecules absorb into cells up to 3× faster than standard municipal tap or dead RO water.
            </p>

            {/* Dynamic Real-time Mineral Counter based on fillLevel */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl glass-panel text-center">
                <div className="text-xs text-slate-400 font-medium">Magnesium (Mg²⁺)</div>
                <div className="text-xl sm:text-2xl font-black text-cyan-300 font-mono mt-1">
                  {((16.5 * fillLevel) / 100).toFixed(1)} <span className="text-xs font-sans">mg</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Heart & Neural Calming</div>
              </div>

              <div className="p-4 rounded-2xl glass-panel text-center">
                <div className="text-xs text-slate-400 font-medium">Calcium (Ca²⁺)</div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono mt-1">
                  {((28.2 * fillLevel) / 100).toFixed(1)} <span className="text-xs font-sans">mg</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Bone & Cellular Energy</div>
              </div>

              <div className="p-4 rounded-2xl glass-panel text-center">
                <div className="text-xs text-slate-400 font-medium">Silica (SiO₂)</div>
                <div className="text-xl sm:text-2xl font-black text-teal-300 font-mono mt-1">
                  {((19.8 * fillLevel) / 100).toFixed(1)} <span className="text-xs font-sans">mg</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Natural Collagen Boost</div>
              </div>
            </div>

            {/* Interactive Actions */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={handlePour}
                disabled={fillLevel >= 100 || isPouring}
                className={`px-8 py-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg ${
                  fillLevel >= 100
                    ? "bg-slate-800 text-slate-400 cursor-not-allowed"
                    : isPouring
                    ? "bg-cyan-400 text-slate-950 animate-pulse"
                    : "bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-[1.02]"
                }`}
              >
                <Droplet className="w-4 h-4 fill-current" />
                <span>
                  {fillLevel >= 100
                    ? "Glass Filled (100%)"
                    : isPouring
                    ? "Pouring Glacial Water..."
                    : "Click to Pour Glass"}
                </span>
              </button>

              {fillLevel > 0 && (
                <button
                  onClick={handleReset}
                  className="p-3.5 rounded-xl glass-panel text-slate-400 hover:text-white transition-colors"
                  title="Empty Glass"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Animated Glassware Visualizer */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-64 h-96 flex flex-col items-center justify-end">
              {/* Chilled Stream Spout Animation */}
              {isPouring && (
                <div className="absolute top-0 w-2.5 bg-gradient-to-b from-cyan-300 via-sky-400 to-transparent rounded-full shadow-[0_0_15px_#00f0ff] animate-pulse"
                  style={{
                    height: `${Math.max(20, 100 - fillLevel)}%`,
                  }}
                />
              )}

              {/* Glass Tumbler Container */}
              <div className="relative w-48 h-72 rounded-b-3xl border-x-4 border-b-4 border-t-2 border-white/30 bg-gradient-to-b from-white/5 to-cyan-500/10 backdrop-blur-md p-2 flex flex-col justify-end overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                {/* Specular Edge Gleam */}
                <div className="absolute top-0 left-2 bottom-4 w-1 bg-white/40 rounded-full" />
                <div className="absolute top-0 right-2 bottom-4 w-0.5 bg-white/20 rounded-full" />

                {/* Chilled Condensation Water Droplets */}
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  <div className="absolute top-12 left-6 w-1.5 h-2 rounded-full bg-white/60" />
                  <div className="absolute top-28 right-8 w-2 h-3 rounded-full bg-white/50" />
                  <div className="absolute top-44 left-10 w-1.5 h-2.5 rounded-full bg-white/60" />
                  <div className="absolute top-52 right-6 w-1 h-2 rounded-full bg-white/70" />
                </div>

                {/* Animated Liquid Level */}
                <div
                  className="w-full bg-gradient-to-t from-sky-600/90 via-cyan-500/80 to-cyan-300/80 rounded-b-2xl transition-all duration-300 relative overflow-hidden"
                  style={{
                    height: `${fillLevel}%`,
                  }}
                >
                  {/* Wave Crest */}
                  {fillLevel > 0 && (
                    <div className="absolute top-0 left-0 right-0 h-3 bg-white/50 animate-pulse" />
                  )}

                  {/* Bubbles in Glass */}
                  {fillLevel > 15 && (
                    <div className="absolute inset-0 flex justify-around items-end pb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      <div className="w-2 h-2 rounded-full bg-cyan-200" />
                      <div className="w-1 h-1 rounded-full bg-white" />
                    </div>
                  )}
                </div>
              </div>

              {/* Coaster Base */}
              <div className="w-56 h-4 rounded-full bg-slate-900 border border-slate-700 mt-2 shadow-2xl" />
            </div>

            <div className="text-center mt-4">
              <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                Chilled At 8.5°C • {fillLevel}% Filled (250ml)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

