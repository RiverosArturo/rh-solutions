import { Plan } from "@/components";
import Head from "next/head";

export const metadata = {
    title: "Planes de Precios | RH Solutions",
    description: "Conoce las opciones de pago y planes de servicios que RH Solutions ofrece para digitalizar tu negocio.",
    keywords: ["renta de páginas web", "pago único", "soluciones digitales", "Next.js", "desarrollo web profesional"],
    openGraph: {
        title: "Planes de Precios | RH Solutions",
        description: "Elige entre pago único o renta mensual y lleva tu negocio al siguiente nivel.",
        url: "https://rhsolutionsmx.com/planes",
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

export default function PlanPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Planes de Precios - RH Solutions",
        "url": "https://rhsolutionsmx.com/planes",
        "mainEntity": {
            "@type": "Organization",
            "name": "RH Solutions",
            "url": "https://rhsolutionsmx.com/",
            "logo": "https://res.cloudinary.com/dsu3au60t/image/upload/v1745367143/metadata_hxdnz0.png",
            "sameAs": [
                "https://www.facebook.com/share/16VVFCaeCu/",
                "https://www.instagram.com/rhsolutions_oficial?igsh=OGozMjZqOW44YjZp"
            ]
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
            <Plan />
        </>
    );
}