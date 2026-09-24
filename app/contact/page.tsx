"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* HEADER */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Need help with a batch order or supplier inquiry? Contact our London wholesale desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* CONTACT DETAILS & IMAGE */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 space-y-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <div className="space-y-4 text-xs md:text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-emerald-400 shrink-0" />
                  <span>support@factory2shop.co.uk</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-emerald-400 shrink-0" />
                  <span>+44 20 7946 0912</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-emerald-400 shrink-0" />
                  <span>100 Bishopsgate, London EC2N 4AG, UK</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-emerald-400 shrink-0" />
                  <span>Mon - Fri: 8:00 AM - 6:00 PM GMT</span>
                </div>
              </div>
            </div>

            <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-800 z-10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="London Office"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xs">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <CheckCircle2 size={50} className="text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Thank you for reaching out. Our B2B manager will respond within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-bold text-slate-900">Send us a Message</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Smith"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Business Email</label>
                    <input
                      required
                      type="email"
                      placeholder="john@retailstore.co.uk"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Shop / Company Name</label>
                  <input
                    type="text"
                    placeholder="Tech Fix Retail Ltd"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your inquiry or required product batch..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-white font-extrabold text-xs py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-md"
                >
                  <Send size={14} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}