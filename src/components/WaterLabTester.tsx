"use client";

import React, { useState } from "react";
import { MINERAL_SPECS, LAB_CERTIFICATES } from "@/data/labData";
import { ShieldCheck, Download, Check, AlertTriangle, FileText, FlaskConical, Award } from "lucide-react";

export function WaterLabTester() {
  const [interactiveTDS, setInteractiveTDS] = useState<number>(118);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  // Dynamic analysis of interactive TDS slider
  const getTdsProfile = (tds: number) => {
    if (tds < 40) {
      return {
        label: "Demineralized / Distilled",
        taste: "Flat, acidic, sharp mouthfeel",
        health: "Lacks essential electrolytes; may leach cellular minerals over time.",
        color: "text-amber-400",
        barColor: "bg-amber-400",
      };
    } else if (tds >= 40 && tds <= 160) {
      return {
        label: "Natural Resources™ Living Balance",
        taste: "Crisp, silky, velvety with sweet natural mineral notes",
        health: "Ideal biological electrolyte density for optimal human vitality and hydration.",
        color: "text-cyan-400",
        barColor: "bg-cyan-400",
      };
    } else if (tds > 160 && tds <= 280) {
      return {
        label: "Moderate Mineral Water",
        taste: "Heavier mineral tone, slightly hard finish",
        health: "Acceptable for general consumption, slightly noticeable chalkiness.",
        color: "text-sky-300",
        barColor: "bg-sky-400",
      };
    } else {
      return {
        label: "Municipal Tap / Hard Ground Water",
        taste: "Metallic, chemical, heavy chlorine aftertaste",
        health: "Excess scale, pipe leaching, high risk of chlorine byproducts & heavy metals.",
        color: "text-rose-400",
        barColor: "bg-rose-500",
      };
    }
  };

  const currentProfile = getTdsProfile(interactiveTDS);

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
          <span>Independent Third-Party Verification</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          The Mineral & Purity Lab
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          We don't hide behind marketing words. Compare the certified ionic mineral composition of Natural Resources™ against city tap water and standard purified RO water.
        </p>
      </div>

      {/* Interactive TDS Simulator Dial Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 mb-16 border-cyan-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Interactive TDS & Taste Simulator
              </span>
              <span className={`text-xl font-black font-mono ${currentProfile.color}`}>
                {interactiveTDS} mg/L (PPM)
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="450"
              value={interactiveTDS}
              onChange={(e) => setInteractiveTDS(parseInt(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
            />

            <div className="flex justify-between text-[11px] text-slate-400">
              <span>0 (Dead RO)</span>
              <span className="text-cyan-400 font-bold">118 (Natural Resources)</span>
              <span>250 (Spring)</span>
              <span>450 (City Tap)</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed pt-2">
              Drag the slider to test how dissolved mineral density transforms water from hollow and corrosive to silky, vitalizing living water.
            </p>
          </div>

          <div className="lg:col-span-6 p-5 rounded-2xl bg-[#020b14]/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-400 font-medium">Water Classification:</div>
              <div className={`text-sm font-black ${currentProfile.color}`}>
                {currentProfile.label}
              </div>
            </div>

            <div className="text-xs">
              <span className="text-slate-400 font-medium">Palate Profile: </span>
              <span className="text-slate-200">{currentProfile.taste}</span>
            </div>

            <div className="text-xs">
              <span className="text-slate-400 font-medium">Biological Effect: </span>
              <span className="text-slate-300">{currentProfile.health}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Matrix Table */}
      <div className="glass-panel rounded-3xl overflow-hidden border-slate-800 shadow-2xl mb-12">
        <div className="p-6 sm:p-8 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">Full Mineral Composition Audit</h3>
            <p className="text-xs text-slate-400 mt-1">
              Sample Batch: {LAB_CERTIFICATES.batchNumber} • Certified by {LAB_CERTIFICATES.laboratory}
            </p>
          </div>

          <button
            onClick={() => setShowCertificateModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/60 font-semibold text-xs transition-colors"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>View Certified Lab Report</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-[#020b14]/50 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-4 px-6">Mineral / Biomarker</th>
                <th className="py-4 px-6 text-cyan-300 bg-cyan-950/30 border-x border-cyan-500/20">
                  Natural Resources™
                </th>
                <th className="py-4 px-6">Municipal Tap</th>
                <th className="py-4 px-6">Generic Distilled / RO</th>
                <th className="py-4 px-6 hidden md:table-cell">Health & Vitality Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {MINERAL_SPECS.map((m, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">
                    <div className="flex items-center gap-2">
                      <span>{m.name}</span>
                      <span className="text-[10px] text-cyan-400 font-mono font-normal">
                        ({m.chemical})
                      </span>
                    </div>
                  </td>

                  {/* Natural Resources Column */}
                  <td className="py-4 px-6 font-mono font-bold text-cyan-300 bg-cyan-950/20 border-x border-cyan-500/20">
                    {m.naturalResources} {m.unit}
                  </td>

                  {/* Municipal Tap Column */}
                  <td className="py-4 px-6 font-mono text-slate-400">
                    {m.tapWater} {m.unit}
                  </td>

                  {/* Purified RO Column */}
                  <td className="py-4 px-6 font-mono text-slate-500">
                    {m.purifiedRO} {m.unit}
                  </td>

                  {/* Benefit */}
                  <td className="py-4 px-6 text-xs text-slate-300 hidden md:table-cell">
                    {m.benefit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lab Certificate Modal */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel max-w-lg w-full rounded-3xl p-6 sm:p-8 border-cyan-500/40 relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <Award className="w-6 h-6 text-cyan-400" />
                <div>
                  <h4 className="text-base font-bold text-white">Official Certificate of Analysis</h4>
                  <div className="text-[11px] text-slate-400 font-mono">{LAB_CERTIFICATES.batchNumber}</div>
                </div>
              </div>
              <button
                onClick={() => setShowCertificateModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs mb-6">
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Testing Facility:</span>
                <span className="text-white font-medium">{LAB_CERTIFICATES.laboratory}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Verified Date:</span>
                <span className="text-white font-medium">{LAB_CERTIFICATES.testDate}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Purity Rating:</span>
                <span className="text-cyan-300 font-bold">{LAB_CERTIFICATES.purityScore}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">pH Analysis:</span>
                <span className="text-white font-mono">{LAB_CERTIFICATES.phResult}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Microbial Count:</span>
                <span className="text-emerald-400 font-bold">{LAB_CERTIFICATES.microbialTest}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">PFAS & Microplastics:</span>
                <span className="text-emerald-400 font-bold">{LAB_CERTIFICATES.microplastics}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300 mb-6 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Compliant with all World Health Organization & FDA Standards</span>
            </div>

            <button
              onClick={() => setShowCertificateModal(false)}
              className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
            >
              Close Lab Certificate
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

