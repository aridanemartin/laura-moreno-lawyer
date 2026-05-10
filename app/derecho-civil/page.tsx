import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServiceGrid from "@/components/services/ServiceGrid";
import DocumentChecklist from "@/components/services/DocumentChecklist";
import FAQAccordion from "@/components/faq/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { civilServices } from "@/lib/content/services/civil";
import { civilFaqs } from "@/lib/content/faqs/civil";

export const metadata: Metadata = {
  title:
    "Abogada Civil para Particulares | Familia, Herencias, Propiedad y Reclamaciones",
  description:
    "Asesoramiento en derecho civil para particulares: divorcio, matrimonio notarial, herencias, asuntos registrales, tráfico, consumidores, aerolíneas, indemnizaciones y recuperación de deudas.",
  alternates: { canonical: "/derecho-civil" },
  openGraph: {
    title: "Abogada Civil para Particulares",
    description:
      "Asesoramiento jurídico en divorcio, herencias, propiedad, derechos del consumidor, reclamaciones aéreas, indemnizaciones y recuperación de deudas.",
    type: "article",
    url: "/derecho-civil",
  },
};

const checklistItems = [
  "Contratos",
  "Escrituras notariales",
  "Notas simples registrales",
  "Información catastral",
  "Facturas",
  "Correos y comunicaciones escritas",
  "Documentación de seguros",
  "Informes médicos",
  "Datos de reserva de vuelo",
  "Atestados de accidente de tráfico",
  "Documentos judiciales de familia",
  "Testamentos y documentos de herencia",
  "Justificantes de deuda",
];

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Derecho Civil", href: "/derecho-civil" },
];

export default function DerechoCivilPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />

      <HeroSection
        headline="Asesoramiento jurídico civil para familia, propiedad, consumidores e indemnizaciones"
        subheadline="Defensa técnica y orientación práctica en derecho de familia, herencias, propiedad registral, derechos del consumidor, reclamaciones y recuperación de deudas."
      />

      {/* Intro SEO copy */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-charcoal/80 leading-relaxed mb-4">
            El derecho civil regula muchas de las decisiones y conflictos más importantes de la vida privada: relaciones familiares, herencias, propiedad, contratos, indemnizaciones, deudas, reclamaciones de tráfico, derechos del consumidor y disputas con empresas o particulares. Estos asuntos requieren con frecuencia una planificación jurídica cuidadosa, documentación precisa y una estrategia clara para evitar problemas futuros.
          </p>
          <p className="text-charcoal/80 leading-relaxed">
            Este servicio ofrece asesoramiento jurídico y representación en asuntos civiles para particulares y familias. El trabajo incluye valorar los hechos, revisar documentos, identificar derechos y obligaciones aplicables, preparar reclamaciones o acuerdos, negociar cuando proceda y defender los intereses del cliente ante notarios, registros, empresas, aseguradoras, administraciones o tribunales.
          </p>
        </div>
      </section>

      <ServiceGrid
        heading="Servicios de derecho civil"
        services={civilServices}
      />

      {/* When civil legal advice is recommended */}
      <section className="py-14 px-4 bg-navy text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold mb-6">
            ¿Cuándo es recomendable el asesoramiento civil?
          </h2>
          <ul className="space-y-3 text-white/80 text-sm leading-relaxed list-disc list-inside">
            <li>Antes de firmar una escritura notarial, compraventa o contrato relevante.</li>
            <li>Cuando surge un conflicto hereditario entre familiares.</li>
            <li>Ante un divorcio, separación o modificación de medidas familiares.</li>
            <li>Tras un accidente de tráfico con daños personales o materiales.</li>
            <li>Frente a una empresa que incumple sus obligaciones contractuales.</li>
            <li>Cuando una compañía aérea no responde a tu reclamación.</li>
            <li>Si necesitas recuperar una deuda impagada.</li>
            <li>En cualquier operación de restructuración o regularización de bienes inmuebles.</li>
          </ul>
        </div>
      </section>

      <DocumentChecklist
        heading="Documentación recomendada"
        intro="Recopila, si está disponible, la siguiente documentación para facilitar la valoración de tu caso:"
        items={checklistItems}
      />

      <FAQAccordion faqs={civilFaqs} />

      <CTASection
        heading="¿Tienes un asunto civil?"
        text="Cuéntanos tu caso y valoramos tu situación jurídica de forma personalizada."
        ctaText="Solicita asesoramiento civil"
      />
    </>
  );
}
