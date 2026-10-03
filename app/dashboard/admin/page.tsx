"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Users, ShieldCheck, ShoppingBag, AlertCircle } from "lucide-react";

export default function AdminDashboard() {
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

      // Profile verify karna target access control ke liye
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();

      if (profile?.role !== "admin") {
        router.push("/dashboard/retailer");
        return;
      }

      setUser(session.user);
      setLoading(false);
    }
    checkUser();
  }, [router, supabase]);

  if (loading) {
    return <div className="p-8 text-center text-slate-500">Loading Admin Portal...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          Admin Control Center 🛡️
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Manage system users, approve suppliers, and oversee platform transactions.
        </p>
      </div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 mb-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-400">Total Users</span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <Users size={20} />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-2">128</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-400">Pending Suppliers</span>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
              <AlertCircle size={20} />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-2">5</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-400">Verified Suppliers</span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <ShieldCheck size={20} />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-2">14</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-400">Platform Orders</span>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
              <ShoppingBag size={20} />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-2">342</p>
        </div>
      </div>

      {/* Admin Management Section */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4">System Overview &amp; Verification Requests</h2>
        <div className="text-center py-12 text-slate-400">
          <ShieldCheck size={48} className="mx-auto mb-3 stroke-[1.5]" />
          <p className="text-sm font-medium">All supplier requests are up to date.</p>
        </div>
      </div>
    </div>
  );
}