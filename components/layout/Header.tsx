"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type NavChild = { href: string; label: string };
type NavItem = { href: string; label: string; description?: string; children?: NavChild[] };

const laboralChildren: NavChild[] = [
  { href: "/derecho-laboral-particulares/defensa-tecnica-asesoramiento", label: "Defensa técnica y asesoramiento" },
  { href: "/derecho-laboral-particulares/incapacidad-derechos-laborales", label: "Incapacidad y derechos laborales" },
  { href: "/derecho-laboral-particulares/accidentes-de-trabajo", label: "Accidentes de trabajo" },
  { href: "/derecho-laboral-particulares/incumplimientos-laborales", label: "Incumplimientos laborales" },
  { href: "/derecho-laboral-particulares/conciliacion-laboral-familiar", label: "Conciliación laboral y familiar" },
  { href: "/derecho-laboral-particulares/permisos-licencias", label: "Permisos y licencias" },
  { href: "/derecho-laboral-particulares/convenio-colectivo", label: "Revisión del convenio colectivo" },
  { href: "/derecho-laboral-particulares/valoracion-situacion-laboral", label: "Valoración de la situación laboral" },
  { href: "/derecho-laboral-particulares/continuidad-trabajo-incapacidad", label: "Continuidad tras incapacidad" },
  { href: "/derecho-laboral-particulares/complemento-paternidad-brecha-genero", label: "Complemento de paternidad" },
  { href: "/derecho-laboral-particulares/reclamacion-cantidades", label: "Reclamación de cantidades" },
];

const civilChildren: NavChild[] = [
  { href: "/derecho-civil/divorcios", label: "Divorcios" },
  { href: "/derecho-civil/matrimonio-notarial", label: "Matrimonio notarial" },
  { href: "/derecho-civil/herencias", label: "Herencias" },
  { href: "/derecho-civil/expedientes-de-dominio", label: "Expedientes de dominio" },
  { href: "/derecho-civil/divisiones-horizontales", label: "Divisiones horizontales" },
  { href: "/derecho-civil/declaraciones-de-obra-nueva", label: "Declaraciones de obra nueva" },
  { href: "/derecho-civil/segregaciones-agrupaciones-agregaciones", label: "Segregaciones y agrupaciones" },
  { href: "/derecho-civil/asuntos-de-trafico", label: "Asuntos de tráfico" },
  { href: "/derecho-civil/defensa-consumidores", label: "Defensa de consumidores" },
  { href: "/derecho-civil/reclamaciones-aerolineas", label: "Reclamaciones aéreas" },
  { href: "/derecho-civil/reclamaciones-indemnizacion", label: "Reclamaciones de indemnización" },
  { href: "/derecho-civil/reclamacion-deudas", label: "Reclamación de deudas" },
  { href: "/derecho-civil/derecho-familia", label: "Derecho de familia" },
];

