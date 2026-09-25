"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Search,
  Heart,
  ShoppingBag,
  User,
  Info,
  HelpCircle,
  PhoneCall,
  Layers,
  ShieldCheck,
  Globe2,
  Building2,
  TrendingUp,
  Mail,
  MapPin,
  ExternalLink,
  Globe,
  Share2,
  MessageCircle,
  Send,
} from "lucide-react";

export default function AboutPage() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col justify-between">
      {/* NAVBAR */}
      <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 min-w-[200px]">
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Factory<span className="text-emerald-500">2Shop</span>
            </span>
          </Link>

          {/* SEARCH & NAVIGATION PILL */}
          <div className="hidden lg:flex items-center bg-slate-100 rounded-full p-1.5 border border-slate-200 text-xs font-semibold text-slate-700">
            {/* CATEGORIES DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                type="button"
                className="flex items-center gap-1.5 px-4 py-2 hover:text-slate-900 transition rounded-full hover:bg-white"
              >
                <span>Categories</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN MENU */}
              {isCategoryOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50">
                  <div className="text-[10px] font-bold text-slate-400 px-3 py-1 uppercase tracking-wider">
                    Pages
                  </div>

                  {/* ABOUT US LINK */}
                  <Link
                    href="/about"
                    onClick={() => setIsCategoryOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-xl hover:text-emerald-600 transition"
                  >
                    <Info size={14} /> About Us
                  </Link>

                  {/* FAQS LINK */}
                  <Link
                    href="/faqs"
                    onClick={() => setIsCategoryOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-xl hover:text-emerald-600 transition"
                  >
                    <HelpCircle size={14} /> FAQs & MOQ Help
                  </Link>

                  {/* CONTACT LINK */}
                  <Link
                    href="/contact"
                    onClick={() => setIsCategoryOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-xl hover:text-emerald-600 transition"
                  >
                    <PhoneCall size={14} /> Contact Support
                  </Link>

                  <div className="my-1 border-t border-slate-100" />
                  <div className="text-[10px] font-bold text-slate-400 px-3 py-1 uppercase tracking-wider">
                    Product Categories
                  </div>

                  <Link
                    href="/category/chargers"
                    onClick={() => setIsCategoryOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-xl hover:text-emerald-600 transition"
                  >
                    <Layers size={14} /> Chargers & Power
                  </Link>

                  <Link
                    href="/category/audio"
                    onClick={() => setIsCategoryOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-xl hover:text-emerald-600 transition"
                  >
                    <Layers size={14} /> Audio & Earbuds
                  </Link>
                </div>
              )}
            </div>

            <a href="#batches" className="px-4 py-2 hover:text-slate-900 transition">
              Active Open Batches
            </a>
            <Link href="/faqs" className="px-4 py-2 hover:text-slate-900 transition">
              How MOQ Aggregation Works
            </Link>

            {/* SEARCH BAR */}
            <div className="relative flex items-center ml-2">
              <input
                type="text"
                placeholder="Search wholesale products..."
                className="bg-white rounded-full pl-4 pr-9 py-2 text-xs w-60 border border-slate-200 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="button"
                className="absolute right-1 bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700 transition"
              >
                <Search size={12} />
              </button>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="text-slate-600 hover:text-slate-900 p-2 hover:bg-slate-100 rounded-full transition hidden sm:block"
            >
              <Heart size={20} />
            </button>
            <button
              type="button"
              className="text-slate-600 hover:text-slate-900 p-2 hover:bg-slate-100 rounded-full transition relative"
            >
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            </button>

            {/* B2B LOGIN BUTTON */}
            <Link
              href="/login"
              className="flex items-center gap-2 bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-white font-bold text-xs px-5 py-2.5 rounded-full transition shadow-md"
            >
              <User size={14} />
              <span>B2B Login</span>
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN ABOUT CONTENT */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative bg-slate-950 text-white py-16 md:py-20 px-4 md:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-75">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
              alt="Factory Warehouse"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/30" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold backdrop-blur-md">
              <Building2 size={13} /> Factory Direct Aggregation
            </div>
            <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight max-w-2xl drop-shadow-md">
              Bridging Small UK Retailers with{" "}
              <span className="text-emerald-400">Global Factories.</span>
            </h1>
            <p className="text-slate-200 text-xs md:text-sm max-w-xl leading-relaxed drop-shadow-sm font-medium">
              Factory2Shop eliminates middlemen. We group order demand from
              hundreds of independent UK shop owners to meet direct factory
              Minimum Order Quantities (MOQ).
            </p>
          </div>
        </section>

        {/* CORE MISSION & STATS */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Our Vision: Democratizing Wholesale Rates
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Traditionally, tier-one factory prices were reserved for huge
                corporations ordering thousands of units at once. Independent
                UK shops were forced to buy from local distributors with 40%-80%
                markups.
              </p>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Factory2Shop changes the game. By aggregating small orders into
                consolidated purchasing batches, every verified retailer gets
                direct factory rates without overstocking risk.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <p className="text-2xl font-black text-emerald-600">500+</p>
                  <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                    Verified Factories
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <p className="text-2xl font-black text-blue-600">£1.2M+</p>
                  <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                    Retailer Savings
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
                alt="Global Freight Logistics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* VALUE PROPOSITION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 hover:border-emerald-500 transition shadow-xs">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                100% Quality Inspected
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every batch undergoes strict pre-shipment quality control
                checks before landing in the UK.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 hover:border-emerald-500 transition shadow-xs">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <Globe2 size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Customs & Freight Included
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We handle all import clearance, tariffs, and DDP freight. No
                hidden charges or customs headaches.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 hover:border-emerald-500 transition shadow-xs">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Higher Profit Margins
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lower stock acquisition costs directly boost your retail profit
                margins up to 45%.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#111315] text-slate-400 font-sans border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-8 space-y-10">
          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* COLUMN 1 */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-black tracking-tight text-white">
                  Factory<span className="text-emerald-400">2Shop</span>
                </span>
              </Link>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Direct factory aggregation platform bridging UK independent
                retailers with global manufacturers at tier-one wholesale
                pricing.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition"
                >
                  <Globe size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition"
                >
                  <Share2 size={16} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition"
                >
                  <Send size={16} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-emerald-400 transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    href="#batches"
                    className="hover:text-emerald-400 transition"
                  >
                    Active Open Batches
                  </a>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="hover:text-emerald-400 transition"
                  >
                    How MOQ Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-emerald-400 transition"
                  >
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white tracking-wider">
                Customer Service
              </h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <Link
                    href="/faqs"
                    className="hover:text-emerald-400 transition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="hover:text-emerald-400 transition"
                  >
                    DDP Shipping Info
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="hover:text-emerald-400 transition"
                  >
                    Refund & MOQ Guarantee
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="hover:text-emerald-400 transition"
                  >
                    FAQ & Help Desk
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="hover:text-emerald-400 transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 4 */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white tracking-wider">
                Get In Touch
              </h4>
              <div className="space-y-3 text-xs leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <Mail
                    size={16}
                    className="text-emerald-400 shrink-0 mt-0.5"
                  />
                  <a
                    href="mailto:support@factory2shop.co.uk"
                    className="hover:text-emerald-400 transition"
                  >
                    support@factory2shop.co.uk
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin
                    size={16}
                    className="text-emerald-400 shrink-0 mt-0.5"
                  />
                  <span>
                    100 Bishopsgate, London
                    <br />
                    EC2N 4AG, United Kingdom
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE BAR */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold">
            <div className="text-slate-500">
              <span>UK CRN #: 14829102</span>
              <span className="mx-2">|</span>
              <span>VAT Number: GB 948 2011 44</span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-white hover:text-emerald-400 underline underline-offset-4 transition"
            >
              <span>Go To Supplier & Partner Hub</span>
              <ExternalLink size={12} />
            </Link>
          </div>

          {/* BOTTOM BAR */}
          <div className="pt-6 border-t border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© 2026 Factory2Shop Ltd. All rights reserved.</p>
            <p className="flex items-center gap-1">
              <span>Powered by</span>
              <strong className="text-slate-300 font-bold">
                Factory2Shop B2B Core
              </strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}