import { createFileRoute } from "@tanstack/react-router";
import { PromotionCarousel } from "@/components/promotion-carousel";
import { BeautyHero } from "@/components/beauty-hero";
import { CartPanel } from "@/components/cart-panel";
import { ProductCatalog } from "@/components/product-catalog";
import { SiteFooter } from "@/components/site-footer";
import { sections } from "@/lib/products";

import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "M to M Estética — Belleza Mediterránea" }],
  }),
  component: Index,
});

const leftLinks = sections.slice(0, 2);
const rightLinks = sections.slice(2);

function Index() {
  const [reviews, setReviews] = useState([
    { name: "Ana", text: "Me encantó todo 💖", stars: 5 },
    { name: "Luis", text: "Muy profesional", stars: 4 },
    { name: "Carla", text: "Volveré sin duda", stars: 5 },
  ]);

  const [current, setCurrent] = useState(0);

  // 🔄 CARRUSEL REAL (DESLIZA)
  useEffect(() => {
    if (reviews.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews]);

  // ➕ AÑADIR RESEÑA
  const addReview = () => {
    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const text = (document.getElementById("text") as HTMLTextAreaElement).value.trim();
    const stars = Number((document.getElementById("stars") as HTMLSelectElement).value);

    if (!name || !text) return;

    const newReview = { name, text, stars };

    setReviews((prev) => [...prev, newReview]);

    // limpiar
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

          {/* LOGO FIX */}
          <img src="/logo.png" className="h-14 w-14 object-contain" />

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

      {/* ⭐ RESEÑAS GIRATORIAS */}
      <section className="max-w-6xl mx-auto px-6 py-20 overflow-hidden">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Opiniones de nuestros clientes
        </h2>

        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {reviews.map((r, i) => (
              <div key={i} className="min-w-full flex justify-center">

                <div className="w-[320px] bg-white p-6 rounded-xl shadow-lg text-center">

                  <p className="text-yellow-500 text-lg">
                    {"★".repeat(r.stars)}
                  </p>

                  <p className="mt-3 text-sm italic">"{r.text}"</p>

                  <p className="mt-4 text-xs text-gray-500">
                    – {r.name}
                  </p>

                </div>

              </div>
            ))}
          </div>

        </div>

        {/* FORM */}
        <div className="mt-12 max-w-md mx-auto bg-white shadow-lg p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Deja tu reseña
          </h3>

          <input id="name" placeholder="Tu nombre" className="w-full border p-2 rounded mb-3" />

          <textarea id="text" placeholder="Tu opinión..." className="w-full border p-2 rounded mb-3"></textarea>

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
            Publicar reseña
          </button>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Nuestra ubicación
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">

          <iframe
            src="https://www.google.com/maps?q=Av+del+Portal+de+l'Angel+40+Barcelona&output=embed"
            className="w-full h-[320px] rounded-xl shadow-lg"
          ></iframe>

          <img
            src="/local.jpg"
            alt="Local MtoM"
            className="w-full h-[320px] object-cover rounded-xl shadow-lg"
          />

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
