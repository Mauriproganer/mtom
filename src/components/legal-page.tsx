import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png.asset.json";
import { SiteFooter } from "./site-footer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-creme font-sans text-taupe selection:bg-gold/20">
      <nav className="sticky top-0 z-50 border-b border-taupe/5 bg-creme/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link to="/" aria-label="Volver a M to M Estética" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="M to M Estética" className="h-14 w-14 object-contain" />
          </Link>
          <Link
            to="/"
            className="text-[11px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold"
          >
            Volver a la tienda
          </Link>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24 pt-16">
        <p className="text-[10px] uppercase tracking-[0.25em] text-gold">Información legal</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-3 text-xs uppercase tracking-[0.15em] text-taupe/50">
          Última actualización: {updated}
        </p>
        <div className="mt-10 border-t border-taupe/10 pt-10">{children}</div>
      </main>

      <SiteFooter />
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-taupe/80">{children}</div>
    </section>
  );
}
