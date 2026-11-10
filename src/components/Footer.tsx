"use client";

import React, { useState } from "react";
import { Droplet, PhoneCall, Mail, MapPin, ShieldCheck, Heart, ArrowRight, Check } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 3500);
  };

  return (
    <footer className="bg-[#01060c] border-t border-slate-800/80 text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-700 flex items-center justify-center text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                <Droplet className="w-5 h-5 fill-slate-950" />
              </div>
              <span className="text-lg font-black tracking-[0.2em] text-white">
                NATURAL <span className="text-cyan-400">RESOURCES</span>
              </span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              The premier water supply and luxury artisanal bottled water brand. Bottled at protected glacial aquifers, remineralized for vital cellular health, and delivered fresh via our temperature-controlled urban fleet.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-slate-300">
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>24/7 Logistics Hotline: +1 (800) 555-NATURAL</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>dispatch@naturalresourceswater.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Global Bottling Plant & Fleet Hubs (ISO-22000 Facility)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Collections */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Water Collections
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#collections" className="hover:text-cyan-400 transition-colors">
                  Glacier Reserve Glass 750ml
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-cyan-400 transition-colors">
                  5-Gallon Eco-Carboys (19L)
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-cyan-400 transition-colors">
                  Alkaline+ 8.8 Cellular Hydration
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-cyan-400 transition-colors">
                  Alpine Sparkling Effervescent
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-cyan-400 transition-colors">
                  Arctic Flow™ Touchless Dispensers
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-cyan-400 transition-colors">
                  Commercial Fleet Tankers
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Science & Purity */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Purity & Science
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#purity-lab" className="hover:text-cyan-400 transition-colors">
                  8-Stage Filtration Process
                </a>
              </li>
              <li>
                <a href="#purity-lab" className="hover:text-cyan-400 transition-colors">
                  Independent Lab Certificates
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-400 transition-colors">
                  Hydration Need Calculator
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-cyan-400 transition-colors">
                  Zero-Waste Return Program
                </a>
              </li>
              <li>
                <a href="#supply-fleet" className="hover:text-cyan-400 transition-colors">
                  Chilled Fleet Logistics
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Hydration Journal
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Receive monthly water science reports, optimal electrolyte protocols, and subscriber-only delivery credits.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Subscribed! Check your inbox for $10 off.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2.5 rounded-xl bg-[#030e1a] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Certifications & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>NSF-61 Certified</span>
            </span>
            <span>•</span>
            <span>ISO 22000 Food Safety</span>
            <span>•</span>
            <span>B-Corp Certified Circular</span>
            <span>•</span>
            <span>WHO Compliance Verified</span>
          </div>

          <div>
            © 2026 Natural Resources Bottling & Supply Co. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
