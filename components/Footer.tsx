"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  ExternalLink,
  Globe,
  Share2,
  MessageCircle,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111315] text-slate-400 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8 space-y-12">
        {/* TOP SECTION: 4 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* COLUMN 1: LOGO & ABOUT */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tight text-white">
                Factory<span className="text-emerald-400">2Shop</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Direct factory aggregation platform bridging UK independent retailers with global manufacturers at tier-one wholesale pricing.
            </p>

            {/* SOCIAL ICONS */}
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

          {/* COLUMN 2: QUICK LINKS */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#batches" className="hover:text-emerald-400 transition">
                  Active Open Batches
                </a>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-emerald-400 transition">
                  How MOQ Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CUSTOMER SERVICE */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider">
              Customer Service
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/faqs" className="hover:text-emerald-400 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-emerald-400 transition">
                  DDP Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-emerald-400 transition">
                  Refund & MOQ Guarantee
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-emerald-400 transition">
                  FAQ & Help Desk
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-emerald-400 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: GET IN TOUCH */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <Mail size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:support@factory2shop.co.uk"
                  className="hover:text-emerald-400 transition"
                >
                  support@factory2shop.co.uk
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-emerald-400 shrink-0 mt-0.5" />
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
            <strong className="text-slate-300 font-bold">Factory2Shop B2B Core</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}