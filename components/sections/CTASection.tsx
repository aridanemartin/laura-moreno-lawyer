import Link from "next/link";

type Props = {
  heading?: string;
  text?: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function CTASection({
  heading = "¿Tienes un asunto jurídico?",
  text = "Cuéntanos tu caso y te ofrecemos una valoración jurídica personalizada, sin compromiso.",
  ctaText = "Solicita una valoración jurídica",
  ctaHref = "/contacto",
}: Props) {
  return (
    <section className="bg-navy text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold mb-4">{heading}</h2>
        <p className="text-white/75 text-lg mb-8 leading-relaxed">{text}</p>
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
