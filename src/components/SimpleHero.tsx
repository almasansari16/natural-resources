"use client";

import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
  Droplet,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Flame,
  Award,
  ChevronRight,
} from "lucide-react";

interface SimpleHeroProps {
  onOpenOrderModal: () => void;
}

const BRAND_PHOTOS = [
  {
    id: "kitchen-dispenser",
    tag: "Kitchen & Home",
    icon: "🏡",
    src: "/images/dispenser-kitchen-tap.jpg",
    title: "Refresh Your Moment",
    subtitle: "Modern Kitchen Countertop 19L Stand & Fast Push Tap",
    calloutBadge: "Ghar Ke Liye Most Popular",
  },
  {
    id: "outdoor-bench",
    tag: "Travel & Sports",
    icon: "🌲",
    src: "/images/hero-outdoor-bench.jpg",
    title: "Pure Hydration Pure Elegance",
    subtitle: "Active travel aur outdoor dining ke liye 500ml crystal bottle",
    calloutBadge: "Easy Carry Bottle",
  },
  {
    id: "girl-drinking",
    tag: "Healthy Living",
    icon: "🌿",
    src: "/images/girl-drinking.jpg",
    title: "100% Living Pure Mineral Water",
    subtitle: "Sehatmand energy aur din bhar active rehne ke liye zaroori minerals",
    calloutBadge: "Natural Electrolytes",
  },
  {
    id: "bottles-table",
    tag: "Dining & Events",
    icon: "❄️",
    src: "/images/bottles-table.jpg",
    title: "The Source of Mineral Water",
    subtitle: "Ice-cold refreshing bottle packs family dining aur parties ke liye",
    calloutBadge: "Carton Packs Available",
  },
  {
    id: "bottling-plant",
    tag: "Untouched Plant",
    icon: "🏭",
    src: "/images/bottling-plant.jpg",
    title: "Automated Robotic Bottling",
    subtitle: "PSQCA certified touchless machine packing & German-standard hygiene",
    calloutBadge: "Zero Human Contact",
  },
];

export function SimpleHero({ onOpenOrderModal }: SimpleHeroProps) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  // Auto rotate photos every 5 seconds unless hovered
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActivePhotoIdx((prev) => (prev + 1) % BRAND_PHOTOS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activePhoto = BRAND_PHOTOS[activePhotoIdx];
  const whatsappUrl =
    "https://wa.me/923001234567?text=Assalam-o-Alaikum!%20Mujhe%20Natural%20Resources%20Pure%20Mineral%20Water%20chahiye.";

  return (
    <section className="relative bg-gradient-to-b from-[#e0f2fe]/60 via-[#f8fafc] to-white pt-8 pb-16 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Live Ticker Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 px-4 py-2 rounded-2xl bg-white/90 border border-slate-200 shadow-sm text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-bold text-slate-900">
              ⚡ Live Express Supply:
            </span>
            <span className="text-slate-600">
              Lahore, Karachi, Islamabad & Rawalpindi mein door-step delivery jari hai!
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-500 font-medium">
            <span className="hidden sm:inline">📦 1,840+ Cans Delivered Today</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              Free Delivery on 2+ Cans
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text & Order Callouts */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-200 text-xs font-bold text-[#1b4332] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
              <span>Pakistan's Premium Living Mineral Water</span>
              <span className="text-slate-300">•</span>
              <span className="text-sky-700">L.S.L Standard</span>
            </div>

            {/* Poster Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.06]">
                <span className="text-[#0284c7]">REFRESH</span> <br />
                YOUR MOMENT.
              </h1>
              <p className="text-xl sm:text-2xl font-black text-[#1b4332] mt-2.5 tracking-wide flex items-center gap-2">
                <span>Pure Hydration</span>
                <span className="text-sky-500">•</span>
                <span>Pure Elegance</span>
              </p>
            </div>

            {/* Simple Everyday Explanation */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              <strong>Natural Resources</strong> Pakistan ka wo pure mineral water hai jo aapke ghar aur office tak <strong>meetha, saaf aur certified safe paani</strong> pohanchata hai. Boring ya chemical bad-taste se chhutkara paayein.
            </p>

            {/* Key Value Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800">
                <Droplet className="w-3.5 h-3.5 text-sky-600" />
                100% Meetha Mineral Zaaiqa
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                Khali Can Badlo, Naya Can Lo (Rs. 250)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                PSQCA & Halal Certified
              </span>
            </div>

            {/* Direct Big Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 animate-whatsapp"
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
                <span>Ghar Par Delivery Book Karein</span>
              </button>

              {/* Call Helpline */}
              <a
                href="tel:+923001234567"
                className="px-5 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 hover:text-[#0284c7] hover:border-[#0284c7] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
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
                  <div className="text-xs font-bold text-slate-900">Doorstep Can Supply</div>
                  <div className="text-[10px] text-slate-500">Khali Can Exchange</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Droplet className="w-4 h-4 text-[#1b4332] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Fresh & Meetha</div>
                  <div className="text-[10px] text-slate-500">Pure Living Source</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Real Brand Photography Showcase (WOW Factor) */}
          <div
            className="lg:col-span-5 space-y-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Interactive Photo Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {BRAND_PHOTOS.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActivePhotoIdx(i)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 ${
                    activePhotoIdx === i
                      ? "bg-[#0284c7] text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <span>{p.icon}</span>
                  <span>{p.tag}</span>
                </button>
              ))}
            </div>

            {/* Main Showcase Image Card with Floating Badges */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 group">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
              />

              {/* Floating Top Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-black shadow-md border border-white/60 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {activePhoto.calloutBadge}
                </span>
              </div>

              {/* Floating Price Callout for Kitchen Stand or Bottles */}
              {activePhoto.id === "kitchen-dispenser" && (
                <div className="absolute top-4 right-4 z-10 animate-float">
                  <div className="px-3.5 py-2 rounded-2xl bg-[#1b4332]/95 backdrop-blur-md text-white shadow-xl border border-emerald-400/40 text-right">
                    <div className="text-[10px] text-emerald-200 font-bold uppercase tracking-wider">
                      Can Refill Rate
                    </div>
                    <div className="text-lg font-black text-white leading-tight">
                      Rs. 250 <span className="text-xs font-normal text-slate-200">/ 19L</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 transition-all">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-black text-[#0284c7] uppercase tracking-wider">
                      Official Brand Visual
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                      {activePhoto.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 line-clamp-1">
                      {activePhoto.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={onOpenOrderModal}
                    className="px-3.5 py-2 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-bold shrink-0 transition-colors flex items-center gap-1 shadow-sm"
                  >
                    <span>Order</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery Row with Active Progress */}
            <div className="grid grid-cols-5 gap-2 pt-1">
              {BRAND_PHOTOS.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhotoIdx(i)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all relative ${
                    activePhotoIdx === i
                      ? "border-[#0284c7] scale-105 shadow-md ring-2 ring-sky-300"
                      : "border-transparent opacity-65 hover:opacity-100"
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                  {activePhotoIdx === i && (
                    <div className="absolute inset-0 bg-[#0284c7]/10" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
