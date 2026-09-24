"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Truck, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-slate-950 pt-4 pb-6 font-sans">
      {/* STANDARD WEBSITE CONTAINER (SAME MAX-WIDTH & PADDING AS NAVBAR & OTHER SECTIONS) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* HERO CARD CONTAINER WITH COMPACT VERTICAL PADDING */}
        <div className="relative w-full rounded-3xl overflow-hidden py-8 md:py-12 px-6 md:px-10 border border-slate-800 shadow-2xl bg-slate-950">
          
          {/* BACKGROUND IMAGE WITH HIGH VISIBILITY */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
              alt="Factory Procurement"
              className="w-full h-full object-cover opacity-70"
            />
            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-900/30" />
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* LEFT CONTENT */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold backdrop-blur-md">
                  <ShieldCheck size={14} /> Direct Factory Procurement
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
                  Small Order Volume. <br />
                  <span className="text-emerald-400">Factory Wholesale Price.</span>
                </h1>

                <p className="text-slate-200 text-xs sm:text-sm md:text-base max-w-xl font-medium leading-relaxed drop-shadow-xs">
                  Factory2Shop combines UK retail trade demand into consolidated batches. Join open purchasing batches to reach factory MOQs together and unlock tier-one pricing without overstocking.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <Link
                    href="#batches"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm px-6 py-3 rounded-full transition shadow-lg shadow-emerald-500/20 active:scale-95"
                  >
                    <span>Explore Open Batches</span>
                    <ArrowRight size={16} />
                  </Link>

                  <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-200 bg-slate-900/80 px-4 py-2.5 rounded-full border border-slate-700/80 backdrop-blur-md">
                    <Truck size={16} className="text-emerald-400" />
                    <span>Consolidated UK Delivery</span>
                  </div>
                </div>

                {/* KEY STATS */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700/60 max-w-lg">
                  <div>
                    <p className="text-lg md:text-xl font-black text-white">100%</p>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-slate-300">Verified Suppliers</p>
                  </div>
                  <div>
                    <p className="text-lg md:text-xl font-black text-emerald-400">Up to 45%</p>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-slate-300">Cost Savings</p>
                  </div>
                  <div>
                    <p className="text-lg md:text-xl font-black text-white">0 Oversell</p>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-slate-300">Guaranteed MOQ</p>
                  </div>
                </div>
              </div>

              {/* RIGHT LIVE BATCH PREVIEW CARD */}
              <div className="lg:col-span-5">
                <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-5 backdrop-blur-xl shadow-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400">
                      Live Batch Preview
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full">
                      65% MOQ Reached
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">USB-C 65W GaN Fast Charger</h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">Batch ID: #F2S-CHG-0926</p>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-300">650 Committed</span>
                      <span className="text-slate-400">1,000 Unit MOQ</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
                      <div className="h-full bg-emerald-400 rounded-full w-[65%]" />
                    </div>
                  </div>

                  {/* TIER PRICE */}
                  <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Current Unit Price</p>
                      <p className="text-lg sm:text-xl font-black text-emerald-400">£2.84 <span className="text-xs text-slate-400 font-normal">/ unit</span></p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Next Price Tier</p>
                      <p className="text-xs font-bold text-slate-200">£2.55 (at 1000 MOQ)</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}