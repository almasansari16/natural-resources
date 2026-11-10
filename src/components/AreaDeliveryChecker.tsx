"use client";

import React, { useState } from "react";
import { Search, MapPin, CheckCircle2, Clock, Truck, MessageCircle } from "lucide-react";

const POPULAR_AREAS = [
  { name: "DHA Lahore", city: "Lahore", speed: "2 Hours" },
  { name: "Gulberg", city: "Lahore", speed: "2 Hours" },
  { name: "Bahria Town", city: "Lahore / RWP / KHI", speed: "3 Hours" },
  { name: "Clifton", city: "Karachi", speed: "2.5 Hours" },
  { name: "DHA Karachi", city: "Karachi", speed: "2 Hours" },
  { name: "F-7 & F-10", city: "Islamabad", speed: "2 Hours" },
  { name: "Johar Town", city: "Lahore", speed: "2.5 Hours" },
  { name: "Model Town", city: "Lahore", speed: "2 Hours" },
  { name: "Saddar", city: "Rawalpindi", speed: "3 Hours" },
];

export function AreaDeliveryChecker() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const handleSelect = (name: string) => {
    setSelectedArea(name);
    setSearchTerm(name);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectedArea(null);
  };

  const whatsappUrl = `https://wa.me/923001234567?text=Hello!%20I%20would%20like%20to%20confirm%20delivery%20for%20"${encodeURIComponent(
    searchTerm || "my area"
  )}".`;

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clean-card rounded-3xl p-6 sm:p-10 border-2 border-sky-100 shadow-xl bg-gradient-to-b from-white to-sky-50/30 text-center space-y-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full sky-badge text-xs font-bold uppercase tracking-wider mb-2">
              Instant Delivery Search
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Check Delivery in Your Society or Neighborhood
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Enter your residential society or commercial sector to verify express fleet coverage:
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search area: DHA, Gulberg, Bahria Town, Clifton, F-10..."
                className="w-full pl-12 pr-28 py-3.5 rounded-2xl border-2 border-slate-200 text-slate-800 text-sm focus:border-[#0284c7] focus:outline-none bg-white shadow-sm"
              />
              <button
                onClick={() => setSelectedArea(searchTerm || "Your Area")}
                className="absolute right-2 px-4 py-2 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-bold transition-all"
              >
                Check Area
              </button>
            </div>
          </div>

          {/* Quick Click Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="text-xs text-slate-500 font-semibold mr-1">Popular Areas:</span>
            {POPULAR_AREAS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSelect(item.name)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  searchTerm.toLowerCase().includes(item.name.toLowerCase())
                    ? "bg-[#0284c7] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Result Card */}
          {(selectedArea || searchTerm.length > 2) && (
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-left max-w-xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs font-black text-emerald-900 uppercase tracking-wide">
                    Express Delivery Available!
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    {searchTerm || selectedArea} — Daily Active Fleet Dispatch
                  </div>
                  <div className="text-xs text-emerald-700 mt-0.5 flex items-center gap-2">
                    <span>⏱️ Delivery within 2 to 4 Hours</span>
                    <span>•</span>
                    <span>Free Doorstep Delivery</span>
                  </div>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-black transition-all flex items-center justify-center gap-1.5 shrink-0 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order to This Area</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
