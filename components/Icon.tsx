import type { Icono } from "@/lib/content";

// Iconos simples dibujados con trazos SVG
const TRAZOS: Record<Icono, React.ReactNode> = {
  api: <path d="M8 6 3 12l5 6M16 6l5 6-5 6M14 4l-4 16" />,
  web: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 8h18M8 21h8M12 18v3" />
    </>
  ),
  movil: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  db: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  game: (
    <>
      <rect x="2" y="7" width="20" height="11" rx="4" />
      <path d="M7 11v4M5 13h4M16 12h.01M18 14h.01" />
    </>
  ),
  desk: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1" />
      <path d="M3 12h18M9 20h6M12 16v4" />
    </>
  ),
  book: <path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z" />,
};

export default function Icon({ name }: { name: Icono }) {
  return (
    <span className="icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {TRAZOS[name]}
      </svg>
    </span>
  );
}
