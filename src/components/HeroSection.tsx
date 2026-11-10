"use client";

import React, { useState, useEffect, useRef } from "react";
import { BottleVisualizer } from "./BottleVisualizer";
import { Sparkles, Shield, Droplets, ArrowRight, Truck, CheckCircle2, Award, Zap } from "lucide-react";

interface HeroSectionProps {
  onOpenOrderModal: () => void;
  onExploreProducts: () => void;
}

export function HeroSection({ onOpenOrderModal, onExploreProducts }: HeroSectionProps) {
  const [activeProduct, setActiveProduct] = useState<"glass" | "carboy" | "active" | "bulk">("glass");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Interactive Fluid Water Ripple Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle pool for floating water caustics / bubbles
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      opacity: number;
      pulsing: number;
    }> = [];

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        speedY: -(Math.random() * 0.6 + 0.2),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        pulsing: Math.random() * Math.PI,
      });
    }

    // Ripple click waves
    interface RippleWave {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
    }
    const waves: RippleWave[] = [];

    const handlePointerMove = (e: MouseEvent) => {
      if (Math.random() > 0.6) {
        waves.push({
          x: e.clientX,
          y: e.clientY,
          radius: 10,
          maxRadius: 120,
          alpha: 0.35,
        });
      }
    };
    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render gentle water caustics gradient
      const grad = ctx.createRadialGradient(
        width * 0.65,
        height * 0.45,
        50,
        width * 0.65,
        height * 0.45,
        width * 0.8
      );
      grad.addColorStop(0, "rgba(0, 240, 255, 0.08)");
      grad.addColorStop(0.5, "rgba(2, 132, 199, 0.04)");
      grad.addColorStop(1, "rgba(2, 11, 20, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Render interactive water ripple waves
      for (let i = waves.length - 1; i >= 0; i--) {
        const w = waves[i];
        w.radius += 1.8;
        w.alpha *= 0.96;

        ctx.beginPath();
        ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 240, 255, ${w.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (w.alpha < 0.01 || w.radius > w.maxRadius) {
          waves.splice(i, 1);
        }
      }

      // Render floating bubbles
      for (let p of particles) {
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulsing += 0.03;

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }

        const currentOpacity = p.opacity + Math.sin(p.pulsing) * 0.15;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(165, 243, 252, ${Math.max(0, currentOpacity)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
    };
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Interactive Ripple Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-sky-600/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Super Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-cyan-300 text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)] animate-pulse-glow">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE GOLD STANDARD OF LIVING WATER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-slate-300">pH 8.4 Remineralized</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-white mb-6">
              Pure Living Hydration. <br />
              <span className="shimmer-text">Delivered Fresh</span> <br />
              <span className="shimmer-text-cyan">To Your Doorstep.</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              Natural Resources™ delivers untouched glacial spring purity in artisanal Italian glass, smart residential 5-gallon carboys, and industrial food-grade tanker fleets. Zero microplastics, perfectly remineralized for cellular vitality.
            </p>

            {/* Flagship Product Segment Switcher */}
            <div className="w-full max-w-xl p-1.5 rounded-2xl glass-panel mb-8 flex flex-wrap sm:flex-nowrap gap-1.5">
              <button
                onClick={() => setActiveProduct("glass")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeProduct === "glass"
                    ? "bg-gradient-to-r from-cyan-500 to-sky-600 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <Droplets className="w-3.5 h-3.5" />
                <span>Artisan Glass</span>
              </button>

              <button
                onClick={() => setActiveProduct("carboy")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeProduct === "carboy"
                    ? "bg-gradient-to-r from-cyan-500 to-sky-600 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>5-Gal Carboy</span>
              </button>

              <button
                onClick={() => setActiveProduct("active")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeProduct === "active"
                    ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-[0_0_15px_rgba(45,212,191,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Alkaline 8.8</span>
              </button>

              <button
                onClick={() => setActiveProduct("bulk")}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeProduct === "bulk"
                    ? "bg-gradient-to-r from-cyan-500 to-sky-600 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                <span>Bulk Fleet</span>
              </button>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenOrderModal}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Truck className="w-5 h-5 text-slate-950" />
                <span>Order Water Supply</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onExploreProducts}
                className="px-6 py-4 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-cyan-400/50 font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>View All Collections</span>
              </button>
            </div>

            {/* Purity Guarantee Trust Markers */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 w-full max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-black text-cyan-400">1.8M+</div>
                <div className="text-xs text-slate-400 font-medium">Plastic Bottles Saved</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">8-Stage</div>
                <div className="text-xs text-slate-400 font-medium">Nano Purity Tech</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400">45 Mins</div>
                <div className="text-xs text-slate-400 font-medium">Urban Dispatch Time</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Bottle Canvas Visualizer */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <BottleVisualizer selectedType={activeProduct} />

            {/* Product Quick Specs Footer Pill */}
            <div className="glass-panel px-5 py-3 rounded-2xl flex items-center justify-between gap-6 w-full max-w-sm mt-4 text-xs">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300 font-medium">NSF-61 Certified</span>
              </div>
              <div className="w-px h-4 bg-slate-700" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-medium">Zero Microplastics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

