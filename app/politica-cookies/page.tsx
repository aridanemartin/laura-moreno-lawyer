import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies del sitio web de Laura Moreno Abogada.",
  alternates: { canonical: "/politica-cookies" },
  robots: { index: false },
};

export default function PoliticaCookiesPage() {
  return (
    <section className="py-16 px-4 bg-ivory">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl font-semibold text-navy mb-8">
          Política de Cookies
        </h1>
        <div className="space-y-6 text-sm text-charcoal/80 leading-relaxed">
          <div>
            <h2 className="font-semibold text-navy mb-2 text-base">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web guardan en el
              dispositivo del usuario para facilitar su funcionamiento y mejorar la experiencia
              de navegación.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-navy mb-2 text-base">2. Cookies utilizadas</h2>
            <p>
              Este sitio web utiliza únicamente cookies estrictamente necesarias para su
              funcionamiento técnico. No se utilizan cookies de análisis, publicidad ni
              seguimiento de terceros.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-navy mb-2 text-base">3. Gestión de cookies</h2>
            <p>
              El usuario puede configurar su navegador para bloquear o eliminar las cookies.
              Ten en cuenta que desactivar las cookies estrictamente necesarias puede afectar
              al correcto funcionamiento del sitio.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-navy mb-2 text-base">4. Más información</h2>
            <p>
              Para cualquier consulta sobre el uso de cookies en este sitio web, puedes
              contactar a través de info@ejemplo.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
