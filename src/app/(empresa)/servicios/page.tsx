import { CallToAction, Hero, ServiciosList } from "@/components";
import Head from "next/head";

export const metadata = {
    title: "Servicios | RH Solutions",
    description: "Impulsa tu negocio con nuestros planes de desarrollo web y aplicaciones. Pago único o mensual. Diseño profesional, velocidad, SEO y escalabilidad garantizada.",
    keywords: [
        "desarrollo de páginas web",
        "desarrollo de aplicaciones web",
        "Next.js",
        "diseño web profesional",
        "renta de sitios web",
        "sitios web para negocios",
        "servicios digitales para empresas",
        "paginas web económicas",
        "desarrollo web personalizado"
    ],
    openGraph: {
        title: "Servicios | RH Solutions",
        description: "Renta o compra tu página web con diseño moderno, rendimiento optimizado y enfoque en conversión. ¡Tu presencia digital comienza aquí!",
        url: "https://rhsolutionsmx.com/servicios",
        siteName: "RH Solutions",
        type: "website",
        images: [
            {
                url: "https://res.cloudinary.com/dsu3au60t/image/upload/v1745367143/metadata_hxdnz0.png",
                width: 1200,
                height: 630,
                alt: "RH Solutions - Servicios Web"
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Servicios Web a la Medida | RH Solutions",
        description: "Planes flexibles y diseño profesional para impulsar tu negocio. Renta o compra tu sitio web con nosotros.",
        images: ["https://res.cloudinary.com/dsu3au60t/image/upload/v1745367143/metadata_hxdnz0.png"],
    },
};

export default function ServiciosPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Desarrollo de Páginas y Aplicaciones Web",
        "provider": {
            "@type": "Organization",
            "name": "RH Solutions",
            "url": "https://rhsolutionsmx.com",
            "logo": "https://res.cloudinary.com/dsu3au60t/image/upload/v1745367143/metadata_hxdnz0.png",
            "sameAs": [
                "https://www.facebook.com/share/16VVFCaeCu/",
                "https://www.instagram.com/rhsolutions_oficial?igsh=OGozMjZqOW44YjZp"
            ]
        },
        "areaServed": {
            "@type": "Country",
            "name": "México"
        },
        "description": "RH Solutions ofrece servicios profesionales de desarrollo web y aplicaciones adaptados a las necesidades de tu negocio. Planes flexibles con diseño moderno, SEO y velocidad de carga optimizada.",
        "url": "https://rhsolutionsmx.com/servicios"
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <div className="bg-gray-100">
                <Hero />
                <ServiciosList />
                <CallToAction />
            </div>
        </>
    );
}