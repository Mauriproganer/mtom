import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/envios-y-devoluciones")({
  head: () => ({
    meta: [
      { title: "Enviaments i Devolucions — M to M Estètica" },
      {
        name: "description",
        content:
          "Terminis i despeses d'enviament, seguiment de comandes i política de devolucions i reemborsaments de M to M Estètica.",
      },
      { property: "og:title", content: "Enviaments i Devolucions — M to M Estètica" },
      {
        property: "og:description",
        content: "Terminis d'enviament, política de devolucions i reemborsaments de M to M Estètica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Envios,
});

function Envios() {
  return (
    <LegalPage title="Enviaments i Devolucions" updated="20 de setembre de 2026">
      <p className="text-sm leading-relaxed text-taupe/80">
        Volem que el seu ritual arribi a la seva porta amb la mateixa cura amb què preparem cada
        fórmula. Aquí trobarà tot el que necessita saber sobre enviaments, lliuraments i
        devolucions.
      </p>

      <LegalSection title="1. Zones d'enviament">
        <p>
          Enviem a tot Espanya (Península i Balears). Per a enviaments a Canàries, Ceuta, Melilla o
          països de la Unió Europea, escrigui'ns a hola@mtom-estetica.com i l'informarem de la
          disponibilitat i les tarifes.
        </p>
      </LegalSection>

      <LegalSection title="2. Terminis de lliurament">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Espanya peninsular:</strong> 2 a 4 dies laborables.
          </li>
          <li>
            <strong>Balears:</strong> 3 a 5 dies laborables.
          </li>
        </ul>
        <p>
          Les comandes es preparen en dies laborables. Una comanda confirmada abans de les 14:00
          sol sortir aquell mateix dia; si es confirma més tard, surt el següent dia laborable.
        </p>
      </LegalSection>

      <LegalSection title="3. Despeses d'enviament">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Enviament gratuït</strong> en comandes de 75,00€ o més.
          </li>
          <li>
            <strong>4,95€</strong> per a comandes inferiors a 75,00€.
          </li>
        </ul>
        <p>Les despeses es mostren sempre abans de confirmar la comanda.</p>
      </LegalSection>

      <LegalSection title="4. Seguiment">
        <p>
          Quan la seva comanda surti del nostre taller, rebrà un correu amb el número de seguiment
          per conèixer l'estat del lliurament en tot moment.
        </p>
      </LegalSection>

      <LegalSection title="5. Devolucions i dret de desistiment">
        <p>
          Disposa de <strong>14 dies naturals</strong> des de la recepció de la seva comanda per
          retornar qualsevol producte sense necessitat de justificar-ho. Per a això, escrigui'ns a
          hola@mtom-estetica.com indicant el seu número de comanda i li indicarem els passos a
          seguir.
        </p>
        <p>
          Perquè la devolució sigui acceptada, el producte ha d'estar sense obrir i en el seu
          embalatge original, ja que es tracta de productes cosmètics d'ús tòpic. Per motius
          d'higiene no admetem la devolució de productes oberts, tret que arribin defectuosos.
        </p>
      </LegalSection>

      <LegalSection title="6. Productes defectuosos o incorrectes">
        <p>
          Si rep un producte defectuós, malmès o diferent del sol·licitat, contacti amb nosaltres
          en un termini màxim de 7 dies des de la recepció amb una fotografia del producte. Ens
          farem càrrec de la recollida i li enviarem un reemplaçament o li reemborsarem
          íntegrament l'import, segons prefereixi.
        </p>
      </LegalSection>

      <LegalSection title="7. Reemborsaments">
        <p>
          Un cop rebuda i revisada la devolució, li reemborsarem l'import íntegre del producte
          (incloses les despeses d'enviament inicials si retorna la comanda completa) en un termini
          màxim de 14 dies des que ens comuniqui la seva decisió de desistir. El reemborsament es
          farà pel mateix mitjà de pagament utilitzat en la compra.
        </p>
      </LegalSection>

      <LegalSection title="8. Canvis">
        <p>
          Si vol canviar un producte per un altre, el més ràpid és fer una devolució i efectuar una
          nova compra. Si necessita ajuda, escrigui'ns i l'acompanyem en el procés.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
