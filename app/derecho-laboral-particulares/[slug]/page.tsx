import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { employmentDetails } from "@/lib/content/services/employment-detail";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return employmentDetails.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = employmentDetails.find((d) => d.slug === slug);
  if (!detail) return {};
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    alternates: { canonical: `/derecho-laboral-particulares/${detail.slug}` },
    openGraph: {
      title: detail.metaTitle,
      description: detail.metaDescription,
      type: "article",
      url: `/derecho-laboral-particulares/${detail.slug}`,
    },
  };
}

export default async function EmploymentServicePage({ params }: Props) {
  const { slug } = await params;
  const detail = employmentDetails.find((d) => d.slug === slug);
  if (!detail) notFound();

  const breadcrumbs = [
    { name: "Inicio", href: "/" },
    { name: "Derecho Laboral", href: "/derecho-laboral-particulares" },
    { name: detail.title, href: `/derecho-laboral-particulares/${detail.slug}` },
  ];

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
      <ServiceDetailLayout
        detail={detail}
        category="Derecho Laboral"
        categoryHref="/derecho-laboral-particulares"
        imageFolder="employment"
        backLinkHref="/derecho-laboral-particulares"
        backLinkText="Ver todos los servicios de derecho laboral"
        ctaHeading="¿Tienes un asunto laboral?"
        ctaText="Cuéntanos tu situación y valoramos tu caso de forma personalizada."
        ctaCtaText="Solicita asesoramiento laboral"
      />
    </>
  );
}
