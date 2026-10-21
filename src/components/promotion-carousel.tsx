import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sectionNumber, sections } from "@/lib/products";

const promotionCopy: Record<string, { title: string; copy: string }> = {
  facial: {
    title: "Descobreix els nous rituals facials",
    copy: "Fórmules botàniques que il·luminen, hidraten i retornen al teu rostre el seu equilibri natural.",
  },
  pelo: {
    title: "Renova la cura del teu cabell",
    copy: "Olis, minerals i extractes mediterranis per a un cabell més fort, suau i lluminós.",
  },
  piel: {
    title: "Cuida la teva pell cada dia",
    copy: "Textures lleugeres i actius essencials per protegir, calmar i realçar la bellesa de la teva pell.",
  },
  corporal: {
    title: "Converteix la cura corporal en un ritual",
    copy: "Un moment de benestar inspirat en aromes, plantes i minerals de les nostres costes.",
  },
  dental: {
    title: "Descobreix la nova col·lecció dental",
    copy: "Essencials naturals per a un somriure lluminós: blanqueig suau, alè fresc i genives ben cuidades.",
  },
};

const SLIDE_MS = 800;
const AUTO_MS = 3000;

const slidesSource = sections.filter((section) => promotionCopy[section.id]);

export function PromotionCarousel() {
  const count = slidesSource.length;
  // Pista: [clon de l'últim, ...diapositives, clon del primer] -> bucle infinit sense salts
  const track = count > 0 ? [slidesSource[count - 1], ...slidesSource, slidesSource[0]] : [];

  const [pos, setPos] = useState(1);
  const [animate, setAnimate] = useState(true);
  const lockedRef = useRef(false);

  const activeIndex = count > 0 ? (((pos - 1) % count) + count) % count : 0;

  const lock = () => {
    lockedRef.current = true;
    window.setTimeout(() => {
      lockedRef.current = false;
    }, SLIDE_MS);
  };

  const move = useCallback((direction: -1 | 1) => {
    if (lockedRef.current) return;
    lock();
    setAnimate(true);
    setPos((current) => current + direction);
  }, []);

  const goTo = (index: number) => {
    if (lockedRef.current || index === activeIndex) return;
    lock();
    setAnimate(true);
    setPos(index + 1);
  };

  // En arribar a un clon, esperem que acabi l'animació i saltem al real sense transició
  useEffect(() => {
    if (count === 0 || (pos !== 0 && pos !== count + 1)) return;
    let raf1 = 0;
    let raf2 = 0;
    const timeout = window.setTimeout(() => {
      setAnimate(false);
      setPos(pos === 0 ? count : 1);
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setAnimate(true));
      });
    }, SLIDE_MS);
    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [pos, count]);

  // Autoplay: gira sol cada 3 s (es reinicia si l'usuari canvia manualment)
  useEffect(() => {
    if (count <= 1) return;
    const timeout = window.setTimeout(() => move(1), AUTO_MS);
    return () => window.clearTimeout(timeout);
  }, [pos, count, move]);

  const section = slidesSource[activeIndex];
  if (!section) return null;

  return (
    <section
      className="px-4 py-10 sm:px-6 sm:py-14 lg:py-18"
      aria-roledescription="carrusel"
      aria-label="Col·leccions destacades"
    >
      <div className="mx-auto max-w-7xl overflow-hidden border-y border-taupe/10 py-8 sm:py-12">
        <div
          className={`flex will-change-transform ${
            animate ? "transition-transform ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none" : ""
          }`}
          style={{
            transform: `translate3d(-${pos * 100}%, 0, 0)`,
            transitionDuration: animate ? `${SLIDE_MS}ms` : "0ms",
          }}
        >
          {track.map((slideSection, trackIndex) => {
            const content = promotionCopy[slideSection.id];
            if (!content) return null;
            const isActive = trackIndex === pos;
            return (
              <div
                key={`${slideSection.id}-${trackIndex}`}
                aria-hidden={!isActive}
                className="grid w-full shrink-0 items-center gap-10 px-2 md:grid-cols-[minmax(0,1.2fr)_minmax(17rem,0.8fr)] lg:gap-16"
              >
                <div className="mx-auto grid w-full max-w-3xl grid-cols-3 items-center gap-2 px-2 sm:gap-4 sm:px-6">
                  {slideSection.products.slice(0, 3).map((product, index) => (
                    <div key={product.name} className={`relative ${index === 1 ? "z-10" : "opacity-90"}`}>
                      <img
                        src={product.image}
                        alt={isActive ? product.name : ""}
                        width={800}
                        height={1008}
                        loading="eager"
                        draggable={false}
                        className={`aspect-[4/5] w-full rounded-md object-cover outline-1 -outline-offset-1 outline-taupe/10 ${index === 1 ? "scale-105" : ""}`}
                      />
                    </div>
                  ))}
                </div>

                <div className="px-2 text-center md:px-0 md:text-left">
                  <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                    {slideSection.nav} · {sectionNumber(sections.indexOf(slideSection))}
                  </p>
                  <h2 className="text-balance font-serif text-4xl leading-none sm:text-5xl lg:text-6xl">
                    {content.title}
                  </h2>
                  <p className="mx-auto mt-6 max-w-[43ch] text-sm leading-relaxed text-taupe/65 md:mx-0">
                    {content.copy}
                  </p>
                  <a
                    href={`#${slideSection.id}`}
                    tabIndex={isActive ? 0 : -1}
                   
                    className="mt-8 inline-block border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:text-gold"
                  >
                    Descobrir la col·lecció
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => move(-1)}
            aria-label="Promoció anterior"
            className="rounded-full border border-taupe/15 bg-creme/85 text-taupe shadow-none hover:bg-stone-muted"
          >
            <ChevronLeft aria-hidden="true" />
          </Button>

          <div className="flex items-center gap-2">
            {slidesSource.map((dotSection, dotIndex) => (
              <button
                key={dotSection.id}
                type="button"
                onClick={() => goTo(dotIndex)}
                aria-label={`Veure la promoció de ${dotSection.nav}`}
                aria-current={dotIndex === activeIndex}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  dotIndex === activeIndex ? "w-6 bg-gold" : "w-1.5 bg-taupe/25 hover:bg-taupe/40"
                }`}
              />
            ))}
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => move(1)}
            aria-label="Promoció següent"
            className="rounded-full border border-taupe/15 bg-creme/85 text-taupe shadow-none hover:bg-stone-muted"
          >
            <ChevronRight aria-hidden="true" />
          </Button>
        </div>

        <p className="sr-only" aria-live="polite">
          Mostrant la promoció {activeIndex + 1} de {count}: {section.nav}
        </p>
      </div>
    </section>
  );
}
