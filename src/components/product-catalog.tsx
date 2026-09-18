import { Check, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { sections } from "@/lib/products";

export function ProductCatalog() {
  const { addItem } = useCart();
  const [recentlyAdded, setRecentlyAdded] = useState<string | null>(null);

  const add = (product: (typeof sections)[number]["products"][number], category: string) => {
    addItem(product, category);
    setRecentlyAdded(product.name);
    window.setTimeout(() => setRecentlyAdded((current) => current === product.name ? null : current), 1400);
  };

  return (
    <main id="colecciones" className="space-y-28 pb-28 pt-10">
      {sections.map((section, sectionIndex) => (
        <section key={section.id} id={section.id} className="mx-auto max-w-7xl scroll-mt-24 px-6">
          <div className="mb-10 flex items-end justify-between border-b border-taupe/10 pb-5">
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-gold">Colección {section.number}</p>
              <h2 className="font-serif text-4xl italic sm:text-5xl">{section.title}</h2>
            </div>
            <span className="hidden text-xs text-taupe/45 sm:block">7 fórmulas esenciales</span>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-6 lg:grid-cols-12">
            {section.products.map((product, index) => {
              const featured = index === (sectionIndex % 2 === 0 ? 0 : 3);
              return (
                <article key={product.name} className={`group flex flex-col ${featured ? "lg:col-span-6 lg:row-span-2" : "lg:col-span-3"}`}>
                  <div className={`relative mb-4 overflow-hidden rounded-md bg-stone-muted shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-soft motion-reduce:transform-none ${featured ? "aspect-[4/5] lg:aspect-[5/4]" : "aspect-[4/5]"}`}>
                    <img src={product.image} alt={product.name} loading="lazy" width={800} height={1008} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none" />
                    <span className="absolute left-3 top-3 bg-creme/90 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] backdrop-blur-sm">{section.nav}</span>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xs font-medium uppercase tracking-wider">{product.name}</h3>
                      <p className="shrink-0 font-serif text-base italic text-gold">{product.price}</p>
                    </div>
                    <p className="mt-2 max-w-[42ch] text-xs leading-relaxed text-taupe/60">{product.description}</p>
                    <Button variant="outline" className="mt-4 h-9 w-full rounded-none border-taupe/20 bg-transparent text-[10px] uppercase tracking-[0.12em] shadow-none hover:border-gold hover:bg-gold hover:text-creme" onClick={() => add(product, section.nav)}>
                      {recentlyAdded === product.name ? <><Check /> Añadido</> : <><Plus /> Añadir al carrito</>}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}