"use client";

import React from "react";
import { Droplet, Phone, MessageCircle, MapPin, ShieldCheck, Heart } from "lucide-react";

export function SimpleFooter() {
  const whatsappUrl =
    "https://wa.me/923221204812?text=Hello!%20I%20would%20like%20to%20inquire%20about%20Natural%20Resources%20Water.";

  return (
    <footer className="bg-slate-900 text-slate-300 text-xs pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0284c7] flex items-center justify-center text-white">
                <Droplet className="w-5 h-5 fill-white" />
              </div>
              <div>
                <span className="text-base font-black text-white tracking-wide">
                  NATURAL <span className="text-emerald-400">RESOURCES</span>
                </span>
                <div className="text-[10px] text-sky-400 font-bold uppercase tracking-wider">
                  The Source of Mineral Water • L.S.L
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Pakistan's premium pure mineral water brand. Supplying 500ml and 1.5L crystal bottles alongside convenient 19-Liter doorstep refills to households and corporate offices nationwide.
            </p>

            <div className="pt-1 flex items-center gap-2 text-emerald-400 font-semibold text-[11px]">
              <ShieldCheck className="w-4 h-4" />
              <span>PSQCA Certified • 100% Halal Verified</span>
            </div>
          </div>

          {/* Quick Contact & WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
              Order & Office Location
            </h4>
            <div className="space-y-2">
              <a
                href="tel:+923221204812"
                className="flex items-center gap-2 text-slate-300 hover:text-white"
              >
                <Phone className="w-4 h-4 text-[#0284c7]" />
                <span>Call Helpline: 0322-1204812</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400 text-slate-900" />
                <span>WhatsApp: +92 322 1204812</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                <span>H C470 Korangi No 5, Karachi Sector 43B</span>
              </div>
            </div>
          </div>

          {/* Bottle Sizes & Retail Prices */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Bottle Sizes & Rates
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>• <strong>500ml Bottle:</strong> Rs. 30 (PET Pack: Rs. 330)</li>
              <li>• <strong>1.5L Bottle:</strong> Rs. 60 (PET Pack: Rs. 330)</li>
              <li>• <strong>19-Liter Can Refill:</strong> Rs. 250 (Doorstep)</li>
              <li>• <strong>19L Wooden Stand & Tap Kit:</strong> Rs. 2,900</li>
              <li>• <strong>Hot & Cold Dispenser Unit:</strong> Rs. 24,500</li>
            </ul>
          </div>

          {/* Cities Covered in Pakistan */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Coverage Cities (Pakistan)
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Lahore (DHA, Gulberg, Johar Town, Bahria), Karachi (Clifton, DHA, Gulshan), Islamabad, Rawalpindi, Faisalabad, Multan, Sialkot, and Peshawar.
            </p>
            <div className="mt-3 p-3 rounded-xl bg-slate-800 text-[11px] text-slate-300">
              ⚡ <strong>Express Delivery:</strong> Orders dispatched within 2 to 4 hours across major city sectors.
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © 2026 Natural Resources Mineral Water (Pvt.) Ltd. Pakistan. All Rights Reserved.
          </div>
          <div>
            Refresh Your Moment • Pure Hydration Pure Elegance
          </div>
        </div>
      </div>
    </footer>
  );
}
