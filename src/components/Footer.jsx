import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { useLocation } from "../context/LocationContext.jsx";

export default function Footer() {
  const { zones } = useLocation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-plum text-cream/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl italic text-cream">
            Maison<span className="text-rosewood-light not-italic">.</span>Home
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Certified stylists, sanitized kits, and salon-grade products —
            delivered to your door.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wide text-rosewood-light">
            Service Areas
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {zones.map((z) => (
              <li key={z} className="flex items-center gap-2">
                <MapPin size={14} className="text-rosewood-light" />
                {z}, NCR
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wide text-rosewood-light">
            Customer Care
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-rosewood-light" />
              +91-XXXXXXXXXX
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={14} className="text-rosewood-light" />
              WhatsApp booking, 9 AM – 9 PM
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wide text-rosewood-light">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:text-cream">
                Services
              </Link>
            </li>
            <li>
              <Link to="/safety" className="hover:text-cream">
                Hygiene & Safety
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-cream">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 px-5 py-5 text-center font-mono text-xs text-cream/40 sm:px-8">
        © {year} Maison.Home. All rights reserved.
      </div>
    </footer>
  );
}
