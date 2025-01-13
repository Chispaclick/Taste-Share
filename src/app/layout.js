import ClientComponent from "@/components/client-component/ClientComponent";
import "./globals.css"; // Asegúrate de incluir tu archivo CSS global
import { Kanit } from "next/font/google";


// Carga la fuente Kanit con los pesos deseados
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kanit",
});

// Metadata para el layout
export const metadata = {
  title: "Taste Share",
  description: "Generated by create next app",
  icons: {
    icon: "/logo_taste_share.png", // Ruta al logo dentro de la carpeta public
  },
};

// RootLayout
function RootLayout({ children }) {
  return (
    <html lang="en" className={kanit.className}>
      <body>
        {/* Incluye el ClientComponent que maneja NavBar y SlideMain */}
        <ClientComponent>{children}</ClientComponent>
      </body>
    </html>
  );
}

export default RootLayout;
