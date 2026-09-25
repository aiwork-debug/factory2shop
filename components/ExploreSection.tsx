import React from 'react';
import { Factory, ShieldCheck, Truck, RefreshCw, Layers } from 'lucide-react';

export default function ExploreSection() {
  return (
    <section className="w-full font-sans">
      {/* 1. TOP BLACK FEATURE BADGES BAR (Ticker Bar) */}
      <div className="w-full bg-slate-950 border-y border-slate-800 text-slate-300 py-2.5 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between min-w-[700px] gap-6 text-[11px] font-semibold tracking-wider uppercase">
          <div className="flex items-center gap-1.5 hover:text-emerald-400 transition cursor-default">
            <Factory size={14} className="text-emerald-500" />
            <span>100% Verified Factories</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-emerald-400 transition cursor-default">
            <Layers size={14} className="text-blue-500" />
            <span>Demand Aggregation (MOQ)</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-emerald-400 transition cursor-default">
            <Truck size={14} className="text-emerald-500" />
            <span>Consolidated UK Freight</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-emerald-400 transition cursor-default">
            <ShieldCheck size={14} className="text-blue-500" />
            <span>B2B Payment Protection</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-emerald-400 transition cursor-default">
            <RefreshCw size={14} className="text-emerald-500" />
            <span>Tier Price Unlocking</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN COLLECTION INTRO HEADER WITH SUBTLE BG PATTERN */}
      <div className="relative w-full bg-slate-50 py-10 px-4 md:px-8 overflow-hidden border-b border-slate-200">
        {/* Abstract Light Circuit Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
            backgroundSize: `24px 24px`
          }}
        />

        <div className="max-w-3xl mx-auto text-center space-y-3 relative z-10">
          <div className="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase tracking-widest rounded-full">
            Factory Direct Sourcing
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore Open Purchasing Batches
          </h2>

          <p className="text-slate-600 text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-normal">
            Discover active factory orders across tech & electronics categories[cite: 1, 2]. Join forces with other UK trade buyers to lock in wholesale factory pricing today[cite: 2].
          </p>
        </div>
      </div>
    </section>
  );
}