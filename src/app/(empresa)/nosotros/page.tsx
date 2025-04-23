import Head from "next/head";
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Nosotros - RH Solutions",
    "url": "https://rh-solutions.vercel.app/nosotros",
    "mainEntity": {
      "@type": "Organization",
      "name": "RH Solutions",
      "url": "https://rh-solutions.vercel.app",
      "logo": "https://res.cloudinary.com/dsu3au60t/image/upload/v1745367143/metadata_hxdnz0.png",
      "sameAs": [
        "https://www.facebook.com/share/16VVFCaeCu/",
        "https://www.instagram.com/rhsolutions_oficial?igsh=OGozMjZqOW44YjZp"
      ]
    }
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Nosotros />
    </>
  );
}
