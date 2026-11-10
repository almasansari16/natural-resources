"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/923001234567?text=Assalam-o-Alaikum!%20Mujhe%20Natural%20Resources%20Water%20order%20karna%20hai.";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-2xl transition-all duration-300 hover:scale-105 animate-whatsapp group"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white shrink-0" />
        <span className="hidden sm:inline font-extrabold tracking-wide">
          Order on WhatsApp
        </span>
      </a>
    </div>
  );
}
