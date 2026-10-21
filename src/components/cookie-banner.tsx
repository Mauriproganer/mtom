import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "mtom-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
    const open = () => setVisible(true);
    window.addEventListener("mtom-open-cookies", open);
    return () => window.removeEventListener("mtom-open-cookies", open);
  }, []);

  const choose = (value: "accepted" | "rejected") => {
    localStorage.setItem(KEY, JSON.stringify({ value, date: new Date().toISOString() }));
    if (value === "rejected") {
      document.cookie.split(";").forEach((c) => {
        const name = c.split("=")[0].trim();
        if (name) document.cookie = `${name}=; Max-Age=0; path=/`;
      });
    } else {
      document.cookie = `mtom_consent=accepted; Max-Age=${60 * 60 * 24 * 365}; path=/; SameSite=Lax`;
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferències de galetes"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-taupe/10 bg-creme p-6 text-taupe shadow-soft sm:left-6 sm:right-auto"
    >
      <p className="font-serif text-xl">Utilitzem galetes 🍪</p>
      <p className="mt-2 text-sm leading-relaxed text-taupe/75">
        Fem servir galetes per recordar el teu carretó i millorar la teva experiència. Pots
        acceptar-les o rebutjar-les. Més informació a la{" "}
        <Link to="/privacidad" className="underline hover:text-gold">
          Política de Privacitat
        </Link>
        .
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          onClick={() => choose("rejected")}
          className="flex-1 rounded-full border border-taupe/20 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-gold hover:text-gold"
        >
          Rebutjar
        </button>
        <button
          onClick={() => choose("accepted")}
          className="flex-1 rounded-full bg-taupe px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-creme transition-opacity hover:opacity-90"
        >
          Acceptar
        </button>
      </div>
    </div>
  );
}
