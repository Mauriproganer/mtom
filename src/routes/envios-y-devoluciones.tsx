import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/envios-y-devoluciones")({
  head: () => ({
    meta: [
      { title: "Envíos y Devoluciones — M to M Estética" },
      {
        name: "description",
        content:
          "Plazos y gastos de envío, seguimiento de pedidos y política de devoluciones y reembolsos de M to M Estética.",
      },
      { property: "og:title", content: "Envíos y Devoluciones — M to M Estética" },
      {
        property: "og:description",
        content: "Plazos de envío, política de devoluciones y reembolsos de M to M Estética.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Envios,
});

function Envios() {
  return (
    <LegalPage title="Envíos y Devoluciones" updated="20 de septiembre de 2026">
      <p className="text-sm leading-relaxed text-taupe/80">
        Queremos que su ritual llegue a su puerta con el mismo cuidado con el que preparamos cada
        fórmula. Aquí encontrará todo lo que necesita saber sobre envíos, entregas y devoluciones.
      </p>

      <LegalSection title="1. Zonas de envío">
        <p>
          Enviamos a toda España (Península y Baleares). Para envíos a Canarias, Ceuta, Melilla o
          países de la Unión Europea, escríbanos a hola@mtom-estetica.com y le informaremos de
          disponibilidad y tarifas.
        </p>
      </LegalSection>

      <LegalSection title="2. Plazos de entrega">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>España peninsular:</strong> 2 a 4 días laborables.
          </li>
          <li>
            <strong>Baleares:</strong> 3 a 5 días laborables.
          </li>
        </ul>
        <p>
          Los pedidos se preparan en días laborables. Un pedido confirmado antes de las 14:00 suele
          salir ese mismo día; si se confirma después, sale el siguiente día laborable.
        </p>
      </LegalSection>

      <LegalSection title="3. Gastos de envío">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Envío gratuito</strong> en pedidos de 75,00€ o más.
          </li>
          <li>
            <strong>4,95€</strong> para pedidos inferiores a 75,00€.
          </li>
        </ul>
        <p>Los gastos se muestran siempre antes de confirmar el pedido.</p>
      </LegalSection>

      <LegalSection title="4. Seguimiento">
        <p>
          Cuando su pedido salga de nuestro taller, recibirá un correo con el número de seguimiento
          para conocer el estado de la entrega en todo momento.
        </p>
      </LegalSection>

      <LegalSection title="5. Devoluciones y derecho de desistimiento">
        <p>
          Dispone de <strong>14 días naturales</strong> desde la recepción de su pedido para
          devolver cualquier producto sin necesidad de justificarlo. Para ello, escríbanos a
          hola@mtom-estetica.com indicando su número de pedido y le indicaremos los pasos a seguir.
        </p>
        <p>
          Para que la devolución sea aceptada, el producto debe estar sin abrir y en su embalaje
          original, por tratarse de productos cosméticos de uso tópico. Por motivos de higiene no
          admitimos la devolución de productos abiertos, salvo que lleguen defectuosos.
        </p>
      </LegalSection>

      <LegalSection title="6. Productos defectuosos o incorrectos">
        <p>
          Si recibe un producto defectuoso, dañado o distinto del solicitado, contáctenos en un
          plazo máximo de 7 días desde la recepción con una fotografía del producto. Nos haremos
          cargo de la recogida y le enviaremos un reemplazo o le reembolsaremos íntegramente, según
          prefiera.
        </p>
      </LegalSection>

      <LegalSection title="7. Reembolsos">
        <p>
          Una vez recibida y revisada la devolución, le reembolsaremos el importe íntegro del
          producto (incluidos los gastos de envío iniciales si devuelve el pedido completo) en un
          plazo máximo de 14 días desde que nos comunique su decisión de desistir. El reembolso se
          realizará por el mismo medio de pago utilizado en la compra.
        </p>
      </LegalSection>

      <LegalSection title="8. Cambios">
        <p>
          Si desea cambiar un producto por otro, lo más rápido es realizar una devolución y efectuar
          una nueva compra. Si necesita ayuda, escríbanos y le acompañamos en el proceso.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
