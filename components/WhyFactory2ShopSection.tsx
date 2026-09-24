"use client";

import React from "react";
import {
  Factory,
  TrendingDown,
  ShieldCheck,
  Truck,
  Building2,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const valueProps = [
  {
    icon: Factory,
    iconBg: "bg-gradient-to-br from-emerald-400 to-teal-600",
    shadow: "shadow-emerald-500/20",
    title: "Direct Factory Sourcing",
    description:
      "Cut out middlemen and buy straight from verified ISO-certified manufacturers across Asia.",
  },
  {
    icon: TrendingDown,
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
    title: "Group MOQ Pooling",
    description:
      "Combine order volumes with other UK retailers to unlock container-level pricing with micro MOQs.",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
    shadow: "shadow-purple-500/20",
    title: "100% Quality Inspected",
    description:
      "On-site factory inspection before dispatch ensures zero defective units delivered to your store.",
  },
  {
    icon: Truck,
    iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
    shadow: "shadow-amber-500/20",
    title: "DDP Customs & Shipping",
    description:
      "Hassle-free UK doorstep delivery with all customs duties, tariffs, and VAT fully managed.",
  },
  {
    icon: Building2,
    iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
    shadow: "shadow-cyan-500/20",
    title: "Verified Manufacturer Network",
    description:
      "Every factory in our pool undergoes rigorous audits for ethical labor and quality standards.",
  },
  {
    icon: Sparkles,
    iconBg: "bg-gradient-to-br from-rose-500 to-red-600",
    shadow: "shadow-rose-500/20",
    title: "Tiered Price Drops",
    description:
      "As more buyers join the active batch, unit prices automatically drop for every participant.",
  },
];

export default function WhyFactory2ShopSection() {
  return (
    <section className="w-full bg-slate-100/70 py-16 px-4 md:px-8 font-sans border-t border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT SIDE: 6 VALUE PROPOSITION CARDS (GRID) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-start gap-4 group"
              >
                <div
                  className={`p-3 rounded-xl text-white ${prop.iconBg} ${prop.shadow} shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}
                >
                  <Icon size={20} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE: HIGH-TECH FEATURE BANNER */}
        <div className="lg:col-span-5 relative">
          {/* Subtle Orange Glow behind */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-3xl blur-xl opacity-20" />

          <div className="relative rounded-3xl bg-slate-950 text-white p-8 overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-between min-h-[460px]">
            {/* Background Image Overlay - OPACITY INCREASED TO 0.65 FOR HIGH CLARITY */}
            <div className="absolute inset-0 z-0 opacity-65">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
                alt="Factory Warehouse"
                className="w-full h-full object-cover"
              />
            </div>
            {/* LIGHT OVERLAY SO IMAGE REMAINS CLEAN AND VISIBLE */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/30 z-0" />

            {/* Top Tag */}
            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold tracking-wide backdrop-blur-md">
                <CheckCircle2 size={14} /> The B2B Wholesale Revolution
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight drop-shadow-md">
                Why Source Through <span className="text-emerald-400">Factory2Shop</span>?
              </h2>
              <p className="text-slate-200 text-xs leading-relaxed font-medium drop-shadow-xs">
                We empower independent UK retailers and Amazon/eBay sellers to source high-margin tech accessories directly at tier-1 factory prices[cite: 2].
              </p>
            </div>

            {/* Middle Key Metrics */}
            <div className="relative z-10 grid grid-cols-2 gap-4 py-6 my-4 border-y border-slate-700/80">
              <div>
                <span className="block text-2xl md:text-3xl font-extrabold text-amber-400">
                  Up to 70%
                </span>
                <span className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider">
                  Lower Unit Costs
                </span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-extrabold text-emerald-400">
                  0% Tariff
                </span>
                <span className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider">
                  Hassle-free DDP Shipping
                </span>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="relative z-10 pt-2 flex items-center justify-between">
              <div>
                <p className="text-[11px] text-slate-300 font-medium">Ready to boost your margins?</p>
                <p className="text-xs font-bold text-white">Join over 1,200+ UK Retailers</p>
              </div>

              <a
                href="#batches"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/20 group"
              >
                <span>Explore Batches</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}