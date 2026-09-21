import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — M to M Estética" },
      {
        name: "description",
        content:
          "Cómo M to M Estética recoge, utiliza y protege sus datos personales, conforme al RGPD y la LOPDGDD.",
      },
      { property: "og:title", content: "Política de Privacidad — M to M Estética" },
      {
        property: "og:description",
        content: "Cómo protegemos sus datos personales conforme al RGPD y la LOPDGDD.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <LegalPage title="Política de Privacidad" updated="20 de septiembre de 2026">
      <p className="text-sm leading-relaxed text-taupe/80">
        En M to M Estética respetamos su privacidad y tratamos sus datos personales con la misma
        dedicación con la que formulamos nuestros productos. Esta política explica qué datos
        recogemos, con qué finalidad y qué derechos puede ejercer en todo momento.
      </p>

      <LegalSection title="1. Responsable del tratamiento">
        <p>
          El responsable del tratamiento de sus datos es M to M Estética, con domicilio en Calle de
          la Seda, 14, Valencia (España), y correo electrónico de contacto: hola@mtom-estetica.com.
        </p>
      </LegalSection>

      <LegalSection title="2. Datos que recogemos">
        <p>Recogemos únicamente los datos necesarios para atender su pedido y gestionar la relación comercial:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Datos de contacto:</strong> nombre, correo electrónico y teléfono.
          </li>
          <li>
            <strong>Datos de envío:</strong> dirección postal, ciudad, código postal, provincia y país.
          </li>
          <li>
            <strong>Datos de navegación:</strong> información técnica anónima sobre el uso de la web
            (páginas visitadas, tipo de dispositivo), cuando proceda.
          </li>
        </ul>
        <p>
          <strong>Nunca almacenamos datos de pago.</strong> Los campos de tarjeta de esta tienda son
          una simulación de demostración: no procesamos cobros reales ni conservamos números de
          tarjeta, fechas de caducidad ni códigos CVV.
        </p>
      </LegalSection>

      <LegalSection title="3. Finalidad y base legal">
        <p>
          Tratamos sus datos para gestionar su pedido y su envío (ejecución de contrato), para
          atender sus consultas y solicitudes de devolución (ejecución de contrato e interés
          legítimo) y, si nos lo autoriza expresamente, para enviarle novedades y comunicaciones
          comerciales (su consentimiento, revocable en cualquier momento).
        </p>
      </LegalSection>

      <LegalSection title="4. Conservación">
        <p>
          Conservamos sus datos mientras exista una relación comercial o hasta que solicite su
          supresión, y durante los plazos legales aplicables en materia fiscal y de consumo.
        </p>
      </LegalSection>

      <LegalSection title="5. Destinatarios">
        <p>
          No cedemos sus datos a terceros salvo obligación legal o cuando sea imprescindible para
          entregar su pedido (por ejemplo, la empresa de transporte que realiza la entrega).
          Trabajamos únicamente con encargados que ofrecen garantías suficientes conforme al RGPD.
        </p>
      </LegalSection>

      <LegalSection title="6. Sus derechos">
        <p>
          Puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad escribiendo a hola@mtom-estetica.com.
          Si considera que no hemos atendido correctamente su solicitud, puede presentar una
          reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
        </p>
      </LegalSection>

      <LegalSection title="7. Seguridad">
        <p>
          Aplicamos medidas técnicas y organizativas apropiadas para proteger sus datos contra el
          acceso no autorizado, la pérdida o la alteración, incluido el cifrado de las comunicaciones
          y el acceso restringido a la información personal.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
