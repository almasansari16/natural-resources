"use client";

import React, { useState } from "react";
import { WaterCursor } from "@/components/WaterCursor";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HydrationCalculator } from "@/components/HydrationCalculator";
import { ProductCatalog } from "@/components/ProductCatalog";
import { PurityProcess } from "@/components/PurityProcess";
import { WaterLabTester } from "@/components/WaterLabTester";
import { PourExperience } from "@/components/PourExperience";
import { BatchVerifier } from "@/components/BatchVerifier";
import { GastronomyPairing } from "@/components/GastronomyPairing";
import { DeliveryDispatchSimulator } from "@/components/DeliveryDispatchSimulator";
import { CorporateSolutions } from "@/components/CorporateSolutions";
import { SustainabilityTracker } from "@/components/SustainabilityTracker";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Footer } from "@/components/Footer";
import { CartDrawer, CartItem } from "@/components/CartDrawer";
import { OrderModal } from "@/components/OrderModal";
import { ProductDetailModal } from "@/components/ProductDetailModal";
import { Product, PRODUCTS } from "@/data/products";

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[1], // 5-Gallon Eco-Carboy
      quantity: 2,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);
  const [orderModalPreselection, setOrderModalPreselection] = useState<string>("2x 5-Gallon Eco-Carboys (19L)");

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        return [...prev, { product, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
      );
    }
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const handleAddCustomPlan = (plan: {
    title: string;
    monthlyLiters: number;
    recommendedJugs: number;
    recommendedCases: number;
    monthlyPrice: number;
  }) => {
    // Add recommended items to cart
    handleAddToCart(PRODUCTS[1], plan.recommendedJugs);
    handleAddToCart(PRODUCTS[0], plan.recommendedCases);
    setIsCartOpen(true);
  };

  const handleOpenOrder = (productTitle?: string) => {
    if (productTitle) {
      setOrderModalPreselection(productTitle);
    }
    setIsOrderModalOpen(true);
  };

  const handleCheckoutFromCart = () => {
    setIsCartOpen(false);
    setIsOrderModalOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <main className="relative min-h-screen bg-[#020b14] text-slate-100 overflow-x-hidden">
      {/* Interactive Water Droplet Cursor */}
      <WaterCursor />

      {/* Floating Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenOrderModal={() => handleOpenOrder()}
      />

      {/* Hero Showcase with Interactive Ripple Canvas & 3D Bottle */}
      <HeroSection
        onOpenOrderModal={() => handleOpenOrder()}
        onExploreProducts={() => {
          document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Interactive Water Demand & Delivery Calculator */}
      <HydrationCalculator onAddCustomPlan={handleAddCustomPlan} />

      {/* Flagship Product Catalog with Filterable Categories */}
      <ProductCatalog
        onAddToCart={(prod) => handleAddToCart(prod, 1)}
        onOpenProductModal={(prod) => setSelectedProductDetail(prod)}
      />

      {/* The 8-Stage Filtration & Remineralization Science Journey */}
      <PurityProcess />

      {/* Side-by-Side Mineral Lab & Interactive TDS Simulator */}
      <WaterLabTester />

      {/* Tactile Sensory Pour a Glass Experience */}
      <PourExperience />

      {/* Batch QR Code & Aquifer Telemetry Verifier */}
      <BatchVerifier />

      {/* Gastronomy, Specialty Coffee & Lifestyle Pairing */}
      <GastronomyPairing />

      {/* Live Urban Delivery Dispatch & Fleet Tracker */}
      <DeliveryDispatchSimulator onOpenOrderModal={() => handleOpenOrder()} />

      {/* Corporate, Hospitality & Bulk Tanker Solutions */}
      <CorporateSolutions />

      {/* Real-time Plastic Bottles Replaced Sustainability Tracker */}
      <SustainabilityTracker />

      {/* Verified Customer Stories & Michelin-Star Chef Testimonials */}
      <ReviewsSection />

      {/* Comprehensive Brand Footer */}
      <Footer />

      {/* Interactive Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckoutFromCart}
      />

      {/* Direct Order & Dispatch Scheduler Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        preselectedProduct={orderModalPreselection}
      />

      {/* Product Deep-Dive Technical Modal */}
      <ProductDetailModal
        product={selectedProductDetail}
        onClose={() => setSelectedProductDetail(null)}
        onAddToCart={handleAddToCart}
      />
    </main>
  );
}
