import { Nosotros } from "@/components";

export const metadata = {
  title: "Nosotros | RH Solutions",
  description: "Conoce al equipo detrás de RH Solutions, expertos en desarrollo web y digitalización empresarial.",
  keywords: ["desarrollo web", "digitalización", "Next.js", "automatización", "tecnología para negocios"],
  openGraph: {
    title: "Nosotros | RH Solutions",
    description: "Conoce al equipo detrás de RH Solutions",
    url: "https://rh-solutions.vercel.app/nosotros",
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

export default function NosotrosPage() {
  
  return (
    <Nosotros />
  )
}
