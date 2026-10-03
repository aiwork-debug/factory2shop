"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "./common/logo";
import { createClient } from "@/utils/supabase/client";
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
  Menu,
  X,
  Flame,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

export default function Navbar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Auth & Role State
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    async function getUserData() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUser(session.user);

          // Fetch profile role from Supabase
          const { data: profile } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", session.user.id)
            .single();

          if (profile) {
            setRole(profile.role);
          }
        }
      } catch (error) {
        console.error("Error fetching user session/role:", error);
      } finally {
        setLoading(false);
      }
    }

    getUserData();

    // Listen to Auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          setUser(session.user);
          const { data: profile } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", session.user.id)
            .single();
          if (profile) setRole(profile.role);
        } else {
          setUser(null);
          setRole(null);
        }
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setRole(null);
    router.push("/login");
  };

  // Dynamic Dashboard Route
  const getDashboardPath = () => {
    if (role === "admin") return "/dashboard/admin";
    if (role === "supplier") return "/dashboard/supplier";
    return "/dashboard/retailer";
  };

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 min-w-[200px]">
          <Logo />
        </Link>

        {/* SEARCH & NAVIGATION PILL (DESKTOP) */}
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
              <div className="absolute top-full left-0 mt-3 w-60 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50">
                <div className="text-[10px] font-bold text-slate-400 px-3 py-1 uppercase tracking-wider">
                  Pages
                </div>

                <Link
                  href="/about"
                  onClick={() => setIsCategoryOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-xl hover:text-emerald-600 transition"
                >
                  <Info size={14} /> About Us
                </Link>

                <Link
                  href="/faqs"
                  onClick={() => setIsCategoryOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-xl hover:text-emerald-600 transition"
                >
                  <HelpCircle size={14} /> FAQs &amp; MOQ Help
                </Link>

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
                  <Layers size={14} /> Chargers &amp; Power
                </Link>

                <Link
                  href="/category/audio"
                  onClick={() => setIsCategoryOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-xl hover:text-emerald-600 transition"
                >
                  <Layers size={14} /> Audio &amp; Earbuds
                </Link>

                <Link
                  href="/category/mobile-accessories"
                  onClick={() => setIsCategoryOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-xl hover:text-emerald-600 transition"
                >
                  <Layers size={14} /> Mobile Accessories
                </Link>

                <Link
                  href="/category/smartwatch"
                  onClick={() => setIsCategoryOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-xl hover:text-emerald-600 transition"
                >
                  <Layers size={14} /> Smartwatches
                </Link>

                <Link
                  href="/category/cables"
                  onClick={() => setIsCategoryOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-xl hover:text-emerald-600 transition"
                >
                  <Layers size={14} /> Cables &amp; Adapters
                </Link>
              </div>
            )}
          </div>

          <Link href="/#batches" className="px-4 py-2 hover:text-slate-900 transition">
            Active Open Batches
          </Link>
          <Link href="/faqs" className="px-4 py-2 hover:text-slate-900 transition">
            How MOQ Works
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

        {/* ACTIONS & AUTH NAVIGATION */}
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

          {/* DYNAMIC B2B AUTH AREA */}
          {!loading && (
            <>
              {user ? (
                <div className="flex items-center gap-2">
                  {/* ROLE BADGE */}
                  {role && (
                    <span className="hidden md:inline-block text-[10px] uppercase font-extrabold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      {role}
                    </span>
                  )}

                  {/* DASHBOARD LINK */}
                  <Link
                    href={getDashboardPath()}
                    className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3.5 py-2 rounded-full transition shadow-sm"
                  >
                    <LayoutDashboard size={14} />
                    <span className="hidden sm:inline">Dashboard</span>
                  </Link>

                  {/* LOGOUT BUTTON */}
                  <button
                    onClick={handleLogout}
                    type="button"
                    title="Logout"
                    className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-full transition"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center gap-2 bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-white font-bold text-xs px-4 md:px-5 py-2.5 rounded-full transition shadow-md"
                >
                  <User size={14} />
                  <span className="hidden sm:inline">B2B Login</span>
                  <span className="sm:hidden">Login</span>
                </Link>
              )}
            </>
          )}

          {/* MOBILE HAMBURGER TOGGLE */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-6 space-y-5 shadow-2xl animate-in slide-in-from-top duration-200">
          {/* USER INFO IN MOBILE DRAWER IF LOGGED IN */}
          {user && (
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-800 truncate max-w-[200px]">
                  {user.email}
                </p>
                {role && (
                  <span className="text-[10px] uppercase font-bold text-emerald-700">
                    Role: {role}
                  </span>
                )}
              </div>
              <Link
                href={getDashboardPath()}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-bold text-white bg-slate-900 px-3 py-1.5 rounded-xl"
              >
                Dashboard
              </Link>
            </div>
          )}

          {/* MOBILE SEARCH BAR */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search wholesale products..."
              className="w-full bg-slate-50 rounded-xl pl-4 pr-10 py-3 text-xs border border-slate-200 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="button"
              className="absolute right-2 top-2.5 bg-blue-600 text-white p-1.5 rounded-lg"
            >
              <Search size={14} />
            </button>
          </div>

          {/* QUICK LINKS */}
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
            <Link
              href="/#batches"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200"
            >
              <Flame size={16} className="text-emerald-600" />
              <span>Open Batches</span>
            </Link>
            <Link
              href="/faqs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 p-3 bg-slate-50 text-slate-700 rounded-xl border border-slate-200"
            >
              <HelpCircle size={16} className="text-blue-600" />
              <span>How MOQ Works</span>
            </Link>
          </div>

          {/* PAGES LIST */}
          <div className="space-y-1 text-xs font-medium text-slate-700">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
              Platform Navigation
            </div>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-50"
            >
              <Info size={16} className="text-slate-400" />
              <span>About Factory2Shop</span>
            </Link>
            <Link
              href="/batches"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-50"
            >
              <Layers size={16} className="text-slate-400" />
              <span>All Batches Directory</span>
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-50"
            >
              <PhoneCall size={16} className="text-slate-400" />
              <span>Contact Support &amp; Supplier Hub</span>
            </Link>
            
            {user && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleLogout();
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-rose-50 text-rose-600 text-left font-bold"
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}