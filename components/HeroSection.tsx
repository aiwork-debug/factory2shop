"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Factory, Truck, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white text-slate-900 py-6 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-4">
        
        {/* MAIN HERO CONTAINER */}
        <div className="relative rounded-3xl bg-slate-950 text-white border border-slate-800 overflow-hidden p-6 md:p-10 shadow-xl">
          
          {/* Background Image - Full Visibility Across Whole Card */}
          <div className="absolute inset-0 z-0 opacity-60">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"
              alt="Factory Warehouse"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Light Overall Dark Tint (Allows Left & Right Image To Show Clearly) */}
          <div className="absolute inset-0 bg-slate-950/50 z-0" />

          {/* HERO CONTENT GRID */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT SIDE CONTENT */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-semibold backdrop-blur-md">
                <ShieldCheck size={14} /> Direct Factory Procurement
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight drop-shadow-md">
                Small Order Volume. <br />
                <span className="text-emerald-400">Factory Wholesale Price.</span>
              </h1>

              <p className="text-slate-100 text-xs sm:text-sm leading-relaxed max-w-xl font-normal drop-shadow-sm">
                Factory2Shop combines UK retail demand into consolidated batches. Join open purchasing batches to reach factory MOQs together without overstocking.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#batches"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-full transition shadow-md"
                >
                  <span>Explore Open Batches</span>
                  <ArrowRight size={14} />
                </a>
                <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-950/80 border border-slate-700 text-slate-200 text-xs font-medium backdrop-blur-md">
                  <Truck size={14} className="text-emerald-400" />
                  <span>Consolidated UK Delivery</span>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700/80 max-w-md">
                <div>
                  <span className="block text-base md:text-lg font-bold text-white">100%</span>
                  <span className="text-[11px] text-slate-200">Verified Factories</span>
                </div>
                <div>
                  <span className="block text-base md:text-lg font-bold text-emerald-400">Up to 45%</span>
                  <span className="text-[11px] text-slate-200">Cost Savings</span>
                </div>
                <div>
                  <span className="block text-base md:text-lg font-bold text-white">Guaranteed</span>
                  <span className="text-[11px] text-slate-200">MOQ Aggregation</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: LIVE BATCH CARD */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950/85 border border-slate-800 rounded-2xl p-5 space-y-4 backdrop-blur-md shadow-2xl">
                
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-wider text-emerald-400 uppercase">
                    Live Batch Preview
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    65% MOQ Reached
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white">
                    USB-C 65W GaN Fast Charger
                  </h3>
                  <p className="text-[11px] text-slate-400">Batch ID: #F2S-CHG-0926</p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] text-slate-300 font-medium">
                    <span>650 Committed</span>
                    <span>1,000 Unit MOQ</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[65%] rounded-full" />
                  </div>
                </div>

                {/* Price Info Box */}
                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-semibold">
                      Current Price
                    </span>
                    <span className="text-sm font-bold text-emerald-400">£2.84 <span className="text-[10px] text-slate-400 font-normal">/ unit</span></span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] text-slate-400 uppercase font-semibold">
                      Next Tier Target
                    </span>
                    <span className="text-xs font-bold text-white">£2.55 (1,000 MOQ)</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM FEATURE BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-2 py-3 text-[11px] font-semibold text-slate-600 border-t border-slate-200">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-emerald-600" />
            <span>100% Verified Factories</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Factory size={13} className="text-emerald-600" />
            <span>Demand Aggregation (MOQ)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Truck size={13} className="text-emerald-600" />
            <span>Consolidated UK Freight</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-emerald-600" />
            <span>Tier Price Unlocking</span>
          </div>
        </div>

      </div>
    </section>
  );
}