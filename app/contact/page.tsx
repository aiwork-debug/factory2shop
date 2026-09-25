"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  ChevronDown,
  Search,
  Heart,
  ShoppingBag,
  User,
  Info,
  HelpCircle,
  PhoneCall,
  Layers,
  Globe,
  Share2,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col justify-between">
      {/* NAVBAR */}
      <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900">
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

              {isCategoryOpen && (
                <div className="absolute top-full left-0 mt-3 w-52 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50">
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
                    <HelpCircle size={14} /> FAQs
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsCategoryOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-xl hover:text-emerald-600 transition"
                  >
                    <PhoneCall size={14} /> Contact
                  </Link>
                  <div className="my-1 border-t border-slate-100" />
                  <Link
                    href="/category/chargers"
                    onClick={() => setIsCategoryOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-xl hover:text-emerald-600 transition"
                  >
                    <Layers size={14} /> Wholesale Electronics
                  </Link>
                </div>
              )}
            </div>

            <a href="#batches" className="px-4 py-2 hover:text-slate-900 transition">
              Active Open Batches
            </a>
            <Link href="/faqs" className="px-4 py-2 hover:text-slate-900 transition">
              How MOQ Works
            </Link>

            {/* SEARCH BAR */}
            <div className="relative flex items-center ml-2">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-white rounded-full pl-4 pr-8 py-1.5 text-xs w-48 border border-slate-200 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="button"
                className="absolute right-1 bg-emerald-500 text-white p-1 rounded-full hover:bg-emerald-600 transition"
              >
                <Search size={12} />
              </button>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              className="text-slate-600 hover:text-slate-900 p-2 hover:bg-slate-100 rounded-full transition hidden sm:block"
            >
              <Heart size={18} />
            </button>
            <button
              type="button"
              className="text-slate-600 hover:text-slate-900 p-2 hover:bg-slate-100 rounded-full transition relative"
            >
              <ShoppingBag size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            </button>

            <Link
              href="/login"
              className="flex items-center gap-1.5 bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-white font-bold text-xs px-4 py-2 rounded-full transition"
            >
              <User size={13} />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* HEADER */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-slate-600 text-xs max-w-md mx-auto">
              Need help with a batch order or supplier inquiry? Contact our London wholesale desk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* CONTACT DETAILS (LIGHT BG BOX) */}
            <div className="lg:col-span-5 bg-slate-100/90 rounded-2xl p-6 md:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <h2 className="text-base font-bold text-slate-900 border-b border-slate-200/80 pb-3">
                  Contact Information
                </h2>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-emerald-500 shrink-0" />
                    <span>support@factory2shop.co.uk</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-emerald-500 shrink-0" />
                    <span>+44 20 7946 0912</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-emerald-500 shrink-0" />
                    <span>100 Bishopsgate, London EC2N 4AG, UK</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-emerald-500 shrink-0" />
                    <span>Mon - Fri: 8:00 AM - 6:00 PM GMT</span>
                  </div>
                </div>
              </div>

              {/* IMAGE */}
              <div className="relative h-44 rounded-xl overflow-hidden border border-slate-200/80">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="London Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* FORM CONTAINER (LIGHT BG BOX) */}
            <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs">
              {submitted ? (
                <div className="text-center py-12 space-y-3">
                  <CheckCircle2 size={42} className="text-emerald-500 mx-auto" />
                  <h3 className="text-lg font-bold text-slate-900">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Thank you for reaching out. Our B2B manager will respond within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block pt-2 text-xs font-bold text-emerald-600 hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-base font-bold text-slate-900">Send us a Message</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">Business Email</label>
                      <input
                        required
                        type="email"
                        placeholder="john@retailstore.co.uk"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700">Shop / Company Name</label>
                    <input
                      type="text"
                      placeholder="Tech Fix Retail Ltd"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your inquiry or required product batch..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                    ></textarea>
                  </div>

                  {/* LIGHT BUTTON */}
                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-3 rounded-lg transition flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Send size={13} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#111315] text-slate-400 font-sans border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* COL 1 */}
            <div className="space-y-3">
              <Link href="/" className="inline-block">
                <span className="text-xl font-black tracking-tight text-white">
                  Factory<span className="text-emerald-400">2Shop</span>
                </span>
              </Link>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct factory aggregation platform bridging UK independent retailers with global manufacturers at tier-one wholesale pricing.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition">
                  <Globe size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition">
                  <Share2 size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition">
                  <MessageSquare size={14} />
                </a>
              </div>
            </div>

            {/* COL 2 */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/about" className="hover:text-emerald-400 transition">About Us</Link></li>
                <li><a href="#batches" className="hover:text-emerald-400 transition">Active Open Batches</a></li>
                <li><Link href="/faqs" className="hover:text-emerald-400 transition">How MOQ Works</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact Support</Link></li>
              </ul>
            </div>

            {/* COL 3 */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Customer Service</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/faqs" className="hover:text-emerald-400 transition">Terms & Conditions</Link></li>
                <li><Link href="/faqs" className="hover:text-emerald-400 transition">DDP Shipping Info</Link></li>
                <li><Link href="/faqs" className="hover:text-emerald-400 transition">Refund & MOQ Guarantee</Link></li>
                <li><Link href="/faqs" className="hover:text-emerald-400 transition">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* COL 4 */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Get In Touch</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-emerald-400 shrink-0" />
                  <span>support@factory2shop.co.uk</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>100 Bishopsgate, London EC2N 4AG, UK</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <p>© 2026 Factory2Shop Ltd. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <span>UK CRN #: 14829102</span>
              <span className="mx-1.5">|</span>
              <Link href="/contact" className="hover:text-emerald-400 flex items-center gap-1">
                <span>Supplier Hub</span>
                <ExternalLink size={10} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}