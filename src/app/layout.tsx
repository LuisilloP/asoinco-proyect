import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import HeaderAsoinco from "../app/layouts/HeaderAsoinco";
import FooterAsoinco from "./layouts/FooterAsoinco";

import IcoAso from "../../public/Ico.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asoinco Preinscripción",
  description: "ASOINCO te invita a su Feria anual, donde podrás descubrir las últimas novedades de la industria, establecer contactos y generar oportunidades de negocio. ¡Preinscríbete ahora y obtén acceso a beneficios exclusivos!",
  keywords: "Feria ASOINCO, Preinscripcion ASOINCO, Preinscripción ASOINCO, ASOINCO, "
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* <link rel="icon" href="https://www.asoinco.cl/wp-content/uploads/2023/08/cropped-icono-asoinco-1-32x32.png" sizes="32x32"></link> */}
        <link rel="icon" href={IcoAso.src} sizes="32x32"></link>

      </head>
      <body className={inter.className}>
        <HeaderAsoinco></HeaderAsoinco>
        {children}
        <FooterAsoinco></FooterAsoinco>
      </body>

    </html>
  );
}
