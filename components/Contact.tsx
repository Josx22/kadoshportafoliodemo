"use client";

import { useState } from "react";
import { PERFIL } from "@/lib/content";

export default function Contact() {
  const [aviso, setAviso] = useState("");

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(PERFIL.email);
      setAviso("Correo copiado");
    } catch {
      setAviso(`No se pudo copiar: ${PERFIL.email}`);
    }
    setTimeout(() => setAviso(""), 2200);
  };

  return (
    <section className="cta" id="contacto">
      <div className="container cta__inner">
        <div>
          <p className="eyebrow eyebrow--dark">¿Tienes un proyecto o una vacante?</p>
          <h2 className="cta__title">Estoy disponible para trabajar</h2>
          <p className="cta__mail">{PERFIL.email}</p>
        </div>
        <div className="cta__btns">
          <a className="btn btn--dark" href={`mailto:${PERFIL.email}`}>
            Enviar correo
          </a>
          <button className="btn btn--line" type="button" onClick={copiar}>
            Copiar correo
          </button>
        </div>
      </div>
      <div className="toast" role="status" aria-live="polite" hidden={!aviso}>
        {aviso}
      </div>
    </section>
  );
}
