"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Truck, ShieldCheck, Clock, Compass } from "lucide-react";

interface HubPoint {
  id: string;
  name: string;
  zone: string;
  x: number; // percentage
  y: number; // percentage
  vansActive: number;
  avgTime: string;
}

const HUBS: HubPoint[] = [
  { id: "hub-1", name: "Central Bottling & Fleet Depo", zone: "Industrial Logistics Hub", x: 28, y: 35, vansActive: 8, avgTime: "25 min" },
  { id: "hub-2", name: "Downtown & Financial Station", zone: "Metropolitan Center", x: 55, y: 48, vansActive: 6, avgTime: "28 min" },
  { id: "hub-3", name: "Marina Coastal Dispatch Hub", zone: "Coast & High-rises", x: 75, y: 65, vansActive: 5, avgTime: "34 min" },
  { id: "hub-4", name: "North Valley Spring Reserves", zone: "Green Hills & Estates", x: 40, y: 78, vansActive: 4, avgTime: "40 min" },
];

export function CoverageMap() {
  const [activeHub, setActiveHub] = useState<HubPoint>(HUBS[1]);

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>Real-time Urban Radar</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Live Fleet Network & Operational Hubs
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Our decentralized micro-warehousing network keeps temperature-monitored water supply vans within 5 miles of every major residential and commercial neighborhood.
        </p>
      </div>

      <div className="glass-panel rounded-3xl p-6 sm:p-10 border-cyan-500/20 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Map Visual (SVG Radar Map) */}
          <div className="lg:col-span-8 relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-[#020d18] via-[#04192d] to-[#020b14] border border-cyan-500/30 overflow-hidden shadow-inner flex items-center justify-center p-4">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff08_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff08_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Radar Pulsing Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[300px] rounded-full border border-cyan-400/20 animate-ping opacity-20" />
              <div className="w-[500px] h-[500px] rounded-full border border-cyan-400/10 opacity-30" />
            </div>

            {/* Interactive Hub Pins */}
            {HUBS.map((hub) => (
              <button
                key={hub.id}
                onClick={() => setActiveHub(hub)}
                className="absolute -translate-x-1/2 -translate-y-1/2 group/pin focus:outline-none transition-transform duration-300 hover:scale-125 z-10"
                style={{
                  left: `${hub.x}%`,
                  top: `${hub.y}%`,
                }}
              >
                {/* Ping ring */}
                <span className={`absolute -inset-2 rounded-full animate-ping opacity-60 ${
                  activeHub.id === hub.id ? "bg-cyan-400" : "bg-sky-400/40"
                }`} />

                {/* Marker */}
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-lg transition-colors ${
                  activeHub.id === hub.id
                    ? "bg-cyan-400 border-white text-slate-950 scale-110 shadow-[0_0_20px_#00f0ff]"
                    : "bg-slate-950/90 border-cyan-400/60 text-cyan-300"
                }`}>
                  <Truck className="w-4 h-4" />
                </div>

                {/* Label pill on hover or active */}
                <div className={`absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md text-[10px] font-bold shadow-md transition-all ${
                  activeHub.id === hub.id
                    ? "bg-cyan-950 border border-cyan-400 text-cyan-200 opacity-100"
                    : "bg-slate-900/90 border border-slate-700 text-slate-300 opacity-80 group-hover/pin:opacity-100"
                }`}>
                  {hub.name.split(" ")[0]} ({hub.avgTime})
                </div>
              </button>
            ))}

            {/* Simulated Live Route Vector Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-cyan-400/25 stroke-[1.5] stroke-dasharray-[4_4]">
              <line x1="28%" y1="35%" x2="55%" y2="48%" />
              <line x1="55%" y1="48%" x2="75%" y2="65%" />
              <line x1="55%" y1="48%" x2="40%" y2="78%" />
            </svg>

            {/* Bottom Map Legend */}
            <div className="absolute bottom-3 left-3 glass-pill px-3 py-1.5 rounded-lg text-[10px] text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Telemetry: 23 Vans Live Tracking</span>
            </div>
          </div>

          {/* Right Hub Inspection Details */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                Selected Node
              </span>
              <h3 className="text-xl font-bold text-white mt-1">{activeHub.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{activeHub.zone}</p>
            </div>

            {/* Quick Stats */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-[#020b14]/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Average Drop Time</span>
                </div>
                <span className="text-sm font-black text-white font-mono">{activeHub.avgTime}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#020b14]/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Truck className="w-4 h-4 text-emerald-400" />
                  <span>Vans In Active Circulation</span>
                </div>
                <span className="text-sm font-black text-emerald-400 font-mono">{activeHub.vansActive} Sprinters</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#020b14]/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Chilled Storage Temperature</span>
                </div>
                <span className="text-sm font-black text-cyan-300 font-mono">11.8°C</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Order before 5:00 PM for guaranteed same-day cold-chain doorstep delivery, or choose instant 45-minute priority express dispatch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

