"use client";

import React from "react";
import { MessageCircle, Phone, Truck } from "lucide-react";

interface FloatingWhatsAppProps {
  onOpenOrderModal?: () => void;
}

export function FloatingWhatsApp({ onOpenOrderModal }: FloatingWhatsAppProps) {
  const whatsappUrl =
    "https://wa.me/923001234567?text=Hello!%20I%20would%20like%20to%20order%20Natural%20Resources%20Water.";

  return (
    <>
      {/* Desktop Floating Pill Button (Bottom Right) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-2xl transition-all duration-300 hover:scale-105 animate-whatsapp group"
          aria-label="Order on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white shrink-0" />
          <span className="font-extrabold tracking-wide">
            Order on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Fast-Action Bar (Fixed at bottom on phones) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] flex items-center justify-between gap-2">
        {/* Fast Call Button */}
        <a
          href="tel:+923001234567"
          className="flex-1 py-2.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-black flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#0284c7]" />
          <span>Call Helpline</span>
        </a>

        {/* WhatsApp Fast Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] font-black flex items-center justify-center gap-1.5 shadow-md animate-whatsapp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        {/* Fast Book Button */}
        <button
          onClick={onOpenOrderModal}
          className="flex-1 py-2.5 px-2 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-[11px] font-black flex items-center justify-center gap-1.5 shadow-md"
        >
          <Truck className="w-4 h-4" />
          <span>Book Delivery</span>
        </button>
      </div>
    </>
  );
}
