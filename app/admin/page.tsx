"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/common/logo";
import {
  ArrowLeft,
  Building,
  CheckCircle2,
  ExternalLink,
  Flame,
  Plus,
  RefreshCw,
  Search,
  ShieldAlert,
  TrendingUp,
  Truck,
} from "lucide-react";

interface HealthStatus {
  ok: boolean;
  message?: string;
  configured?: boolean;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"batches" | "orders" | "suppliers" | "health">("batches");
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [healthLoading, setHealthLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleRefreshHealth = async () => {
    setHealthLoading(true);
    try {
      const res = await fetch("/api/health");
      const data = await res.json();
      setHealth(data);
    } catch (err) {
      setHealth({
        ok: false,
        message: err instanceof Error ? err.message : "Failed to connect to health API",
      });
    } finally {
      setHealthLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setHealth(data);
          setHealthLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setHealth({
            ok: false,
            message: err instanceof Error ? err.message : "Failed to connect to health API",
          });
          setHealthLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const batches = [
    {
      id: "F2S-CHG-0926",
      product: "GaN 65W Dual USB-C Fast Wall Charger",
      category: "Chargers & Power",
      supplier: "Yiwu PowerTech Co.",
      committed: 650,
      target: 1000,
      currentPrice: "£2.84",
      nextTier: "£2.55",
      status: "OPEN",
      progress: 65,
      daysLeft: 4,
    },
    {
      id: "F2S-AUD-1042",
      product: "ANC Wireless Earbuds with LED Case",
      category: "Audio & Earbuds",
      supplier: "Shenzhen Acoustic Ltd.",
      committed: 1800,
      target: 2000,
      currentPrice: "£6.20",
      nextTier: "£5.40",
      status: "OPEN",
      progress: 90,
      daysLeft: 2,
    },
    {
      id: "F2S-WCH-0481",
      product: "Ultra 2 Smartwatch AMOLED Display",
      category: "Smartwatch & Wearables",
      supplier: "Dongguan MicroTech",
      committed: 320,
      target: 800,
      currentPrice: "£11.50",
      nextTier: "£9.80",
      status: "OPEN",
      progress: 40,
      daysLeft: 7,
    },
    {
      id: "F2S-CBL-0319",
      product: "100W Braided USB-C Cable (2m)",
      category: "Cables & Adapters",
      supplier: "Ningbo Wire & Cable Co.",
      committed: 3800,
      target: 5000,
      currentPrice: "£0.89",
      nextTier: "£0.75",
      status: "OPEN",
      progress: 76,
      daysLeft: 3,
    },
    {
      id: "F2S-DSK-0552",
      product: "100W 4-Port GaN Desktop Station",
      category: "Chargers & Power",
      supplier: "Shenzhen PowerHub",
      committed: 420,
      target: 500,
      currentPrice: "£8.50",
      nextTier: "£7.20",
      status: "OPEN",
      progress: 84,
      daysLeft: 1,
    },
  ];

  const orders = [
    {
      id: "ORD-9481",
      retailer: "TechSupply UK (London)",
      batchId: "F2S-CHG-0926",
      quantity: 150,
      total: "£426.00",
      payment: "ESCROW SECURED",
      fulfillment: "POOLED (Awaiting Batch Close)",
    },
    {
      id: "ORD-9482",
      retailer: "Gadget Hub Manchester",
      batchId: "F2S-AUD-1042",
      quantity: 200,
      total: "£1,240.00",
      payment: "ESCROW SECURED",
      fulfillment: "POOLED (Awaiting Batch Close)",
    },
    {
      id: "ORD-9483",
      retailer: "Birmingham Mobile Spares",
      batchId: "F2S-CBL-0319",
      quantity: 1000,
      total: "£890.00",
      payment: "ESCROW SECURED",
      fulfillment: "POOLED (Awaiting Batch Close)",
    },
    {
      id: "ORD-9484",
      retailer: "Bristol Tech Zone",
      batchId: "F2S-WCH-0481",
      quantity: 50,
      total: "£575.00",
      payment: "ESCROW SECURED",
      fulfillment: "POOLED (Awaiting Batch Close)",
    },
  ];

  const filteredBatches = batches.filter(
    (b) =>
      b.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col">
      {/* TOP ADMIN HEADER */}
      <header className="border-b border-slate-800 bg-slate-900/60 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo dark={true} />
            </Link>
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-extrabold uppercase tracking-wider">
              B2B Operator Portal
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Supabase Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs">
              <span
                className={`w-2 h-2 rounded-full ${
                  health?.ok ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                }`}
              />
              <span className="text-[11px] text-slate-300">
                {healthLoading
                  ? "Checking DB..."
                  : health?.ok
                  ? "Supabase Live"
                  : "DB Unconfigured"}
              </span>
            </div>

            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 transition"
            >
              <ArrowLeft size={14} /> Storefront
            </Link>
          </div>
        </div>
      </header>

      {/* DASHBOARD BODY */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 space-y-6">
        {/* WELCOME BANNER & STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Active Batches
              </span>
              <Flame size={18} className="text-emerald-400" />
            </div>
            <p className="text-3xl font-black text-white mt-2">5 Open</p>
            <p className="text-[11px] text-emerald-400 font-semibold mt-1">
              76% Average MOQ completion
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Escrow Committed
              </span>
              <TrendingUp size={18} className="text-blue-400" />
            </div>
            <p className="text-3xl font-black text-white mt-2">£48,250</p>
            <p className="text-[11px] text-slate-400 mt-1">Across 148 retail stores</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Verified Factories
              </span>
              <Building size={18} className="text-purple-400" />
            </div>
            <p className="text-3xl font-black text-white mt-2">24 ISO</p>
            <p className="text-[11px] text-emerald-400 font-semibold mt-1">
              100% On-site audited
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Consolidated Freight
              </span>
              <Truck size={18} className="text-amber-400" />
            </div>
            <p className="text-3xl font-black text-white mt-2">DDP UK</p>
            <p className="text-[11px] text-slate-400 mt-1">Direct customs cleared</p>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab("batches")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === "batches"
                ? "bg-emerald-500 text-slate-950"
                : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            Active Batches ({batches.length})
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === "orders"
                ? "bg-emerald-500 text-slate-950"
                : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            Pooled Orders ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab("suppliers")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === "suppliers"
                ? "bg-emerald-500 text-slate-950"
                : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            Factory Partners
          </button>
          <button
            onClick={() => setActiveTab("health")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === "health"
                ? "bg-emerald-500 text-slate-950"
                : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            System &amp; Database Config
          </button>
        </div>

        {/* TAB 1: BATCHES TABLE */}
        {activeTab === "batches" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-72">
                <Search size={14} className="absolute left-3.5 top-3.5 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter batches or ID..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <Link
                  href="/batches"
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-slate-300 border border-slate-800 flex items-center gap-1.5"
                >
                  <ExternalLink size={14} /> Public View
                </Link>
                <button
                  onClick={() => alert("Batch creation wizard is linked to Supabase profile auth.")}
                  className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-md"
                >
                  <Plus size={14} /> New Batch
                </button>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950/60 border-b border-slate-800 text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                    <tr>
                      <th className="p-4">Batch ID &amp; Product</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Supplier</th>
                      <th className="p-4">MOQ Progress</th>
                      <th className="p-4">Unit Price</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredBatches.map((b) => (
                      <tr key={b.id} className="hover:bg-slate-800/40 transition">
                        <td className="p-4">
                          <p className="font-bold text-white">{b.product}</p>
                          <p className="text-[10px] text-emerald-400 font-mono mt-0.5">#{b.id}</p>
                        </td>
                        <td className="p-4 text-slate-300">{b.category}</td>
                        <td className="p-4 text-slate-400">{b.supplier}</td>
                        <td className="p-4 min-w-[180px]">
                          <div className="space-y-1">
                            <div className="flex justify-between text-[10px] text-slate-300">
                              <span>
                                {b.committed} / {b.target}
                              </span>
                              <span className="font-bold text-emerald-400">{b.progress}%</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                              <div
                                className="bg-emerald-500 h-full rounded-full"
                                style={{ width: `${b.progress}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-emerald-400">{b.currentPrice}</span>
                          <span className="block text-[10px] text-slate-400">Next: {b.nextTier}</span>
                        </td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold uppercase">
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: POOLED ORDERS */}
        {activeTab === "orders" && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950/60 border-b border-slate-800 text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                  <tr>
                    <th className="p-4">Order ID</th>
                    <th className="p-4">Trade Retailer</th>
                    <th className="p-4">Batch ID</th>
                    <th className="p-4">Quantity</th>
                    <th className="p-4">Total Amount</th>
                    <th className="p-4">Payment</th>
                    <th className="p-4">Fulfillment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {orders.map((o) => (
                    <tr key={o.id} className="hover:bg-slate-800/40 transition">
                      <td className="p-4 font-mono font-bold text-emerald-400">{o.id}</td>
                      <td className="p-4 text-white font-medium">{o.retailer}</td>
                      <td className="p-4 font-mono text-slate-400">{o.batchId}</td>
                      <td className="p-4 font-bold text-white">{o.quantity} units</td>
                      <td className="p-4 font-bold text-emerald-400">{o.total}</td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[10px] font-semibold">
                          {o.payment}
                        </span>
                      </td>
                      <td className="p-4 text-slate-400 text-[11px]">{o.fulfillment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: FACTORY PARTNERS */}
        {activeTab === "suppliers" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Yiwu PowerTech Co.",
                location: "Zhejiang, China",
                category: "GaN Chargers & Adapters",
                rating: "4.9 / 5.0",
                batches: 8,
              },
              {
                name: "Shenzhen Acoustic Ltd.",
                location: "Guangdong, China",
                category: "Wireless Audio & Earbuds",
                rating: "4.8 / 5.0",
                batches: 12,
              },
              {
                name: "Dongguan MicroTech Inc.",
                location: "Dongguan, China",
                category: "AMOLED Smartwatches",
                rating: "4.9 / 5.0",
                batches: 5,
              },
            ].map((s, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Verified Partner
                  </span>
                  <span className="text-xs text-slate-400">{s.rating}</span>
                </div>
                <h3 className="text-sm font-bold text-white">{s.name}</h3>
                <p className="text-xs text-slate-400">{s.category}</p>
                <div className="pt-2 border-t border-slate-800 flex justify-between text-[11px] text-slate-500">
                  <span>{s.location}</span>
                  <span className="text-emerald-400 font-bold">{s.batches} Batches Completed</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: SYSTEM HEALTH & SUPABASE CONFIG */}
        {activeTab === "health" && (
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">Database &amp; Platform Status</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Real-time status of your Supabase backend and configuration.
                </p>
              </div>
              <button
                onClick={handleRefreshHealth}
                disabled={healthLoading}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1.5 transition"
              >
                <RefreshCw size={13} className={healthLoading ? "animate-spin" : ""} />
                Recheck Status
              </button>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 space-y-2">
              <div className="flex items-center gap-2">
                {health?.ok ? (
                  <CheckCircle2 size={18} className="text-emerald-400" />
                ) : (
                  <ShieldAlert size={18} className="text-amber-400" />
                )}
                <span className="text-xs font-bold text-white">
                  {health?.ok ? "Supabase Connected &amp; Operational" : "Supabase Pending Configuration"}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {health?.message || "Checking backend health status..."}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Setup Instructions (.env.local)
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                To connect Supabase auth, open batches, and order management, create a{" "}
                <code className="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-400 font-mono text-[11px]">
                  .env.local
                </code>{" "}
                file in your project root with your project credentials:
              </p>
              <pre className="bg-slate-950 p-4 rounded-xl text-xs font-mono text-emerald-300 border border-slate-800 overflow-x-auto">
{`NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key`}
              </pre>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}