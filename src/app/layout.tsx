import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://rhsolutionsmx.com/"),
  title: "RH Solutions",
  description: "Soluciones digitales en desarrollo web y apps",
  verification: {
    google: "nou6mVBxa46Ace5aSDUfQyyxcyBtn8RKncyZ3GDvUTc",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
