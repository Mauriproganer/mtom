import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos de Servicio — M to M Estética" },
      {
        name: "description",
        content:
          "Condiciones generales de compra de M to M Estética: pedidos, precios, pago, entregas y garantías.",
      },
      { property: "og:title", content: "Términos de Servicio — M to M Estética" },
      {
        property: "og:description",
        content: "Condiciones generales de compra de M to M Estética.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <LegalPage title="Términos de Servicio" updated="20 de septiembre de 2026">
      <p className="text-sm leading-relaxed text-taupe/80">
        Estas condiciones regulan la compra de productos en la tienda online de M to M Estética. Al
        realizar un pedido, acepta estas condiciones generales.
      </p>

      <LegalSection title="1. Datos identificativos">
        <p>
          M to M Estética, con domicilio en Calle de la Seda, 14, Valencia (España) y correo
          electrónico hola@mtom-estetica.com.
        </p>
      </LegalSection>

      <LegalSection title="2. Objeto">
        <p>
          Los presentes términos regulan la compra de productos de cosmética y cuidado personal
          (colecciones Facial, Pelo, Piel y Corporal) a través de esta tienda online, así como el
          uso de la misma.
        </p>
      </LegalSection>

      <LegalSection title="3. Pedidos">
        <p>
          Para realizar un pedido, añada los productos deseados al carrito, complete el formulario
          de contacto y dirección y confirme la compra. Recibirá una confirmación con el detalle de
          su pedido. Le rogamos revise cuidadosamente los datos antes de confirmar, ya que no es
          posible modificar el pedido una vez confirmado; si se equivoca, contáctenos y haremos lo
          posible por ayudarle.
        </p>
      </LegalSection>

      <LegalSection title="4. Precios y pago">
        <p>
          Todos los precios se muestran en euros (€) e incluyen los impuestos aplicables. Los gastos
          de envío, cuando procedan, se muestran antes de confirmar el pedido.
        </p>
        <p>
          <strong>Importante:</strong> esta tienda es una demostración. El pago se simula con datos
          ficticios: no se realiza ningún cargo real y no se almacena información de tarjetas.
          Cuando activemos pagos reales, avisaremos y actualizaremos estas condiciones.
        </p>
      </LegalSection>

      <LegalSection title="5. Entrega">
        <p>
          Los plazos y zonas de envío, así como la política de gastos de envío, se detallan en
          nuestra página de <strong>Envíos y Devoluciones</strong>.
        </p>
      </LegalSection>

      <LegalSection title="6. Derecho de desistimiento">
        <p>
          Dispone de 14 días naturales desde la recepción del pedido para desistir de la compra sin
          necesidad de justificación. Las condiciones para ejercer este derecho se detallan en
          nuestra página de <strong>Envíos y Devoluciones</strong>.
        </p>
      </LegalSection>

      <LegalSection title="7. Garantía">
        <p>
          Todos nuestros productos cuentan con la garantía legal por falta de conformidad prevista
          en la normativa española de consumo. Un producto se considera conforme si se ajusta a su
          descripción y es apto para el uso habitual de este tipo de artículos.
        </p>
      </LegalSection>

      <LegalSection title="8. Responsabilidad">
        <p>
          Nuestros productos son cosméticos de uso tópico. Antes de su uso completo, recomendamos
          realizar una prueba en una pequeña zona de la piel y leer el modo de uso de cada producto.
          Si observa alguna reacción, suspenda su uso y consulte a un profesional. Nuestra
          responsabilidad se limita al importe del producto adquirido.
        </p>
      </LegalSection>

      <LegalSection title="9. Legislación aplicable">
        <p>
          Estas condiciones se rigen por la legislación española. Para cualquier controversia, las
          partes se someten a los juzgados y tribunales del domicilio del consumidor.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
