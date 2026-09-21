import { SERVICIOS } from "@/lib/content";
import Icon from "./Icon";

export default function Services() {
  return (
    <section className="section section--alt" id="servicios">
      <div className="container">
        <div className="head">
          <p className="eyebrow">Qué hago</p>
          <h2 className="title">
            Del modelo de datos a la <span className="hl">app</span>
          </h2>
        </div>
        <div className="services">
          {SERVICIOS.map((s, i) => (
            <article key={s.titulo} className={i === 0 ? "service service--hot" : "service"}>
              <Icon name={s.icono} />
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
              <span className="service__tech">{s.tech}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
