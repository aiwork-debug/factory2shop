"use client";

import React, { useState } from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col justify-between">
      <Navbar />

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

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Email Address</h4>
                      <a
                        href="mailto:support@factory2shop.co.uk"
                        className="text-slate-600 hover:text-emerald-600 transition"
                      >
                        support@factory2shop.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 text-blue-700 rounded-lg shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Phone Support</h4>
                      <p className="text-slate-600">+44 20 7946 0912 (UK Trade Desk)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">London Office</h4>
                      <p className="text-slate-600">
                        100 Bishopsgate, London
                        <br />
                        EC2N 4AG, United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 text-purple-700 rounded-lg shrink-0">
                      <Clock size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Trade Desk Hours</h4>
                      <p className="text-slate-600">Mon - Fri: 8:30 AM - 6:00 PM GMT</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FACTORY TRUST CARD */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xs h-36">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Customer Support Desk"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/60 p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    Verified B2B Support
                  </span>
                  <p className="text-xs font-bold">Fast Response Guarantee</p>
                </div>
              </div>
            </div>

            {/* FORM CONTAINER */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-8 border border-slate-200/80 shadow-xs">
              {submitted ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Inquiry Received</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Thank you for reaching out. A wholesale sourcing specialist will review your request and get back to you within 2-4 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-600 underline pt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">First Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Aamir"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">Last Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Malik"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">Business Email</label>
                      <input
                        required
                        type="email"
                        placeholder="trade@company.co.uk"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+44 7700 900123"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700">Store / Company Name</label>
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

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs py-3 rounded-lg transition flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Send size={13} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}