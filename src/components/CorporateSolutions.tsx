"use client";

import React, { useState } from "react";
import { Building2, UtensilsCrossed, Factory, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

export function CorporateSolutions() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactEmail: "",
    facilityType: "Corporate Office",
    monthlyVolume: "50-100 Carboys",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
    });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        companyName: "",
        contactEmail: "",
        facilityType: "Corporate Office",
        monthlyVolume: "50-100 Carboys",
      });
    }, 4000);
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Building2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Enterprise & Commercial Hospitality</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Tailored B2B Water Infrastructure
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          From 50-story commercial towers to five-star hotel chains and industrial manufacturing facilities, Natural Resources™ powers mission-critical hydration ecosystems.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Pillar 1 */}
        <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between glass-panel-hover">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              <Building2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Corporate Headquarters</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Full-service pantry hydration. Touchless smart dispensers, bi-weekly automatic carboy replenishment, consolidated monthly invoicing, and ESG carbon-reduction reporting.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Dedicated account manager & 4-hr SLA</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Quarterly UV-C dispenser sterilization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Automated empty jug collection</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between glass-panel-hover border-cyan-500/30">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-sky-950/80 border border-sky-400/40 flex items-center justify-center text-sky-400 mb-6 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
              <UtensilsCrossed className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Hotels & Fine Dining</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Custom laser-etched glass bottles for table service, presidential suites, and spa pavilions. Certified neutral minerality that elevates culinary flavors and vintage wine bouquets.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Bespoke crest branding on glass</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Still & effervescent sparkling pairings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Zero single-use plastic waste audit</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between glass-panel-hover">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-teal-950/80 border border-teal-400/40 flex items-center justify-center text-teal-400 mb-6 shadow-[0_0_20px_rgba(45,212,191,0.2)]">
              <Factory className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Industrial & Bulk Tankers</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Direct food-grade stainless tanker delivery from 5,000 to 25,000 Liters. Ideal for medical cleanrooms, commercial bakeries, events, and emergency water reserve supply.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>316L sanitary stainless pumping</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Certified batch certificate per drop</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>24/7 on-call emergency reserves</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Enterprise Quote Request Form */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border-cyan-500/20 shadow-2xl">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Request an Enterprise Water Audit & Proposal</h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Tell us about your organization. Our hydration engineers will prepare a customized supply cadence and volume pricing schedule within 2 hours.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-8 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-center max-w-lg mx-auto">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">Corporate Proposal Dispatched</h4>
            <p className="text-xs text-slate-300">
              Thank you! Our Commercial Accounts Director has received your request and will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Company / Organization</label>
              <input
                required
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="e.g. Apex Global Towers"
                className="w-full px-4 py-3 rounded-xl bg-[#020b14]/90 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Business Email</label>
              <input
                required
                type="email"
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                placeholder="procurement@company.com"
                className="w-full px-4 py-3 rounded-xl bg-[#020b14]/90 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Facility Type</label>
              <select
                value={formData.facilityType}
                onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#020b14]/90 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
              >
                <option value="Corporate Office">Corporate Office / Coworking</option>
                <option value="Hotel & Dining">Luxury Hotel & Fine Dining</option>
                <option value="Gym / Athletic Club">Fitness & Athletic Club</option>
                <option value="Industrial / Tanker">Industrial / Bulk Tanker Needed</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Estimated Monthly Volume</label>
              <select
                value={formData.monthlyVolume}
                onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#020b14]/90 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
              >
                <option value="25-50 Carboys">25 - 50 Carboys / month</option>
                <option value="50-100 Carboys">50 - 100 Carboys / month</option>
                <option value="100+ Carboys & Dispensers">100+ Carboys + Smart Dispensers</option>
                <option value="Bulk Tanker 10,000L+">Bulk Tanker Supply (10,000L+)</option>
              </select>
            </div>

            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-black uppercase tracking-wider text-xs shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Request B2B Corporate Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

