"use client";

import React, { useState, useEffect } from "react";
import { Droplet, Volume2, VolumeX, ShoppingBag, Truck, Menu, X, Sparkles, PhoneCall } from "lucide-react";
import { waterAudio } from "@/utils/audio";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenOrderModal: () => void;
}

export function Navbar({ cartCount, onOpenCart, onOpenOrderModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const active = waterAudio.toggle();
    setIsPlayingAudio(active);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#020b14]/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-600 to-blue-800 p-[1.5px] shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] transition-all duration-300">
              <div className="w-full h-full bg-[#020b14] rounded-[10px] flex items-center justify-center overflow-hidden">
                <Droplet className="w-5 h-5 text-cyan-400 fill-cyan-400/40 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-[0.2em] text-white flex items-center gap-1.5">
                NATURAL <span className="text-cyan-400 font-extrabold">RESOURCES</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-cyan-300/70 font-semibold -mt-0.5">
                Pure Living Hydration • Est. 2018
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#collections" className="hover:text-cyan-400 transition-colors">
              Bottled Water
            </a>
            <a href="#supply-fleet" className="hover:text-cyan-400 transition-colors">
              5-Gal & Fleet Supply
            </a>
            <a href="#purity-lab" className="hover:text-cyan-400 transition-colors">
              Purity Science
            </a>
            <a href="#calculator" className="hover:text-cyan-400 transition-colors">
              Hydration Calculator
            </a>
            <a href="#sustainability" className="hover:text-cyan-400 transition-colors">
              Zero Waste
            </a>
          </nav>

          {/* Action Tools & CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Ambient Sound Generator Button */}
            <button
              onClick={handleToggleAudio}
              title={isPlayingAudio ? "Mute Mountain Brook Sound" : "Play Mountain Spring Brook Ambient Sound"}
              className={`p-2.5 rounded-full border transition-all duration-300 flex items-center gap-2 text-xs font-medium ${
                isPlayingAudio
                  ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                  : "bg-slate-900/60 border-slate-700/60 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40"
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="hidden xl:inline text-[11px]">Alpine Stream</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden xl:inline text-[11px]">Sound Ambient</span>
                </>
              )}
            </button>

            {/* Live Fleet Dispatch Pill */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-medium text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Fleet Dispatch: Active (35m)</span>
            </div>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-200 hover:text-cyan-300 hover:border-cyan-500/40 transition-all duration-300"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] font-bold flex items-center justify-center shadow-lg animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Order CTA */}
            <button
              onClick={onOpenOrderModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Truck className="w-4 h-4" />
              <span>Order Supply</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#020b14]/95 backdrop-blur-xl pt-24 px-6 flex flex-col gap-6 lg:hidden animate-fade-in border-b border-cyan-500/20">
          <nav className="flex flex-col gap-5 text-lg font-medium text-slate-200">
            <a
              href="#collections"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-cyan-400 py-1 border-b border-slate-800"
            >
              Bottled Water Collection
            </a>
            <a
              href="#supply-fleet"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-cyan-400 py-1 border-b border-slate-800"
            >
              5-Gallon & Fleet Water Logistics
            </a>
            <a
              href="#purity-lab"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-cyan-400 py-1 border-b border-slate-800"
            >
              Purity Science & 8-Stage Filtration
            </a>
            <a
              href="#calculator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-cyan-400 py-1 border-b border-slate-800"
            >
              Hydration Calculator
            </a>
            <a
              href="#sustainability"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-cyan-400 py-1 border-b border-slate-800"
            >
              Zero-Waste Return Program
            </a>
          </nav>

          <div className="flex flex-col gap-3 pt-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Truck className="w-5 h-5" />
              <span>Order Doorstep Water Supply</span>
            </button>

            <a
              href="tel:+18005556288"
              className="w-full py-3 rounded-xl border border-slate-700 text-slate-300 font-medium text-sm flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>Emergency Fleet: 1-800-NATURAL</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

