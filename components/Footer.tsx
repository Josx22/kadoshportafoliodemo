import { PERFIL } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#inicio" className="logo">
          <span className="logo__mark">JK</span>Kadosh
        </a>
        <p>
          © {new Date().getFullYear()} {PERFIL.nombre} · {PERFIL.ubicacion}
        </p>
        <a href={PERFIL.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
      </div>
    </footer>
  );
}
