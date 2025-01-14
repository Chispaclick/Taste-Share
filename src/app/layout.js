"use client";
import "./globals.css"; // Asegúrate de incluir tu archivo CSS global
import { Kanit } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { metadata } from "./metada";
import { useEffect } from "react";

import ClientComponent from "@/components/client-component/ClientComponent";

// Carga la fuente Kanit con los pesos deseados
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kanit",
});

// Metadata para el layout

// RootLayout
function RootLayout({ children }) {
  // Manejo de metadata usando useEffect
  useEffect(() => {
    // Actualiza el título del documento
    document.title = metadata.title;

    // Actualiza la descripción
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", metadata.description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = metadata.description;
      document.head.appendChild(newMeta);
    }

    // Actualiza el icono
    const linkIcon = document.querySelector("link[rel='icon']");
    if (linkIcon) {
      linkIcon.href = metadata.icons.icon;
    } else {
      const newIcon = document.createElement("link");
      newIcon.rel = "icon";
      newIcon.href = metadata.icons.icon;
      document.head.appendChild(newIcon);
    }
  }, []);

  return (
    <html lang="en" className={kanit.className}>
      <body>
        <Provider store={store}>
          <ClientComponent>
            {children}
          </ClientComponent>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
