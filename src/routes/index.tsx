import { createFileRoute } from "@tanstack/react-router";
import { sections } from "@/lib/products";
import logoAsset from "@/assets/logo.png.asset.json";
import heroImage from "@/assets/hero.jpg";

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
          <a href="#" className="flex flex-none items-center" aria-label="M to M Estética">
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

      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-12">
          <div className="col-span-12 lg:col-span-5">
            <h1 className="mb-8 text-balance font-serif text-5xl leading-none lg:text-7xl">
              La esencia del <span className="italic">Mediterráneo</span> en su piel
            </h1>
            <p className="mb-10 max-w-[48ch] text-pretty text-base leading-relaxed text-taupe/70">
              Descubra una curaduría de fórmulas ancestrales perfeccionadas por la ciencia moderna.
              Un ritual de belleza que trasciende el tiempo, inspirado en la luz y la calma de
              nuestras costas.
            </p>
            <a
              href="#facial"
              className="inline-block bg-taupe px-10 py-4 text-sm uppercase tracking-[0.15em] text-creme ring-1 ring-taupe transition-colors hover:bg-gold hover:ring-gold"
            >
              Explorar Colección
            </a>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <img
              src={heroImage}
              alt="Busto de piedra romano junto a un sérum de lujo sobre mármol iluminado por el sol"
              className="aspect-[4/5] w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-black/5"
              width={1200}
              height={1504}
            />
          </div>
        </div>
      </section>

      {/* Product sections */}
      <main className="space-y-32 pb-32">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="mx-auto max-w-7xl scroll-mt-24 px-6">
            <div className="mb-12 flex items-baseline justify-between border-b border-taupe/10 pb-4">
              <h2 className="font-serif text-3xl italic">{section.title}</h2>
              <span className="text-[10px] uppercase tracking-widest opacity-50">
                {section.number}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
              {section.products.map((product) => (
                <article key={product.name} className="group">
                  <div className="mb-6 aspect-[4/5] w-full overflow-hidden rounded-[min(1vw,12px)] bg-stone-muted outline-1 -outline-offset-1 outline-black/5">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      width={800}
                      height={1008}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mb-1 text-sm font-medium uppercase tracking-wider">
                    {product.name}
                  </h3>
                  <p className="mb-3 max-w-[35ch] text-xs leading-relaxed text-taupe/60">
                    {product.description}
                  </p>
                  <p className="font-serif text-sm italic text-gold">{product.price}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-taupe px-6 pb-12 pt-24 text-stone-muted">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div>
              <img
                src={logoAsset.url}
                alt="M to M Estética"
                className="mb-6 h-16 w-16 rounded-full object-contain"
              />
              <p className="max-w-[35ch] text-sm italic leading-relaxed text-stone-muted/60">
                "Belleza que respeta el ritmo de la naturaleza."
              </p>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <span className="mb-2 text-[10px] uppercase tracking-widest text-gold">Contacto</span>
              <p>Calle de la Seda, 14. Valencia</p>
              <p>hola@mtom-estetica.com</p>
              <p>+34 960 000 000</p>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <span className="mb-2 text-[10px] uppercase tracking-widest text-gold">Legales</span>
              <a href="#" className="transition-colors hover:text-gold">
                Privacidad
              </a>
              <a href="#" className="transition-colors hover:text-gold">
                Términos de Servicio
              </a>
              <a href="#" className="transition-colors hover:text-gold">
                Envíos y Retornos
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-stone-muted/10 pt-12 text-[10px] uppercase tracking-[0.2em] opacity-40">
            <p>&copy; 2026 M to M Estética</p>
            <p>Artesanía Mediterránea</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
