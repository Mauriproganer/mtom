import { createFileRoute } from "@tanstack/react-router";
import { PromotionCarousel } from "@/components/promotion-carousel";
import { BeautyHero } from "@/components/beauty-hero";
import { CartPanel } from "@/components/cart-panel";
import { ProductCatalog } from "@/components/product-catalog";
import { SiteFooter } from "@/components/site-footer";
import { sections } from "@/lib/products";
import logoAsset from "@/assets/logo.png.asset.json";

import { useState, useEffect } from "react";

// 🔥 FIREBASE
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "M to M Estética — Belleza Mediterránea" }],
  }),
  component: Index,
});

const leftLinks = sections.slice(0, 2);
const rightLinks = sections.slice(2);

function Index() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);

  // 🔽 CARGAR RESEÑAS (FIX VERCEL)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "reviews"));
        const data: any[] = [];

        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });

        setReviews(data);
      } catch (error) {
        console.error("Error cargando reseñas:", error);
      }
    };

    loadReviews();
  }, []);

  // 🔄 CARRUSEL
  useEffect(() => {
    if (reviews.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews]);

  // ➕ AÑADIR RESEÑA
  const addReview = async () => {
    if (typeof window === "undefined") return;

    const nameInput = document.getElementById("name") as HTMLInputElement;
    const textInput = document.getElementById("text") as HTMLTextAreaElement;
    const starsInput = document.getElementById("stars") as HTMLSelectElement;

    const name = nameInput.value.trim();
    const text = textInput.value.trim();
    const stars = Number(starsInput.value);

    if (!name || !text) return;

    const newReview = { name, text, stars };

    try {
      await addDoc(collection(db, "reviews"), newReview);

      setReviews((prev) => [...prev, newReview]);

      // limpiar formulario
      nameInput.value = "";
      textInput.value = "";
      starsInput.value = "5";
    } catch (error) {
      console.error("Error guardando reseña:", error);
    }
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

          <img src={logoAsset.url} className="h-14 w-14" />

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

      {/* ⭐ RESEÑAS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Opiniones de nuestros clientes
        </h2>

        {reviews.length > 0 && (
          <div className="flex justify-center">
            <div className="w-[320px] bg-white shadow-xl p-6 rounded-2xl text-center">

              <p className="text-yellow-500 text-lg">
                {"★".repeat(reviews[current]?.stars || 5)}
              </p>

              <p className="mt-3 text-sm italic">
                "{reviews[current]?.text}"
              </p>

              <p className="mt-4 text-xs text-gray-500">
                – {reviews[current]?.name}
              </p>

            </div>
          </div>
        )}

        {/* FORMULARIO */}
        <div className="mt-12 max-w-md mx-auto bg-white shadow-lg p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Deja tu reseña
          </h3>

          <input
            id="name"
            placeholder="Tu nombre"
            className="w-full border p-2 rounded mb-3"
          />

          <textarea
            id="text"
            placeholder="Tu opinión..."
            className="w-full border p-2 rounded mb-3"
          ></textarea>

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

      {/* 📍 UBICACIÓN */}
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
