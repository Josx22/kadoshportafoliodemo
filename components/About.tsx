import { DESTACADO, PERFIL, PROYECTOS } from "@/lib/content";

// Cuenta en cuántos proyectos aparece cada tecnología (FitSmart cuenta como uno)
function tecnologiasMasUsadas(cantidad: number) {
  const listas = [
    ...PROYECTOS.map((p) => p.tech),
    [...new Set(DESTACADO.fases.flatMap((f) => f.tech))],
  ];
  const conteo: Record<string, number> = {};
  listas.forEach((lista) => lista.forEach((t) => (conteo[t] = (conteo[t] ?? 0) + 1)));
  return Object.entries(conteo)
    .sort((a, b) => b[1] - a[1])
    .slice(0, cantidad);
}

export default function About() {
  const top = tecnologiasMasUsadas(5);
  const max = top[0]?.[1] ?? 1;

  return (
    <section className="section" id="sobre-mi">
      <div className="container about">
        <div className="about__media">
          <div className="code-card" aria-label="Fragmento de la API de FitSmart">
            <div className="code-card__bar">
              <i />
              <i />
              <i />
              <span>GymApi / Controllers</span>
            </div>
            <pre>
              <code>
                <span className="c">{"// Endpoints reales de FitSmart"}</span>
                {"\n"}<span className="k">POST</span>{"   /api/Auth/login\n"}
                <span className="k">GET</span>{"    /api/Usuarios/buscar/{dui}\n"}
                <span className="k">GET</span>{"    /api/Planes\n"}
                <span className="k">POST</span>{"   /api/Suscripcion/asignar\n"}
                <span className="k">POST</span>{"   /api/Suscripcion/{id}/pagar\n"}
                <span className="k">GET</span>{"    /api/Pagos/historial/{id}\n"}
                <span className="k">GET</span>{"    /api/Maquinaria\n"}
                <span className="k">GET</span>{"    /api/Admin/reportes/ingresos"}
              </code>
            </pre>
          </div>
          <div className="since">
            <strong>2025</strong>
            <span>
              Primer proyecto
              <br />
              en GitHub
            </span>
          </div>
        </div>

        <div className="about__text">
          <p className="eyebrow">Sobre mí</p>
          <h2 className="title">
            Me gusta entender el sistema <span className="hl">completo</span>
          </h2>
          <p className="muted">{PERFIL.resumen}</p>
          <p className="muted">
            Busco: <strong className="white">{PERFIL.disponible}</strong>.
          </p>

          <div className="bars" aria-label="Tecnologías más usadas en mis proyectos">
            {top.map(([tech, n]) => (
              <div className="bar" key={tech}>
                <div className="bar__label">
                  <span>{tech}</span>
                  <span className="bar__n">
                    {n} {n === 1 ? "proyecto" : "proyectos"}
                  </span>
                </div>
                <div className="bar__track">
                  <span className="bar__fill" style={{ width: `${Math.round((n / max) * 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="bars__note">Cada barra indica en cuántos de mis proyectos aparece esa tecnología.</p>

          <div className="about__btns">
            <a className="btn btn--primary" href={`mailto:${PERFIL.email}`}>
              Escríbeme
            </a>
            <a href="#proyectos" className="btn btn--ghost">
              Ver mi trabajo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
