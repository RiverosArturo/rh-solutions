import Head from "next/head";
import { Contacto } from "@/components";

export const metadata = {
    title: "Contáctanos | RH Solutions",
    description: "¿Listo para digitalizar tu negocio? Hablemos. RH Solutions está para ayudarte a crecer con tecnología.",
    keywords: ["contacto RH Solutions", "consultoría tecnológica", "servicios digitales", "automatización empresarial", "soluciones web"],
    openGraph: {
        title: "Contáctanos | RH Solutions",
        description: "Agenda una asesoría gratuita con nuestros expertos en desarrollo y automatización.",
        url: "https://rhsolutionsmx.com/contacto",
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

export default function ContactoPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contacto - RH Solutions",
        "url": "https://rhsolutionsmx.com/contacto",
        "mainEntity": {
            "@type": "Organization",
            "name": "RH Solutions",
            "url": "https://rhsolutionsmx.com/",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+52-231-139-2413",
                "contactType": "customer support",
                "areaServed": "MX",
                "availableLanguage": ["es", "en"]
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Remoto",
                "addressLocality": "Teziutlán",
                "addressRegion": "Puebla",
                "postalCode": "73885",
                "addressCountry": "MX"
            }
        }
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <Contacto />
        </>
    );
}
