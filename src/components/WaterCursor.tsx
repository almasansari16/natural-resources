"use client";

import React, { useEffect, useState } from "react";

export function WaterCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    let rippleCounter = 0;
    const handleClick = (e: MouseEvent) => {
      const newRipple = { id: ++rippleCounter, x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev.slice(-4), newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Glow Halo */}
      <div
        className="absolute w-8 h-8 rounded-full border border-cyan-400/40 bg-cyan-400/10 backdrop-blur-[1px] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div className="absolute inset-1 rounded-full bg-cyan-300/20 animate-ping opacity-30" />
      </div>

      {/* Inner Droplet Point */}
      <div
        className="absolute w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#00f0ff] -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Click Ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full border border-cyan-300/60 animate-ping pointer-events-none"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: "36px",
            height: "36px",
            transform: "translate(-50%, -50%)",
            animationDuration: "900ms",
          }}
        />
      ))}
    </div>
  );
}
