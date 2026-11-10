"use client";

import React, { useState } from "react";
import { Truck, MapPin, Clock, ShieldCheck, PhoneCall, Navigation, ArrowRight } from "lucide-react";

interface DeliveryDispatchSimulatorProps {
  onOpenOrderModal: () => void;
}

const DISTRICT_ZONES = [
  { id: "downtown", name: "Metropolitan Downtown & Financial District", eta: "28 Mins", activeVans: 6, status: "High Priority Active" },
  { id: "marina", name: "Marina Promenade & Coastal Residences", eta: "35 Mins", activeVans: 4, status: "Normal Dispatch" },
  { id: "hills", name: "Emirates Hills & Grand Meadows", eta: "42 Mins", activeVans: 3, status: "Normal Dispatch" },
  { id: "silicon", name: "Tech Park & Innovation Zone", eta: "31 Mins", activeVans: 5, status: "Express Fleet" },
  { id: "corporate", name: "Executive Business Bay & Towers", eta: "24 Mins", activeVans: 7, status: "Super Express" },
];

export function DeliveryDispatchSimulator({ onOpenOrderModal }: DeliveryDispatchSimulatorProps) {
  const [selectedZone, setSelectedZone] = useState(DISTRICT_ZONES[0]);

  return (
    <section id="supply-fleet" className="py-24 bg-[#010811] relative overflow-hidden border-t border-cyan-500/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-sky-600/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Smart Automated Logistics</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Rapid Doorstep Dispatch & Smart Fleet Network
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Never run out of pure living water. Our chilled, temperature-controlled delivery vans circulate daily across all key metropolitan districts. Doorstep placement, empty jug retrieval, and dispenser sanitization checks come standard.
            </p>

            {/* Guarantees List */}
            <div className="space-y-3 pt-2">
              {[
                "Chilled Transit — All bottles transported between 10°C - 15°C to preserve living cellular integrity",
                "Contactless Delivery — Direct placement into your kitchen, pantry, or executive boardroom",
                "Automated Empty Carboy Exchange — Zero clutter, zero landfill waste",
                "Emergency On-Demand Dispatch — Need an extra 5-gallon jug or event case? Arrives in under 45 minutes",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenOrderModal}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-black uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Truck className="w-4 h-4 text-slate-950" />
                <span>Request Immediate Water Delivery</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Right Fleet Dispatch Live Simulator Box */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border-cyan-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] space-y-6">
              {/* Simulator Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-sm font-bold text-white">Live Fleet GPS Dispatcher</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-400/30">
                  25 Vans Active
                </span>
              </div>

              {/* District Zone Selector */}
              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-2">
                  Select Coverage District:
                </label>
                <div className="space-y-2">
                  {DISTRICT_ZONES.map((zone) => (
                    <button
                      key={zone.id}
                      onClick={() => setSelectedZone(zone)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                        selectedZone.id === zone.id
                          ? "bg-cyan-950/60 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                          : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className={`w-4 h-4 ${selectedZone.id === zone.id ? "text-cyan-400" : "text-slate-500"}`} />
                        <div>
                          <div className="text-xs font-bold text-white">{zone.name}</div>
                          <div className="text-[10px] text-slate-400">{zone.activeVans} Fleet Vans in Transit</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-cyan-300 font-mono">{zone.eta}</div>
                        <div className="text-[10px] text-emerald-400 font-medium">{zone.status}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Driver & Vehicle Card */}
              <div className="p-4 rounded-2xl bg-[#020b14]/80 border border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600 to-sky-400 flex items-center justify-center font-bold text-slate-950 text-base shadow-md">
                    VAN-4
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Captain Farhan S.</div>
                    <div className="text-[11px] text-slate-400">Mercedes Sprinter Hydro-Chiller</div>
                    <div className="text-[10px] text-cyan-400 font-mono">Compartment Temp: 12.4°C</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-white flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{selectedZone.eta}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

