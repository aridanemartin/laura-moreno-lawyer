import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal del sitio web de Laura Moreno Abogada.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: false },
};

export default function AvisoLegalPage() {
  return (
    <section className="py-16 px-4 bg-ivory">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl font-semibold text-navy mb-8">Aviso Legal</h1>
        <div className="space-y-6 text-sm text-charcoal/80 leading-relaxed">
          <div>
            <h2 className="font-semibold text-navy mb-2 text-base">1. Identificación del titular</h2>
            <p>
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
              Información y del Comercio Electrónico, se informa que el titular de este sitio web es
              Laura Moreno Abogada, con domicilio en España.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-navy mb-2 text-base">2. Objeto</h2>
            <p>
              Este sitio web tiene carácter informativo y no constituye asesoramiento jurídico. La
              información aquí contenida es de carácter general y no sustituye la consulta con un
              profesional del derecho para cada caso concreto.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-navy mb-2 text-base">3. Propiedad intelectual</h2>
            <p>
              Todos los contenidos de este sitio web, incluyendo textos, imágenes y diseño, son
              propiedad del titular o cuentan con licencia de uso. Queda prohibida su reproducción,
              distribución o comunicación pública sin autorización expresa.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-navy mb-2 text-base">4. Responsabilidad</h2>
            <p>
              El titular no se hace responsable de los daños derivados del uso del sitio web, de los
              errores u omisiones en los contenidos, ni de la disponibilidad del servicio.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-navy mb-2 text-base">5. Legislación aplicable</h2>
            <p>
              Este aviso legal se rige por la legislación española. Para cualquier controversia
              derivada del uso de este sitio web, las partes se someten a los juzgados y tribunales
              competentes conforme a la normativa vigente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
