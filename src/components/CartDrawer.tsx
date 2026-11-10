"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles, Truck } from "lucide-react";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: (isSubscription: boolean) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartDrawerProps) {
  const [isSubscription, setIsSubscription] = useState(true);

  if (!isOpen) return null;

  const rawTotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = isSubscription ? Math.round(rawTotal * 0.15) : 0;
  const finalTotal = rawTotal - discountAmount;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#020b14]/95 border-l border-cyan-500/20 backdrop-blur-xl flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Your Delivery Cart</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-mono">
                {items.reduce((acc, i) => acc + i.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items Scroll Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-slate-400">
                <ShoppingBag className="w-16 h-16 text-slate-700 mb-4 stroke-1" />
                <h4 className="text-base font-bold text-white mb-1">Your cart is empty</h4>
                <p className="text-xs text-slate-400 max-w-xs mb-6">
                  Add our artisanal glass reserves, 5-gallon doorstep carboys, or touchless dispensers to begin.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
                >
                  Explore Collections
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="glass-panel p-4 rounded-2xl flex items-center justify-between gap-4 border-slate-800/80"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">
                      {item.product.name}
                    </h4>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      ${item.product.price} each • {item.product.unit}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-lg px-2 py-0.5 text-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="text-slate-400 hover:text-white font-bold"
                        >
                          −
                        </button>
                        <span className="font-mono font-bold text-white w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="text-slate-400 hover:text-white font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-base font-black text-cyan-300 font-mono">
                      ${item.product.price * item.quantity}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-800 bg-[#020b14]/90 space-y-4">
              {/* Subscription Toggle */}
              <div className="p-3 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Subscribe & Save 15%</span>
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Automated weekly or bi-weekly refill. Cancel anytime.
                  </div>
                </div>
                <button
                  onClick={() => setIsSubscription(!isSubscription)}
                  className={`w-11 h-6 rounded-full transition-colors relative ${
                    isSubscription ? "bg-cyan-500" : "bg-slate-700"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      isSubscription ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Price Calculations */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal:</span>
                  <span className="font-mono text-white">${rawTotal}</span>
                </div>

                {isSubscription && (
                  <div className="flex justify-between text-cyan-400">
                    <span>Subscription Saving (15%):</span>
                    <span className="font-mono">-${discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between text-emerald-400">
                  <span>Delivery & Empty Jug Pickup:</span>
                  <span className="font-bold">FREE</span>
                </div>

                <div className="pt-2 border-t border-slate-800 flex justify-between text-base font-black text-white">
                  <span>Total Amount:</span>
                  <span className="text-xl text-cyan-300 font-mono">${finalTotal}</span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={() => onCheckout(isSubscription)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-black uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Truck className="w-4 h-4 text-slate-950" />
                <span>Confirm & Dispatch Order (${finalTotal})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

