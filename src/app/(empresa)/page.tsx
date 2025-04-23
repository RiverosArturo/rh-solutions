import { ContactForm, HeroInicio, Proyectos, Servicios } from "@/components";

export const metadata = {
  title: "Soluciones Digitales para Negocios | RH Solutions",
  description: "Impulsa tu negocio con desarrollo web y automatización personalizada. RH Solutions transforma tu presencia digital.",
  keywords: ["soluciones digitales", "automatización empresarial", "desarrollo web Puebla", "Next.js", "tecnología para negocios"],
  openGraph: {
    title: "Soluciones Digitales para Negocios | RH Solutions",
    description: "RH Solutions impulsa tu empresa con desarrollo web y automatización hecha a la medida.",
    url: "https://res.cloudinary.com/dsu3au60t/image/upload/v1745367143/metadata_hxdnz0.png",
    siteName: "RH Solutions",
    type: "website",
    images: [
      {
        url: "/#",
        width: 1200,
        height: 630,
      },
    ],
  },
};


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <HeroInicio />
      <Servicios />
      <Proyectos />
      <div className="py-20 px-6">
        <ContactForm />
      </div>
    </main>
  );
}
