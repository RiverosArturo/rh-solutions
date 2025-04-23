import { Ventajas } from "@/components";


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
  
  return (
    <Ventajas />
  )
}