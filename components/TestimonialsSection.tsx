"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Aamir Sajjad",
    role: "Verified Wholesale Buyer",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    review:
      "Ordered 100 units of fast GaN chargers. Excellent build quality and fast delivery to London. Profit margin boost hua hai!",
  },
  {
    id: 2,
    name: "John Miller",
    role: "Verified Retailer",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    review:
      "Factory2Shop makes bulk purchasing so easy. Got ANC wireless earbuds at genuine factory rates. Stock sold out in 3 days!",
  },
  {
    id: 3,
    name: "Chris Evans",
    role: "Verified Store Owner",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    review:
      "The MOQ aggregation feature is brilliant for small shops like ours. High quality MagSafe power banks received without customs hassle.",
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Verified Buyer",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    review:
      "Superb experience purchasing bulk USB-C braided cables. Products are 100% genuine and packaging was very secure.",
  },
  {
    id: 5,
    name: "David Ross",
    role: "Verified Retailer",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    review:
      "Best place for UK shopkeepers to buy mobile accessories. Premium Ultra 2 smartwatches received at unbelievable prices.",
  },
  {
    id: 6,
    name: "Hamza Malik",
    role: "Verified Wholesale Buyer",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    review:
      "DDP shipping made everything smooth. Factory direct mobile accessories sourcing is no longer stressful thanks to Factory2Shop.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-slate-50/50 py-16 font-sans border-t border-slate-200">
      {/* CONTINUOUS MARQUEE ANIMATION STYLES */}
      <style jsx global>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marqueeScroll 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* CENTERED CONTAINER WITH LEFT & RIGHT GAP */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* SECTION HEADER */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Customer Reviews
          </h2>
          <p className="text-slate-700 text-sm font-semibold">
            Loved by Mobile Retailers & Shop Owners
          </p>
          <p className="text-slate-500 text-xs">
            Join hundreds of UK store owners who trust Factory2Shop for wholesale mobile purchasing
          </p>
        </div>

        {/* BOUNDED SLIDER WRAPPER */}
        <div className="relative w-full overflow-hidden rounded-2xl py-2">
          {/* Side Fading Effects */}
          <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-slate-50/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-slate-50/90 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-marquee gap-6">
            {[...reviews, ...reviews].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[300px] sm:w-[350px] shrink-0 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs relative flex flex-col justify-between hover:shadow-md transition-all duration-300 min-h-[200px]"
              >
                {/* Background Quote Icon */}
                <Quote className="absolute top-5 right-5 text-slate-100 fill-slate-100 w-10 h-10 -z-0 rotate-180" />

                <div className="space-y-4 relative z-10">
                  {/* User Profile Image, Rating & Details */}
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-slate-100 shadow-xs shrink-0"
                    />
                    <div>
                      {/* Rating Stars */}
                      <div className="flex items-center gap-0.5 mb-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={13}
                            className={
                              i < item.rating
                                ? "fill-amber-400 text-amber-400"
                                : "fill-slate-200 text-slate-200"
                            }
                          />
                        ))}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-medium">{item.role}</p>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 text-xs leading-relaxed font-normal">
                    "{item.review}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}