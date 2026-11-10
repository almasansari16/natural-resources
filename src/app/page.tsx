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
import { AreaDeliveryChecker } from "@/components/AreaDeliveryChecker";
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
      {/* 1. Header Navigation Bar */}
      <SimpleNavbar onOpenOrderModal={handleOpenGeneralOrder} />

      {/* 2. Hero Section with Real Brand Visuals Carousel */}
      <SimpleHero onOpenOrderModal={handleOpenGeneralOrder} />

      {/* 3. Product Catalog & Retail Rates in PKR */}
      <SimpleProducts onSelectProductForOrder={handleSelectProduct} />

      {/* 4. Interactive Household & Office Hydration Planner */}
      <WaterPlanCalculator />

      {/* 5. 19-Liter Dispenser Bottle Doorstep Refill & Can Exchange */}
      <SimpleDoorstepSupply onOpenOrderModal={handleOpenGeneralOrder} />

      {/* 6. Ordinary Tap Water vs Natural Resources Side-by-Side Comparison */}
      <TasteComparison />

      {/* 7. Why Choose Natural Resources — Core Quality Pillars */}
      <SimpleWhyUs />

      {/* 8. Modern Automated Bottling Facility Showcase */}
      <SimpleFactoryShowcase />

      {/* 9. Instant Society & Neighborhood Delivery Checker */}
      <AreaDeliveryChecker />

      {/* 10. Nationwide Delivery Coverage & City Hubs */}
      <CityCoverageSection />

      {/* 11. Customer Testimonials & Verified Reviews */}
      <CustomerTestimonials />

      {/* 12. Easy 1-Minute Online Order Booking Form (Cash on Delivery) */}
      <SimpleOrderForm />

      {/* 13. Brand Footer */}
      <SimpleFooter />

      {/* 14. Responsive Sticky WhatsApp Button & Mobile Action Bar */}
      <FloatingWhatsApp onOpenOrderModal={handleOpenGeneralOrder} />

      {/* 15. Quick Order Modal */}
      <SimpleOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedProduct={selectedProduct}
      />
    </main>
  );
}
