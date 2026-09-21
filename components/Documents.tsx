import Image from "next/image";
import { DOCUMENTOS } from "@/lib/content";

export default function Documents() {
  return (
    <section className="section section--alt" id="documentos">
      <div className="container">
        <div className="head head--center">
          <p className="eyebrow">Documentos</p>
          <h2 className="title">
            Hoja de vida y <span className="hl">CV</span>
          </h2>
        </div>

        <div className="docs">
          {DOCUMENTOS.map((d) => (
            <article key={d.archivo} className="doc">
              <a className="doc__preview" href={d.archivo} target="_blank" rel="noopener noreferrer"
                 aria-label={`Ver ${d.titulo} en PDF`}>
                <Image src={d.vista} alt={`Vista previa: ${d.titulo}`} width={765} height={990}
                       sizes="(max-width: 560px) 100vw, 480px" />
              </a>
              <div className="doc__body">
                <span className="doc__tag">PDF · 1 página</span>
                <h3>{d.titulo}</h3>
                <p>{d.texto}</p>
                <div className="doc__btns">
                  <a className="btn btn--primary btn--sm" href={d.archivo} target="_blank" rel="noopener noreferrer">
                    Ver
                  </a>
                  <a className="btn btn--ghost btn--sm" href={d.archivo} download>
                    Descargar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
