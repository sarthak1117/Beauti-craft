import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, X } from "lucide-react";

const weddingImages = [
  {
    id: "offer-1",
    title: "Pre-bridal beauty showcase",
    subtitle: "Soft lighting, rich textures, and bridal-ready elegance.",
    image: "/assets/WhatsApp%20Image%202026-07-07%20at%203.25.11%20PM%20(1).jpeg",
  },
  {
    id: "offer-2",
    title: "Glow-forward bridal styling",
    subtitle: "Warm tones and luxe details for the season’s top offer.",
    image: "/assets/WhatsApp%20Image%202026-07-07%20at%203.25.11%20PM%20(2).jpeg",
  },
  {
    id: "offer-3",
    title: "Bridal prep inspiration",
    subtitle: "A gallery of wedding-day looks that feel premium and polished.",
    image: "/assets/WhatsApp%20Image%202026-07-07%20at%203.25.12%20PM.jpeg",
  },
];

export default function WeddingOffer() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="bg-cream">
      <section className="relative overflow-hidden bg-plum py-24 text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream/70">
                Wedding season showcase
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-cream sm:text-5xl">
                Beautiful offer imagery for every bridal moment.
              </h1>
              <p className="mt-6 max-w-xl text-base text-cream/80 sm:text-lg">
                Use this page as a visual home for your wedding season offers. Add your own promotional images, captions, and a single call to action so the page feels elegant, not crowded.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {/* <Link
                  to="/services?category=skin-bridal"
                  className="inline-flex items-center gap-2 rounded-full bg-rosewood px-6 py-3 text-sm font-semibold text-cream transition hover:bg-rosewood-dark"
                >
                  Explore bridal services
                  <ArrowRight size={16} />
                </Link> */}
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-6 py-3 text-sm font-semibold text-cream transition hover:border-cream"
                >
                  Return home
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cream/10 bg-cream/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="rounded-3xl bg-cream/10 p-6">
                  <div className="flex items-center gap-3 text-cream/90">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rosewood/20">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-cream/60">
                        Curated offer set
                      </p>
                      <p className="mt-1 text-sm font-semibold text-cream">
                        Making space for the magic in your forever.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {weddingImages.slice(0, 2).map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setActiveImage(item)}
                      className="overflow-hidden rounded-3xl bg-slate-950 shadow-inner"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-40 w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-rosewood">
              Elegant & Timeless
            </p>
            <h2 className="mt-2 text-3xl font-display text-plum sm:text-4xl">
              Crafting the first chapter of your forever.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {weddingImages.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveImage(item)}
              className="overflow-hidden rounded-[2rem] border border-slate-200/10 bg-slate-950 shadow-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-cream/70">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-cream/80">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4">
          <div className="relative max-w-3xl overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-cream transition hover:bg-black"
            >
              <X size={20} />
            </button>
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="h-[70vh] w-full object-contain bg-black"
            />
            <div className="border-t border-cream/10 bg-slate-950/95 px-6 py-5 text-center">
              <p className="text-sm font-semibold text-cream">{activeImage.title}</p>
              <p className="mt-1 text-sm text-cream/70">{activeImage.subtitle}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
