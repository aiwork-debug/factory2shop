"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CategoryBatchesSection from "@/components/CategoryBatchesSection";
import { Flame, ChevronRight } from "lucide-react";

export default function BatchesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      <Navbar />

      <main className="flex-1">
        {/* HERO BANNER */}
        <section className="bg-slate-950 text-white py-12 px-4 md:px-8 border-b border-slate-800">
          <div className="max-w-7xl mx-auto space-y-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <ChevronRight size={12} />
              <span className="text-emerald-400 font-bold">Batches Directory</span>
            </div>

            <div className="space-y-2 max-w-2xl pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold">
                <Flame size={13} />
                <span>Live Factory Batches</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                All Active Wholesale Batches
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Browse open factory orders, join pooling batches alongside verified UK retailers, and unlock container-level pricing with micro MOQs.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                <span className="block text-xl font-black text-emerald-400">6 Batches</span>
                <span className="text-[11px] text-slate-400">Currently Open</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                <span className="block text-xl font-black text-white">76% Avg</span>
                <span className="text-[11px] text-slate-400">MOQ Fill Rate</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                <span className="block text-xl font-black text-amber-400">Up to 60%</span>
                <span className="text-[11px] text-slate-400">Cost Savings</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl">
                <span className="block text-xl font-black text-blue-400">100% DDP</span>
                <span className="text-[11px] text-slate-400">UK Doorstep Delivery</span>
              </div>
            </div>
          </div>
        </section>

        {/* FULL CATEGORY BATCHES LIST */}
        <CategoryBatchesSection initialCategory="All Batches" />

        {/* TRUST BANNER */}
        <section className="bg-white border-t border-slate-200 py-10 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-base font-bold text-slate-900">
                Can&apos;t find the factory product you need?
              </h3>
              <p className="text-xs text-slate-500">
                Submit a custom factory sourcing request for dedicated production runs.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-white font-bold text-xs rounded-xl transition shadow-md"
              >
                Request Custom Batch
              </Link>
              <Link
                href="/faqs"
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition"
              >
                How It Works
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}