"use client";

import React, { useState } from "react";
import { MapPin, Clock, Truck, Phone, MessageCircle, CheckCircle2, ShieldCheck } from "lucide-react";

interface CityInfo {
  id: string;
  name: string;
  tagline: string;
  deliveryTime: string;
  areas: string[];
  helpline: string;
}

const CITIES: CityInfo[] = [
  {
    id: "lahore",
    name: "Lahore",
    tagline: "Same-Day Doorstep Express Fleet",
    deliveryTime: "Within 2 to 4 Hours",
    areas: [
      "DHA (Phases 1 through 9)",
      "Gulberg I, II, III",
      "Model Town",
      "Johar Town & Faisal Town",
      "Bahria Town Lahore",
      "Cantt & Askari 10 / 11",
      "Wapda Town & Lake City",
      "Garden Town & Iqbal Town",
    ],
    helpline: "0322-1204812",
  },
  {
    id: "karachi",
    name: "Karachi",
    tagline: "Metropolitan Scheduled Delivery Network",
    deliveryTime: "Same-Day Scheduled Refills",
    areas: [
      "Korangi No 5 (Sector 43B Hub)",
      "Clifton (Blocks 1-9)",
      "DHA Karachi (Phases 1-8)",
      "PECHS & SMCHS",
      "Gulshan-e-Iqbal & Gulistan-e-Jauhar",
      "North Nazimabad",
      "Malir Cantt",
      "Bahria Town Karachi",
    ],
    helpline: "0322-1204812",
  },
  {
    id: "islamabad",
    name: "Islamabad & Rawalpindi",
    tagline: "Twin Cities Pure Living Supply",
    deliveryTime: "8:00 AM to 8:00 PM Daily",
    areas: [
      "F-Sectors (F-6, F-7, F-8, F-10, F-11)",
      "E-Sectors & Blue Area",
      "G-Sectors (G-9, G-10, G-11)",
      "Bahria Town (Phases 1-8)",
      "DHA Islamabad (Phases 1 & 2)",
      "Rawalpindi Saddar & Cantt",
      "Satellite Town & Chaklala Scheme",
      "PWD & Media Town",
    ],
    helpline: "0322-1204812",
  },
  {
    id: "faisalabad",
    name: "Faisalabad & Multan",
    tagline: "Regional Distribution Hubs",
    deliveryTime: "Next-Morning Guaranteed Doorstep",
    areas: [
      "D-Ground & Kohinoor City",
      "Madina Town & Peoples Colony",
      "Canal Road Housing Societies",
      "Bosan Road Multan",
      "Multan Cantt & Gulgasht Colony",
      "Model Town Multan",
    ],
    helpline: "0322-1204812",
  },
];

export function CityCoverageSection() {
  const [activeCity, setActiveCity] = useState<CityInfo>(CITIES[1]); // Default to Karachi

  const whatsappUrl = `https://wa.me/923221204812?text=Hello!%20I%20would%20like%20to%20order%20water%20delivery%20in%20${encodeURIComponent(
    activeCity.name
  )}.`;

  return (
    <section id="delivery-cities" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#0284c7]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5" />
            <span>Nationwide Express Delivery Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Delivery Network & Covered Cities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Select your city to check delivery timelines and active neighborhood distribution hubs:
          </p>
        </div>

        {/* City Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {CITIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCity(c)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
                activeCity.id === c.id
                  ? "bg-[#0284c7] text-white shadow-lg shadow-sky-500/30 scale-105"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        {/* Active City Details Box */}
        <div className="max-w-4xl mx-auto bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Area List */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {activeCity.name}
                  </h3>
                  <div className="text-xs text-sky-400 font-bold mt-0.5">
                    {activeCity.tagline}
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                  Active Fleet
                </div>
              </div>

              <div className="text-xs text-slate-300 flex items-center gap-2 pt-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>
                  Delivery Speed: <strong className="text-white">{activeCity.deliveryTime}</strong>
                </span>
              </div>

              {/* Covered Neighborhoods */}
              <div className="pt-3 border-t border-slate-700">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Covered Neighborhoods & Housing Societies:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {activeCity.areas.map((area, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-slate-300 flex items-center gap-1.5 bg-slate-900/60 p-2 rounded-xl border border-slate-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="md:col-span-5 bg-gradient-to-br from-slate-900 to-[#1b4332] p-6 rounded-2xl border border-slate-700 space-y-4">
              <div>
                <span className="text-[10px] text-emerald-300 uppercase tracking-wider font-bold">
                  City Helpline
                </span>
                <div className="text-xl font-black text-white mt-1">
                  {activeCity.helpline}
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Active delivery fleet running daily from 8:00 AM to 8:00 PM.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order Delivery in {activeCity.name}</span>
              </a>

              <div className="text-[10px] text-slate-400 text-center">
                ✓ Free delivery on 2 or more cans / cartons
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
