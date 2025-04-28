"use client";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useLanguageStore } from "@/store";
import Link from 'next/link';

export const Footer = () => {
  const { language } = useLanguageStore();
  const texto = language === "es" ? "Trabajamos contigo estés donde estés." : "We work with you wherever you are.";
  const texto2 = language === "es" ? "Todos los derechos reservados." : "All rights reserved.";

  return (
    <footer className="bg-gradient-to-r from-gray-100 via-white to-gray-100 border-t border-gray-300 py-10 px-6">
      <div className="max-w-5xl mx-auto text-center text-gray-700">
        <p className="text-lg font-medium mb-2">{texto}</p>

        <div className="flex justify-center gap-4 my-4">
          <Link
            href="https://www.facebook.com/share/16VVFCaeCu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full transition text-blue-600 text-xl"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.instagram.com/rhsolutions_oficial?igsh=OGozMjZqOW44YjZp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-pink-100 hover:bg-pink-200 p-3 rounded-full transition text-pink-500 text-xl"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://wa.me/5212311392413"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="bg-green-100 hover:bg-green-200 p-3 rounded-full transition text-green-500 text-xl"
          >
            <FaWhatsapp />
          </Link>
          <Link
            href="mailto:rh.solutions.contacto@gmail.com"
            aria-label="Correo"
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition text-gray-700 text-xl"
          >
            <FaEnvelope />
          </Link>
        </div>

        <p className="text-sm mt-6">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-blue-700">RH Solutions</span>. {texto2}
        </p>
      </div>
    </footer>
  );
};
