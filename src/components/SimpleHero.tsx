"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, ShieldCheck, Truck, Droplet, ArrowRight, CheckCircle2 } from "lucide-react";

interface SimpleHeroProps {
  onOpenOrderModal: () => void;
}

const BRAND_PHOTOS = [
  {
    src: "/images/hero-outdoor-bench.jpg",
    title: "Refresh Your Moment",
    subtitle: "Outdoor, travel aur active lifestyle ke liye pure refreshment",
  },
  {
    src: "/images/girl-drinking.jpg",
    title: "Pure Hydration Pure Elegance",
    subtitle: "Sehatmand zindagi aur fresh din ki shuruat",
  },
  {
    src: "/images/bottles-table.jpg",
    title: "The Source of Mineral Water",
    subtitle: "100% natural meetha mineral zaaiqa",
  },
  {
    src: "/images/natural-resources-bottle.jpg",
    title: "Family Dining Table Pack",
    subtitle: "Lunch aur dinner ke liye fresh and pure",
  },
];

export function SimpleHero({ onOpenOrderModal }: SimpleHeroProps) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const whatsappUrl =
    "https://wa.me/923001234567?text=Assalam-o-Alaikum!%20Mujhe%20Natural%20Resources%20Water%20chahiye.";

  return (
    <section className="relative bg-gradient-to-b from-[#f0f9ff] via-[#f8fafc] to-white pt-10 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Order Callouts */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full brand-badge text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#1b4332] animate-ping" />
              <span>🇵🇰 Pakistan's Premium Pure Mineral Water</span>
              <span>•</span>
              <span>L.S.L Standard</span>
            </div>

            {/* Poster Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                <span className="text-[#0284c7]">REFRESH</span> <br />
                YOUR MOMENT.
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#1b4332] mt-2 tracking-wide">
                Pure Hydration • Pure Elegance
              </p>
            </div>

            {/* Simple Everyday Explanation */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Natural Resources aapke ghar aur office tak <strong>100% saaf, meetha aur safe mineral water</strong> pohanchata hai. Rozana fresh delivery Lahore, Karachi, Islamabad aur Rawalpindi mein.
            </p>

            {/* Direct Big Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 animate-whatsapp"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Par Order Karein</span>
              </a>

              {/* Order Form Modal Button */}
              <button
                onClick={onOpenOrderModal}
                className="px-6 py-4 rounded-2xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Truck className="w-5 h-5" />
                <span>Ghar Par Delivery Mangwayen</span>
              </button>

              {/* Call Helpline */}
              <a
                href="tel:+923001234567"
                className="px-5 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-[#0284c7] hover:border-[#0284c7] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#0284c7]" />
                <span>0300-1234567</span>
              </a>
            </div>

            {/* 3 Simple Pakistani Trust Pillars */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200 max-w-lg">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1b4332] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">PSQCA Approved</div>
                  <div className="text-[10px] text-slate-500">100% Safe Drinking</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Free Delivery</div>
                  <div className="text-[10px] text-slate-500">Ghar / Office Tak</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Droplet className="w-4 h-4 text-[#1b4332] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Meetha Zaaiqa</div>
                  <div className="text-[10px] text-slate-500">Naturally Balanced</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Brand Photography Slider Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <img
                src={BRAND_PHOTOS[activePhotoIdx].src}
                alt={BRAND_PHOTOS[activePhotoIdx].title}
                className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
              />

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      {BRAND_PHOTOS[activePhotoIdx].title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {BRAND_PHOTOS[activePhotoIdx].subtitle}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full brand-badge text-[10px] font-black uppercase">
                    Original
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery Row */}
            <div className="grid grid-cols-4 gap-2">
              {BRAND_PHOTOS.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhotoIdx(i)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    activePhotoIdx === i
                      ? "border-[#0284c7] scale-105 shadow-md"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={photo.src} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
