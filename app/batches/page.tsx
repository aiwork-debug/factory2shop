"use client";

import React from "react";

export default function BatchesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-4">
        <h1 className="text-3xl font-black text-slate-900">
          All Active Wholesale Batches
        </h1>
        <p className="text-slate-600 text-sm">
          Browse open factory batches and commit quantities to unlock volume pricing tiers.
        </p>

        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs">
          <p className="text-slate-500 text-sm">
            Active Open Batches Directory Page
          </p>
        </div>
      </div>
    </div>
  );
}