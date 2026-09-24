"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Lock, Mail, Building, ShieldCheck } from "lucide-react";

export default function AuthPage() {
  const [role, setRole] = useState<"buyer" | "supplier">("buyer");
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-10 font-sans">
      {/* Container Size Increased to max-w-5xl for a larger card */}
      <div className="max-w-5xl w-full min-h-[620px] bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
        
        {/* LEFT FORM SECTION */}
        <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between">
          <div>
            {/* Header / Back Link & Role Switcher */}
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition bg-slate-100 px-3.5 py-2 rounded-full"
              >
                <ArrowLeft size={14} /> Back to Home
              </Link>

              {/* Role Switcher Tabs */}
              <div className="bg-slate-100 p-1 rounded-full flex gap-1">
                <button
                  type="button"
                  onClick={() => setRole("buyer")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                    role === "buyer"
                      ? "bg-emerald-500 text-slate-950 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Retailer
                </button>
                <button
                  type="button"
                  onClick={() => setRole("supplier")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                    role === "supplier"
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Factory Partner
                </button>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2 mb-8">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                {isSignUp ? "Create B2B Account" : "Welcome to Factory2Shop"}
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                {role === "buyer"
                  ? "Access tier-1 factory prices and join open MOQ batches."
                  : "List your factory inventory and manage bulk UK orders."}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {isSignUp && (
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Company / Store Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                    <input
                      type="text"
                      placeholder="e.g. Apex Retail UK Ltd"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Business Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                  <input
                    type="email"
                    placeholder="buyer@company.co.uk"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    Password
                  </label>
                  {!isSignUp && (
                    <a href="#" className="text-[11px] font-bold text-emerald-600 hover:underline">
                      Forgot Password?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`w-full py-3.5 rounded-xl font-bold text-xs transition shadow-md mt-4 ${
                  role === "buyer"
                    ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                {isSignUp
                  ? role === "buyer"
                    ? "Register as Retailer"
                    : "Apply as Supplier"
                  : "Sign In to B2B Portal"}
              </button>
            </form>
          </div>

          {/* Toggle Sign Up / Login */}
          <div className="mt-8 text-center text-xs text-slate-500 font-medium">
            {isSignUp ? "Already have an account?" : "Don't have a B2B account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-bold text-emerald-600 hover:underline"
            >
              {isSignUp ? "Sign In" : "Create One"}
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE / BANNER SECTION (Clean & Bright Background Picture) */}
        <div className="md:col-span-5 relative bg-slate-950 text-white p-8 md:p-10 flex flex-col justify-between overflow-hidden">
          
          {/* Opacity Increased to 0.7 for higher image clarity */}
          <div className="absolute inset-0 opacity-70">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
              alt="Factory Warehouse"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Lighter Gradient Overlay so picture remains readable & crisp */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-900/20" />

          {/* Top Tag & Title */}
          <div className="relative z-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 text-[11px] font-bold backdrop-blur-md">
              <ShieldCheck size={14} /> Verified B2B Network
            </span>
            <h3 className="text-2xl font-black text-white tracking-tight drop-shadow-md">
              Direct Sourcing, Zero Middlemen
            </h3>
          </div>

          {/* Bottom Testimonial Box */}
          <div className="relative z-10 space-y-2 bg-slate-900/85 p-5 rounded-2xl border border-slate-700/80 backdrop-blur-md shadow-xl">
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              "Factory2Shop allowed us to buy premium fast chargers at 60% lower costs by pooling orders with other UK stores."
            </p>
            <p className="text-[11px] font-bold text-emerald-400">— TechSupply UK</p>
          </div>
        </div>

      </div>
    </div>
  );
}