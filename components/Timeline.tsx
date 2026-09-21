import { TRAYECTORIA } from "@/lib/content";

export default function Timeline() {
  return (
    <section className="section" id="trayectoria">
      <div className="container">
        <div className="head head--center">
          <p className="eyebrow">Trayectoria</p>
          <h2 className="title">
            Cómo he ido <span className="hl">avanzando</span>
          </h2>
        </div>
        <ol className="timeline">
          {TRAYECTORIA.map((t, i) => (
            <li key={t.titulo} className={i === TRAYECTORIA.length - 1 ? "tl tl--hot" : "tl"}>
              <span className="tl__date">{t.fecha}</span>
              <h3>{t.titulo}</h3>
              <p>{t.detalle}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
