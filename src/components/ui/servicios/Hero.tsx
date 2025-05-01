'use client';
import { useLanguageStore } from '@/store';
import { motion } from 'framer-motion';

export const Hero = () => {
  const { language } = useLanguageStore();
  const text = {
    h1: language === 'es' ?"Impulsa tu Éxito Digital con Nuestros Servicios Integrales" :"Boost Your Digital Success with Our Comprehensive Services",
    p: language === 'es' ?"En RH Solutions, ofrecemos una amplia gama de soluciones de desarrollo web y aplicaciones para llevar tu negocio al siguiente nivel." :"At RH Solutions, we offer a wide range of web development and application solutions to take your business to the next level.",
    a: language === 'es' ?"Descubre Nuestros Servicios" :"Discover Our Services",
  }

  return (
    <motion.section
      className="py-20 bg-blue-50"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl font-bold text-blue-700 mb-6"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          { text.h1 }
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          { text.p }
        </motion.p>
        <motion.a
          href="#servicios-lista"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          { text.a }
        </motion.a>
      </div>
    </motion.section>
  );
}
