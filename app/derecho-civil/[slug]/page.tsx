import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/faq/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { civilDetails } from "@/lib/content/services/civil-detail";

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

      {/* Breadcrumb */}
      <nav aria-label="Ruta de navegación" className="bg-ivory border-b border-ivory-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-charcoal/60">
            <li>
              <Link href="/" className="hover:text-navy transition-colors">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true" className="mx-1">›</li>
            <li>
              <Link href="/derecho-civil" className="hover:text-navy transition-colors">
                Derecho Civil
              </Link>
            </li>
            <li aria-hidden="true" className="mx-1">›</li>
            <li className="text-navy font-medium">{detail.title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-4 bg-navy text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">
            Derecho Civil
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            {detail.title}
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-5">
          {detail.description.map((paragraph, i) => (
            <p key={i} className="text-charcoal/80 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion faqs={detail.faqs} />

      {/* Back link */}
      <div className="py-6 px-4 bg-white text-center">
        <Link
          href="/derecho-civil"
          className="text-sm text-accent hover:underline"
        >
          ← Ver todos los servicios de derecho civil
        </Link>
      </div>

      <CTASection
        heading="¿Tienes un asunto civil?"
        text="Cuéntanos tu caso y valoramos tu situación jurídica de forma personalizada."
        ctaText="Solicita asesoramiento civil"
      />
    </>
  );
}
