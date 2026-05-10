import type { FAQ, BreadcrumbItem } from "./types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com";
const FIRM_NAME = process.env.NEXT_PUBLIC_FIRM_NAME ?? "Laura Moreno Abogada";

export function buildLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: FIRM_NAME,
    description:
      "Asesoramiento jurídico para particulares en derecho laboral y derecho civil.",
    areaServed: "España",
    serviceType: [
      "Derecho laboral",
      "Derecho civil",
      "Derecho de familia",
      "Derecho de herencias",
      "Reclamaciones de consumidores",
      "Reclamaciones de indemnización",
      "Reclamación de deudas",
    ],
    url: SITE_URL,
  };
}

export function buildFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}
