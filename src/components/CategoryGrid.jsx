import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Droplet, Gem, Flame, Hand } from "lucide-react";
import { categories, getPackagesByCategory } from "../data/servicesData.js";

const iconMap = {
  sparkles: Sparkles,
  droplet: Droplet,
  gem: Gem,
  flame: Flame,
  hand: Hand,
};

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-rosewood">
            Browse by category
          </p>
          <h2 className="mt-2 font-display text-3xl text-plum sm:text-4xl">
            Every treatment, sorted.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] ?? Sparkles;
          const count = getPackagesByCategory(cat.id).length;
          return (
            <Link
              key={cat.id}
              to={`/services?category=${cat.id}`}
              className="group flex flex-col items-start gap-3 rounded-2xl border border-blush bg-white px-5 py-6 transition-all hover:-translate-y-1 hover:border-rosewood/40 hover:shadow-md hover:shadow-plum/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blush text-rosewood transition-colors group-hover:bg-rosewood group-hover:text-cream">
                <Icon size={20} />
              </span>
              <span className="font-display text-base leading-snug text-plum">
                {cat.label}
              </span>
              <span className="font-mono text-xs uppercase tracking-wide text-ink/40">
                {count} package{count !== 1 ? "s" : ""}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
