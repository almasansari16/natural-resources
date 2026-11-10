"use client";

import React from "react";
import { Star, Quote, CheckCircle2, Heart } from "lucide-react";

interface Review {
  id: string;
  name: string;
  role: string;
  city: string;
  stars: number;
  comment: string;
  verifiedPlan: string;
}

const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Dr. Zainab Tariq",
    role: "Physician & Mother",
    city: "F-7 Islamabad",
    stars: 5,
    comment:
      "The balanced 118 TDS living minerals and zero-chemical taste are ideal for our kids' health and digestion. What stands out most is the naturally crisp, sweet finish without any plastic or chlorine smell.",
    verifiedPlan: "19L Wooden Stand Family Plan",
  },
  {
    id: "rev-2",
    name: "Usman Ghani",
    role: "Managing Director",
    city: "Gulberg III Lahore",
    stars: 5,
    comment:
      "We manage a tech office of 25 staff. Their weekly 19-Liter automated delivery has never missed a single slot. The delivery team replaces empty carboys seamlessly, and customer service is always prompt.",
    verifiedPlan: "Corporate 10 Cans / Week",
  },
  {
    id: "rev-3",
    name: "Farhan & Ayesha",
    role: "Residential Home",
    city: "DHA Phase 5 Karachi",
    stars: 5,
    comment:
      "Our municipal tap water was heavily chlorinated and unpalatable. Switching to Natural Resources was an immediate upgrade for our kitchen and dining table. The bottles arrive sealed and cold every week.",
    verifiedPlan: "3 Cans Weekly Refill",
  },
];

export function CustomerTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full brand-badge text-xs font-bold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
            <span>Trusted By Over 12,000 Pakistani Families</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Customer Feedback & Verified Reviews
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Read what verified households and corporate clients across Pakistan say about our pure taste and reliable delivery service:
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="clean-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative bg-white"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-slate-900">{rev.name}</h4>
                  <div className="text-xs text-slate-500 font-medium">
                    {rev.role} • <span className="text-[#0284c7] font-semibold">{rev.city}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
