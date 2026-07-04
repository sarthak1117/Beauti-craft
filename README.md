# Maison.Home — At-Home Salon Booking Platform

A React + Vite + Tailwind frontend for browsing and instant-booking at-home
salon packages, built from the Master PRD.

## Run it locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview   # serve the production build locally
```

## Before you launch

1. **WhatsApp number** — open `src/data/servicesData.js` and replace
   `WHATSAPP_NUMBER` (currently `91XXXXXXXXXX`) with your real business
   number, digits only, country code first.
2. **Service catalog** — all packages, prices, and included procedures live
   in `src/data/servicesData.js`. Edit that one file to add, remove, or
   reprice anything; every page reads from it.
3. **Business details** — update the phone number, address text, and legal
   links in `src/components/Footer.jsx`.
4. **Brand name** — "Maison.Home" appears in `Navbar.jsx` and `Footer.jsx`;
   swap in your real business name.
5. **Images** — drop optimized `.webp` photos into `public/assets/` and wire
   them into `Hero.jsx` / `PackageCard.jsx` if you want photography instead
   of the current typographic design.

## Project structure

```
src/
├── components/       Reusable UI: Navbar, Hero, CategoryGrid, PackageCard, Footer
├── context/          LocationContext — tracks the active service city
├── data/             servicesData.js — the entire service catalog
├── pages/            Home, Services, Safety
├── App.jsx           Route definitions
└── main.jsx          App entry point
```

## Design notes

- **Palette**: deep plum (`#3D1F2B`) and rosewood (`#B4544C`) on a warm
  cream (`#FBF6F1`) base, with a small gold accent for bonus offers.
- **Type**: Fraunces (display serif) for headings, Manrope for body copy,
  IBM Plex Mono for prices and data — giving the price tags a
  receipt/appointment-slip feel.
- **Signature element**: `PackageCard` is styled like a salon appointment
  ticket — perforated notch edges and a dashed tear line above the list of
  included procedures — tying the visual language to the WhatsApp booking
  flow.
