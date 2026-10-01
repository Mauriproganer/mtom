import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-taupe px-6 pb-12 pt-24 text-stone-muted">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div>
            <img
              src={logoAsset.url}
              alt="M to M Estètica"
              className="mb-6 h-16 w-16 rounded-full object-contain"
            />
            <p className="max-w-[35ch] text-sm italic leading-relaxed text-stone-muted/60">
              "Bellesa que respecta el ritme de la natura."
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <span className="mb-2 text-[10px] uppercase tracking-widest text-gold">Contacte</span>
            <p>Av. del Portal de l’Àngel, 40, Barcelona</p>
            <p>mtombotiga@gmail.com-estetica.com</p>
            <p>+34 648 65 38 42</p>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <span className="mb-2 text-[10px] uppercase tracking-widest text-gold">Legal</span>
            <Link to="/privacidad" className="transition-colors hover:text-gold">
              Privacitat
            </Link>
            <Link to="/terminos" className="transition-colors hover:text-gold">
              Termes del Servei
            </Link>
            <Link to="/envios-y-devoluciones" className="transition-colors hover:text-gold">
              Enviaments i Devolucions
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-stone-muted/10 pt-12 text-[10px] uppercase tracking-[0.2em] opacity-40">
          <p>&copy; 2026 M to M Estètica</p>
          <p>Artesania Mediterrània</p>
        </div>
      </div>
    </footer>
  );
}
