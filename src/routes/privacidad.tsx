import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacitat — M to M Estètica" },
      {
        name: "description",
        content:
          "Com M to M Estètica recull, utilitza i protegeix les seves dades personals, d'acord amb el RGPD i la LOPDGDD.",
      },
      { property: "og:title", content: "Política de Privacitat — M to M Estètica" },
      {
        property: "og:description",
        content: "Com protegim les seves dades personals d'acord amb el RGPD i la LOPDGDD.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <LegalPage title="Política de Privacitat" updated="20 de setembre de 2026">
      <p className="text-sm leading-relaxed text-taupe/80">
        A M to M Estètica respectem la seva privacitat i tractem les seves dades personals amb la
        mateixa dedicació amb què formulem els nostres productes. Aquesta política explica quines
        dades recollim, amb quina finalitat i quins drets pot exercir en tot moment.
      </p>

      <LegalSection title="1. Responsable del tractament">
        <p>
          El responsable del tractament de les seves dades és M to M Estètica, amb domicili al
          Carrer de la Seda, 14, València (Espanya), i correu electrònic de contacte:
          hola@mtom-estetica.com.
        </p>
      </LegalSection>

      <LegalSection title="2. Dades que recollim">
        <p>Recollim únicament les dades necessàries per atendre la seva comanda i gestionar la relació comercial:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Dades de contacte:</strong> nom, correu electrònic i telèfon.
          </li>
          <li>
            <strong>Dades d'enviament:</strong> adreça postal, ciutat, codi postal, província i
            país.
          </li>
          <li>
            <strong>Dades de navegació:</strong> informació tècnica anònima sobre l'ús del web
            (pàgines visitades, tipus de dispositiu), quan escaigui.
          </li>
        </ul>
        <p>
          <strong>Mai emmagatzemem dades de pagament.</strong> Els camps de targeta d'aquesta
          botiga són una simulació de demostració: no processem cobraments reals ni conservem
          números de targeta, dates de caducitat ni codis CVV.
        </p>
      </LegalSection>

      <LegalSection title="3. Finalitat i base legal">
        <p>
          Tractem les seves dades per gestionar la seva comanda i el seu enviament (execució de
          contracte), per atendre les seves consultes i sol·licituds de devolució (execució de
          contracte i interès legítim) i, si ens ho autoritza expressament, per enviar-li novetats
          i comunicacions comercials (el seu consentiment, revocable en qualsevol moment).
        </p>
      </LegalSection>

      <LegalSection title="4. Conservació">
        <p>
          Conservem les seves dades mentre existeixi una relació comercial o fins que sol·liciti la
          seva supressió, i durant els terminis legals aplicables en matèria fiscal i de consum.
        </p>
      </LegalSection>

      <LegalSection title="5. Destinataris">
        <p>
          No cedim les seves dades a tercers tret d'obligació legal o quan sigui imprescindible per
          lliurar la seva comanda (per exemple, l'empresa de transport que fa el lliurament).
          Treballem únicament amb encarregats que ofereixen garanties suficients d'acord amb el
          RGPD.
        </p>
      </LegalSection>

      <LegalSection title="6. Els seus drets">
        <p>
          Pot exercir en qualsevol moment els seus drets d'accés, rectificació, supressió,
          oposició, limitació del tractament i portabilitat escrivint a hola@mtom-estetica.com. Si
          considera que no hem atès correctament la seva sol·licitud, pot presentar una reclamació
          davant l'Agència Espanyola de Protecció de Dades (www.aepd.es).
        </p>
      </LegalSection>

      <LegalSection title="7. Seguretat">
        <p>
          Apliquem mesures tècniques i organitzatives apropiades per protegir les seves dades
          contra l'accés no autoritzat, la pèrdua o l'alteració, inclòs el xifratge de les
          comunicacions i l'accés restringit a la informació personal.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
