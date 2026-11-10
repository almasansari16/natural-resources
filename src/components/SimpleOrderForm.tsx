"use client";

import React, { useState } from "react";
import { PAKISTAN_CITIES } from "@/data/products";
import { Truck, CheckCircle2, Phone, MessageCircle, MapPin, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

export function SimpleOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Lahore",
    address: "",
    packageChoice: "2x 19L Dispenser Cans (Rs. 500)",
    payment: "Cash on Delivery (COD)",
  });

  const [submitted, setSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
    });

    const rndNum = `NR-PK-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderNumber(rndNum);
    setSubmitted(true);
  };

  const whatsappDirectMessage = `https://wa.me/923001234567?text=Assalam-o-Alaikum!%20Maine%20Natural%20Resources%20ka%20order%20place%20kiya%20hai:%0AOrder%20ID:%20${orderNumber}%0AName:%20${encodeURIComponent(
    formData.name
  )}%0APackage:%20${encodeURIComponent(formData.packageChoice)}%0ACity:%20${encodeURIComponent(
    formData.city
  )}%0AAddress:%20${encodeURIComponent(formData.address)}`;

  return (
    <section id="order" className="py-20 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full sky-badge text-xs font-bold uppercase tracking-wider mb-2">
            Easy Online Booking
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Ghar Baithe Paani Order Karein
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Form bharein ya direct hamare WhatsApp number par apna address share karein.
          </p>
        </div>

        <div className="clean-card rounded-3xl p-6 sm:p-10 shadow-lg">
          {submitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#1b4332] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-[#0284c7] uppercase">
                  Order Successfully Placed #{orderNumber}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  Shukriya, {formData.name}!
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mt-2">
                  Aapka order receive ho chuka hai. Hamara delivery rider jald aapke number <strong>{formData.phone}</strong> par call karke paani delivered karega.
                </p>
              </div>

              {/* Order Summary Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Package:</span>
                  <span className="font-bold text-slate-900">{formData.packageChoice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">City & Address:</span>
                  <span className="font-bold text-slate-900">{formData.city} • {formData.address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Payment Mode:</span>
                  <span className="font-bold text-emerald-700">{formData.payment}</span>
                </div>
              </div>

              {/* WhatsApp direct receipt */}
              <div className="pt-2 max-w-md mx-auto space-y-2">
                <a
                  href={whatsappDirectMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Par Tracking Details Bhejein</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
                >
                  Naya Order Karein
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Aapka Naam (Full Name) *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Muhammad Ali"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-xs focus:border-[#0284c7] focus:outline-none"
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
                    placeholder="e.g. 0300-1234567"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-xs focus:border-[#0284c7] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Shehar (City) *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-xs focus:border-[#0284c7] focus:outline-none bg-white"
                  >
                    {PAKISTAN_CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Product / Package Chunein *
                  </label>
                  <select
                    value={formData.packageChoice}
                    onChange={(e) => setFormData({ ...formData, packageChoice: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-xs focus:border-[#0284c7] focus:outline-none bg-white"
                  >
                    <option value="2x 19L Dispenser Cans (Rs. 500)">
                      2× 19-Liter Dispenser Cans — Rs. 500
                    </option>
                    <option value="4x 19L Monthly Family Pack (Rs. 950)">
                      4× 19-Liter Monthly Family Pack — Rs. 950
                    </option>
                    <option value="1x Carton 1.5 Liter - 6 Bottles (Rs. 600)">
                      1× Carton 1.5 Liter (6 Bottles) — Rs. 600
                    </option>
                    <option value="1x Carton 500ml - 12 Bottles (Rs. 600)">
                      1× Carton 500ml (12 Bottles) — Rs. 600
                    </option>
                    <option value="Electric Dispenser + 2 Free Bottles (Rs. 24,500)">
                      Electric Dispenser Unit + 2 Free Cans — Rs. 24,500
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Ghar / Office Ka Address (Street, House/Office #, Area) *
                </label>
                <input
                  required
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="e.g. House # 14, Street 7, Sector F-8/2 ya DHA Phase 5"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-xs focus:border-[#0284c7] focus:outline-none"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Payment: <strong>Cash on Delivery (COD)</strong> ya <strong>JazzCash / EasyPaisa</strong></span>
                </div>
                <span className="font-bold text-[11px] bg-white px-2 py-0.5 rounded border border-emerald-300">
                  Free Delivery
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-black text-sm uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Truck className="w-4 h-4" />
                <span>Order Confirm Karein (Cash on Delivery)</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
