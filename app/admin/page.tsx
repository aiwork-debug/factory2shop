"use client";

import React from "react";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-4">
        <h1 className="text-3xl font-black text-emerald-400">
          Factory2Shop Admin Dashboard
        </h1>
        <p className="text-slate-400 text-sm">
          Manage products, active supplier batches, price tiers, and consolidated shipment orders.
        </p>
        
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <p className="text-slate-300 text-sm font-medium">
            Admin Management Module Coming Soon...
          </p>
        </div>
      </div>
    </div>
  );
}