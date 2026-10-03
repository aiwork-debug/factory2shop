"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Lock, Mail, Building, ShieldCheck, Phone, MapPin } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function AuthPage() {
  const router = useRouter();
  // FIXED: Changed 'buyer' to 'retailer' to match database schema constraints
  const [role, setRole] = useState<"retailer" | "supplier">("retailer");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    mobile: "",
    city: "",
    address: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const client = createClient();

    try {
      if (isSignUp) {
        // Sign-up flow (SQL trigger handles profiles automatically)
        const { data, error } = await client.auth.signUp({
          email: form.email,
          password: form.password,
          options: {
            emailRedirectTo: `${window.location.origin}/login`,
            data: {
              full_name: form.fullName,
              company_name: form.companyName,
              mobile: form.mobile,
              role: role, // Properly passes 'retailer' or 'supplier'
              city: form.city,
              address: form.address,
            },
          },
        });

        if (error) throw error;

        setMessage("Account created successfully! Redirecting...");
        setTimeout(() => {
          setIsSignUp(false);
          setMessage("");
        }, 1500);

      } else {
        // Sign-in flow
        const { data, error } = await client.auth.signInWithPassword({
          email: form.email,
          password: form.password,
        });

        if (error) throw error;

        setMessage("Login successful! Redirecting...");
        // Auto redirect to homepage / dashboard
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 1000);
      }
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-10 font-sans">
      <div className="max-w-5xl w-full min-h-[620px] bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition bg-slate-100 px-3.5 py-2 rounded-full"
              >
                <ArrowLeft size={14} /> Back to Home
              </Link>

              <div className="bg-slate-100 p-1 rounded-full flex gap-1">
                <button
                  type="button"
                  onClick={() => setRole("retailer")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                    role === "retailer"
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

            <div className="space-y-2 mb-8">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                {isSignUp ? "Create B2B Account" : "Welcome to Factory2Shop"}
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                {role === "retailer"
                  ? "Access tier-1 factory prices and join open MOQ batches."
                  : "List your factory inventory and manage bulk UK orders."}
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {isSignUp && (
                <>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                      <input
                        value={form.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        type="text"
                        placeholder="e.g. Aisha Malik"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                        required={isSignUp}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company / Store Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                      <input
                        value={form.companyName}
                        onChange={(e) => handleChange("companyName", e.target.value)}
                        type="text"
                        placeholder="e.g. Apex Retail UK Ltd"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                        required={isSignUp}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Mobile Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                        <input
                          value={form.mobile}
                          onChange={(e) => handleChange("mobile", e.target.value)}
                          type="tel"
                          placeholder="+44 7700 900123"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                          required={isSignUp}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        City
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                        <input
                          value={form.city}
                          onChange={(e) => handleChange("city", e.target.value)}
                          type="text"
                          placeholder="London"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Business Address
                    </label>
                    <textarea
                      value={form.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      rows={3}
                      placeholder="123 High Street, London"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Business Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                  <input
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    type="email"
                    placeholder="buyer@company.co.uk"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                    required
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
                    value={form.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                    required
                  />
                </div>
              </div>

              {message && (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-[11px] text-emerald-700">
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3.5 rounded-xl font-bold text-xs transition shadow-md mt-4 ${
                  role === "retailer"
                    ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                } disabled:cursor-not-allowed disabled:opacity-70`}
              >
                {loading
                  ? "Please wait..."
                  : isSignUp
                  ? role === "retailer"
                    ? "Register as Retailer"
                    : "Apply as Supplier"
                  : "Sign In to B2B Portal"}
              </button>
            </form>
          </div>

          <div className="mt-8 text-center text-xs text-slate-500 font-medium">
            {isSignUp ? "Already have an account?" : "Don't have a B2B account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setMessage("");
              }}
              className="font-bold text-emerald-600 hover:underline"
            >
              {isSignUp ? "Sign In" : "Create One"}
            </button>
          </div>
        </div>

        <div className="md:col-span-5 relative bg-slate-950 text-white p-8 md:p-10 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
              alt="Factory Warehouse"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-900/20" />

          <div className="relative z-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 text-[11px] font-bold backdrop-blur-md">
              <ShieldCheck size={14} /> Verified B2B Network
            </span>
            <h3 className="text-2xl font-black text-white tracking-tight drop-shadow-md">
              Direct Sourcing, Zero Middlemen
            </h3>
          </div>

          <div className="relative z-10 space-y-2 bg-slate-900/85 p-5 rounded-2xl border border-slate-700/80 backdrop-blur-md shadow-xl">
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              &ldquo;Factory2Shop allowed us to buy premium fast chargers at 60% lower costs by pooling orders with other UK stores.&rdquo;
            </p>
            <p className="text-[11px] font-bold text-emerald-400">— TechSupply UK</p>
          </div>
        </div>
      </div>
    </div>
  );
}