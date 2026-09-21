# Portafolio — Josue Kadosh

Proyecto en **Next.js**. Los estilos están en CSS normal (`app/globals.css`), así que no necesitas saber Tailwind para cambiarlos.

## Correrlo

```bash
npm install     # solo la primera vez
npm run dev
```

Abre http://localhost:3000

## Dónde está cada cosa

```
lib/content.ts      → TODO el contenido: perfil, cifras, servicios, FitSmart, proyectos, trayectoria
app/globals.css     → todos los estilos (los colores están al inicio, en :root)
app/layout.tsx      → título de la pestaña y la fuente (Poppins)
app/page.tsx        → el orden de las secciones
components/         → una sección por archivo (Hero, About, Projects, etc.)
public/             → imágenes (aquí va tu foto)
```

Para cambiar textos o agregar proyectos **solo edita `lib/content.ts`**. Los componentes leen de ahí.

## Agregar un proyecto

En `lib/content.ts`, dentro de `PROYECTOS`, copia uno de los bloques `{ ... },` y cambia:

- `nombre`, `fecha`, `anio` (número, sirve para ordenar)
- `tipo`: texto corto, por ejemplo "API REST"
- `categoria`: para los filtros, por ejemplo `["Java"]`
- `tech`: tecnologías usadas (las barras de "Sobre mí" se calculan con esto)
- `descripcion` y `repo`

## Poner tu foto

1. Copia tu foto a `public/`, por ejemplo `public/josue.jpg`.
2. En `lib/content.ts` escribe `foto: "/josue.jpg"` (con la barra al inicio).

## Cambiar el color

En `app/globals.css`, dentro de `:root`, cambia `--accent` (el naranja) y `--accent-2` (su tono para hover).

## Publicarlo

Sube el repositorio a GitHub e impórtalo en [Vercel](https://vercel.com). Detecta Next.js solo; no hay que configurar nada.
