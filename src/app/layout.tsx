import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://rh-solutions.vercel.app"),
  title: "RH Solutions",
  description: "Soluciones digitales en desarrollo web y apps",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
