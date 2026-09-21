import { DESTACADO, type Icono } from "@/lib/content";
import Icon from "./Icon";

const iconosFase: Icono[] = ["db", "api", "web", "movil"];

export default function FitSmart() {
  return (
    <section className="section" id="fitsmart">
      <span className="hero__block hero__block--b" aria-hidden="true" />
      <div className="container">
        <div className="head head--split">
          <div>
            <p className="eyebrow">Proyecto destacado · {DESTACADO.fecha}</p>
            <h2 className="title">
              <span className="hl">{DESTACADO.nombre}</span> {DESTACADO.subtitulo}
            </h2>
          </div>
          <p className="muted head__desc">{DESTACADO.descripcion}</p>
        </div>

        <div className="flow" aria-label="Cómo se conecta FitSmart">
          <div className="flow__node">
            <small>Socios</small>
            <strong>App Android</strong>
          </div>
          <div className="flow__node">
            <small>Admin y empleados</small>
            <strong>Panel web</strong>
          </div>
          <div className="flow__arrow" aria-hidden="true" />
          <div className="flow__node flow__node--hot">
            <small>JWT</small>
            <strong>API REST</strong>
          </div>
          <div className="flow__arrow" aria-hidden="true" />
          <div className="flow__node">
            <small>SQL Server</small>
            <strong>Base de datos</strong>
          </div>
        </div>

        <div className="phases">
          {DESTACADO.fases.map((f, i) => (
            <article className="phase" key={f.fase}>
              <div className="phase__top">
                <Icon name={iconosFase[i] ?? "web"} />
                <span className="phase__num">{f.fase}</span>
              </div>
              <h3>{f.titulo}</h3>
              <p className="phase__who">{f.usuario}</p>
              <ul className="phase__list">
                {f.puntos.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="phase__tech">{f.tech.join(" · ")}</p>
              <a className="phase__link" href={f.repo} target="_blank" rel="noopener noreferrer">
                Ver repositorio →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
