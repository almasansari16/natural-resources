"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { X, Check, ShieldCheck, Sparkles, ShoppingBag, Truck, Droplets } from "lucide-react";
import confetti from "canvas-confetti";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductDetailModal({ product, onClose, onAddToCart }: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
    });
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="glass-panel max-w-2xl w-full rounded-3xl p-6 sm:p-8 border-cyan-500/30 relative my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
          {/* Visual Left Preview */}
          <div className="sm:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-[#061e38] to-[#020b14] border border-cyan-500/20">
            {product.imageSrc ? (
              <div className="relative w-full aspect-[3/4] flex items-center justify-center">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain rounded-xl drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                />
              </div>
            ) : (
              <div className="w-20 h-44 rounded-2xl border-2 border-cyan-400/50 bg-gradient-to-b from-sky-400/20 to-blue-900/40 flex flex-col items-center justify-between p-3 relative shadow-[0_0_25px_rgba(0,240,255,0.3)]">
                <div className="w-8 h-4 rounded-t bg-slate-400" />
                <div className="text-[9px] font-black text-cyan-300 text-center tracking-widest">
                  NATURAL RESOURCES
                </div>
                <div className="w-12 h-6 rounded bg-slate-900/80 border border-cyan-400/30 flex items-center justify-center text-[8px] text-white font-mono">
                  {product.volume.split(" ")[0]}
                </div>
              </div>
            )}

            <div className="mt-4 flex gap-2 text-[10px] font-mono">
              <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-300">
                {product.ph}
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">
                {product.tds}
              </span>
            </div>
          </div>

          {/* Details Right Column */}
          <div className="sm:col-span-7 space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                {product.categoryLabel}
              </span>
              <h3 className="text-2xl font-black text-white">{product.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{product.tagline}</p>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {product.description}
            </p>

            {/* Key Features */}
            <div className="space-y-1.5 pt-2">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Price & Quantity Bar */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-2xl font-black text-white">${product.price * quantity}</div>
                <div className="text-[10px] text-slate-400">{product.unit}</div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-700 rounded-xl px-3 py-1.5">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-slate-400 hover:text-white font-bold text-sm"
                >
                  −
                </button>
                <span className="text-xs font-mono font-bold text-white w-4 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-slate-400 hover:text-white font-bold text-sm"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add Button */}
            <button
              onClick={handleAdd}
              className={`w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                isAdded
                  ? "bg-emerald-500 text-slate-950"
                  : "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Delivery Order (${product.price * quantity})</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

