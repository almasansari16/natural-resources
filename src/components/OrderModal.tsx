"use client";

import React, { useState } from "react";
import { X, Truck, CheckCircle2, ShieldCheck, Clock, MapPin, CreditCard, Sparkles, Phone, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export function OrderModal({ isOpen, onClose, preselectedProduct }: OrderModalProps) {
  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    district: "Metropolitan Downtown",
    productPlan: preselectedProduct || "2x 5-Gallon Eco-Carboys (19L)",
    timeSlot: "⚡ Express 45-Min Dispatch",
    paymentMethod: "Cash on Delivery (COD)",
    specialNotes: "",
  });

  const [orderTrackingCode, setOrderTrackingCode] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger full fireworks confetti
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.5 },
      colors: ["#00f0ff", "#38bdf8", "#2dd4bf", "#ffffff", "#0284c7"],
    });

    const randomCode = `NR-DISPATCH-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderTrackingCode(randomCode);
    setStep("confirmed");
  };

  const handleResetAndClose = () => {
    setStep("form");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="glass-panel max-w-xl w-full rounded-3xl p-6 sm:p-8 border-cyan-500/40 relative my-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {step === "form" ? (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400">
                <Truck className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white">Direct Water Supply Dispatch</h3>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              Enter your location to receive fresh chilled Natural Resources™ water directly at your doorstep.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Recipient Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Full Name / Company
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Kamran Malik"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#020b14] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Contact Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 300 1234567"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#020b14] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Water Selection */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Select Water Package / Service
                </label>
                <select
                  value={formData.productPlan}
                  onChange={(e) => setFormData({ ...formData, productPlan: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#020b14] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                >
                  <option value="2x 5-Gallon Eco-Carboys (19L)">
                    2× 5-Gallon Eco-Carboys (19L each) — $36
                  </option>
                  <option value="4x 5-Gallon Family Hydration Pack">
                    4× 5-Gallon Family Hydration Pack — $68 (15% off)
                  </option>
                  <option value="1x Glacier Glass Reserve Case (12 x 750ml)">
                    1× Glacier Glass Reserve Case (12 × 750ml) — $36
                  </option>
                  <option value="1x Alkaline+ 8.8 Active Water (12 x 1L)">
                    1× Alkaline+ 8.8 Active Recovery (12 × 1L) — $38
                  </option>
                  <option value="Starter Pack: Arctic Flow Dispenser + 2 Free Jugs">
                    Starter Pack: Arctic Flow™ Dispenser + 2 Free Jugs — $289
                  </option>
                  <option value="Commercial Bulk Tanker (5,000L)">
                    Commercial Bulk Tanker Fleet (5,000L) — $480
                  </option>
                </select>
              </div>

              {/* Delivery District & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Coverage District
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#020b14] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Metropolitan Downtown">Metropolitan Downtown</option>
                    <option value="Marina Promenade">Marina Promenade</option>
                    <option value="Emirates Hills / Green Villas">Emirates Hills / Green Villas</option>
                    <option value="Silicon Tech Park">Silicon Tech Park</option>
                    <option value="Executive Business Bay">Executive Business Bay</option>
                    <option value="DHA / Clifton / Gulberg">DHA / Clifton / Gulberg</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Street Address & Apt / Office #
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Building 4, Apt 12B"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#020b14] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Time Slot & Payment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Delivery Time Window
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#020b14] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="⚡ Express 45-Min Dispatch">⚡ Express 45-Min Dispatch</option>
                    <option value="🌅 Morning (08:00 AM - 11:00 AM)">🌅 Morning (08:00 AM - 11:00 AM)</option>
                    <option value="☀️ Afternoon (01:00 PM - 04:00 PM)">☀️ Afternoon (01:00 PM - 04:00 PM)</option>
                    <option value="🌙 Evening (06:00 PM - 09:00 PM)">🌙 Evening (06:00 PM - 09:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Payment Method
                  </label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#020b14] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Cash on Delivery (COD)">Cash on Doorstep Delivery</option>
                    <option value="Card on Delivery (POS Machine)">Card on Delivery (POS Wireless)</option>
                    <option value="JazzCash / EasyPaisa / Wallet">Mobile Wallet / QR Pay</option>
                    <option value="Corporate Monthly Invoice">Corporate Monthly Invoice (B2B)</option>
                  </select>
                </div>
              </div>

              {/* Special Note */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Delivery Notes (Optional)
                </label>
                <input
                  type="text"
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  placeholder="e.g. Leave near kitchen dispenser, 2 empty jugs ready for exchange"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#020b14] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-black uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Truck className="w-4 h-4 text-slate-950" />
                  <span>Confirm Doorstep Dispatch</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_30px_rgba(16,185,129,0.4)]">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div>
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-1">
                ORDER DISPATCHED #{orderTrackingCode}
              </div>
              <h3 className="text-2xl font-black text-white">Your Pure Water is En Route!</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto mt-2">
                Thank you, <span className="text-white font-bold">{formData.name}</span>! Fleet Van #04 has received your dispatch order.
              </p>
            </div>

            {/* Tracking Summary Card */}
            <div className="p-5 rounded-2xl bg-[#020b14]/90 border border-slate-800 text-left text-xs space-y-2.5">
              <div className="flex justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Package:</span>
                <span className="text-white font-medium">{formData.productPlan}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Delivery Zone:</span>
                <span className="text-white font-medium">{formData.district}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Arrival Window:</span>
                <span className="text-cyan-300 font-bold">{formData.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Payment:</span>
                <span className="text-emerald-400 font-medium">{formData.paymentMethod}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-[11px] text-cyan-300 flex items-center gap-2 text-left">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Contactless delivery guaranteed. Chilled temperature monitored at 12°C.</span>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-colors"
            >
              Back to Natural Resources
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

