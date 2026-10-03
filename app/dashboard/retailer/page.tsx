"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { ShoppingBag, Clock, CheckCircle, PackageSearch } from "lucide-react";

export default function RetailerDashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    async function checkUser() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
        return;
      }
      setUser(session.user);
      setLoading(false);
    }
    checkUser();
  }, [router, supabase]);

  if (loading) {
    return <div className="p-8 text-center text-slate-500">Loading Retailer Dashboard...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          Retailer Hub 🛒
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Welcome back, <span className="font-semibold text-slate-700">{user?.email}</span>! Track your group buying orders and open batches.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-400">Active Orders</span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <ShoppingBag size={20} />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-2">3</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-400">Pending Batches</span>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
              <Clock size={20} />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-2">2</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-400">Completed Orders</span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <CheckCircle size={20} />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-2">12</p>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900">Your Joined Batches & Orders</h2>
          <button className="text-xs font-bold text-emerald-600 hover:text-emerald-700">
            View All
          </button>
        </div>

        <div className="text-center py-12 text-slate-400">
          <PackageSearch size={48} className="mx-auto mb-3 stroke-[1.5]" />
          <p className="text-sm font-medium">No active orders found.</p>
          <p className="text-xs text-slate-400 mt-1">Explore open batches to place wholesale orders with low MOQ.</p>
        </div>
      </div>
    </div>
  );
}