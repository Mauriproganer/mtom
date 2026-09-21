import { ArrowDown } from "lucide-react";
import { sections } from "@/lib/products";

export function BeautyHero() {
  const images = [sections[0]?.products[0], sections[1]?.products[2], sections[3]?.products[0]].filter(Boolean);

  return (
    <header className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-nude px-6 py-16 sm:py-20">
      <div className="absolute inset-0 bg-hero-wash" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 hidden w-[58%] md:block" aria-hidden="true">
        {images.map((product, index) => product && (
          <img
            key={product.name}
            src={product.image}
            alt=""
            width={800}
            height={1008}
            className={`absolute rounded-md object-cover shadow-soft ${index === 0 ? "left-[8%] top-[12%] h-[52%] w-[28%]" : index === 1 ? "right-[8%] top-[8%] h-[64%] w-[34%]" : "bottom-[8%] left-[36%] h-[43%] w-[27%]"}`}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-xl text-center md:text-left">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-gold">Estética mediterránea</p>
          <h1 className="font-display text-7xl leading-[0.9] sm:text-8xl lg:text-[9rem]">
            M <span className="font-serif italic tracking-normal text-[0.72em] align-baseline">TO</span> M
          </h1>
          <p className="mt-8 max-w-[42ch] text-pretty text-sm leading-relaxed text-taupe/70 sm:text-base">
            Belleza consciente, fórmulas botánicas y rituales inspirados en la luz del Mediterráneo.
          </p>
          <a href="#colecciones" className="mt-10 inline-flex items-center gap-3 border-b border-taupe pb-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:border-gold hover:text-gold">
            Explorar productos <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 grid w-[82%] -translate-x-1/2 grid-cols-3 gap-2 opacity-35 md:hidden" aria-hidden="true">
        {images.map((product) => product && <img key={product.name} src={product.image} alt="" className="aspect-[4/5] w-full rounded-t-md object-cover" />)}
      </div>
    </header>
  );
}