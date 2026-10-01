import { createFileRoute } from "@tanstack/react-router";
import { PromotionCarousel } from "@/components/promotion-carousel";
import { BeautyHero } from "@/components/beauty-hero";
import { CartPanel } from "@/components/cart-panel";
import { ProductCatalog } from "@/components/product-catalog";
import { SiteFooter } from "@/components/site-footer";
import { sections } from "@/lib/products";
import logoAsset from "@/assets/logo.png.asset.json";

import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "M to M Estètica — Bellesa Mediterrània" }],
  }),
  component: Index,
});

const leftLinks = sections.slice(0, 2);
const rightLinks = sections.slice(2);

function Index() {

  const [reviews, setReviews] = useState([
    { name: "Anna", text: "M'ha encantat tot 💖", stars: 5 },
    { name: "Lluís", text: "Molt professional", stars: 4 },
    { name: "Carla", text: "Tornaré segur", stars: 5 },
    { name: "Sofía", text: "Servei increïble", stars: 5 },
    { name: "Marc", text: "Experiència molt bona", stars: 4 },
  ]);

  const [current, setCurrent] = useState(0);

  // carrusel
  useEffect(() => {
    if (reviews.length <= 3) return;

    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev >= reviews.length - 3) return 0;
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews]);

  const addReview = () => {
    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const text = (document.getElementById("text") as HTMLTextAreaElement).value.trim();
    const stars = Number((document.getElementById("stars") as HTMLSelectElement).value);

    if (!name || !text) return;

    const newReview = { name, text, stars };

    setReviews((prev) => [...prev, newReview]);

    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("text") as HTMLTextAreaElement).value = "";
    (document.getElementById("stars") as HTMLSelectElement).value = "5";
  };

  return (
    <div className="min-h-screen bg-creme font-sans text-taupe">

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b bg-creme/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em]">
            {leftLinks.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="hover:text-gold">
                {s.nav}
              </a>
            ))}
          </div>

          <a href="#" className="flex size-16 flex-none items-center justify-center" aria-label="M to M Estètica">
            <img
              src={logoAsset.url}
              alt="M to M Estètica"
              className="size-16 scale-125 object-contain"
            />
          </a>

          <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em]">
            {rightLinks.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="hover:text-gold">
                {s.nav}
              </a>
            ))}
          </div>

        </div>
      </nav>

      <BeautyHero />
      <PromotionCarousel />
      <ProductCatalog />
      <CartPanel />

      {/* RESEÑES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Opinions dels nostres clients
        </h2>

        <div className="overflow-hidden px-2">
          <div
            className="flex gap-6 transition-transform duration-700"
            style={{
              transform: `translateX(-${current * 33.33}%)`,
            }}
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className="min-w-[calc(33.33%-16px)] bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <p className="text-yellow-500 text-lg">
                  {"★".repeat(r.stars)}
                </p>

                <p className="mt-3 text-sm italic">
                  "{r.text}"
                </p>

                <p className="mt-4 text-xs text-gray-500">
                  – {r.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className="mt-12 max-w-md mx-auto bg-white shadow-lg p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Deixa la teva ressenya
          </h3>

          <input id="name" placeholder="El teu nom" className="w-full border p-2 rounded mb-3" />
          <textarea id="text" placeholder="La teva opinió..." className="w-full border p-2 rounded mb-3"></textarea>

          <select id="stars" className="w-full border p-2 rounded mb-4">
            <option value="5">★★★★★</option>
            <option value="4">★★★★☆</option>
            <option value="3">★★★☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="1">★☆☆☆☆</option>
          </select>

          <button
            onClick={addReview}
            className="w-full bg-black text-white py-2 rounded-lg hover:opacity-80"
          >
            Publicar ressenya
          </button>
        </div>
      </section>

      {/* UBICACIÓ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          La nostra ubicació
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">

          <iframe
            src="https://www.google.com/maps?q=Av+del+Portal+de+l'Angel+40+Barcelona&output=embed"
            className="w-full h-[320px] rounded-xl shadow-lg"
          ></iframe>

          <img
            src="/local.jpg"
            className="w-full h-[320px] object-cover rounded-xl shadow-lg"
          />

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
