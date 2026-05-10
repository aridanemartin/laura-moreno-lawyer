import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad del sitio web de Laura Moreno Abogada.",
  alternates: { canonical: "/politica-privacidad" },
  robots: { index: false },
};

export default function PoliticaPrivacidadPage() {
  return (
    <section className="py-16 px-4 bg-ivory">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl font-semibold text-navy mb-8">
          Política de Privacidad
        </h1>
        <div className="space-y-6 text-sm text-charcoal/80 leading-relaxed">
          <div>
            <h2 className="font-semibold text-navy mb-2 text-base">1. Responsable del tratamiento</h2>
            <p>
              Laura Moreno Abogada, con domicilio en España. Contacto: info@ejemplo.com
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-navy mb-2 text-base">2. Datos recabados</h2>
            <p>
              A través del formulario de contacto se recaban nombre, correo electrónico, teléfono,
              área jurídica de interés y descripción del asunto. Estos datos son los estrictamente
              necesarios para responder a la consulta del usuario.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-navy mb-2 text-base">3. Finalidad y legitimación</h2>
            <p>
              Los datos se tratan para gestionar las consultas recibidas y prestar los servicios
              jurídicos solicitados. La base jurídica del tratamiento es el consentimiento del
              interesado y la ejecución de medidas precontractuales.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-navy mb-2 text-base">4. Conservación</h2>
            <p>
              Los datos se conservarán durante el tiempo necesario para atender la consulta y,
              en su caso, durante la vigencia de la relación profesional. Transcurrido dicho
              plazo, se suprimirán conforme a la normativa aplicable.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-navy mb-2 text-base">5. Derechos del interesado</h2>
            <p>
              El interesado puede ejercer sus derechos de acceso, rectificación, supresión,
              limitación, portabilidad y oposición dirigiéndose a info@ejemplo.com. Tiene
              derecho a presentar reclamación ante la Agencia Española de Protección de Datos
              (www.aepd.es).
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-navy mb-2 text-base">6. Cesión de datos</h2>
            <p>
              Los datos no se cederán a terceros salvo obligación legal o necesidad para la
              prestación del servicio jurídico, en cuyo caso el interesado será informado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
