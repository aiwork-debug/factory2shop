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
  Truck,
  RotateCcw,
  BadgeCheck,
  Mail,
  MapPin,
  ExternalLink,
  Globe,
  Share2,
  MessageCircle,
  Send,
} from "lucide-react";

// EXTENDED FAQ DATA
const faqCategories = [
  {
    category: "MOQ Aggregation & Purchasing",
    items: [
      {
        question: "How does Factory2Shop MOQ Aggregation work?",
        answer:
          "Factories require large order quantities (e.g., 1,000+ units) to offer tier-one wholesale pricing. Factory2Shop pools individual orders from verified UK independent retailers into a single consolidated batch. Once 100% of the MOQ threshold is met, the batch locks and goes straight into factory production.",
      },
      {
        question: "What happens if a batch does not reach 100% MOQ?",
        answer:
          "If an open batch fails to hit its target quantity before the batch timer expires, the order is automatically canceled. 100% of your committed payment is immediately refunded back to your original payment method with zero processing fees.",
      },
      {
        question: "Can I cancel my order before the batch closes?",
        answer:
          "Yes! You can cancel or edit your order quantity anytime while the batch status is still 'OPEN'. Once the batch reaches 100% MOQ and switches to 'IN PRODUCTION', orders are locked in with the manufacturer and cannot be canceled.",
      },
    ],
  },
  {
    category: "Pricing, Duty & Shipping (DDP)",
    items: [
      {
        question: "Are customs duties and UK shipping included in the unit price?",
        answer:
          "Yes! All pricing listed across Factory2Shop is strictly DDP (Delivered Duty Paid). This means import customs duties, tariffs, UK VAT handling, and final doorstep delivery freight to your shop address are fully included with zero hidden charges.",
      },
      {
        question: "How long does production and delivery take?",
        answer:
          "Standard fulfillment takes 12–18 days total from the batch closure date. This includes 7–10 days of factory manufacturing and quality control, followed by 5–8 days express air freight and local UK doorstep dispatch.",
      },
      {
        question: "Do you ship across the entire United Kingdom?",
        answer:
          "We deliver to all mainland UK business addresses, including England, Scotland, Wales, and Northern Ireland. Tracked courier details (DPD/DHL) are emailed to you as soon as the batch clears UK customs.",
      },
    ],
  },
  {
    category: "Quality Assurance & Custom Branding",
    items: [
      {
        question: "How do you guarantee product quality from overseas factories?",
        answer:
          "Every factory on our platform is pre-vetted for ISO certification and compliance. Furthermore, Factory2Shop deploys independent third-party inspection teams (SGS/Intertek standard) to conduct inline and pre-shipment quality checks before any batch leaves the factory.",
      },
      {
        question: "Can I order custom branding, logos, or private labeling?",
        answer:
          "Standard open batches supply goods in factory retail packaging. For custom OEM logo printing or bespoke packaging design, please submit a request through our B2B Volume Hub for dedicated factory allocations.",
      },
      {
        question: "What if I receive damaged or defective items in my batch?",
        answer:
          "We provide a 14-day B2B Quality Guarantee. If any item arrives damaged or defective, submit clear photo evidence through your account portal within 14 days of delivery for a instant pro-rata refund or replacement credit.",
      },
    ],
  },
];

export default function FAQPage() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

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
                    <HelpCircle size={14} /> FAQs & MOQ Help
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

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* PAGE HEADER */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[11px] font-bold">
              <HelpCircle size={13} /> Knowledge Base & B2B Help
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-600 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
              Everything independent UK shop owners need to know about factory direct
              batch purchasing, DDP customs clearance, and ordering.
            </p>
          </div>

          {/* QUICK HIGHLIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">100% Refund Protection</h4>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  Full refund if a batch MOQ isn't reached.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <Truck size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">All-Inclusive DDP Delivery</h4>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  Customs, VAT & shipping are included.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg shrink-0">
                <BadgeCheck size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Verified Direct Factories</h4>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  Inspected ISO-compliant manufacturers.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-lg shrink-0">
                <RotateCcw size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">14-Day Quality Cover</h4>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  Hassle-free defective replacements.
                </p>
              </div>
            </div>
          </div>

          {/* ACCORDION & SIDEBAR GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* FAQ ACCORDION LIST */}
            <div className="lg:col-span-8 space-y-6">
              {faqCategories.map((cat, catIdx) => (
                <div key={catIdx} className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
                    {cat.category}
                  </h3>
                  <div className="space-y-2.5">
                    {cat.items.map((item, itemIdx) => {
                      const id = `${catIdx}-${itemIdx}`;
                      const isOpen = openIndex === id;
                      return (
                        <div
                          key={itemIdx}
                          className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs transition"
                        >
                          <button
                            onClick={() => toggleAccordion(id)}
                            type="button"
                            className="w-full flex items-center justify-between p-4 text-left font-bold text-slate-900 text-xs md:text-sm hover:bg-slate-50 transition gap-3"
                          >
                            <span>{item.question}</span>
                            <ChevronDown
                              size={16}
                              className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                              {item.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* SIDEBAR BANNER */}
            <div className="lg:col-span-4 bg-slate-900 text-white p-5 rounded-2xl space-y-5 sticky top-24 shadow-xl border border-slate-800">
              <div className="relative h-40 rounded-xl overflow-hidden border border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Support Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-white">Need Personal B2B Support?</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Have special order requirements or custom OEM questions? Our London team is here to assist.
                </p>
              </div>
              <div className="space-y-2 pt-1">
                <Link
                  href="/contact"
                  className="block text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs py-2.5 rounded-full transition shadow-md"
                >
                  Speak to a B2B Specialist
                </Link>
                <a
                  href="mailto:support@factory2shop.co.uk"
                  className="block text-center bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs py-2.5 rounded-full transition"
                >
                  Email Support Team
                </a>
              </div>
            </div>
          </div>
        </div>
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