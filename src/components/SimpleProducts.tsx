"use client";

import React from "react";
import { PAKISTAN_PRODUCTS, Product } from "@/data/products";
import { MessageCircle, Check, Truck, ShieldCheck } from "lucide-react";

interface SimpleProductsProps {
  onSelectProductForOrder: (product: Product) => void;
}

export function SimpleProducts({ onSelectProductForOrder }: SimpleProductsProps) {
  return (
    <section id="products" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-3 py-1 rounded-full sky-badge text-xs font-bold uppercase tracking-wider mb-2">
          Bottle Sizes & Retail Pricing
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Our Products & Doorstep Delivery Rates
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Tailored sizes for every hydration need: home dining, travel, corporate offices, and family living.
        </p>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PAKISTAN_PRODUCTS.map((prod) => {
          const whatsappOrderUrl = `https://wa.me/923221204812?text=Hello!%20I%20would%20like%20to%20order%20${encodeURIComponent(
            prod.name
          )}.%20Price:%20Rs.%20${prod.pricePkr}`;

          return (
            <div
              key={prod.id}
              className="clean-card rounded-3xl p-5 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Badge */}
              {prod.badge && (
                <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full brand-badge text-[10px] font-bold uppercase">
                  {prod.badge}
                </div>
              )}

              {/* Photo */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100 flex items-center justify-center">
                <img
                  src={prod.imageSrc}
                  alt={prod.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Info */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-[#0284c7] uppercase">
                  {prod.size} • {prod.idealFor}
                </div>

                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  {prod.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {prod.tagline}
                </p>

                {/* Bullets */}
                <ul className="space-y-1 pt-2 pb-3 border-t border-slate-100 text-xs text-slate-600">
                  {prod.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#1b4332] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action */}
              <div className="pt-3 border-t border-slate-100 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-black text-slate-900">
                      Rs. {prod.pricePkr.toLocaleString()}
                    </span>
                    {prod.originalPricePkr && (
                      <span className="text-xs text-slate-400 line-through ml-2">
                        Rs. {prod.originalPricePkr.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">{prod.unit}</span>
                </div>

                {/* 2 Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={whatsappOrderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onSelectProductForOrder(prod)}
                    className="py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Truck className="w-3.5 h-3.5" />
                    <span>Order (COD)</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
