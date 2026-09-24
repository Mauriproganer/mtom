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
    meta: [
      { title: "M to M Estética — Belleza Mediterránea" },
      {
        name: "description",
        content:
          "Descubra una curaduría de fórmulas ancestrales perfeccionadas por la ciencia moderna.",
      },
    ],
  }),
  component: Index,
});

const leftLinks = sections.slice(0, 2);
const rightLinks = sections.slice(2);

function Index() {

  // ⭐ RESEÑAS (con guardado)
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("reviews");
    return saved
      ? JSON.parse(saved)
      : [
          { name: "Laura", text: "Muy buena atención y productos de calidad.", stars: 5 },
          { name: "Carlos", text: "El local es precioso y el trato increíble.", stars: 5 },
          { name: "Ana", text: "Buenos precios y ambiente relajante.", stars: 4 },
        ];
  });

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const addReview = () => {
    const name = prompt("Tu nombre:");
    const text = prompt("Tu reseña:");
    const stars = Number(prompt("Puntuación (1-5):"));

    if (name && text && stars >= 1 && stars <= 5) {
      setReviews([...reviews, { name, text, stars }]);
    }
  };

  return (
    <div className="min-h-screen bg-creme font-sans text-taupe selection:bg-gold/20">

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-taupe/5 bg-creme/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          
          <div className="hidden flex-1 gap-8 md:flex text-[11px] uppercase tracking-[0.2em]">
            {leftLinks.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="hover:text-gold">
                {s.nav}
              </a>
            ))}
          </div>

          <a href="#" className="flex items-center">
            <img src={logoAsset.url} alt="logo" className="h-14 w-14" />
          </a>

          <div className="hidden flex-1 justify-end gap-8 md:flex text-[11px] uppercase tracking-[0.2em]">
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

      {/* ⭐ RESEÑAS CARRUSEL */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Opiniones de clientes
        </h2>

        <div className="bg-white shadow-lg p-6 rounded-xl transition-all">
          <p className="text-yellow-500 text-lg">
            {"★".repeat(reviews[current].stars)}
          </p>

          <p className="mt-3 text-sm">
            "{reviews[current].text}"
          </p>

          <p className="mt-3 text-xs text-gray-500">
            – {reviews[current].name}
          </p>
        </div>

        <button
          onClick={addReview}
          className="mt-6 px-4 py-2 bg-black text-white rounded-lg"
        >
          Añadir reseña
        </button>
      </section>

      {/* 📍 UBICACIÓN */}
      <div className="flex justify-center gap-10 px-6 py-12 flex-wrap">

        <iframe
          src="https://www.google.com/maps?q=Av+del+Portal+de+l'Angel+40+Barcelona&output=embed"
          className="w-[500px] h-[300px] rounded-xl"
        ></iframe>

        <img
          src="/local.jpg"
          alt="Local MtoM"
          className="w-[500px] h-[300px] object-cover rounded-xl"
        />

      </div>

      <SiteFooter />
    </div>
  );
}
