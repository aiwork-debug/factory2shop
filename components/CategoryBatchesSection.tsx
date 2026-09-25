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
    badgeBg: "bg-slate-700",
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
    badgeBg: "bg-slate-700",
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
    badgeBg: "bg-slate-700",
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
    badgeBg: "bg-slate-700",
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

  // MOBILE ACCESSORIES
  {
    id: "batch-4",
    badge: "Almost Full",
    badgeBg: "bg-emerald-600",
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
    badgeBg: "bg-slate-700",
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

  const filteredBatches =
    activeCategory === "All Batches"
      ? mockBatches
      : mockBatches.filter((b) => b.category === activeCategory);

  return (
    <section className="w-full bg-slate-50 py-10 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-slate-200/80 pb-4">
          <div>
            <div className="flex items-center gap-1.5 text-emerald-600 text-[11px] font-extrabold uppercase tracking-wider">
              <Flame size={13} /> Factory Direct Aggregation
            </div>
            <h2 className="text-xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Active Wholesale Open Batches
            </h2>
          </div>

          <button
            onClick={() => setActiveCategory("All Batches")}
            className="flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-emerald-600 transition self-start md:self-auto"
          >
            <span>See All Batches</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition border ${
                activeCategory === cat
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* BATCH CARDS GRID */}
        {filteredBatches.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
            No open batches available right now in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredBatches.map((batch) => (
              <div
                key={batch.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={batch.image}
                    alt={batch.title}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1 z-10">
                    <span
                      className={`px-2.5 py-0.5 ${batch.badgeBg} text-white text-[9px] font-bold rounded-full uppercase tracking-wider shadow-xs`}
                    >
                      {batch.badge}
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5 text-slate-200 text-[11px] font-bold z-10">
                    {batch.rank}
                  </div>

                  {/* Origin Tag */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-slate-200 text-[10px] font-medium bg-slate-950/75 backdrop-blur-xs px-2 py-0.5 rounded border border-slate-700/60 z-10">
                    <ShieldCheck size={11} className="text-emerald-400" />
                    <span>{batch.origin}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                      {batch.category}
                    </p>
                    <h3 className="font-bold text-slate-900 text-xs leading-snug line-clamp-2 group-hover:text-emerald-600 transition">
                      {batch.title}
                    </h3>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <div className="flex justify-between text-[10px] text-slate-600 font-semibold">
                      <span className="flex items-center gap-1">
                        <Users size={11} className="text-emerald-600" />
                        {batch.committedQty} Committed
                      </span>
                      <span>{batch.targetMoq} MOQ</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full rounded-full"
                        style={{ width: `${batch.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Pricing & Button */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-slate-400 block font-medium uppercase">
                        Current Price
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {batch.currentPrice}{" "}
                        <span className="text-[9px] text-slate-500 font-normal">
                          /unit
                        </span>
                      </span>
                    </div>

                    <a
                      href={`/batches/${batch.id}`}
                      className="flex items-center gap-1 bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-white text-[11px] font-bold px-3 py-1.5 rounded-full transition"
                    >
                      <span>Join</span>
                      <Layers size={11} />
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