import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import FAQAccordion from "@/components/faq/FAQAccordion";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: "Contacto | Solicita una Valoración Jurídica",
  description:
    "Contacta para solicitar una valoración jurídica en derecho laboral, derecho civil, familia, herencias, reclamaciones de indemnización, derechos del consumidor o recuperación de deudas.",
  alternates: { canonical: "/contacto" },
};

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Contacto", href: "/contacto" },
];

const contactFaqs: FAQ[] = [
  {
    question: "¿Es suficiente el primer mensaje para valorar mi caso?",
    answer:
      "El primer mensaje ayuda a identificar el tipo de asunto jurídico y la urgencia del problema. Una valoración completa puede requerir revisar documentos, fechas, comunicaciones y otras pruebas relevantes.",
  },
  {
    question:
      "¿Debo incluir información sensible en el formulario de contacto?",
    answer:
      "El formulario de contacto debe incluir solo la información necesaria para entender la naturaleza general del asunto. Los documentos sensibles o la información confidencial detallada deben compartirse a través de un canal seguro adecuado cuando sea necesario.",
  },
];

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />

      <section className="bg-navy text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold mb-4">
            Solicita una valoración jurídica de tu caso
          </h1>
          <p className="text-white/75 text-lg leading-relaxed">
            Completa el formulario y nos ponemos en contacto contigo para analizar
            tu situación con rigor y discreción.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-ivory">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>

      <FAQAccordion faqs={contactFaqs} heading="Dudas sobre el contacto" />
    </>
  );
}
