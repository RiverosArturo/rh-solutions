import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";


export const metadata: Metadata = {
  title: "RH Solutions",
  description: "Soluciones digitales en desarrollo web y apps",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased bg-white text-gray-800">{children}</body>
    </html>
  );
}
