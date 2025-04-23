import { Contacto } from "@/components";


export const metadata = {
    title: "Contáctanos | RH Solutions",
    description: "¿Listo para digitalizar tu negocio? Hablemos. RH Solutions está para ayudarte a crecer con tecnología.",
    keywords: ["contacto RH Solutions", "consultoría tecnológica", "servicios digitales", "automatización empresarial", "soluciones web"],
    openGraph: {
        title: "Contáctanos | RH Solutions",
        description: "Agenda una asesoría gratuita con nuestros expertos en desarrollo y automatización.",
        url: "https://rh-solutions.vercel.app/contacto",
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

export default function ContactoPage() {
    return (
        <Contacto />
    )
}
