'use client';

import { useLanguageStore } from '@/store';
import Image from 'next/image';
import Link from 'next/link';

export const PageNotFound = () => {
  const { language } = useLanguageStore();
  const textT = {
    h1: "404",
    h2: language === "es" ? "¡Uy! Esta página no existe" : "Oops! This page could not be found",
    p: language === "es"
      ? "Es posible que hayas escrito mal la dirección o que la página se haya movido. Pero no te preocupes, estamos aquí para ayudarte a volver."
      : "You may have mistyped the address or the page might have moved. But don't worry, we're here to help you get back on track.",
    link: language === "es" ? "Volver al inicio" : "Back to homepage",
    logo: language === "es" ? "Logo RH Solutions" : "RH Solutions Logo",
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-6 py-16 bg-white text-gray-800">

      <div className="text-center lg:text-left max-w-xl space-y-6">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-blue-600">{textT.h1}</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold">{textT.h2}</h2>
        <p className="text-gray-600 text-base sm:text-lg">
          {textT.p}
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium px-6 py-3 rounded-full shadow-md"
        >
          {textT.link}
        </Link>
      </div>

      <div className="mb-10 lg:mb-0 lg:ml-16">
        <Image
          src="/imgs/logo.png"
          alt={textT.logo}
          width={500}
          height={500}
          className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
};
