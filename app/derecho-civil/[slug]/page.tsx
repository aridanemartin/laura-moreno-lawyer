import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { civilDetails } from "@/lib/content/services/civil-detail";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return civilDetails.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = civilDetails.find((d) => d.slug === slug);
  if (!detail) return {};
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    alternates: { canonical: `/derecho-civil/${detail.slug}` },
    openGraph: {
      title: detail.metaTitle,
      description: detail.metaDescription,
      type: "article",
      url: `/derecho-civil/${detail.slug}`,
    },
  };
}

export default async function CivilServicePage({ params }: Props) {
  const { slug } = await params;
  const detail = civilDetails.find((d) => d.slug === slug);
  if (!detail) notFound();

  const breadcrumbs = [
    { name: "Inicio", href: "/" },
    { name: "Derecho Civil", href: "/derecho-civil" },
    { name: detail.title, href: `/derecho-civil/${detail.slug}` },
  ];

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
      <ServiceDetailLayout
        detail={detail}
        category="Derecho Civil"
        categoryHref="/derecho-civil"
        imageFolder="civil"
        backLinkHref="/derecho-civil"
        backLinkText="Ver todos los servicios de derecho civil"
        ctaHeading="¿Tienes un asunto civil?"
        ctaText="Cuéntanos tu caso y valoramos tu situación jurídica de forma personalizada."
        ctaCtaText="Solicita asesoramiento civil"
      />
    </>
  );
}
