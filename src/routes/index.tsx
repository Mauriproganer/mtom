import { createFileRoute } from "@tanstack/react-router";
import { PromotionCarousel } from "@/components/promotion-carousel";
import { BeautyHero } from "@/components/beauty-hero";
import { CartPanel } from "@/components/cart-panel";
import { ProductCatalog } from "@/components/product-catalog";
import { SiteFooter } from "@/components/site-footer";
import { sections } from "@/lib/products";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M to M Estética — Belleza Mediterránea" },
      {
        name: "description",
        content:
          "Descubra una curaduría de fórmulas ancestrales perfeccionadas por la ciencia moderna. Cuidado facial, capilar, de la piel y corporal inspirado en el Mediterráneo.",
      },
      { property: "og:title", content: "M to M Estética — Belleza Mediterránea" },
      {
        property: "og:description",
        content:
          "Fórmulas ancestrales perfeccionadas por la ciencia moderna. Un ritual de belleza inspirado en la luz y la calma de nuestras costas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const leftLinks = sections.slice(0, 2);
const rightLinks = sections.slice(2);

function Index() {
  return (
    <div className="min-h-screen bg-creme font-sans text-taupe selection:bg-gold/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-taupe/5 bg-creme/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="hidden flex-1 gap-8 text-[11px] font-medium uppercase tracking-[0.2em] md:flex">
            {leftLinks.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="transition-colors hover:text-gold">
                {s.nav}
              </a>
            ))}
          </div>
          <a href="#" className="flex flex-none items-center gap-3" aria-label="M to M Estética">
            <img src={logoAsset.url} alt="M to M Estética" className="h-14 w-14 object-contain" />
          </a>
          <div className="hidden flex-1 justify-end gap-8 text-[11px] font-medium uppercase tracking-[0.2em] md:flex">
            {rightLinks.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="transition-colors hover:text-gold">
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

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
