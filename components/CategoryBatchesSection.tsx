"use client";

import React, { useState } from "react";
import { ArrowRight, Flame, Layers, ShieldCheck, Users } from "lucide-react";

const categories = [
  "All Batches",
  "Chargers & Power",
  "Audio & Earbuds",
  "Mobile Accessories",
  "Smartwatch & Wearables",
  "Cables & Adapters",
];

const mockBatches = [
  // CHARGERS & POWER
  {
    id: "batch-1",
    badge: "#1 Fast Closing",
    badgeBg: "bg-emerald-500",
    rank: "#1",
    category: "Chargers & Power",
    title: "GaN 65W Dual USB-C Fast Wall Charger",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80",
    currentPrice: "£2.84",
    nextTierPrice: "£2.55",
    committedQty: 650,
    targetMoq: 1000,
    progress: 65,
    origin: "Yiwu, China",
  },
  {
    id: "batch-5",
    badge: "High Demand",
    badgeBg: "bg-blue-600",
    rank: "#5",
    category: "Chargers & Power",
    title: "100W 4-Port Desktop GaN Charging Station",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80",
    currentPrice: "£8.50",
    nextTierPrice: "£7.20",
    committedQty: 420,
    targetMoq: 500,
    progress: 84,
    origin: "Shenzhen, China",
  },

  // AUDIO & EARBUDS
  {
    id: "batch-2",
    badge: "Trending Demand",
    badgeBg: "bg-blue-600",
    rank: "#2",
    category: "Audio & Earbuds",
    title: "ANC Wireless Earbuds with LED Charging Case",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80",
    currentPrice: "£6.20",
    nextTierPrice: "£5.40",
    committedQty: 1800,
    targetMoq: 2000,
    progress: 90,
    origin: "Shenzhen, China",
  },
  {
    id: "batch-6",
    badge: "Top Sound",
    badgeBg: "bg-purple-600",
    rank: "#6",
    category: "Audio & Earbuds",
    title: "Over-Ear Wireless Noise Cancelling Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
    currentPrice: "£14.20",
    nextTierPrice: "£12.00",
    committedQty: 310,
    targetMoq: 600,
    progress: 51,
    origin: "Dongguan, China",
  },

  // SMARTWATCH & WEARABLES
  {
    id: "batch-3",
    badge: "High Margin",
    badgeBg: "bg-purple-600",
    rank: "#3",
    category: "Smartwatch & Wearables",
    title: "Ultra 2 Smartwatch with HD AMOLED Display",
    image:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=80",
    currentPrice: "£11.50",
    nextTierPrice: "£9.80",
    committedQty: 320,
    targetMoq: 800,
    progress: 40,
    origin: "Dongguan, China",
  },

  // MOBILE ACCESSORIES (Power Bank HD Fix)
  {
    id: "batch-4",
    badge: "Almost Full",
    badgeBg: "bg-amber-500",
    rank: "#4",
    category: "Mobile Accessories",
    title: "Magnetic Magsafe 10000mAh Power Bank",
    image:
      "https://images.unsplash.com/photo-1609592807967-4632b712f518?auto=format&fit=crop&w=1000&q=80",
    currentPrice: "£5.10",
    nextTierPrice: "£4.30",
    committedQty: 1450,
    targetMoq: 1500,
    progress: 96,
    origin: "Shenzhen, China",
  },
  {
    id: "batch-7",
    badge: "Best Seller",
    badgeBg: "bg-emerald-500",
    rank: "#7",
    category: "Mobile Accessories",
    title: "Universal Aluminium Car Phone Mount Holder",
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1000&q=80",
    currentPrice: "£1.80",
    nextTierPrice: "£1.40",
    committedQty: 2100,
    targetMoq: 2500,
    progress: 84,
    origin: "Yiwu, China",
  },

  // CABLES & ADAPTERS
  {
    id: "batch-8",
    badge: "Essential Stock",
    badgeBg: "bg-blue-600",
    rank: "#8",
    category: "Cables & Adapters",
    title: "Braided Nylon 100W USB-C to USB-C Cable (2m)",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80",
    currentPrice: "£0.95",
    nextTierPrice: "£0.75",
    committedQty: 3800,
    targetMoq: 5000,
    progress: 76,
    origin: "Yiwu, China",
  },
];

export default function CategoryBatchesSection() {
  const [activeCategory, setActiveCategory] = useState("All Batches");

  // Filtering Logic based on active category button
  const filteredBatches =
    activeCategory === "All Batches"
      ? mockBatches
      : mockBatches.filter((b) => b.category === activeCategory);

  return (
    <section className="w-full bg-slate-50 py-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-widest">
              <Flame size={14} /> Factory Direct Aggregation
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Active Wholesale Open Batches
            </h2>
          </div>

          <button
            onClick={() => setActiveCategory("All Batches")}
            className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline transition self-start md:self-auto"
          >
            <span>See All Open Batches</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                activeCategory === cat
                  ? "bg-emerald-500 text-slate-950 border-emerald-500 shadow-md shadow-emerald-500/20 font-bold"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* BATCH CARDS GRID */}
        {filteredBatches.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
            No open batches available right now in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBatches.map((batch) => (
              <div
                key={batch.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full bg-slate-800 overflow-hidden">
                  <img
                    src={batch.image}
                    alt={batch.title}
                    onError={(e) => {
                      // Automatic HD Fallback Image if main URL fails
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                    <span
                      className={`px-3 py-1 ${batch.badgeBg} text-white text-[10px] font-extrabold rounded-full shadow-sm uppercase tracking-wider`}
                    >
                      {batch.badge}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 text-slate-300/80 text-xs font-bold z-10">
                    {batch.rank}
                  </div>

                  {/* Shipping Origin Tag */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-slate-300 text-[10px] font-medium bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700 z-10">
                    <ShieldCheck size={12} className="text-emerald-400" />
                    <span>{batch.origin}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      {batch.category}
                    </p>
                    <h3 className="font-bold text-slate-900 text-sm line-clamp-2 group-hover:text-blue-600 transition">
                      {batch.title}
                    </h3>
                  </div>

                  {/* MOQ Progress Bar */}
                  <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="flex justify-between text-[11px] text-slate-600 font-semibold">
                      <span className="flex items-center gap-1">
                        <Users size={12} className="text-emerald-600" />
                        {batch.committedQty} Committed
                      </span>
                      <span>{batch.targetMoq} MOQ</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full rounded-full"
                        style={{ width: `${batch.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Pricing & Join Action */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">
                        Current Price
                      </span>
                      <span className="text-base font-black text-slate-900">
                        {batch.currentPrice}{" "}
                        <span className="text-[10px] text-slate-500 font-normal">
                          /unit
                        </span>
                      </span>
                    </div>

                    <a
                      href={`/batches/${batch.id}`}
                      className="flex items-center gap-1 bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-white text-xs font-bold px-3.5 py-2 rounded-full transition shadow-sm"
                    >
                      <span>Join Batch</span>
                      <Layers size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}