import React from "react";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Sparkle, Thermometer, Trash2 } from "lucide-react";
import { useLocation } from "../context/LocationContext.jsx";

const metrics = [
  {
    icon: ShieldCheck,
    stat: "100%",
    label: "Tools sanitized before every visit",
    detail:
      "Every kit is autoclaved or hospital-grade disinfected and sealed before it leaves our hub.",
  },
  {
    icon: Sparkle,
    stat: "Single-use",
    label: "Wax strips, spatulas & bleach applicators",
    detail: "Nothing that touches skin is reused across appointments.",
  },
  {
    icon: Thermometer,
    stat: "Daily",
    label: "Stylist health & temperature checks",
    detail: "Stylists are screened before dispatch each service day.",
  },
  {
    icon: Trash2,
    stat: "Zero-contact",
    label: "Waste disposal on-site",
    detail: "Used consumables are bagged and removed after every session.",
  },
];

const declarations = [
  "All stylists complete a certified hygiene training module before onboarding.",
  "Products used are sourced from authorized distributors only — no counterfeit or diluted stock.",
  "Each home-visit kit is checked against a standardized sanitation checklist before dispatch.",
  "Customers may request a fresh, sealed toolkit opened in front of them at no extra cost.",
];

export default function Safety() {
  const { zone } = useLocation();

  return (
    <>
      <Helmet>
        <title>{`Hygiene & Safety Standards in ${zone} | Maison.Home`}</title>
        <meta
          name="description"
          content="Our sanitization protocol and hygiene compliance declarations for at-home salon visits."
        />
      </Helmet>

      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-rosewood">
          Hygiene protocol
        </p>
        <h1 className="mt-2 font-display text-4xl text-plum sm:text-5xl">
          A clean kit, every visit.
        </h1>
        <p className="mt-3 max-w-2xl text-ink/60">
          Home service only works if you trust what walks through your door.
          Here's exactly what we do to earn that, before every appointment in{" "}
          {zone}.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {metrics.map(({ icon: Icon, stat, label, detail }) => (
            <div
              key={label}
              className="rounded-2xl border border-blush bg-white p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blush text-rosewood">
                <Icon size={20} />
              </span>
              <p className="mt-4 font-display text-3xl text-plum">{stat}</p>
              <p className="mt-1 text-sm font-semibold text-ink">{label}</p>
              <p className="mt-1 text-sm text-ink/60">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl text-plum">
            Compliance declarations
          </h2>
          <ul className="mt-5 space-y-4">
            {declarations.map((line, idx) => (
              <li
                key={idx}
                className="flex gap-3 rounded-xl bg-blush/40 p-4 text-sm text-ink/80"
              >
                <span className="font-mono text-rosewood">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