const navLinks: NavItem[] = [
  {
    href: "/derecho-laboral-particulares",
    label: "Derecho Laboral",
    description: "Asesoramiento y defensa de los derechos de los trabajadores en todas las etapas de su vida laboral.",
    children: laboralChildren,
  },
  {
    href: "/derecho-civil",
    label: "Derecho Civil",
    description: "Soluciones legales para asuntos de familia, herencias, tráfico, consumidores y reclamaciones civiles.",
    children: civilChildren,
  },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeSection, setActiveSection] = useState<NavItem | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragAnimating, setIsDragAnimating] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);
  const isHorizontalDrag = useRef<boolean | null>(null);

  const openDesktopMenu = (href: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveMenu(href);
  };

  const scheduleDesktopClose = () => {
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const cancelDesktopClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  const closeDesktopMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveMenu(null);
  };

  const openMobile = () => {
    setActiveSection(null);
    setMobileOpen(true);
  };

  const closeMobile = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setIsClosing(false);
      setActiveSection(null);
    }, 300);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (isClosing || isDragAnimating) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
    isHorizontalDrag.current = null;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isClosing || isDragAnimating) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;

    if (isHorizontalDrag.current === null) {
      if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;
      isHorizontalDrag.current = Math.abs(dx) > Math.abs(dy);
    }

    if (isHorizontalDrag.current && dx > 0) {
      e.preventDefault();
      setDragOffset(dx);
    }
  };

  const onTouchEnd = () => {
    if (isClosing || isDragAnimating || isHorizontalDrag.current !== true || dragOffset === 0) {
      setDragOffset(0);
      return;
    }

    const velocity = dragOffset / (Date.now() - touchStartTime.current);
    const shouldAct = dragOffset > window.innerWidth * 0.3 || velocity > 0.4;

    if (shouldAct) {
      if (activeSection) {
        setDragOffset(0);
        setActiveSection(null);
      } else {
        setIsDragAnimating(true);
        setDragOffset(window.innerWidth);
        setTimeout(() => {
          setMobileOpen(false);
          setDragOffset(0);
          setIsDragAnimating(false);
          setActiveSection(null);
        }, 260);
      }
    } else {
      setDragOffset(0);
    }
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => { if (closeTimerRef.current) clearTimeout(closeTimerRef.current); };
  }, []);

  return (
    <header
      className={`text-white sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${scrolled ? "bg-navy shadow-md" : "bg-transparent shadow-none"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-heading text-lg font-semibold tracking-wide hover:text-ivory-dark transition-colors"
            onClick={closeDesktopMenu}
          >
            Laura Moreno Abogada
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              if (!link.children) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-desktop-link text-sm font-bold uppercase text-white/80 hover:text-white transition-colors"
                    onMouseEnter={closeDesktopMenu}
                  >
                    {link.label}
                  </Link>
                );
              }
              const isOpen = activeMenu === link.href;
              return (
                <div
                  key={link.href}
                  onMouseEnter={() => openDesktopMenu(link.href)}
                  onMouseLeave={scheduleDesktopClose}
                >
                  <Link
                    href={link.href}
                    aria-expanded={isOpen}
                    className={`nav-desktop-link text-sm font-bold uppercase transition-colors flex items-center gap-1 ${isOpen ? "text-white nav-active" : "text-white/80 hover:text-white"}`}
                    onClick={closeDesktopMenu}
                  >
                    {link.label}
                    <svg
                      aria-hidden="true"
                      className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 rounded hover:bg-white/10 transition-colors"
            onClick={mobileOpen ? closeMobile : openMobile}
          >
            <span className="block w-5 h-0.5 bg-white mb-1" />
            <span className="block w-5 h-0.5 bg-white mb-1" />
            <span className="block w-5 h-0.5 bg-white" />
          </button>
        </div>
      </div>

      {/* Mega menu panels — one per nav item with children */}
      {navLinks.filter((l) => l.children).map((item) => {
        const mid = Math.ceil(item.children!.length / 2);
        const col1 = item.children!.slice(0, mid);
        const col2 = item.children!.slice(mid);
        const isOpen = activeMenu === item.href;
        return (
          <div
            key={item.href}
            onMouseEnter={cancelDesktopClose}
            onMouseLeave={scheduleDesktopClose}
            aria-hidden={!isOpen}
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              width: "100%",
              zIndex: 40,
              backgroundColor: "#f7f5f0",
              boxShadow: "0 5px 14px rgba(0,0,0,0.16)",
              clipPath: isOpen ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
              opacity: isOpen ? 1 : 0,
              visibility: isOpen ? "visible" : "hidden",
              transition: "clip-path 0.5s cubic-bezier(0.68,0,0,1), opacity 0.4s cubic-bezier(0.68,0,0,1), visibility 0.5s cubic-bezier(0.68,0,0,1)",
              willChange: "clip-path, opacity",
              pointerEvents: isOpen ? "auto" : "none",
            }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex">
              {/* Left panel */}
              <div className="w-56 pr-8 border-r border-ivory-dark flex-shrink-0 flex flex-col justify-start">
                <p className="font-heading text-xl font-bold text-navy mb-3">{item.label}</p>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-6">{item.description}</p>
                <Link
                  href={item.href}
                  className="inline-block self-start px-4 py-2 bg-accent text-white text-xs font-medium rounded hover:bg-accent-light transition-colors"
                  onClick={closeDesktopMenu}
                  tabIndex={isOpen ? 0 : -1}
                >
                  Ver todos los servicios →
                </Link>
              </div>
              {/* Link columns */}
              <div className="flex-1 pl-10 flex gap-10">
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-charcoal/40 font-semibold mb-4">Servicios</p>
                  {col1.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block text-sm text-charcoal hover:text-navy py-1.5 border-b border-transparent hover:border-navy/20 transition-colors"
                      onClick={closeDesktopMenu}
                      tabIndex={isOpen ? 0 : -1}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-charcoal/40 font-semibold mb-4">&nbsp;</p>
                  {col2.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block text-sm text-charcoal hover:text-navy py-1.5 border-b border-transparent hover:border-navy/20 transition-colors"
                      onClick={closeDesktopMenu}
                      tabIndex={isOpen ? 0 : -1}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Nav underline animation — injected via React style hoisting */}
      <style>{`
        .nav-desktop-link { position: relative; padding-bottom: 3px; }
        .nav-desktop-link::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px; background: white;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.2s linear;
        }
        .nav-desktop-link:hover::after,
        .nav-desktop-link.nav-active::after { transform: scaleX(1); }
        @media (max-width: 767px) { .nav-desktop-link::after { display: none; } }
      `}</style>

      {/* Mobile menu — fullscreen overlay */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navegación móvil"
          className={`md:hidden fixed inset-0 z-50 bg-navy flex flex-col ${
            isDragAnimating ? "" : isClosing ? "animate-slide-out-right" : "animate-slide-in-right"
          }`}
          style={dragOffset > 0 ? {
            transform: `translateX(${dragOffset}px)`,
            transition: isDragAnimating ? "transform 0.26s ease-out" : "none",
          } : undefined}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 h-16 shrink-0 border-b border-white/10">
            <Link
              href="/"
              className="font-heading text-lg font-semibold tracking-wide text-white hover:text-ivory-dark transition-colors"
              onClick={closeMobile}
            >
              Laura Moreno Abogada
            </Link>
            <button
              aria-label="Cerrar menú"
              className="p-2 rounded hover:bg-white/10 transition-colors text-white"
              onClick={closeMobile}
            >
              <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sliding panels */}
          <div className="flex-1 overflow-hidden relative">
            <div
              className="flex h-full transition-transform duration-300 ease-in-out"
              style={{ transform: activeSection ? "translateX(-100%)" : "translateX(0)" }}
            >
              {/* Main panel */}
              <div className="w-full shrink-0 overflow-y-auto flex flex-col">
                <div className="flex flex-col px-4 py-4 flex-1">
                  {navLinks.map((link) =>
                    link.children ? (
                      <button
                        key={link.href}
                        type="button"
                        className="flex items-center justify-between py-3 text-base text-white/80 hover:text-white transition-colors border-b border-white/10 last:border-0"
                        onClick={() => setActiveSection(link)}
                      >
                        {link.label}
                        <svg aria-hidden="true" className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center py-3 text-base text-white/80 hover:text-white transition-colors border-b border-white/10 last:border-0"
                        onClick={closeMobile}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
                <div className="px-4 pb-8 shrink-0">
                  <Link
                    href="/contacto"
                    className="block px-4 py-3 bg-accent text-white text-sm font-medium rounded text-center hover:bg-accent-light transition-colors"
                    onClick={closeMobile}
                  >
                    Solicita consulta
                  </Link>
                </div>
              </div>

              {/* Sub panel */}
              <div className="w-full shrink-0 overflow-y-auto flex flex-col">
                {activeSection && (
                  <>
                    <div className="px-4 py-4 shrink-0">
                      <button
                        type="button"
                        className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-4"
                        onClick={() => setActiveSection(null)}
                      >
                        <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Volver
                      </button>
                      <Link
                        href={activeSection.href}
                        className="block text-lg font-semibold text-white hover:text-ivory-dark transition-colors border-b border-white/10 pb-3"
                        onClick={closeMobile}
                      >
                        {activeSection.label} →
                      </Link>
                    </div>
                    <div className="flex flex-col px-4 pb-8">
                      {activeSection.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-3 text-sm text-white/70 hover:text-white transition-colors border-b border-white/10 last:border-0"
                          onClick={closeMobile}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
