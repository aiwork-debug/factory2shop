import React from "react";
import Link from "next/link";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CategoryBatchesSection from "@/components/CategoryBatchesSection";
import { ArrowLeft, ChevronRight, Layers, ShieldCheck, Zap } from "lucide-react";

const CATEGORY_MAP: Record<
  string,
  { name: string; description: string; badge: string }
> = {
  chargers: {
    name: "Chargers & Power",
    description:
      "High-power GaN wall chargers, MagSafe wireless pads, and desktop charging stations direct from certified electronics manufacturers.",
    badge: "Fastest Moving Category",
  },
  audio: {
    name: "Audio & Earbuds",
    description:
      "ANC active noise-cancelling wireless earbuds, over-ear studio headphones, and portable waterproof Bluetooth speakers at wholesale tier prices.",
    badge: "High Consumer Margin",
  },
  "mobile-accessories": {
    name: "Mobile Accessories",
    description:
      "Tempered glass screen protectors, shockproof cases, magnetic car mounts, and mobile accessories pooled for maximum volume discounts.",
    badge: "High Turnaround",
  },
  smartwatch: {
    name: "Smartwatch & Wearables",
    description:
      "Ultra 2 series smartwatches with HD AMOLED screens, fitness trackers, and health monitoring wearables at factory direct cost.",
    badge: "Trending Tech",
  },
  wearables: {
    name: "Smartwatch & Wearables",
    description:
      "Ultra 2 series smartwatches with HD AMOLED screens, fitness trackers, and health monitoring wearables at factory direct cost.",
    badge: "Trending Tech",
  },
  cables: {
    name: "Cables & Adapters",
    description:
      "Heavy-duty nylon braided 100W USB-C to USB-C cables, Lightning cords, and multi-port OTG adapters with rigorous durability testing.",
    badge: "Everyday Retail Essential",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = CATEGORY_MAP[slug];
  const name = category ? category.name : "Wholesale Category";

  return {
    title: `${name} | Factory2Shop B2B Wholesale`,
    description: category
      ? category.description
      : `Explore active wholesale batches in ${name} on Factory2Shop.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoryInfo = CATEGORY_MAP[slug];
  const categoryName = categoryInfo ? categoryInfo.name : "All Batches";

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col justify-between">
      <Navbar />

      <main className="flex-1">
        {/* CATEGORY HERO BANNER */}
        <section className="bg-slate-950 text-white py-12 px-4 md:px-8 border-b border-slate-800">
          <div className="max-w-7xl mx-auto space-y-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <ChevronRight size={12} />
              <Link href="/batches" className="hover:text-white transition">
                Batches
              </Link>
              <ChevronRight size={12} />
              <span className="text-emerald-400 font-bold">{categoryName}</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold">
                  <Zap size={13} />
                  <span>{categoryInfo?.badge || "Direct Factory Batches"}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
                  {categoryName}
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {categoryInfo?.description ||
                    "Browse open supplier purchasing batches and commit quantities to unlock tier-one factory prices."}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/batches"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-xs font-bold text-slate-200 transition"
                >
                  <ArrowLeft size={14} /> View All Batches
                </Link>
              </div>
            </div>

            {/* Micro Highlights */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80 text-[11px] text-slate-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>100% Quality Inspected</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers size={14} className="text-blue-400" />
                <span>Aggregated UK Orders</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>DDP UK Shipping Included</span>
              </div>
            </div>
          </div>
        </section>

        {/* BATCHES LIST FOR THIS CATEGORY */}
        <CategoryBatchesSection initialCategory={categoryName} />
      </main>

      <Footer />
    </div>
  );
}
