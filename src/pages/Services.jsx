import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { Sparkles, Droplet, Gem, Flame, Hand } from "lucide-react";
import { useLocation } from "../context/LocationContext.jsx";
import PackageCard from "../components/PackageCard.jsx";
import { categories, getPackagesByCategory } from "../data/servicesData.js";

const iconMap = {
  sparkles: Sparkles,
  droplet: Droplet,
  gem: Gem,
  flame: Flame,
  hand: Hand,
};

export default function Services() {
  const { zone } = useLocation();
  const [searchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(
    requestedCategory || categories[0].id
  );
  const sectionRefs = useRef({});

  useEffect(() => {
    if (requestedCategory && sectionRefs.current[requestedCategory]) {
      sectionRefs.current[requestedCategory].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveCategory(requestedCategory);
    }
  }, [requestedCategory]);

  const scrollTo = (id) => {
    setActiveCategory(id);
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Helmet>
        <title>{`Salon Service Catalog in ${zone} | Maison.Home`}</title>
        <meta
          name="description"
          content={`Full catalog of at-home salon packages available in ${zone} — facials, waxing, mani-pedi and bridal care, priced and ready to book.`}
        />
      </Helmet>

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-rosewood">
          Serving {zone}
        </p>
        <h1 className="mt-2 font-display text-4xl text-plum sm:text-5xl">
          Full service catalog.
        </h1>
        <p className="mt-3 max-w-xl text-ink/60">
          Every package below includes home visit, sanitized tools and
          instant WhatsApp confirmation.
        </p>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row">
          {/* Sticky dynamic category sidebar */}
          <aside className="lg:w-64 lg:shrink-0">
            <nav className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:sticky lg:top-24 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
              {categories.map((cat) => {
                const Icon = iconMap[cat.icon] ?? Sparkles;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => scrollTo(cat.id)}
                    className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-colors lg:w-full ${
                      isActive
                        ? "bg-rosewood text-cream"
                        : "bg-white text-ink/70 hover:bg-blush/60"
                    }`}
                  >
                    <Icon size={16} />
                    {cat.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Catalog viewport */}
          <div className="flex-1 space-y-14">
            {categories.map((cat) => {
              const pkgs = getPackagesByCategory(cat.id);
              return (
                <section
                  key={cat.id}
                  ref={(el) => (sectionRefs.current[cat.id] = el)}
                  className="scroll-mt-24"
                >
                  <h2 className="mb-5 font-display text-2xl text-plum">
                    {cat.label}
                  </h2>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {pkgs.map((pkg) => (
                      <PackageCard
                        key={pkg.id}
                        pkgId={pkg.id}
                        title={pkg.title}
                        price={pkg.price}
                        items={pkg.items}
                        bonus={pkg.bonus}
                        stylingVariant="grid"
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
