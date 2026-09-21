import { CIFRAS } from "@/lib/content";

export default function Stats() {
  return (
    <section className="stats container" id="cifras" aria-label="Cifras">
      <ul className="stats__grid">
        {CIFRAS.map((c) => (
          <li key={c.texto} className={c.destacado ? "stat stat--hot" : "stat"}>
            <strong>{c.numero}</strong>
            <span>{c.texto}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
