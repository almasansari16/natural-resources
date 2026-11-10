"use client";

import React, { useState } from "react";
import { Droplets, Sparkles, ShieldCheck, Zap } from "lucide-react";

interface BottleVisualizerProps {
  selectedType: "glass" | "carboy" | "active" | "bulk";
}

export function BottleVisualizer({ selectedType }: BottleVisualizerProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-full max-w-[420px] aspect-[4/5] mx-auto flex items-center justify-center p-6 select-none cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 via-sky-500/10 to-transparent rounded-full filter blur-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

      {/* Floating Ambient Mineral Badges */}
      <div className="absolute top-6 -left-4 z-20 glass-pill px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-cyan-300 shadow-lg animate-float">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>pH 8.4 Living Alkaline</span>
      </div>

      <div className="absolute bottom-16 -right-2 z-20 glass-pill px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-emerald-300 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span>0.00% Microplastics</span>
      </div>

      <div className="absolute bottom-6 left-2 z-20 glass-pill px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-sky-200 shadow-lg animate-float" style={{ animationDelay: "3s" }}>
        <Droplets className="w-3.5 h-3.5 text-sky-400" />
        <span>TDS 118 Balanced</span>
      </div>

      {/* 3D Tilt Container */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${isHovered ? 1.03 : 1})`,
        }}
      >
        {selectedType === "glass" && (
          /* Artisanal Glass Bottle SVG */
          <svg viewBox="0 0 240 500" className="w-full h-full drop-shadow-[0_25px_35px_rgba(0,240,255,0.25)]">
            <defs>
              <linearGradient id="glassBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#0284c7" stopOpacity="0.05" />
                <stop offset="75%" stopColor="#00f0ff" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
              </linearGradient>

              <linearGradient id="waterFillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#0284c7" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="50%" stopColor="#090d12" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>

              <linearGradient id="glowGleam" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
              </linearGradient>

              <clipPath id="bottleClip">
                <path d="M 100 80 L 100 130 C 100 170 60 190 60 250 L 60 450 C 60 470 75 480 120 480 C 165 480 180 470 180 450 L 180 250 C 180 190 140 170 140 130 L 140 80 Z" />
              </clipPath>
            </defs>

            {/* Heavy Base Glass Shadow */}
            <ellipse cx="120" cy="485" rx="75" ry="14" fill="#000000" opacity="0.6" />
            <ellipse cx="120" cy="485" rx="60" ry="8" fill="#00f0ff" opacity="0.3" />

            {/* Water Fill with Clip Path */}
            <g clipPath="url(#bottleClip)">
              {/* Water background fill */}
              <rect x="50" y="140" width="140" height="350" fill="url(#waterFillGrad)" />

              {/* Water Surface Wave Simulation */}
              <path
                d="M 50 140 Q 85 135 120 140 T 190 140 L 190 490 L 50 490 Z"
                fill="url(#waterFillGrad)"
                opacity="0.9"
              />

              {/* Rising Mineral Bubbles */}
              <circle cx="85" cy="380" r="3" fill="#ffffff" opacity="0.7">
                <animate attributeName="cy" values="440;150" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.8;0" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="135" cy="420" r="4.5" fill="#ffffff" opacity="0.6">
                <animate attributeName="cy" values="450;150" dur="5s" repeatCount="indefinite" begin="1s" />
                <animate attributeName="opacity" values="0;0.7;0" dur="5s" repeatCount="indefinite" begin="1s" />
              </circle>
              <circle cx="110" cy="310" r="2.5" fill="#a5f3fc" opacity="0.8">
                <animate attributeName="cy" values="430;150" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
                <animate attributeName="opacity" values="0;0.8;0" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <circle cx="155" cy="280" r="3.5" fill="#ffffff" opacity="0.7">
                <animate attributeName="cy" values="440;150" dur="4.2s" repeatCount="indefinite" begin="2s" />
                <animate attributeName="opacity" values="0;0.7;0" dur="4.2s" repeatCount="indefinite" begin="2s" />
              </circle>

              {/* Natural Resources Signature Label from Official Bottle */}
              {/* Sky Blue Wrap Band */}
              <rect x="58" y="250" width="124" height="150" fill="#60a5fa" opacity="0.35" />
              
              {/* Iconic Center Black Label Box */}
              <rect x="74" y="260" width="92" height="130" rx="3" fill="#090d12" stroke="#38bdf8" strokeWidth="1" />
              
              {/* Natural Resources Brand Typography Matching Bottle */}
              <text x="120" y="295" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="900" fontFamily="sans-serif" letterSpacing="2.5">NATURAL</text>
              <text x="120" y="318" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="sans-serif" letterSpacing="3">RESOURCES</text>
              
              {/* Divider Line */}
              <line x1="84" y1="328" x2="156" y2="328" stroke="#38bdf8" strokeWidth="0.8" opacity="0.8" />
              
              {/* Subtitle */}
              <text x="120" y="342" textAnchor="middle" fill="#93c5fd" fontSize="5.5" fontWeight="bold" letterSpacing="1">THE SOURCE OF</text>
              <text x="120" y="352" textAnchor="middle" fill="#e0f2fe" fontSize="6.5" fontWeight="extrabold" letterSpacing="1">MINERAL WATER</text>
              <text x="120" y="368" textAnchor="middle" fill="#38bdf8" fontSize="6.5" fontWeight="black" letterSpacing="1.5">L.S.L</text>

              {/* Laser Dot-Matrix Batch Code near base */}
              <text x="120" y="445" textAnchor="middle" fill="#94a3b8" fontSize="4.5" fontFamily="monospace" opacity="0.8">B#: 15-06 2026 • 06-10:91 M1</text>
              <text x="120" y="454" textAnchor="middle" fill="#64748b" fontSize="4" fontFamily="monospace" opacity="0.7">EXP: 15-06 2028 • L.S.L PURE</text>
            </g>

            {/* Glass Outer Shell & Specular Highlights */}
            <path
              d="M 100 80 L 100 130 C 100 170 60 190 60 250 L 60 450 C 60 470 75 480 120 480 C 165 480 180 470 180 450 L 180 250 C 180 190 140 170 140 130 L 140 80 Z"
              fill="url(#glassBodyGrad)"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeOpacity="0.5"
            />

            {/* Vertical Specular Glass Sheen (Left) */}
            <path
              d="M 68 250 L 68 440 C 68 450 72 460 80 465 L 76 465 C 66 458 64 445 64 435 L 64 250 Z"
              fill="url(#glowGleam)"
              opacity="0.85"
            />

            {/* Specular Edge Highlight (Right) */}
            <path
              d="M 172 250 L 172 440"
              stroke="#ffffff"
              strokeWidth="2"
              strokeOpacity="0.4"
            />

            {/* Metallic Luxury Cap */}
            <rect x="96" y="52" width="48" height="28" rx="3" fill="url(#capGrad)" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="96" y1="62" x2="144" y2="62" stroke="#475569" strokeWidth="1" />
            <line x1="96" y1="70" x2="144" y2="70" stroke="#475569" strokeWidth="1" />
            <rect x="100" y="47" width="40" height="6" rx="2" fill="#94a3b8" />
          </svg>
        )}

        {selectedType === "carboy" && (
          /* 5-Gallon Eco-Carboy SVG */
          <svg viewBox="0 0 300 480" className="w-full h-full drop-shadow-[0_25px_35px_rgba(0,240,255,0.25)]">
            <defs>
              <linearGradient id="carboyWater" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.85" />
              </linearGradient>

              <linearGradient id="carboyGlass" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.1" />
                <stop offset="70%" stopColor="#00f0ff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
              </linearGradient>

              <clipPath id="carboyClip">
                <path d="M 130 50 L 130 80 C 130 90 90 100 80 130 L 70 380 C 68 410 90 430 150 430 C 210 430 232 410 230 380 L 220 130 C 210 100 170 90 170 80 L 170 50 Z" />
              </clipPath>
            </defs>

            {/* Base Drop Shadow */}
            <ellipse cx="150" cy="445" rx="85" ry="16" fill="#000000" opacity="0.6" />
            <ellipse cx="150" cy="445" rx="70" ry="10" fill="#00f0ff" opacity="0.25" />

            {/* Water Fill with Carboy Clip */}
            <g clipPath="url(#carboyClip)">
              <rect x="50" y="90" width="200" height="360" fill="url(#carboyWater)" />

              {/* Molded Reinforcement Ribs */}
              <line x1="60" y1="180" x2="240" y2="180" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.2" />
              <line x1="60" y1="240" x2="240" y2="240" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.2" />
              <line x1="60" y1="300" x2="240" y2="300" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.2" />
              <line x1="60" y1="360" x2="240" y2="360" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.2" />

              {/* Bubbles */}
              <circle cx="120" cy="360" r="4" fill="#ffffff" opacity="0.7">
                <animate attributeName="cy" values="410;110" dur="4.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="180" cy="290" r="5" fill="#a5f3fc" opacity="0.6">
                <animate attributeName="cy" values="410;110" dur="5.5s" repeatCount="indefinite" begin="1s" />
              </circle>

              {/* Modern Carboy Shield Label */}
              <rect x="100" y="210" width="100" height="80" rx="8" fill="#031b33" opacity="0.9" stroke="#00f0ff" strokeWidth="1.2" />
              <text x="150" y="235" textAnchor="middle" fill="#00f0ff" fontSize="10" fontWeight="bold" letterSpacing="1.5">NATURAL</text>
              <text x="150" y="247" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" letterSpacing="1.5">RESOURCES</text>
              <text x="150" y="264" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">5-GALLON ECO (19L)</text>
              <text x="150" y="278" textAnchor="middle" fill="#93c5fd" fontSize="7">BPA-Free Tritan • pH 8.4</text>
            </g>

            {/* Outer Carboy Outline */}
            <path
              d="M 130 50 L 130 80 C 130 90 90 100 80 130 L 70 380 C 68 410 90 430 150 430 C 210 430 232 410 230 380 L 220 130 C 210 100 170 90 170 80 L 170 50 Z"
              fill="url(#carboyGlass)"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeOpacity="0.6"
            />

            {/* Ergonomic Molded Side Handle */}
            <path
              d="M 72 200 C 45 200 45 300 72 300 C 62 275 62 225 72 200 Z"
              fill="#0284c7"
              stroke="#38bdf8"
              strokeWidth="2"
              opacity="0.85"
            />

            {/* Smart NFC Cap with Purity Seal */}
            <rect x="126" y="25" width="48" height="25" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="150" cy="37" r="5" fill="#00f0ff" />
            <text x="150" y="40" textAnchor="middle" fill="#031b33" fontSize="5" fontWeight="bold">NFC</text>
          </svg>
        )}

        {selectedType === "active" && (
          /* Active Alkaline Recycled Aluminum Bottle SVG */
          <svg viewBox="0 0 240 500" className="w-full h-full drop-shadow-[0_25px_35px_rgba(45,212,191,0.25)]">
            <defs>
              <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="30%" stopColor="#1e293b" />
                <stop offset="70%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>

              <linearGradient id="activeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
            </defs>

            <ellipse cx="120" cy="485" rx="70" ry="14" fill="#000000" opacity="0.6" />
            <ellipse cx="120" cy="485" rx="55" ry="8" fill="#2dd4bf" opacity="0.3" />

            {/* Sleek Matte Metal Bottle Body */}
            <path
              d="M 105 70 L 105 120 C 105 150 75 170 75 220 L 75 450 C 75 470 90 480 120 480 C 150 480 165 470 165 450 L 165 220 C 165 170 135 150 135 120 L 135 70 Z"
              fill="url(#activeGrad)"
              stroke="#2dd4bf"
              strokeWidth="2"
            />

            {/* Vertical Performance Stripe */}
            <rect x="117" y="160" width="6" height="280" fill="url(#activeGlow)" rx="3" opacity="0.8" />

            {/* Typography */}
            <text x="120" y="260" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900" letterSpacing="3">ALKALINE+</text>
            <text x="120" y="280" textAnchor="middle" fill="#2dd4bf" fontSize="11" fontWeight="bold">pH 8.8 ACTIVE</text>
            <text x="120" y="300" textAnchor="middle" fill="#94a3b8" fontSize="8" letterSpacing="1.5">CELLULAR HYDRATION</text>
            <text x="120" y="330" textAnchor="middle" fill="#38bdf8" fontSize="7">1000 ML • ELECTROLYTES</text>

            {/* Sport Chug Cap */}
            <rect x="100" y="40" width="40" height="30" rx="4" fill="#1e293b" stroke="#2dd4bf" strokeWidth="1.5" />
            <circle cx="120" cy="55" r="4" fill="#2dd4bf" />
          </svg>
        )}

        {selectedType === "bulk" && (
          /* Bulk Tanker Logistics SVG */
          <svg viewBox="0 0 340 340" className="w-full h-full drop-shadow-[0_25px_35px_rgba(56,189,248,0.25)]">
            <defs>
              <linearGradient id="tankerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="50%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>

            <ellipse cx="170" cy="275" rx="130" ry="20" fill="#000000" opacity="0.6" />
            <ellipse cx="170" cy="275" rx="100" ry="12" fill="#38bdf8" opacity="0.25" />

            {/* Truck Cab */}
            <rect x="50" y="150" width="55" height="85" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
            <rect x="55" y="160" width="30" height="30" rx="3" fill="#38bdf8" opacity="0.7" />
            <circle cx="68" cy="225" r="6" fill="#00f0ff" />

            {/* High-Grade Stainless Steel Tanker Barrel */}
            <rect x="105" y="125" width="180" height="100" rx="35" fill="url(#tankerGrad)" stroke="#38bdf8" strokeWidth="2" />
            <line x1="150" y1="125" x2="150" y2="225" stroke="#cbd5e1" strokeWidth="3" opacity="0.7" />
            <line x1="220" y1="125" x2="220" y2="225" stroke="#cbd5e1" strokeWidth="3" opacity="0.7" />

            {/* Tanker Label */}
            <text x="195" y="170" textAnchor="middle" fill="#020b14" fontSize="12" fontWeight="900" letterSpacing="1.5">NATURAL RESOURCES</text>
            <text x="195" y="185" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="bold">BULK WATER FLEET • 10,000L</text>

            {/* Wheels */}
            <circle cx="75" cy="245" r="16" fill="#0f172a" stroke="#94a3b8" strokeWidth="3" />
            <circle cx="75" cy="245" r="6" fill="#38bdf8" />
            <circle cx="150" cy="245" r="16" fill="#0f172a" stroke="#94a3b8" strokeWidth="3" />
            <circle cx="150" cy="245" r="6" fill="#38bdf8" />
            <circle cx="190" cy="245" r="16" fill="#0f172a" stroke="#94a3b8" strokeWidth="3" />
            <circle cx="190" cy="245" r="6" fill="#38bdf8" />
            <circle cx="260" cy="245" r="16" fill="#0f172a" stroke="#94a3b8" strokeWidth="3" />
            <circle cx="260" cy="245" r="6" fill="#38bdf8" />
          </svg>
        )}
      </div>

      {/* Interactive Ripple Base Ring */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full border border-cyan-400/30 animate-pulse-glow pointer-events-none" />
    </div>
  );
}
