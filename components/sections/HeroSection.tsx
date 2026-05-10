import Link from "next/link";

type Props = {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function HeroSection({
  headline,
  subheadline,
  ctaText = "Solicita una valoración jurídica",
  ctaHref = "/contacto",
}: Props) {
  return (
    <section className="bg-navy text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
          {headline}
        </h1>
        <p className="text-white/75 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
          {subheadline}
        </p>
        <Link
          href={ctaHref}
          className="inline-block px-8 py-3 bg-accent text-white font-medium rounded hover:bg-accent-light transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
