import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLocation } from "../context/LocationContext.jsx";
import { homeDeals } from "../data/servicesData.js";

const slides = [
  {
    eyebrow: "Book in minutes",
    headline: "Your salon, at your door.",
    sub: "Certified stylists arrive with sanitized kits — facials, waxing and bridal care, on your schedule.",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    eyebrow: "This week's favorite",
    headline: "Hydra facials, at home.",
    sub: "The FYC Hydra Facial Chocolate Special is our most-booked bundle this month.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=80",
  },
  {
    eyebrow: "For the big day",
    headline: "Bridal glow, planned ahead.",
    sub: "Reserve your Blossom Kochhar Bridal package weeks in advance — slots fill fast in wedding season.",
    image:
      "https://plus.unsplash.com/premium_photo-1664271278303-d01e2a68ad14?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const marqueeItems = [...homeDeals, ...homeDeals];

export default function Hero() {
  const [active, setActive] = useState(0);
  const { zone } = useLocation();

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative overflow-hidden bg-plum">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(40, 24, 25, 0.92) 0%, rgba(40, 24, 25, 0.72) 42%, rgba(40, 24, 25, 0.28) 100%), url(${slide.image})`,
        }}
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rosewood/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 mx-auto min-h-[520px] max-w-7xl px-5 pb-14 pt-14 sm:min-h-[620px] sm:px-8 sm:pb-20 sm:pt-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-rosewood-light">
          Now serving {zone} · {slide.eyebrow}
        </p>

        <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.1] text-cream sm:text-6xl">
          {slide.headline}
        </h1>

        <p className="mt-5 max-w-xl text-base text-cream/80 sm:text-lg">
          {slide.sub}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/services"
            className="flex items-center gap-2 rounded-xl bg-rosewood px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-rosewood-dark"
          >
            Browse services
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/safety"
            className="rounded-xl border border-cream/25 px-6 py-3 text-sm font-semibold text-cream/90 hover:border-cream/50"
          >
            Our hygiene standard
          </Link>
        </div>

        <div className="mt-8 flex gap-2" role="tablist" aria-label="Featured highlights">
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Show highlight ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-8 bg-rosewood-light" : "w-3 bg-cream/25"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Marquee ticker of highlight offers */}
      <div className="relative border-t border-cream/10 bg-plum-light/60 py-3">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 whitespace-nowrap motion-reduce:animate-none">
          {marqueeItems.map((deal, idx) => (
            <span
              key={`${deal.id}-${idx}`}
              className="font-mono text-xs uppercase tracking-wide text-cream/70"
            >
              {deal.title} · ₹{deal.price.toLocaleString("en-IN")}
              <span className="mx-4 text-rosewood-light">•</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
