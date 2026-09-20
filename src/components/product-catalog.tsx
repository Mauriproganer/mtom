import { Check, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { getProductDetails } from "@/lib/product-details";
import { sections, type Product } from "@/lib/products";

type SelectedProduct = {
  product: Product;
  category: string;
};

export function ProductCatalog() {
  const { addItem } = useCart();
  const [recentlyAdded, setRecentlyAdded] = useState<string | null>(null);
  const [selected, setSelected] = useState<SelectedProduct | null>(null);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

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
                   <Button
                     type="button"
                     variant="ghost"
                     aria-label={`Ver información de ${product.name}`}
                     onClick={() => setSelected({ product, category: section.nav })}
                     className={`relative mb-4 block h-auto w-full overflow-hidden rounded-md bg-stone-muted p-0 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-soft hover:bg-stone-muted motion-reduce:transform-none ${featured ? "aspect-[4/5] lg:aspect-[5/4]" : "aspect-[4/5]"}`}
                   >
                    <img src={product.image} alt={product.name} loading="lazy" width={800} height={1008} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none" />
                    <span className="absolute left-3 top-3 bg-creme/90 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] backdrop-blur-sm">{section.nav}</span>
                     <span className="absolute inset-x-0 bottom-0 translate-y-full bg-taupe/85 py-3 text-[9px] uppercase tracking-[0.16em] text-creme transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0">Ver producto</span>
                   </Button>
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
      {selected ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-taupe/70 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}>
          <section role="dialog" aria-modal="true" aria-labelledby="product-detail-title" className="relative grid max-h-[92svh] w-full max-w-4xl overflow-y-auto bg-creme shadow-soft md:grid-cols-2">
            <Button type="button" variant="ghost" size="icon" aria-label="Cerrar información del producto" onClick={() => setSelected(null)} className="absolute right-3 top-3 z-10 rounded-full bg-creme/90 text-taupe hover:bg-creme"><X /></Button>
            <img src={selected.product.image} alt={selected.product.name} width={800} height={1008} className="aspect-[4/3] h-full w-full object-cover md:sticky md:top-0 md:aspect-auto md:max-h-[92svh] md:min-h-[42rem]" />
            <div className="flex flex-col p-7 sm:p-10">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Colección {selected.category}</p>
              <h2 id="product-detail-title" className="mt-4 font-serif text-4xl leading-none sm:text-5xl">{selected.product.name}</h2>
              <p className="mt-6 text-sm leading-7 text-taupe/65">{selected.product.description}</p>
              <div className="mt-7 grid grid-cols-2 border-y border-taupe/10 py-5 text-sm">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-taupe/45">Contenido</p>
                  <p className="mt-1 font-medium">{getProductDetails(selected.product.name).size}</p>
                </div>
                <div className="border-l border-taupe/10 pl-5">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-taupe/45">Precio</p>
                  <p className="mt-1 font-serif text-xl italic text-gold">{selected.product.price}</p>
                </div>
              </div>
              <div className="mt-7 space-y-6">
                <div>
                  <h3 className="text-[10px] font-medium uppercase tracking-[0.16em]">Beneficios</h3>
                  <ul className="mt-3 grid gap-2 text-sm text-taupe/65 sm:grid-cols-2">
                    {getProductDetails(selected.product.name).benefits.map((benefit) => <li key={benefit} className="flex gap-2"><span className="text-gold">—</span>{benefit}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-[10px] font-medium uppercase tracking-[0.16em]">Ingredientes principales</h3>
                  <p className="mt-2 text-sm leading-6 text-taupe/65">{getProductDetails(selected.product.name).ingredients}</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-medium uppercase tracking-[0.16em]">Modo de uso</h3>
                  <p className="mt-2 text-sm leading-6 text-taupe/65">{getProductDetails(selected.product.name).usage}</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-medium uppercase tracking-[0.16em]">Recomendado para</h3>
                  <p className="mt-2 text-sm leading-6 text-taupe/65">{getProductDetails(selected.product.name).suitableFor}</p>
                </div>
              </div>
              <Button className="mt-7 h-12 rounded-none bg-taupe uppercase tracking-[0.14em] text-creme hover:bg-gold" onClick={() => add(selected.product, selected.category)}>
                {recentlyAdded === selected.product.name ? <><Check /> Añadido</> : <><Plus /> Añadir al carrito</>}
              </Button>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}