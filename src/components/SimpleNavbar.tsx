"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, Droplet, Menu, X, Clock, MapPin } from "lucide-react";

interface SimpleNavbarProps {
  onOpenOrderModal: () => void;
}

export function SimpleNavbar({ onOpenOrderModal }: SimpleNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappUrl =
    "https://wa.me/923001234567?text=Assalam-o-Alaikum!%20Mujhe%20Natural%20Resources%20Water%20ka%20order%20karna%20hai.";

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Pakistani Info Bar */}
      <div className="bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] text-white py-1.5 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm">🇵🇰</span>
            <span>Pakistan's Pure Mineral Water • Ghar aur Office tak Muft Delivery</span>
          </div>

          <div className="hidden sm:flex items-center gap-5 text-[11px]">
            <span className="flex items-center gap-1 text-emerald-200">
              <Clock className="w-3.5 h-3.5" />
              <span>Rozana Delivery: 8:00 AM se 8:00 PM</span>
            </span>
            <span className="flex items-center gap-1 text-emerald-200">
              <MapPin className="w-3.5 h-3.5" />
              <span>Lahore • Karachi • Islamabad • Rawalpindi</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1b4332] to-[#0284c7] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Droplet className="w-5 h-5 fill-white" />
          </div>

          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-none">
              NATURAL <span className="text-[#1b4332]">RESOURCES</span>
            </span>
            <span className="text-[10px] font-bold text-[#0284c7] uppercase tracking-wider mt-1">
              The Source of Mineral Water • L.S.L
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <a href="#products" className="hover:text-[#0284c7] transition-colors">
            Bottle Sizes & Prices
          </a>
          <a href="#dispenser-supply" className="hover:text-[#0284c7] transition-colors">
            19L Doorstep Supply
          </a>
          <a href="#why-us" className="hover:text-[#0284c7] transition-colors">
            Kyun Chunein?
          </a>
          <a href="#plant" className="hover:text-[#0284c7] transition-colors">
            Hamari Factory
          </a>
          <a href="#order" className="hover:text-[#0284c7] transition-colors">
            Order Form
          </a>
        </nav>

        {/* Quick Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Call Hotline */}
          <a
            href="tel:+923001234567"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 text-slate-700 hover:text-[#0284c7] hover:border-[#0284c7] text-xs font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>0300-1234567</span>
          </a>

          {/* WhatsApp Direct Order */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-sm hover:shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="hidden sm:inline">WhatsApp Order</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Quick Order Button */}
          <button
            onClick={onOpenOrderModal}
            className="px-4 py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-bold text-xs transition-colors shadow-sm"
          >
            Book Delivery
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 flex flex-col gap-4 text-sm font-semibold text-slate-800">
          <a
            href="#products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-1 border-b border-slate-100"
          >
            Bottle Sizes & Prices (500ml, 1.5L, 19L)
          </a>
          <a
            href="#dispenser-supply"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-1 border-b border-slate-100"
          >
            19-Liter Dispenser Doorstep Supply
          </a>
          <a
            href="#why-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-1 border-b border-slate-100"
          >
            Natural Resources Kyun Behtar Hai?
          </a>
          <a
            href="#plant"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-1 border-b border-slate-100"
          >
            Hamari Modern Factory & Plants
          </a>
          <a
            href="#order"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-1 border-b border-slate-100"
          >
            Online Delivery Form
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+923001234567"
              className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0284c7]" />
              <span>Call Helpline: 0300-1234567</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
