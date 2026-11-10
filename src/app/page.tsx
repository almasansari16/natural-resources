"use client";

import React, { useState } from "react";
import { SimpleNavbar } from "@/components/SimpleNavbar";
import { SimpleHero } from "@/components/SimpleHero";
import { SimpleProducts } from "@/components/SimpleProducts";
import { WaterPlanCalculator } from "@/components/WaterPlanCalculator";
import { SimpleDoorstepSupply } from "@/components/SimpleDoorstepSupply";
import { TasteComparison } from "@/components/TasteComparison";
import { SimpleWhyUs } from "@/components/SimpleWhyUs";
import { SimpleFactoryShowcase } from "@/components/SimpleFactoryShowcase";
import { CityCoverageSection } from "@/components/CityCoverageSection";
import { CustomerTestimonials } from "@/components/CustomerTestimonials";
import { SimpleOrderForm } from "@/components/SimpleOrderForm";
import { SimpleFooter } from "@/components/SimpleFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SimpleOrderModal } from "@/components/SimpleOrderModal";
import { Product } from "@/data/products";

export default function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelectProduct = (prod: Product) => {
    setSelectedProduct(prod);
    setIsOrderModalOpen(true);
  };

  const handleOpenGeneralOrder = () => {
    setSelectedProduct(null);
    setIsOrderModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#0284c7] selection:text-white">
      {/* 1. Navbar with Pakistani Hotline & WhatsApp */}
      <SimpleNavbar onOpenOrderModal={handleOpenGeneralOrder} />

      {/* 2. Hero Section with Real Photo Carousel (Including Kitchen 19L Wooden Stand, Bench, Girl, etc.) */}
      <SimpleHero onOpenOrderModal={handleOpenGeneralOrder} />

      {/* 3. Product Sizes & Retail Rates in PKR */}
      <SimpleProducts onSelectProductForOrder={handleSelectProduct} />

      {/* 4. Interactive Household & Office Hydration Planner (Calculate Monthly Bill & Cans) */}
      <WaterPlanCalculator />

      {/* 5. 19-Liter Dispenser Can Doorstep Delivery for Homes & Offices (Photo with Tap Stand) */}
      <SimpleDoorstepSupply onOpenOrderModal={handleOpenGeneralOrder} />

      {/* 6. Aam Nal Ka Paani vs Natural Resources Side-by-Side Comparison */}
      <TasteComparison />

      {/* 7. 4 Everyday Simple Reasons to Choose Natural Resources */}
      <SimpleWhyUs />

      {/* 8. Modern Automated Bottling Factory Plant in Pakistan Showcase */}
      <SimpleFactoryShowcase />

      {/* 9. City Coverage & Delivery Speeds (Lahore, Karachi, Islamabad, Multan, Faisalabad) */}
      <CityCoverageSection />

      {/* 10. Verified Pakistani Customer Reviews */}
      <CustomerTestimonials />

      {/* 11. Easy 1-Minute Online Order Booking Form (Cash on Delivery) */}
      <SimpleOrderForm />

      {/* 12. Pakistani Brand Footer */}
      <SimpleFooter />

      {/* 13. Floating Sticky WhatsApp Button (Pulsing Green) */}
      <FloatingWhatsApp />

      {/* 14. Easy Order Modal */}
      <SimpleOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedProduct={selectedProduct}
      />
    </main>
  );
}
