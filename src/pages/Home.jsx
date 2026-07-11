import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLocation } from "../context/LocationContext.jsx";
import Hero from "../components/Hero.jsx";
import CategoryGrid from "../components/CategoryGrid.jsx";
import PackageCard from "../components/PackageCard.jsx";
import { homeDeals } from "../data/servicesData.js";

export default function Home() {
  const { zone } = useLocation();

  return (
    <>
      <Helmet>
        <title>{`Premium At-Home Salon Services in ${zone} | Maison.Home`}</title>
        <meta
          name="description"
          content={`Book certified at-home facials, waxing, mani-pedi and bridal packages in ${zone}. Instant WhatsApp booking, sanitized kits, transparent pricing.`}
        />
      </Helmet>

      <Hero />

      {/* <section className="bg-cream/5 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-[2rem] overflow-hidden border border-rosewood/10 bg-plum text-cream shadow-2xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div className="p-10 md:p-14">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-rosewood-light">
                  Wedding season spotlight
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                  Explore our dedicated wedding offer gallery.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-cream/80 sm:text-base">
                  A separate page for your wedding campaign visuals keeps the main services page clean. Add more offer images here and share the link from home.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/wedding-offer"
                    className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-semibold text-plum transition hover:bg-cream/90"
                  >
                    View wedding offers
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="relative h-72 overflow-hidden bg-slate-950 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
                  alt="Wedding season offer preview"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <CategoryGrid />

      <section className="bg-blush/30 py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-rosewood">
                Most booked in {zone}
              </p>
              <h2 className="mt-2 font-display text-3xl text-plum sm:text-4xl">
                This week's deals.
              </h2>
            </div>
          </div>

          <div className="-mx-5 flex snap-x gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {homeDeals.map((pkg) => (
              <div key={pkg.id} className="snap-start sm:w-auto">
                <PackageCard
                  pkgId={pkg.id}
                  title={pkg.title}
                  price={pkg.price}
                  items={pkg.items}
                  bonus={pkg.bonus}
                  stylingVariant="feature"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
