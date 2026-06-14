import Image from "next/image";
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
    <section className="relative overflow-hidden bg-navy text-white">
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-transparent" />
      <div className="absolute inset-0 bg-navy/20" />
      <div className="absolute inset-y-0 left-0 w-px bg-accent/80" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
        <div className="max-w-2xl text-left">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white mb-6">
            {headline}
          </h1>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
            {subheadline}
          </p>
          <span className="block h-px w-24 bg-white/60 mb-6" />
          <Link
            href={ctaHref}
            className="inline-block px-8 py-3 bg-accent text-white font-medium rounded hover:bg-accent-light transition-colors"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
