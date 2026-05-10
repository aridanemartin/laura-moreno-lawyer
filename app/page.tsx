import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import TrustSignals from "@/components/sections/TrustSignals";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ServiceGrid from "@/components/services/ServiceGrid";
import FAQAccordion from "@/components/faq/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { buildLegalServiceSchema } from "@/lib/schema";
import { homeFaqs } from "@/lib/content/faqs/home";

export const metadata: Metadata = {
  title:
    "Abogada de Derecho Laboral y Civil | Asesoramiento Jurídico para Particulares",
  description:
    "Asesoramiento jurídico moderno para particulares en derecho laboral, derecho civil, familia, herencias, reclamaciones de indemnización, derechos del consumidor y recuperación de deudas.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Abogada de Derecho Laboral y Civil para Particulares",
    description:
      "Defensa técnica y asesoramiento personalizado en materia laboral y civil.",
    type: "website",
    url: "/",
  },
};

const trustSignals = [
  {
    title: "Defensa técnica",
    description:
      "Análisis riguroso de tu situación jurídica, revisión documental y estrategia de defensa orientada a resultados concretos.",
  },
  {
    title: "Asesoramiento personalizado",
    description:
      "Cada asunto se aborda de forma individual, con atención a tus derechos, plazos, documentación y opciones jurídicas reales.",
  },
  {
    title: "Claridad y seguridad procesal",
    description:
      "Te explicamos tu posición jurídica con claridad y definimos una estrategia que minimiza riesgos y maximiza tus opciones.",
  },
];

const processSteps = [
  {
    title: "Valoración del caso",
    description:
      "Revisión inicial de los hechos, documentación disponible y situación jurídica.",
  },
  {
    title: "Revisión documental",
    description:
      "Análisis detallado de contratos, comunicaciones, informes y pruebas relevantes.",
  },
  {
    title: "Estrategia jurídica",
    description:
      "Definición de las opciones jurídicas, plazos, riesgos y el mejor camino a seguir.",
  },
  {
    title: "Actuación",
    description:
      "Negociación, reclamación administrativa, conciliación o litigación según corresponda.",
  },
];

const featuredServices = [
  {
    title: "Incapacidad y derechos laborales",
    summary:
      "Asesoramiento en procesos de incapacidad temporal o permanente, continuidad laboral y derechos del trabajador.",
  },
  {
    title: "Accidentes de trabajo",
    summary:
      "Defensa en reclamaciones por accidentes laborales, responsabilidad empresarial e indemnizaciones.",
  },
  {
    title: "Divorcios y familia",
    summary:
      "Representación en procedimientos de divorcio, custodia, pensiones y medidas familiares.",
  },
  {
    title: "Herencias",
    summary:
      "Asistencia en aceptación, partición y conflictos hereditarios, desde el testamento hasta el registro.",
  },
  {
    title: "Defensa de consumidores",
    summary:
      "Reclamaciones frente a empresas por servicios defectuosos, cláusulas abusivas y derechos vulnerados.",
  },
  {
    title: "Reclamación de deudas",
    summary:
      "Recuperación de cantidades adeudadas mediante negociación, procedimiento monitorio o juicio ordinario.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={buildLegalServiceSchema()} />

      <HeroSection
        headline="Asesoramiento jurídico para particulares con rigor técnico y claridad estratégica"
        subheadline="Especialización en derecho laboral y derecho civil. Valoración jurídica personalizada, defensa documentada y estrategia clara antes de actuar."
      />

      {/* Main service cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-navy text-center mb-10">
            Áreas de práctica
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/derecho-laboral-particulares"
              className="group border border-ivory-dark rounded-lg p-8 bg-ivory hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-navy mb-3 group-hover:text-accent transition-colors">
                Derecho laboral para empleados
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Incapacidad, accidentes de trabajo, reclamación de cantidades,
                conciliación familiar, convenios colectivos y derechos del
                trabajador.
              </p>
              <span className="mt-4 inline-block text-sm text-accent font-medium">
                Ver servicios laborales →
              </span>
            </Link>
            <Link
              href="/derecho-civil"
              className="group border border-ivory-dark rounded-lg p-8 bg-ivory hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-navy mb-3 group-hover:text-accent transition-colors">
                Derecho civil para particulares
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Divorcios, herencias, propiedad, reclamaciones de tráfico,
                consumidores, aerolíneas, indemnizaciones y recuperación de
                deudas.
              </p>
              <span className="mt-4 inline-block text-sm text-accent font-medium">
                Ver servicios civiles →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <TrustSignals
        heading="Por qué confiar en este despacho"
        signals={trustSignals}
      />

      <ProcessSteps
        heading="Cómo trabajamos"
        steps={processSteps}
      />

      <ServiceGrid
        heading="Servicios destacados"
        services={featuredServices}
      />

      <FAQAccordion faqs={homeFaqs} />

      <CTASection />
    </>
  );
}
