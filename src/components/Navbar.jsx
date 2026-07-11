import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin, Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "../context/LocationContext.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/safety", label: "Safety" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [zoneOpen, setZoneOpen] = useState(false);
  const { zone, setZone, zones } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-plum/90 backdrop-blur-md shadow-lg shadow-plum/10"
          : "bg-plum"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="text-3xl md:text-3xl text-cream tracking-tight">
          <div className="flex flex-col">
            <p className="font-display text-2xl italic text-cream">
            Beauty<span className="text-rosewood-light not-italic"> </span>Craft
            </p>
            <span className="block text-right text-xs font-normal mt-0.1 text-cream/70">By Sneha</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `font-body text-sm font-medium uppercase tracking-wide transition-colors ${
                  isActive
                    ? "text-rosewood-light"
                    : "text-cream/80 hover:text-cream"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <button
              onClick={() => setZoneOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-full border border-cream/20 px-3 py-1.5 text-sm text-cream/90 hover:border-cream/40"
              aria-haspopup="listbox"
              aria-expanded={zoneOpen}
            >
              <MapPin size={14} className="text-rosewood-light" />
              {zone}
              <ChevronDown size={14} />
            </button>
            {zoneOpen && (
              <ul
                role="listbox"
                className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-plum-light bg-plum shadow-xl"
              >
                {zones.map((z) => (
                  <li key={z}>
                    <button
                      role="option"
                      aria-selected={z === zone}
                      onClick={() => {
                        setZone(z);
                        setZoneOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-left text-sm ${
                        z === zone
                          ? "bg-rosewood text-cream"
                          : "text-cream/80 hover:bg-plum-light"
                      }`}
                    >
                      {z}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            className="text-cream md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-cream/10 bg-plum px-5 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? "bg-rosewood text-cream"
                      : "text-cream/80 hover:bg-plum-light"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex flex-wrap gap-2">
            {zones.map((z) => (
              <button
                key={z}
                onClick={() => setZone(z)}
                className={`rounded-full border px-3 py-1.5 text-xs ${
                  z === zone
                    ? "border-rosewood bg-rosewood text-cream"
                    : "border-cream/20 text-cream/70"
                }`}
              >
                {z}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
