"use client";

import React from "react";
import { ShieldCheck, Globe2, Building2, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* HERO SECTION WITH CLEAR VISIBLE BACKGROUND */}
      <section className="relative bg-slate-950 text-white py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-75">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="Factory Warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold backdrop-blur-md">
            <Building2 size={14} /> Factory Direct Aggregation
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-3xl drop-shadow-md">
            Bridging Small UK Retailers with <span className="text-emerald-400">Global Factories.</span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base max-w-2xl leading-relaxed drop-shadow-sm font-medium">
            Factory2Shop eliminates middlemen. We group order demand from hundreds of independent UK shop owners to meet direct factory Minimum Order Quantities (MOQ).
          </p>
        </div>
      </section>

      {/* CORE MISSION & STATS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Our Vision: Democratizing Wholesale Rates
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Traditionally, tier-one factory prices were reserved for huge corporations ordering thousands of units at once. Independent UK shops were forced to buy from local distributors with 40%-80% markups.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Factory2Shop changes the game. By aggregating small orders into consolidated purchasing batches, every verified retailer gets direct factory rates without overstocking risk.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <p className="text-3xl font-black text-emerald-600">500+</p>
                <p className="text-xs font-semibold text-slate-500 mt-1">Verified Factories</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <p className="text-3xl font-black text-blue-600">£1.2M+</p>
                <p className="text-xs font-semibold text-slate-500 mt-1">Retailer Savings</p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
              alt="Global Freight Logistics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* VALUE PROPOSITION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-emerald-500 transition shadow-xs">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">100% Quality Inspected</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every batch undergoes strict pre-shipment quality control checks before landing in the UK.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-emerald-500 transition shadow-xs">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
              <Globe2 size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Customs & Freight Included</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We handle all import clearance, tariffs, and DDP freight. No hidden charges or customs headaches.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-emerald-500 transition shadow-xs">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Higher Profit Margins</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Lower stock acquisition costs directly boost your retail profit margins up to 45%.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}