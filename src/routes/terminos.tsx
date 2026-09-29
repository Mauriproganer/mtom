import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Termes del Servei — M to M Estètica" },
      {
        name: "description",
        content:
          "Condicions generals de compra de M to M Estètica: comandes, preus, pagament, lliuraments i garanties.",
      },
      { property: "og:title", content: "Termes del Servei — M to M Estètica" },
      {
        property: "og:description",
        content: "Condicions generals de compra de M to M Estètica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <LegalPage title="Termes del Servei" updated="20 de setembre de 2026">
      <p className="text-sm leading-relaxed text-taupe/80">
        Aquestes condicions regulen la compra de productes a la botiga en línia de M to M Estètica.
        En fer una comanda, accepta aquestes condicions generals.
      </p>

      <LegalSection title="1. Dades identificatives">
        <p>
          M to M Estètica, amb domicili al Carrer de la Seda, 14, València (Espanya) i correu
          electrònic hola@mtom-estetica.com.
        </p>
      </LegalSection>

      <LegalSection title="2. Objecte">
        <p>
          Els presents termes regulen la compra de productes de cosmètica i cura personal
          (col·leccions Facial, Cabell, Pell i Corporal) a través d'aquesta botiga en línia, així
          com l'ús d'aquesta.
        </p>
      </LegalSection>

      <LegalSection title="3. Comandes">
        <p>
          Per fer una comanda, afegeixi els productes desitjats a la cistella, completi el
          formulari de contacte i adreça i confirmi la compra. Rebrà una confirmació amb el detall
          de la seva comanda. Li preguem que revisi acuradament les dades abans de confirmar, ja
          que no és possible modificar la comanda un cop confirmada; si s'equivoca, contacti amb
          nosaltres i farem tot el possible per ajudar-lo.
        </p>
      </LegalSection>

      <LegalSection title="4. Preus i pagament">
        <p>
          Tots els preus es mostren en euros (€) i inclouen els impostos aplicables. Les despeses
          d'enviament, quan escaiguin, es mostren abans de confirmar la comanda.
        </p>
        <p>
          <strong>Important:</strong> aquesta botiga és una demostració. El pagament se simula amb
          dades fictícies: no es fa cap càrrec real i no s'emmagatzema informació de targetes.
          Quan activem pagaments reals, ho avisarem i actualitzarem aquestes condicions.
        </p>
      </LegalSection>

      <LegalSection title="5. Lliurament">
        <p>
          Els terminis i zones d'enviament, així com la política de despeses d'enviament, es
          detallen a la nostra pàgina d'<strong>Enviaments i Devolucions</strong>.
        </p>
      </LegalSection>

      <LegalSection title="6. Dret de desistiment">
        <p>
          Disposa de 14 dies naturals des de la recepció de la comanda per desistir de la compra
          sense necessitat de justificació. Les condicions per exercir aquest dret es detallen a la
          nostra pàgina d'<strong>Enviaments i Devolucions</strong>.
        </p>
      </LegalSection>

      <LegalSection title="7. Garantia">
        <p>
          Tots els nostres productes compten amb la garantia legal per manca de conformitat
          prevista en la normativa espanyola de consum. Un producte es considera conforme si
          s'ajusta a la seva descripció i és apte per a l'ús habitual d'aquest tipus d'articles.
        </p>
      </LegalSection>

      <LegalSection title="8. Responsabilitat">
        <p>
          Els nostres productes són cosmètics d'ús tòpic. Abans del seu ús complet, recomanem fer
          una prova en una petita zona de la pell i llegir el mode d'ús de cada producte. Si
          observa alguna reacció, suspengui'n l'ús i consulti un professional. La nostra
          responsabilitat es limita a l'import del producte adquirit.
        </p>
      </LegalSection>

      <LegalSection title="9. Legislació aplicable">
        <p>
          Aquestes condicions es regeixen per la legislació espanyola. Per a qualsevol controvèrsia,
          les parts se sotmeten als jutjats i tribunals del domicili del consumidor.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
