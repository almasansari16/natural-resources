"use client";

import React, { useState } from "react";
import { SimpleNavbar } from "@/components/SimpleNavbar";
import { SimpleHero } from "@/components/SimpleHero";
import { SimpleProducts } from "@/components/SimpleProducts";
import { SimpleDoorstepSupply } from "@/components/SimpleDoorstepSupply";
import { SimpleWhyUs } from "@/components/SimpleWhyUs";
import { SimpleFactoryShowcase } from "@/components/SimpleFactoryShowcase";
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
      {/* Navbar with Pakistani Helpline & WhatsApp */}
      <SimpleNavbar onOpenOrderModal={handleOpenGeneralOrder} />

      {/* Hero Section with Official Poster Taglines & Real Photos Slider */}
      <SimpleHero onOpenOrderModal={handleOpenGeneralOrder} />

      {/* Product Sizes & Retail Prices in PKR */}
      <SimpleProducts onSelectProductForOrder={handleSelectProduct} />

      {/* 19-Liter Dispenser Can Doorstep Delivery for Homes & Offices */}
      <SimpleDoorstepSupply onOpenOrderModal={handleOpenGeneralOrder} />

      {/* 4 Everyday Simple Reasons to Choose Natural Resources */}
      <SimpleWhyUs />

      {/* Modern Bottling Factory Plant in Pakistan Showcase */}
      <SimpleFactoryShowcase />

      {/* Easy 1-Minute Online Order Booking Form (Cash on Delivery) */}
      <SimpleOrderForm />

      {/* Pakistani Brand Footer */}
      <SimpleFooter />

      {/* Floating Sticky WhatsApp Button (Pulsing Green) */}
      <FloatingWhatsApp />

      {/* Easy Order Modal */}
      <SimpleOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedProduct={selectedProduct}
      />
    </main>
  );
}
