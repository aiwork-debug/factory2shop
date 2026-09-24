"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "How does Factory2Shop MOQ Aggregation work?",
    answer:
      "Factories require large orders (e.g. 1,000 units). On Factory2Shop, multiple UK retailers join the same order batch. Once total order volume reaches the factory threshold, the batch closes and production begins at direct factory rates.",
  },
  {
    question: "What happens if a batch does not reach 100% MOQ?",
    answer:
      "If a batch doesn't reach 100% MOQ before its timer expires, 100% of your committed payment is immediately refunded back to your account without any fees.",
  },
  {
    question: "Are customs duties and UK shipping included in the unit price?",
    answer:
      "Yes! All prices listed on Factory2Shop are final DDP (Delivered Duty Paid) prices. Taxes, customs duty, and UK doorstep delivery are included.",
  },
  {
    question: "How long does production and delivery take?",
    answer:
      "Once a batch locks, production takes 7-12 days depending on the item, followed by 5-7 days air freight delivery direct to your shop.",
  },
  {
    question: "Can I order custom branding or packaging?",
    answer:
      "For standard open batches, items come in factory retail packaging. For custom logo printing (OEM), please contact our B2B team for dedicated volume orders.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-slate-50 font-sans py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* HEADER */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
            <HelpCircle size={14} /> Knowledge Base & Support
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Everything you need to know about batch purchasing, factory pricing, and delivery timeline.
          </p>
        </div>

        {/* ACCORDION & BANNER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs transition"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 text-sm md:text-base hover:bg-slate-50 transition"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === idx && (
                  <div className="px-5 pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* SIDE BANNER CARD - FIXED IMAGE */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-3xl space-y-6 relative overflow-hidden shadow-xl">
            <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Support Agent"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Still have questions?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our UK wholesale specialists are ready to guide you through your first batch order.
              </p>
            </div>
            <Link
              href="/contact"
              className="block text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs py-3 rounded-full transition shadow-lg"
            >
              Speak to B2B Specialist
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}