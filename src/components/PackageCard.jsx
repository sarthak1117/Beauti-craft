import React from "react";
import { Check, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../data/servicesData.js";

/**
 * PackageCard — reused across the Home page deal rail and the Services
 * catalog viewport. Styled like a salon appointment slip: a perforated
 * ticket stub with a mono-set price stamp and a tear line before the
 * included procedures.
 *
 * Props:
 *  - title: string
 *  - price: number
 *  - items: string[]
 *  - bonus?: string
 *  - stylingVariant: "feature" | "grid"  (default: "grid")
 */
export default function PackageCard({
  title,
  price,
  items = [],
  bonus,
  stylingVariant = "grid",
  pkgId,
}) {
  const isFeature = stylingVariant === "feature";
  const waLink = buildWhatsAppLink({ title, price });

  return (
    <article
      className={`ticket-notch flex flex-col overflow-hidden rounded-2xl border border-blush bg-white shadow-sm shadow-plum/5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-plum/10 ${
        isFeature ? "min-w-[280px]" : ""
      }`}
      aria-labelledby={pkgId ? `${pkgId}-title` : undefined}
    >
      <div
        className={`flex items-start justify-between gap-3 bg-blush/60 px-5 pt-5 pb-4 ${
          isFeature ? "sm:px-6 sm:pt-6" : ""
        }`}
      >
        <h3
          id={pkgId ? `${pkgId}-title` : undefined}
          className="font-display text-lg leading-snug text-plum sm:text-xl"
        >
          {title}
        </h3>
        <span className="whitespace-nowrap rounded-md bg-plum px-2.5 py-1 font-mono text-sm font-medium text-cream">
          ₹{price.toLocaleString("en-IN")}
        </span>
      </div>

      <div className="ticket-perforation mx-5" />

      <div className="flex flex-1 flex-col px-5 py-4">
        <ul className="flex flex-1 flex-col gap-1.5">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-ink/80"
            >
              <Check
                size={15}
                className="mt-0.5 shrink-0 text-rosewood"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {bonus && (
          <p className="mt-3 rounded-lg bg-gold/10 px-3 py-2 font-mono text-xs uppercase tracking-wide text-gold">
            + {bonus}
          </p>
        )}

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-rosewood px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-rosewood-dark"
        >
          <MessageCircle size={16} />
          Book on WhatsApp
        </a>
      </div>
    </article>
  );
}
