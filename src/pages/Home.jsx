import React from "react";
import { Helmet } from "react-helmet-async";
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
