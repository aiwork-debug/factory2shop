"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./common/logo";
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
} from "lucide-react";

export default function Navbar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 min-w-[200px]">
          <Logo />
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
  );
}