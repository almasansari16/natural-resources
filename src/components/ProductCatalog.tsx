"use client";

import React, { useState } from "react";
import { Product, PRODUCTS } from "@/data/products";
import { ShoppingBag, Star, Sparkles, Check, Info, Shield, Droplets, Truck } from "lucide-react";
import confetti from "canvas-confetti";

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
  onOpenProductModal: (product: Product) => void;
}

export function ProductCatalog({ onAddToCart, onOpenProductModal }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredProducts =
    selectedCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    confetti({
      particleCount: 35,
      spread: 50,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
      colors: ["#00f0ff", "#38bdf8", "#2dd4bf"],
    });

    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="collections" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Master Reserve & Supply Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            The Water Collection
          </h2>
          <p className="text-slate-300 text-base max-w-xl mt-3 font-normal">
            Whether for your luxury dining table, daily family dispenser hydration, or enterprise facility tanker supply.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mt-6 md:mt-0 p-1.5 rounded-2xl glass-panel">
          {[
            { id: "all", label: "All Items" },
            { id: "glass", label: "Artisanal Glass" },
            { id: "dispenser", label: "5-Gallon & Dispensers" },
            { id: "bulk", label: "Bulk Fleet" },
            { id: "accessory", label: "Gear" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => onOpenProductModal(product)}
            className="group glass-panel rounded-3xl p-5 flex flex-col justify-between glass-panel-hover cursor-pointer relative overflow-hidden"
          >
            {/* Top Badge */}
            {product.badge && (
              <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-[10px] font-black uppercase tracking-wider">
                {product.badge}
              </div>
            )}

            {/* Returnable deposit indicator */}
            {product.sustainableReturnable && (
              <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-[10px] font-semibold">
                ♻ Returnable
              </div>
            )}

            {/* Visual Header / Thumbnail Art */}
            <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-b from-[#061e38]/80 to-[#020b14]/90 flex items-center justify-center p-6 mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-radial-gradient from-cyan-500/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />

              {/* Product Artwork Glyph */}
              {product.imageType === "bottle-glass" && (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-36 rounded-t-xl rounded-b-md border-2 border-cyan-300/40 bg-gradient-to-b from-cyan-300/20 to-sky-600/40 relative shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                    <div className="absolute top-2 left-1 right-1 h-3 rounded-full bg-white/40" />
                    <div className="absolute bottom-4 left-2 right-2 h-10 border border-cyan-200/40 bg-[#020b14]/80 flex items-center justify-center text-[7px] font-bold text-cyan-300">
                      750ML
                    </div>
                  </div>
                </div>
              )}

              {product.imageType === "carboy-5gal" && (
                <div className="flex flex-col items-center">
                  <div className="w-24 h-32 rounded-2xl border-2 border-sky-400/50 bg-gradient-to-b from-sky-400/30 via-cyan-600/40 to-blue-800/50 relative shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 rounded-t bg-cyan-400/60 border border-cyan-300" />
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-8 border border-white/30 rounded bg-[#031b33]/80 flex items-center justify-center text-[8px] font-black text-cyan-300">
                      19 LITERS
                    </div>
                  </div>
                </div>
              )}

              {product.imageType === "bottle-active" && (
                <div className="flex flex-col items-center">
                  <div className="w-14 h-36 rounded-2xl border-2 border-teal-400/50 bg-gradient-to-b from-slate-900 to-slate-950 relative shadow-[0_0_20px_rgba(45,212,191,0.3)]">
                    <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-teal-300 to-cyan-400 rounded-full" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 text-center text-[7px] font-extrabold text-teal-300">
                      pH 8.8
                    </div>
                  </div>
                </div>
              )}

              {product.imageType === "bottle-sparkling" && (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-36 rounded-t-xl rounded-b-md border-2 border-blue-400/40 bg-gradient-to-b from-indigo-950/60 to-blue-900/60 relative shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                    <div className="absolute inset-2 flex flex-col justify-around items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />
                      <div className="w-1 h-1 rounded-full bg-white" />
                      <div className="w-2 h-2 rounded-full bg-cyan-200" />
                    </div>
                  </div>
                </div>
              )}

              {product.imageType === "dispenser" && (
                <div className="w-20 h-36 rounded-xl border border-slate-700 bg-gradient-to-b from-slate-800 to-slate-950 flex flex-col justify-between p-2 shadow-xl">
                  <div className="w-full h-8 rounded bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-[7px] text-cyan-400 font-mono">
                    UV-C ACTIVE
                  </div>
                  <div className="flex justify-center gap-2">
                    <div className="w-2.5 h-4 rounded-full bg-sky-400" />
                    <div className="w-2.5 h-4 rounded-full bg-rose-500" />
                  </div>
                </div>
              )}

              {product.imageType === "stand" && (
                <div className="w-24 h-28 rounded-b-3xl border-2 border-amber-200/30 bg-gradient-to-b from-slate-200/90 to-slate-400/90 flex flex-col items-center justify-end p-2 relative">
                  <div className="absolute bottom-1 w-20 h-4 rounded bg-amber-800" />
                  <div className="w-3 h-3 rounded-full bg-amber-400 -mb-1" />
                </div>
              )}

              {product.imageType === "tanker" && (
                <div className="flex items-center gap-1">
                  <Truck className="w-24 h-24 text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
                </div>
              )}

              {product.imageType === "flask" && (
                <div className="w-14 h-36 rounded-xl border-2 border-slate-700 bg-gradient-to-b from-[#06182c] to-[#020b14] flex flex-col items-center justify-between p-2 shadow-xl">
                  <div className="w-6 h-4 rounded-t bg-slate-600" />
                  <div className="text-[7px] text-slate-400 font-mono">32 OZ</div>
                </div>
              )}
            </div>

            {/* Information Body */}
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-cyan-400 font-bold uppercase tracking-wider text-[10px]">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1 text-amber-300 font-bold text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <span>{product.rating}</span>
                  <span className="text-slate-500 text-[10px]">({product.reviewsCount})</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-1">
                {product.name}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                {product.tagline}
              </p>

              {/* Purity Highlights Pill */}
              <div className="flex items-center gap-2 mb-4 text-[11px] text-slate-300">
                <span className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700">
                  {product.ph}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700">
                  {product.tds}
                </span>
              </div>
            </div>

            {/* Price & Action Button */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black text-white">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-slate-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-slate-400">{product.unit}</div>
              </div>

              <button
                onClick={(e) => handleAdd(e, product)}
                className={`p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center ${
                  addedId === product.id
                    ? "bg-emerald-500 text-slate-950 scale-105"
                    : "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:scale-105 active:scale-95"
                }`}
                aria-label={`Add ${product.name} to cart`}
              >
                {addedId === product.id ? (
                  <Check className="w-5 h-5 stroke-[2.5]" />
                ) : (
                  <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

