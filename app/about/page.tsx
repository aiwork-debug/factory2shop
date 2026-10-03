"use client";

import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Building2, Globe2, ShieldCheck, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col justify-between">
      <Navbar />

      {/* MAIN ABOUT CONTENT */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative bg-slate-950 text-white py-16 md:py-20 px-4 md:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-75">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
              alt="Factory Warehouse"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/30" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold backdrop-blur-md">
              <Building2 size={13} /> Factory Direct Aggregation
            </div>
            <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight max-w-2xl drop-shadow-md">
              Bridging Small UK Retailers with{" "}
              <span className="text-emerald-400">Global Factories.</span>
            </h1>
            <p className="text-slate-200 text-xs md:text-sm max-w-xl leading-relaxed drop-shadow-sm font-medium">
              Factory2Shop eliminates middlemen. We group order demand from
              hundreds of independent UK shop owners to meet direct factory
              Minimum Order Quantities (MOQ).
            </p>
          </div>
        </section>

        {/* CORE MISSION & STATS */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Our Vision: Democratizing Wholesale Rates
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Traditionally, tier-one factory prices were reserved for huge
                corporations ordering thousands of units at once. Independent
                UK shops were forced to buy from local distributors with 40%-80%
                markups.
              </p>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Factory2Shop changes the game. By aggregating small orders into
                consolidated purchasing batches, every verified retailer gets
                direct factory rates without overstocking risk.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <p className="text-2xl font-black text-emerald-600">500+</p>
                  <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                    Verified Factories
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <p className="text-2xl font-black text-blue-600">£1.2M+</p>
                  <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                    Retailer Savings
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
                alt="Global Freight Logistics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* VALUE PROPOSITION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 hover:border-emerald-500 transition shadow-xs">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                100% Quality Inspected
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every batch undergoes strict pre-shipment quality control
                checks before landing in the UK.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 hover:border-emerald-500 transition shadow-xs">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <Globe2 size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Customs &amp; Freight Included
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We handle all import clearance, tariffs, and DDP freight. No
                hidden charges or customs headaches.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 hover:border-emerald-500 transition shadow-xs">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Higher Profit Margins
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lower stock acquisition costs directly boost your retail profit
                margins up to 45%.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}