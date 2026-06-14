import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServiceGrid from "@/components/services/ServiceGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import DocumentChecklist from "@/components/services/DocumentChecklist";
import FAQAccordion from "@/components/faq/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { employmentServices } from "@/lib/content/services/employment";
import { employmentFaqs } from "@/lib/content/faqs/employment";

export const metadata: Metadata = {
  title: "Abogada Laboral para Empleados | Asesoramiento y Defensa Jurídica",
  description:
    "Asesoramiento jurídico para empleados: incapacidad, accidentes de trabajo, reclamación de cantidades, conciliación familiar, permisos legales, convenios colectivos y derechos laborales.",
  alternates: { canonical: "/derecho-laboral-particulares" },
  openGraph: {
    title: "Abogada Laboral para Empleados",
    description:
      "Defensa técnica y asesoramiento personalizado para empleados en conflictos laborales, incapacidad, accidentes de trabajo y reclamación de cantidades.",
    type: "article",
    url: "/derecho-laboral-particulares",
  },
};

const processSteps = [
  {
    title: "Valoración inicial",
    description:
      "Revisión de tu situación laboral, documentación disponible y derechos aplicables.",
  },
  {
    title: "Análisis del convenio",
    description:
      "Estudio del convenio colectivo aplicable y su impacto en tu caso concreto.",
  },
  {
    title: "Estrategia de defensa",
    description:
      "Definición de opciones jurídicas, plazos procesales y riesgos antes de actuar.",
  },
  {
    title: "Actuación jurídica",
    description:
      "Negociación, conciliación, reclamación administrativa o litigación judicial.",
  },
];

const checklistItems = [
  "Contrato de trabajo",
  "Nóminas",
  "Comunicaciones de la empresa",
  "Informes médicos",
  "Partes de accidente",
  "Resoluciones de la Seguridad Social",
  "Información del convenio colectivo",
  "Cuadrantes de trabajo",
  "Pruebas de cantidades impagadas",
  "Solicitudes de permisos denegados",
];

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Derecho Laboral", href: "/derecho-laboral-particulares" },
];

export default function DerechoLaboralPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />

      <HeroSection
        headline="Asesoramiento jurídico laboral para empleados y particulares"
        subheadline="Defensa técnica documentada y asesoramiento personalizado para trabajadores en incapacidad, accidentes, reclamaciones salariales, convenios y derechos laborales."
      />

      {/* Intro SEO copy */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <p className="text-charcoal/80 leading-relaxed mb-4">
            Las relaciones laborales implican derechos, obligaciones, plazos, documentación médica, decisiones empresariales, convenios colectivos e implicaciones de la Seguridad Social. Cuando un trabajador se enfrenta a un conflicto con la empresa, un accidente laboral, un proceso de incapacidad, salarios impagados, un permiso denegado o incertidumbre sobre la continuidad en el empleo, el asesoramiento jurídico debe ser preciso, documentado y estratégicamente orientado.
          </p>
          <p className="text-charcoal/80 leading-relaxed">
            Este servicio está diseñado para empleados y particulares que necesitan defensa técnica y asesoramiento personalizado en materia laboral. El trabajo incluye valorar la situación laboral, revisar la documentación, identificar los derechos legales aplicables, evaluar el convenio colectivo y definir la mejor vía antes de la negociación, la actuación administrativa, la conciliación o el litigio.
          </p>
        </div>
      </section>

      <ServiceGrid
        heading="Servicios de derecho laboral"
        services={employmentServices}
      />

      <ProcessSteps steps={processSteps} />

      <FAQAccordion faqs={employmentFaqs} />

      <CTASection
        heading="¿Tienes un asunto laboral?"
        text="Cuéntanos tu situación y valoramos tu caso de forma personalizada."
        ctaText="Solicita asesoramiento laboral"
      />
    </>
  );
}
