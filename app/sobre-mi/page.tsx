import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sobre mí | Asesoramiento Jurídico Laboral y Civil",
  description:
    "Conoce el enfoque profesional del despacho: análisis técnico, asesoramiento personalizado, estrategia clara y defensa seria de particulares.",
  alternates: { canonical: "/sobre-mi" },
};

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Sobre mí", href: "/sobre-mi" },
];

const methodology = [
  {
    title: "Escucha y análisis",
    description:
      "Cada caso comienza con una escucha atenta y un análisis riguroso de los hechos, documentos disponibles y posición jurídica del cliente.",
  },
  {
    title: "Investigación aplicada",
    description:
      "Se revisa la normativa vigente, la jurisprudencia relevante y el convenio colectivo aplicable antes de definir cualquier estrategia.",
  },
  {
    title: "Comunicación clara",
    description:
      "La posición jurídica, las opciones disponibles y los riesgos se explican de forma comprensible, sin tecnicismos innecesarios.",
  },
  {
    title: "Actuación con seguridad procesal",
    description:
      "Cada paso procesal se ejecuta con atención a plazos, forma y estrategia, minimizando riesgos y protegiendo los derechos del cliente.",
  },
];

export default function SobreMiPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />

      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold leading-tight mb-6">
            Un despacho centrado en la claridad, el rigor y la atención personal
          </h1>
          <p className="text-white/75 text-lg leading-relaxed">
            La práctica jurídica se basa en el análisis cuidadoso de cada caso, la comunicación clara con el cliente y la defensa técnicamente rigurosa de sus derechos.
          </p>
        </div>
      </section>

      {/* Professional introduction */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-semibold text-navy mb-6">
            Presentación profesional
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-4">
            El despacho ofrece asesoramiento jurídico especializado a particulares en derecho laboral y derecho civil. Cada asunto se aborda de forma individual, con atención a la documentación disponible, los plazos aplicables, las pruebas relevantes y las posibilidades de negociación y reclamación.
          </p>
          <p className="text-charcoal/80 leading-relaxed">
            El objetivo no es solo gestionar una reclamación, sino ayudar a cada cliente a comprender su posición jurídica y tomar decisiones informadas sobre cómo actuar.
          </p>
        </div>
      </section>

      {/* Practice philosophy */}
      <section className="py-14 px-4 bg-ivory">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-semibold text-navy mb-6">
            Filosofía de práctica
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-4">
            El asesoramiento jurídico de calidad no consiste únicamente en conocer el derecho. Implica entender la situación real del cliente, identificar los riesgos con honestidad, y definir una estrategia que sea técnicamente sólida y prácticamente viable.
          </p>
          <p className="text-charcoal/80 leading-relaxed">
            Se trabaja con rigor, sin promesas exageradas, con respeto a los plazos y con el compromiso de mantener al cliente informado en todo momento.
          </p>
        </div>
      </section>

      {/* Areas of specialization */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-semibold text-navy mb-6">
            Áreas de especialización
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Derecho laboral para empleados",
              "Incapacidad y continuidad laboral",
              "Accidentes de trabajo",
              "Reclamación de cantidades laborales",
              "Divorcios y medidas familiares",
              "Herencias y partición",
              "Propiedad y asuntos registrales",
              "Defensa de consumidores",
              "Reclamaciones de indemnización",
              "Recuperación de deudas",
            ].map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 p-4 border border-ivory-dark rounded-lg bg-ivory"
              >
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-charcoal font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-14 px-4 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-navy text-center mb-10">
            Metodología de trabajo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {methodology.map((item, i) => (
              <div key={i} className="p-6 border border-ivory-dark rounded-lg bg-white">
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="¿Quieres hablar de tu caso?"
        text="Contacta para solicitar una valoración jurídica personalizada de tu situación."
      />
    </>
  );
}
