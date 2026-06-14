import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "@/components/faq/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import type { ServiceDetail } from "@/lib/types";

type Props = {
  detail: ServiceDetail;
  category: string;
  categoryHref: string;
  imageFolder: string;
  backLinkHref: string;
  backLinkText: string;
  ctaHeading: string;
  ctaText: string;
  ctaCtaText: string;
};

export default function ServiceDetailLayout({
  detail,
  category,
  categoryHref,
  imageFolder,
  backLinkHref,
  backLinkText,
  ctaHeading,
  ctaText,
  ctaCtaText,
}: Props) {
  return (
    <>
      {/* Hero — starts at y=0 so transparent header shows the image */}
      <section className="relative overflow-hidden min-h-[450px] bg-navy text-white">
        <Image
          src={`/services/${imageFolder}/${detail.slug}.webp`}
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-transparent" />
        <div className="absolute inset-0 bg-navy/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32">
          <div className="relative max-w-2xl text-left pl-6">
            <span className="absolute left-0 top-0 bottom-0 w-px bg-accent" />
            <p className="text-white/70 text-sm font-medium uppercase tracking-wider mb-3">
              {category}
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              {detail.title}
            </h1>
            <span className="block h-px w-24 bg-white/50 mt-4 mb-3" />
            <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-xl">
              {detail.metaDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb bar — between hero and content */}
      <div className="bg-white border-b border-gray-100">
        <nav aria-label="Ruta de navegación" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-charcoal/50">
            <li><Link href="/" className="hover:text-charcoal transition-colors">Inicio</Link></li>
            <li aria-hidden="true" className="mx-1 text-charcoal/30">›</li>
            <li><Link href={categoryHref} className="hover:text-charcoal transition-colors">{category}</Link></li>
            <li aria-hidden="true" className="mx-1 text-charcoal/30">›</li>
            <li className="text-charcoal/80">{detail.title}</li>
          </ol>
        </nav>
      </div>

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
        <Link href={backLinkHref} className="text-sm text-accent hover:underline">
          ← {backLinkText}
        </Link>
      </div>

      <CTASection
        heading={ctaHeading}
        text={ctaText}
        ctaText={ctaCtaText}
      />
    </>
  );
}
