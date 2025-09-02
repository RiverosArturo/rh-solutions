import { ContactForm, HeroInicio, Proyectos, Servicios } from "@/components";
import Head from "next/head";

export const metadata = {
  title: "Soluciones Digitales para Negocios | RH Solutions",
  description: "Impulsa tu negocio con desarrollo web y automatización personalizada. RH Solutions transforma tu presencia digital.",
  keywords: ["soluciones digitales", "automatización empresarial", "desarrollo web Puebla", "Next.js", "tecnología para negocios"],
  openGraph: {
    title: "Soluciones Digitales para Negocios | RH Solutions",
    description: "RH Solutions impulsa tu empresa con desarrollo web y automatización hecha a la medida.",
    url: "https://rhsolutionsmx.com/",
    siteName: "RH Solutions",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dsu3au60t/image/upload/v1756495727/logoRHS_tn5epp.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};


export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RH Solutions",
    "url": "https://rhsolutionsmx.com/",
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <main className="min-h-screen bg-white text-gray-800">
        <HeroInicio />
        <Servicios />
        <Proyectos />
        <div className="py-20 px-6" id="seccontacto">
          <ContactForm />
        </div>
      </main>
    </>
  );
}
