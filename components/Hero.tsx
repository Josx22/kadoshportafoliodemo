import Image from "next/image";
import { PERFIL } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <span className="hero__block hero__block--a" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hello">Hola, soy</p>
          <h1 className="hero__name">{PERFIL.nombre}</h1>
          <p className="hero__role">
            {PERFIL.rol} · {PERFIL.ubicacion}
          </p>
          <p className="hero__desc">{PERFIL.tesis}</p>
          <div className="hero__btns">
            <a href="#proyectos" className="btn btn--primary">
              Ver proyectos
            </a>
            <a className="btn btn--ghost" href={PERFIL.github} target="_blank" rel="noopener noreferrer">
              Mi GitHub
            </a>
          </div>
        </div>

        <div className="hero__media">
          <div className="photo">
            {PERFIL.foto ? (
              <Image src={PERFIL.foto} alt={`Foto de ${PERFIL.nombre}`} fill sizes="400px" priority />
            ) : (
              <div className="photo__mono" aria-hidden="true">
                JK
              </div>
            )}
            <svg className="photo__lines" viewBox="0 0 400 460" aria-hidden="true">
              <polyline points="30,90 250,20 370,260 120,430 30,90" fill="none" />
              <polyline points="80,40 360,120 300,420 20,300 80,40" fill="none" />
            </svg>
          </div>
          <div className="badge-card">
            <strong>FitSmart</strong>
            <span>BD · API · Web · Android</span>
          </div>
        </div>
      </div>
      <a href="#cifras" className="scroll" aria-label="Bajar">
        <span />
      </a>
    </section>
  );
}
