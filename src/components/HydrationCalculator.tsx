"use client";

import React, { useState } from "react";
import { Users, Activity, Calendar, Droplets, Leaf, ShieldCheck, ArrowRight, Check } from "lucide-react";
import confetti from "canvas-confetti";

interface HydrationCalculatorProps {
  onAddCustomPlan: (plan: {
    title: string;
    monthlyLiters: number;
    recommendedJugs: number;
    recommendedCases: number;
    monthlyPrice: number;
  }) => void;
}

export function HydrationCalculator({ onAddCustomPlan }: HydrationCalculatorProps) {
  const [peopleCount, setPeopleCount] = useState<number>(4);
  const [activityLevel, setActivityLevel] = useState<"standard" | "active" | "intense">("active");
  const [frequency, setFrequency] = useState<"weekly" | "biweekly" | "monthly">("biweekly");
  const [isAdded, setIsAdded] = useState(false);

  // Liters multiplier per person per day
  const multiplier = {
    standard: 2.2,
    active: 3.0,
    intense: 4.2,
  }[activityLevel];

  const dailyLiters = Math.round(peopleCount * multiplier * 10) / 10;
  const monthlyLiters = Math.round(dailyLiters * 30);

  // 1 carboy = 19L
  const recommendedJugs = Math.max(1, Math.ceil(monthlyLiters / 19));
  // Additional glass cases for guest & on-the-go
  const recommendedCases = Math.max(1, Math.round(peopleCount * 0.75));

  // Monthly price calculation
  const rawPrice = recommendedJugs * 18 + recommendedCases * 36;
  const subscriptionDiscount = 0.15; // 15% off subscription
  const monthlyPrice = Math.round(rawPrice * (1 - subscriptionDiscount));

  // Plastic single-use 500ml bottles eliminated per month
  const plasticBottlesSaved = Math.round(monthlyLiters * 2);

  const handleSelectPlan = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#00f0ff", "#38bdf8", "#2dd4bf", "#ffffff"],
    });

    onAddCustomPlan({
      title: `Custom Hydration Plan (${peopleCount} People, ${activityLevel.toUpperCase()})`,
      monthlyLiters,
      recommendedJugs,
      recommendedCases,
      monthlyPrice,
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  return (
    <section id="calculator" className="relative py-24 bg-[#030f1c]/70 border-y border-cyan-500/10 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Droplets className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Hydration Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Calculate Your Water Demand & Delivery Plan
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Fine-tune your household or corporate water consumption. We calculate the exact bio-hydration requirements and engineer an automated, zero-waste delivery cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 space-y-8">
            {/* Slider 1: People Count */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>Household or Office Members</span>
                </label>
                <span className="px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-black text-sm">
                  {peopleCount} {peopleCount === 1 ? "Person" : "People"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={peopleCount}
                onChange={(e) => setPeopleCount(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1 Solo Resident</span>
                <span>4 Family</span>
                <span>12 Small Office</span>
                <span>30+ Floor</span>
              </div>
            </div>

            {/* Selector 2: Activity Level */}
            <div>
              <label className="text-sm font-bold text-slate-200 flex items-center gap-2 mb-3">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>Daily Activity & Lifestyle Intensity</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "standard", label: "Standard Desk", desc: "2.2L / day", note: "Moderate Hydration" },
                  { id: "active", label: "Active Living", desc: "3.0L / day", note: "Recommended" },
                  { id: "intense", label: "Athletic & High Exertion", desc: "4.2L / day", note: "Max Recovery" },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setActivityLevel(tier.id as "standard" | "active" | "intense")}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-200 ${
                      activityLevel === tier.id
                        ? "bg-cyan-950/60 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                        : "bg-slate-900/40 border-slate-700/60 hover:border-slate-600"
                    }`}
                  >
                    <div className="text-xs font-bold text-white mb-0.5">{tier.label}</div>
                    <div className="text-cyan-400 text-xs font-semibold">{tier.desc}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{tier.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selector 3: Preferred Delivery Cadence */}
            <div>
              <label className="text-sm font-bold text-slate-200 flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Preferred Dispatch Cadence</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "weekly", label: "Every Week", desc: "Fresh Chilled Dispatch" },
                  { id: "biweekly", label: "Bi-Weekly", desc: "Most Efficient" },
                  { id: "monthly", label: "Monthly Bulk", desc: "Single Mega Drop" },
                ].map((freq) => (
                  <button
                    key={freq.id}
                    onClick={() => setFrequency(freq.id as "weekly" | "biweekly" | "monthly")}
                    className={`p-3 rounded-2xl border text-left transition-all duration-200 ${
                      frequency === freq.id
                        ? "bg-sky-950/60 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                        : "bg-slate-900/40 border-slate-700/60 hover:border-slate-600"
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{freq.label}</div>
                    <div className="text-[11px] text-slate-400">{freq.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Environmental Impact Counter */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/50 flex items-center justify-center text-emerald-400">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-300">Eco Impact Milestone</div>
                  <div className="text-[11px] text-slate-300">
                    Your plan prevents <span className="text-white font-bold">{plasticBottlesSaved} single-use plastic bottles</span> every month!
                  </div>
                </div>
              </div>
              <ShieldCheck className="w-5 h-5 text-emerald-400 hidden sm:block" />
            </div>
          </div>

          {/* Results Plan Card Column */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border-cyan-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* Highlight Ribbon */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400 text-cyan-300 text-[10px] font-black uppercase tracking-wider">
                15% Sub Discount Active
              </div>

              <div className="text-xs uppercase tracking-widest text-cyan-400 font-extrabold mb-1">
                Engineered Supply Plan
              </div>
              <h3 className="text-2xl font-black text-white mb-6">
                Pure Living Hydration Plan
              </h3>

              {/* Liters Breakdown */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-[#020b14]/70 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium">Daily Demand</div>
                  <div className="text-2xl font-black text-cyan-300 mt-1">{dailyLiters} L</div>
                  <div className="text-[10px] text-slate-500">Optimum Cellular Intake</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#020b14]/70 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium">Monthly Supply</div>
                  <div className="text-2xl font-black text-white mt-1">{monthlyLiters} L</div>
                  <div className="text-[10px] text-slate-500">Total Volume</div>
                </div>
              </div>

              {/* Recommended Containers */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="font-semibold text-slate-200">{recommendedJugs} × 5-Gallon Eco-Carboys (19L)</span>
                  </div>
                  <span className="text-xs text-slate-400">Doorstep Refill</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-sky-400" />
                    <span className="font-semibold text-slate-200">{recommendedCases} × Glacier Glass Case (12 x 750ml)</span>
                  </div>
                  <span className="text-xs text-slate-400">Dining & Travel</span>
                </div>
              </div>

              {/* Pricing & Subscribe Action */}
              <div className="pt-6 border-t border-slate-800/80 mb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-sm text-slate-400">Total Monthly Investment</span>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 line-through mr-2">${rawPrice}</span>
                    <span className="text-3xl font-black text-white">${monthlyPrice}</span>
                    <span className="text-xs text-slate-400 font-medium"> / month</span>
                  </div>
                </div>
                <div className="text-[11px] text-cyan-300/80 text-right">
                  Includes free doorstep pickup of empty containers & sanitizer inspection
                </div>
              </div>

              <button
                onClick={handleSelectPlan}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-black uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 text-slate-950 stroke-[3]" />
                    <span>Plan Added to Delivery Queue!</span>
                  </>
                ) : (
                  <>
                    <span>Activate This Water Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

