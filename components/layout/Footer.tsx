import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Identity */}
          <div>
            <p className="font-heading text-white text-base font-semibold mb-2">
              Laura Moreno Abogada
            </p>
            <p className="text-sm leading-relaxed">
              Asesoramiento jurídico serio, personalizado y técnicamente riguroso
              para particulares en derecho laboral y derecho civil.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-white text-sm font-semibold mb-3 uppercase tracking-wide">
              Servicios
            </p>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/derecho-laboral-particulares" className="hover:text-white transition-colors">
                  Derecho laboral para particulares
                </Link>
              </li>
              <li>
                <Link href="/derecho-civil" className="hover:text-white transition-colors">
                  Derecho civil
                </Link>
              </li>
              <li>
                <Link href="/sobre-mi" className="hover:text-white transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Legal */}
          <div>
            <p className="text-white text-sm font-semibold mb-3 uppercase tracking-wide">
              Contacto
            </p>
            <address className="not-italic text-sm space-y-1 mb-4">
              <p>info@ejemplo.com</p>
              <p>+34 600 000 000</p>
              <p>España</p>
            </address>
            <ul className="space-y-1 text-xs text-white/60">
              <li>
                <Link href="/aviso-legal" className="hover:text-white/80 transition-colors">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="hover:text-white/80 transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="hover:text-white/80 transition-colors">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-xs text-white/40 text-center">
          © {new Date().getFullYear()} Laura Moreno Abogada. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
