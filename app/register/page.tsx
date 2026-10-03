"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Building, Lock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function RegisterPage() {
  const router = useRouter();
  // Role FIXED: 'retailer' used instead of 'buyer'
  const [role, setRole] = useState<"retailer" | "supplier">("retailer");
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const client = createClient();

    try {
      // 1. Single Auth Sign Up call (SQL Trigger will handle profile creation automatically)
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

      setMessage("Registration successful! Redirecting to login...");
      
      // Auto redirect after 2 seconds
      setTimeout(() => {
        router.push("/login");
      }, 1500);

    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Something went wrong while creating your account."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans">
      <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 p-8 rounded-3xl text-white">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className="bg-slate-950 p-1 rounded-full flex gap-1 border border-slate-800">
            <button
              type="button"
              onClick={() => setRole("retailer")}
              className={`px-3.5 py-1 rounded-full text-xs font-bold transition ${
                role === "retailer"
                  ? "bg-emerald-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Retailer
            </button>
            <button
              type="button"
              onClick={() => setRole("supplier")}
              className={`px-3.5 py-1 rounded-full text-xs font-bold transition ${
                role === "supplier"
                  ? "bg-slate-800 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Factory Partner
            </button>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-3 py-1 text-[10px] uppercase tracking-wider text-emerald-300">
            <ShieldCheck size={12} /> Verified B2B
          </span>
        </div>

        <div className="space-y-2 mb-6">
          <h2 className="text-2xl font-black text-emerald-400">B2B Account Onboarding</h2>
          <p className="text-xs text-slate-400 mt-1">
            Register your trade account to join wholesale purchasing batches.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-300">Full Name</label>
              <div className="relative">
                <Building className="absolute left-3 top-3 text-slate-500" size={16} />
                <input
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  type="text"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 pl-10 pr-3 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-emerald-500"
                  placeholder="Aisha Malik"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-300">Company</label>
              <div className="relative">
                <Building className="absolute left-3 top-3 text-slate-500" size={16} />
                <input
                  value={form.companyName}
                  onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                  type="text"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 pl-10 pr-3 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-emerald-500"
                  placeholder="Apex Retail Ltd"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-300">Business Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-slate-500" size={16} />
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  type="email"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 pl-10 pr-3 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-emerald-500"
                  placeholder="buyer@company.co.uk"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-300">Mobile</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-slate-500" size={16} />
                <input
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  type="tel"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 pl-10 pr-3 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-emerald-500"
                  placeholder="+44 7700 900123"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-300">City</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-slate-500" size={16} />
                <input
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  type="text"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 pl-10 pr-3 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-emerald-500"
                  placeholder="London"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-300">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-slate-500" size={16} />
                <input
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  type="password"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 pl-10 pr-3 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-emerald-500"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-300">Business Address</label>
            <textarea
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              rows={3}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-emerald-500"
              placeholder="123 High Street, London"
            />
          </div>

          {message && (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-300">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-emerald-500 py-3 text-xs font-black uppercase tracking-wider text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Creating Account..." : `Register as ${role === "retailer" ? "Retailer" : "Factory Partner"}`}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-400">
          Already have a B2B trade account?{" "}
          <Link href="/login" className="font-bold text-emerald-400 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}