import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sections } from "@/lib/products";

const promotionCopy: Record<string, { title: string; copy: string }> = {
  facial: {
    title: "Descubre los nuevos rituales faciales",
    copy: "Fórmulas botánicas que iluminan, hidratan y devuelven a tu rostro su equilibrio natural.",
  },
  pelo: {
    title: "Renueva el cuidado de tu cabello",
    copy: "Aceites, minerales y extractos mediterráneos para un cabello más fuerte, suave y luminoso.",
  },
  piel: {
    title: "Cuida tu piel cada día",
    copy: "Texturas ligeras y activos esenciales para proteger, calmar y realzar la belleza de tu piel.",
  },
  corporal: {
    title: "Convierte el cuidado corporal en un ritual",
    copy: "Un momento de bienestar inspirado en aromas, plantas y minerales de nuestras costas.",
  },
  dental: {
    title: "Descubre la nueva colección dental",
    copy: "Esenciales naturales para una sonrisa luminosa: blanqueo suave, aliento fresco y encías cuidadas.",
  },
};

export function PromotionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const restartTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((current) => (current + 1) % sections.length);
      }, 8000);
    }
  }, [paused]);

  useEffect(() => {
    restartTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [restartTimer]);

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + sections.length) % sections.length);
    restartTimer();
  };

  const section = sections[activeIndex];
  if (!section) return null;
  const content = promotionCopy[section.id];
  if (!content) return null;

  return (
    <section
      className="px-4 py-10 sm:px-6 sm:py-14 lg:py-18"
      aria-roledescription="carrusel"
      aria-label="Colecciones destacadas"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden border-y border-taupe/10 py-8 sm:py-12">
        <div key={section.id} className="grid animate-fade-in items-center gap-10 motion-reduce:animate-none md:grid-cols-[minmax(0,1.2fr)_minmax(17rem,0.8fr)] lg:gap-16">
          <div className="relative mx-auto grid w-full max-w-3xl grid-cols-3 items-center gap-2 px-9 sm:gap-4 sm:px-12">
            {section.products.slice(0, 3).map((product, index) => (
              <div
                key={product.name}
                className={index === 1 ? "relative z-10" : "relative opacity-90"}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={1008}
                  className={`aspect-[4/5] w-full rounded-md object-cover outline-1 -outline-offset-1 outline-taupe/10 ${index === 1 ? "scale-105" : ""}`}
                />
              </div>
            ))}

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => move(-1)}
              aria-label="Promoción anterior"
              className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-taupe/15 bg-creme/85 text-taupe shadow-none backdrop-blur-sm hover:bg-stone-muted"
            >
              <ChevronLeft aria-hidden="true" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => move(1)}
              aria-label="Promoción siguiente"
              className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-taupe/15 bg-creme/85 text-taupe shadow-none backdrop-blur-sm hover:bg-stone-muted"
            >
              <ChevronRight aria-hidden="true" />
            </Button>
          </div>

          <div className="px-2 text-center md:px-0 md:text-left">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
              {section.nav} · {section.number}
            </p>
            <h1 className="text-balance font-serif text-4xl leading-none sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mx-auto mt-6 max-w-[43ch] text-sm leading-relaxed text-taupe/65 md:mx-0">
              {content.copy}
            </p>
            <a
              href={`#${section.id}`}
              className="mt-8 inline-block border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:text-gold"
            >
              Descubrir colección
            </a>
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Mostrando promoción {activeIndex + 1} de {sections.length}: {section.nav}
        </p>
      </div>
    </section>
  );
}