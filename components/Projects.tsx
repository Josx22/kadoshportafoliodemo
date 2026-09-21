"use client";

import { useState } from "react";
import { PROYECTOS, type Icono, type Proyecto } from "@/lib/content";
import Icon from "./Icon";

function iconoDe(p: Proyecto): Icono {
  const t = p.tipo.toLowerCase();
  if (t.includes("juego")) return "game";
  if (t.includes("android")) return "movil";
  if (t.includes("api")) return "api";
  if (t.includes("escritorio")) return "desk";
  if (t.includes("ejercicios")) return "book";
  return "web";
}

// Más recientes primero
const lista = [...PROYECTOS].sort((a, b) => b.anio - a.anio);
const categorias = ["Todos", ...new Set(lista.flatMap((p) => p.categoria))];

export default function Projects() {
  const [filtro, setFiltro] = useState("Todos");
  const visibles = filtro === "Todos" ? lista : lista.filter((p) => p.categoria.includes(filtro));

  return (
    <section className="section section--alt" id="proyectos">
      <div className="container">
        <div className="head head--center">
          <p className="eyebrow">Portafolio</p>
          <h2 className="title">
            Otros <span className="hl">proyectos</span>
          </h2>
          <div className="tabs" role="group" aria-label="Filtrar por tecnología">
            {categorias.map((c) => (
              <button
                key={c}
                type="button"
                className="tab"
                aria-pressed={filtro === c}
                onClick={() => setFiltro(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className={filtro === "Todos" ? "grid" : "grid is-filtered"}>
          {visibles.map((p) => (
            <article key={p.nombre} className={p === lista[0] ? "card card--hot" : "card"}>
              <div className="card__thumb">
                <Icon name={iconoDe(p)} />
                <span className="card__lang">{p.categoria.join(" · ")}</span>
              </div>
              <div className="card__body">
                <div className="card__meta">
                  <span>{p.tipo}</span>
                  <span>{p.fecha}</span>
                </div>
                <h3>{p.nombre}</h3>
                <p>{p.descripcion}</p>
                <p className="card__tech">{p.tech.join(" · ")}</p>
                <a className="card__link" href={p.repo} target="_blank" rel="noopener noreferrer">
                  Ver código →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
