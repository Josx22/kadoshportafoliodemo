"use client";

import { useEffect, useState } from "react";
import { PERFIL } from "@/lib/content";

const links = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Qué hago", href: "#servicios" },
  { label: "FitSmart", href: "#fitsmart" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Fondo sólido al bajar
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Marca la sección visible en el menú
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const section = document.querySelector(l.href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const clases = ["nav", solid ? "nav--solid" : "", open ? "nav--open" : ""].join(" ");

  return (
    <header className={clases}>
      <div className="container nav__inner">
        <a href="#inicio" className="logo" aria-label="Inicio">
          <span className="logo__mark">JK</span>Kadosh
        </a>
        <nav className="nav__links" id="nav-links" aria-label="Secciones">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--primary btn--sm nav__cta" href={`mailto:${PERFIL.email}`}>
          Contáctame
        </a>
        <button
          className="nav__toggle"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
