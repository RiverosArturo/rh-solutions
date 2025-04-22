"use client";

import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useLanguageStore } from "@/store";

export const WhatsAppButton = () => {
  const { language } = useLanguageStore();
  const mensaje = encodeURIComponent("Hola, me interesa una cotización con RH Solutions.");
  const url = `https://wa.me/5212311392413?text=${mensaje}`;
  const label = language === "es" ?"Contactar por WhatsApp" :"Contact by WhatsApp";
  const title = language === "es" ?"Escríbenos por WhatsApp" :"Write us on WhatsApp";


  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ label }
      title={ title }
      className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
    >
      <FaWhatsapp className="text-2xl" />
    </Link>
  );
};
