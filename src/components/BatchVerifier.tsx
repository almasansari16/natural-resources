"use client";

import React, { useState } from "react";
import { QrCode, ShieldCheck, CheckCircle2, Search, Award, Thermometer, Droplets } from "lucide-react";

export function BatchVerifier() {
  const [batchInput, setBatchInput] = useState("15-06 2026 06-10:91 M1");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifiedData, setVerifiedData] = useState<{
    batch: string;
    bottledDate: string;
    sourceTemp: string;
    ph: string;
    tds: string;
    cleanroomClass: string;
    purityStatus: string;
    inspector: string;
  } | null>({
    batch: "B#: 15-06 2026 06-10:91 M1",
    bottledDate: "June 15, 2026 • 06:10 AM",
    sourceTemp: "7.8°C Chilled Artesian",
    ph: "8.41 ± 0.02 Living Alkaline",
    tds: "118.4 mg/L Optimal Living Balance",
    cleanroomClass: "ISO Class 5 Positive Pressure",
    purityStatus: "100% Pure • 0 Microplastics • 0 CFU Pathogens",
    inspector: "Dr. H. Sterling, Lead Hydro-Chemist (L.S.L Standard)",
  });

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerifiedData({
        batch: `B#: ${batchInput.toUpperCase()}`,
        bottledDate: "Verified Production Drop",
        sourceTemp: "7.8°C Artesian Source",
        ph: "8.42 ± 0.03",
        tds: "118.2 mg/L",
        cleanroomClass: "ISO Class 5 Cleanroom",
        purityStatus: "Certified 100% Sterile & Microplastic-Free",
        inspector: "L.S.L Global QA Directorate",
      });
    }, 600);
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <QrCode className="w-3.5 h-3.5 text-cyan-400" />
          <span>Complete Batch Transparency</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Verify Your Bottle's Batch Telemetry
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Every Natural Resources bottle carries a laser dot-matrix batch code near the base. Enter your bottle's code below to inspect its exact bottling conditions, aquifer temperature, and purity certificate.
        </p>
      </div>

      {/* Input Bar & Preset Quick Chips */}
      <div className="max-w-2xl mx-auto mb-10">
        <form onSubmit={handleVerify} className="flex gap-2 p-2 rounded-2xl glass-panel border-cyan-500/30">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={batchInput}
              onChange={(e) => setBatchInput(e.target.value)}
              placeholder="e.g. 15-06 2026 06-10:91 M1"
              className="w-full pl-11 pr-4 py-3 bg-transparent text-white text-xs font-mono tracking-wider focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            {isVerifying ? "Verifying..." : "Verify Batch"}
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 mt-3 text-xs text-slate-400">
          <span>Preset Sample Codes:</span>
          <button
            onClick={() => setBatchInput("15-06 2026 06-10:91 M1")}
            className="text-cyan-400 hover:underline font-mono text-[11px]"
          >
            [15-06 2026 (Official Bottle)]
          </button>
          <span>•</span>
          <button
            onClick={() => setBatchInput("08-11 2026 14-22:45 C4")}
            className="text-cyan-400 hover:underline font-mono text-[11px]"
          >
            [08-11 2026 (5-Gal Drop)]
          </button>
        </div>
      </div>

      {/* Verification Card */}
      {verifiedData && (
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border-cyan-500/30 max-w-4xl mx-auto shadow-2xl relative overflow-hidden animate-fade-in">
          {/* Top Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-cyan-300 uppercase">
                  {verifiedData.batch}
                </div>
                <h4 className="text-lg font-bold text-white">Genuine Natural Resources Bottling</h4>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-400/40 text-emerald-300 text-xs font-bold flex items-center gap-2 self-start sm:self-auto">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified L.S.L Standard</span>
            </div>
          </div>

          {/* Telemetry Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            <div className="p-4 rounded-2xl bg-[#020b14]/80 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Thermometer className="w-3.5 h-3.5 text-cyan-400" />
                <span>Aquifer Temp</span>
              </div>
              <div className="text-base font-bold text-white font-mono">{verifiedData.sourceTemp}</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#020b14]/80 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                <span>pH Reading</span>
              </div>
              <div className="text-base font-bold text-cyan-300 font-mono">{verifiedData.ph}</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#020b14]/80 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>Batch TDS</span>
              </div>
              <div className="text-base font-bold text-white font-mono">{verifiedData.tds}</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#020b14]/80 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Cleanroom</span>
              </div>
              <div className="text-base font-bold text-emerald-400 font-mono">{verifiedData.cleanroomClass}</div>
            </div>
          </div>

          {/* Footer QA Signoff */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <div>
              <span className="text-slate-300 font-medium">Digital Sign-off: </span>
              <span className="text-cyan-300">{verifiedData.inspector}</span>
            </div>
            <div className="font-mono text-[11px] text-slate-500">
              Cryptographic Hash Verified • ISO 22000
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

