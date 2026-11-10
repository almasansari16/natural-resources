"use client";

import React from "react";
import { Truck, RefreshCw, CheckCircle2, MessageCircle, Phone, Clock, ShieldCheck } from "lucide-react";

interface SimpleDoorstepSupplyProps {
  onOpenOrderModal: () => void;
}

export function SimpleDoorstepSupply({ onOpenOrderModal }: SimpleDoorstepSupplyProps) {
  const whatsappUrl =
    "https://wa.me/923001234567?text=Hello!%20I%20would%20like%20to%20order%20doorstep%20delivery%20for%2019-Liter%20Dispenser%20Bottles.";

  return (
    <section id="dispenser-supply" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Photo */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/dispenser-kitchen-tap.jpg"
                alt="19 Liter Water Bottle Natural Resources Kitchen Tap Stand"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-5 -right-3 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-[#1b4332] font-black text-lg">
                19L
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Doorstep Refill Rate</div>
                <div className="text-xl font-black text-[#1b4332]">Rs. 250 <span className="text-xs font-normal text-slate-500">/ can</span></div>
                <div className="text-[10px] text-emerald-600 font-bold">Empty Can Exchange</div>
              </div>
            </div>
          </div>

          {/* Right Text & Steps */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full brand-badge text-xs font-bold uppercase tracking-wider">
              The #1 Choice for Homes & Offices
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              19-Liter Dispenser Bottle <br />
              <span className="text-[#0284c7]">Doorstep Delivery & Can Exchange</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              No more hauling heavy water bottles from the market! Our punctual delivery team delivers fresh, tamper-sealed bottles right to your kitchen or office dispenser, while taking away your empty cans. Every single bottle is 100% steam-sanitized at high temperatures before filling.
            </p>

            {/* 3 Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0284c7] font-black flex items-center justify-center text-sm mb-2">
                  1
                </div>
                <h4 className="text-sm font-bold text-slate-900">Send Delivery Details</h4>
                <p className="text-xs text-slate-500 mt-1">Message your address, city, and number of cans on WhatsApp or online.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#1b4332] font-black flex items-center justify-center text-sm mb-2">
                  2
                </div>
                <h4 className="text-sm font-bold text-slate-900">Doorstep Exchange</h4>
                <p className="text-xs text-slate-500 mt-1">Our rider collects your empty bottles and sets up the fresh sealed cans.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-black flex items-center justify-center text-sm mb-2">
                  3
                </div>
                <h4 className="text-sm font-bold text-slate-900">Cash on Delivery</h4>
                <p className="text-xs text-slate-500 mt-1">Inspect your fresh sealed bottles, then pay cash or via JazzCash / EasyPaisa.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order 19L Cans on WhatsApp</span>
              </a>

              <button
                onClick={onOpenOrderModal}
                className="px-6 py-3.5 rounded-2xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Truck className="w-4 h-4" />
                <span>Book Delivery Online (COD)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
