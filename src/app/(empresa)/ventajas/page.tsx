import { Ventajas } from "@/components";
import Head from "next/head";


export const metadata = {
  title: "Ventajas de Digitalizar tu Negocio | RH Solutions",
  description: "Descubre cómo RH Solutions mejora tus procesos con soluciones tecnológicas que ahorran tiempo y aumentan productividad.",
  keywords: ["digitalización de negocios", "automatización de procesos", "transformación digital", "tecnología empresarial"],
  openGraph: {
    title: "Ventajas de Digitalizar tu Negocio | RH Solutions",
    description: "Ahorra tiempo, reduce errores y potencia tu empresa con nuestras soluciones digitales.",
    url: "https://rh-solutions.vercel.app/ventajas",
    siteName: "RH Solutions",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dsu3au60t/image/upload/v1745367143/metadata_hxdnz0.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function PorQueDigitalizarPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Ventajas - RH Solutions",
    "url": "https://rhsolutionsmx.com/ventajas",
    "description": "Descubre las ventajas de trabajar con RH Solutions, incluyendo soluciones personalizadas, eficiencia operativa y soporte continuo."
  }; 
  
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Ventajas />
    </>
  )
}