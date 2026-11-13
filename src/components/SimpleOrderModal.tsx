"use client";

import React, { useState } from "react";
import { X, Truck, CheckCircle2, MessageCircle, Phone, MapPin, ShieldCheck } from "lucide-react";
import { PAKISTAN_CITIES, Product } from "@/data/products";
import confetti from "canvas-confetti";

interface SimpleOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
}

export function SimpleOrderModal({ isOpen, onClose, selectedProduct }: SimpleOrderModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Lahore",
    address: "",
    quantity: 2,
    productName: selectedProduct?.name || "19-Liter / 5-Gallon Dispenser Bottle (Rs. 250)",
  });

  const [submitted, setSubmitted] = useState(false);
  const [orderCode, setOrderCode] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
    });

    const rnd = `NR-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderCode(rnd);
    setSubmitted(true);

    // Formatted WhatsApp Message
    const orderText = `*NEW ORDER - NATURAL RESOURCES WATER*%0A%0A*Order ID:* ${rnd}%0A*Customer Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Product:* ${encodeURIComponent(
      formData.productName
    )}%0A*Quantity:* ${formData.quantity}%0A*City:* ${encodeURIComponent(
      formData.city
    )}%0A*Delivery Address:* ${encodeURIComponent(
      formData.address
    )}%0A*Payment Mode:* Cash on Delivery (COD)%0A%0APlease confirm my delivery schedule. Thank you!`;

    const waUrl = `https://wa.me/923221204812?text=${orderText}`;

    // Automatically open WhatsApp in new tab/window
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappConfirmUrl = `https://wa.me/923221204812?text=Hello!%20I%20have%20booked%20an%20order%20for%20Natural%20Resources:%0AOrder%20ID:%20${orderCode}%0AName:%20${encodeURIComponent(
    formData.name
  )}%0AProduct:%20${encodeURIComponent(formData.productName)}%20(Qty:%20${
    formData.quantity
  })%0ACity:%20${encodeURIComponent(formData.city)}%0AAddress:%20${encodeURIComponent(
    formData.address
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 relative shadow-2xl my-8 border border-slate-200">
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#1b4332] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>

            <div>
              <div className="text-xs font-mono font-bold text-[#0284c7] uppercase">
                Order Confirmed #{orderCode}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                Your Order Has Been Booked!
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto mt-1.5">
                Our regional delivery van in <strong>{formData.city}</strong> will arrive at your address soon. The driver will call you prior to arrival.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Item:</span>
                <span className="font-bold text-slate-900">{formData.productName} (Qty: {formData.quantity})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Address:</span>
                <span className="font-bold text-slate-900">{formData.address}, {formData.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment:</span>
                <span className="font-bold text-emerald-700">Cash on Delivery (Pay upon arrival)</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={whatsappConfirmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send Confirmation to WhatsApp</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-[#1b4332]">
                <Truck className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Book Doorstep Water Delivery
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-5">
              Fast 1-minute order booking. Pay cash or mobile wallet upon arrival.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Product / Bottle Size
                </label>
                <select
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs focus:border-[#0284c7] focus:outline-none bg-white"
                >
                  <option value="500ml PET Pack - 12 Bottles (Rs. 330)">
                    500ml PET Pack (12 Bottles) — Rs. 330
                  </option>
                  <option value="500ml Single Bottle (Rs. 30)">
                    500ml Single Bottle — Rs. 30
                  </option>
                  <option value="1.5 Liter PET Pack - 6 Bottles (Rs. 330)">
                    1.5 Liter PET Pack (6 Bottles) — Rs. 330
                  </option>
                  <option value="1.5 Liter Single Bottle (Rs. 60)">
                    1.5 Liter Single Bottle — Rs. 60
                  </option>
                  <option value="19-Liter / 5-Gallon Dispenser Bottle (Rs. 250)">
                    19-Liter Dispenser Bottle (Rs. 250 Refill)
                  </option>
                  <option value="19L Wooden Countertop Stand + Push Tap (Rs. 2,900)">
                    19L Wooden Countertop Stand + Push Tap (Rs. 2,900)
                  </option>
                  <option value="Electric Hot & Cold Dispenser (Rs. 24,500)">
                    Electric Water Dispenser Unit (+2 Free Cans) — Rs. 24,500
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs focus:border-[#0284c7] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    City *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs focus:border-[#0284c7] focus:outline-none bg-white"
                  >
                    {PAKISTAN_CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Muhammad Usman"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs focus:border-[#0284c7] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0322-1204812"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs focus:border-[#0284c7] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Delivery Address (House/Office #, Street, Sector/Area) *
                </label>
                <input
                  required
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="e.g. H C470 Korangi No 5, Karachi Sector 43B or DHA Phase 5"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs focus:border-[#0284c7] focus:outline-none"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
                <span>Payment: <strong>Cash on Delivery (COD)</strong></span>
                <span className="text-emerald-700 font-bold">🚚 Free Delivery</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Truck className="w-4 h-4" />
                <span>Confirm Order (Book Delivery)</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
