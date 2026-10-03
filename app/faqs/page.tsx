"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  Truck,
  RotateCcw,
  BadgeCheck,
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
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col justify-between">
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* PAGE HEADER */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[11px] font-bold">
              <HelpCircle size={13} /> Knowledge Base &amp; B2B Help
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
                  Full refund if a batch MOQ isn&apos;t reached.
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
                  Customs, VAT &amp; shipping are included.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg shrink-0">
                <BadgeCheck size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Strict Quality Audit</h4>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  On-site inspections before factory dispatch.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-lg shrink-0">
                <RotateCcw size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Tier Price Drops</h4>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  Lower prices unlocked as batches fill up.
                </p>
              </div>
            </div>
          </div>

          {/* FAQS & SIDEBAR GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ACCORDION CATEGORIES */}
            <div className="lg:col-span-8 space-y-8">
              {faqCategories.map((cat, catIdx) => (
                <div key={catIdx} className="space-y-4">
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                    {cat.category}
                  </h3>

                  <div className="space-y-3">
                    {cat.items.map((faq, itemIdx) => {
                      const id = `${catIdx}-${itemIdx}`;
                      const isOpen = openIndex === id;

                      return (
                        <div
                          key={itemIdx}
                          className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition"
                        >
                          <button
                            type="button"
                            onClick={() => toggleAccordion(id)}
                            className="w-full text-left p-4.5 flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                          >
                            <span className="text-xs md:text-sm font-bold text-slate-900">
                              {faq.question}
                            </span>
                            <ChevronDown
                              size={16}
                              className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                                isOpen ? "rotate-180 text-emerald-600" : ""
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div className="px-4.5 pb-4.5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                              {faq.answer}
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

      <Footer />
    </div>
  );
}