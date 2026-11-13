"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle, Phone } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "How does the 19-Liter bottle exchange program work?",
    a: "When our delivery driver arrives at your doorstep with fresh, tamper-sealed 19L bottles, they simply collect your empty cans and place the new ones directly on your dispenser or kitchen stand. You only pay the refill rate of Rs. 250 per bottle.",
  },
  {
    q: "Is there a security deposit for first-time 19L dispenser can buyers?",
    a: "If you already have standard, food-grade empty dispenser cans from any reputable brand, we exchange them with zero deposit fee. If you are starting fresh without empty bottles, a one-time refundable bottle deposit applies.",
  },
  {
    q: "How fast is delivery across Lahore, Karachi, and Islamabad?",
    a: "We operate a dedicated urban delivery fleet providing same-day express delivery within 2 to 4 hours across major neighborhoods (including DHA, Gulberg, Bahria Town, Clifton, and Islamabad residential sectors) for orders placed between 8:00 AM and 5:00 PM.",
  },
  {
    q: "What payment methods are supported?",
    a: "You can pay via Cash on Delivery (COD) after inspecting the safety seals, or make an instant digital payment via JazzCash, EasyPaisa, or direct bank transfer.",
  },
  {
    q: "Is Natural Resources water certified by PSQCA and government authorities?",
    a: "Yes, 100%. Natural Resources is fully certified by the Pakistan Standards and Quality Control Authority (PSQCA) and provincial food authorities. Every production batch undergoes certified on-site lab testing for optimal 118 TDS minerals and balanced 8.2 pH.",
  },
  {
    q: "Do you supply bulk orders for weddings, corporate events, and offices?",
    a: "Yes, we regularly cater to corporate offices, banks, conferences, and wedding banquet halls with wholesale cartons of 500ml and 1.5L bottles, as well as scheduled 19L deliveries with monthly GST tax invoices.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const whatsappFaqUrl =
    "https://wa.me/923221204812?text=Hello!%20I%20have%20a%20question%20about%20Natural%20Resources%20Water%20delivery.";

  return (
    <section id="faq" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full sky-badge text-xs font-bold uppercase tracking-wider mb-2">
          <HelpCircle className="w-3.5 h-3.5 text-[#0284c7]" />
          <span>Clarity & Support</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Everything you need to know about our mineral water, doorstep can exchange, and delivery schedules:
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {FAQS.map((item, idx) => (
          <div
            key={idx}
            className={`clean-card rounded-2xl border transition-all duration-300 overflow-hidden ${
              openIndex === idx
                ? "border-[#0284c7] shadow-md bg-white"
                : "border-slate-200 hover:border-slate-300 bg-white"
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
            >
              <span className="text-sm sm:text-base font-bold text-slate-900">
                {item.q}
              </span>
              <div
                className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  openIndex === idx
                    ? "rotate-180 bg-[#0284c7] text-white border-[#0284c7]"
                    : "border-slate-200 text-slate-500 bg-slate-50"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {openIndex === idx && (
              <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-fade-in">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Still have questions banner */}
      <div className="mt-10 p-5 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-sm font-black text-slate-900">Still have questions?</h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Our customer support helpline is available daily from 8:00 AM to 8:00 PM.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={whatsappFaqUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href="tel:+923221204812"
            className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#0284c7] text-slate-800 text-xs font-bold flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>0322-1204812</span>
          </a>
        </div>
      </div>
    </section>
  );
}
