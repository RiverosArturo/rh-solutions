"use client"
import { useLanguageStore } from "@/store"

export const Footer = () => {
  const { language } = useLanguageStore();
  const texto = language === "es" ?"Todos los derechos reservados." :"All rights reserved.";
  return (
    <footer className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border-t border-gray-200 py-6">
      <div className="text-center text-sm text-gray-600 tracking-wide">
        <span className="block mb-1">
          © {new Date().getFullYear()} <span className="font-semibold text-blue-600">RH Solutions</span>
        </span>
        <span className="text-gray-400">{ texto }</span>
      </div>
    </footer>
  )
}
