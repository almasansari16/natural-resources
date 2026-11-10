"use client";

import React from "react";
import { Droplet, Factory, Truck, ShieldCheck, Heart, Award, Sparkles } from "lucide-react";

export function SimpleWhyUs() {
  const benefits = [
    {
      icon: <Droplet className="w-6 h-6 text-[#0284c7]" />,
      title: "Meetha aur Khalis Zaaiqa",
      urduTitle: "قدرتی میٹھا اور شفاف پانی",
      desc: "Natural Resources water bina kisi chemical badboo ke naturally sweet aur light hota hai jo pyas bujhata hai aur hazmay ke liye behtareen hai.",
    },
    {
      icon: <Factory className="w-6 h-6 text-[#1b4332]" />,
      title: "Touchless Machine Packing",
      urduTitle: "خودکار پلانٹ اور جراثیم سے پاک",
      desc: "Insani haath lagaye baghair stainless steel automated conveyor par bottling, UV sanitization aur airtight black cap sealing hoti hai.",
    },
    {
      icon: <Truck className="w-6 h-6 text-[#0284c7]" />,
      title: "Paband Waqt Delivery",
      urduTitle: "گھر اور دفتر تک مفت ڈلیوری",
      desc: "Khali dispenser can uthana aur naya bhara hua can lagana hamare rider ki zimmedari hai. Rozana aur haftawaar delivery schedule.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#1b4332]" />,
      title: "PSQCA & Halal Certified",
      urduTitle: "حکومتی معیار کے مطابق 100٪ محفوظ",
      desc: "Pakistan Standards and Quality Control Authority (PSQCA) aur Punjab/Sindh Food Authority ke mutabiq har batch certified hota hai.",
    },
  ];

  return (
    <section id="why-us" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full brand-badge text-xs font-bold uppercase tracking-wider mb-2">
          Kyun Chunein Natural Resources?
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Aapke Ghar Aur Khandan Ki Sehat Ka Zamin
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Gande ya naqis filter wale paani ke bajaye apne pyaron ko pilaayein certified khalis mineral water.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <div key={i} className="clean-card rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-5">
                {b.icon}
              </div>
              <h3 className="text-base font-black text-slate-900 mb-1">
                {b.title}
              </h3>
              <div className="text-xs font-bold text-[#1b4332] mb-3">
                {b.urduTitle}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {b.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4 text-[11px] font-bold text-[#0284c7] flex items-center gap-1">
              <span>Verified Safe</span>
              <span>✓</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

