import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Poppins no es fuente variable: hay que indicar los grosores
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Josue Kadosh · Desarrollador de software",
  description:
    "Portafolio de Josue Kadosh, desarrollador de software en El Salvador. APIs en ASP.NET Core y Spring Boot, bases de datos SQL Server y apps Android en Kotlin.",
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
