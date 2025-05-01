'use client';
import { useLanguageStore } from '@/store';
import { motion } from 'framer-motion';

export const CallToAction = () => {
    const { language } = useLanguageStore();

    const text = {
        h2: language === 'es' ?"¿Listo para Transformar tu Presencia Digital?" :"Ready to Transform Your Digital Presence?",
        p: language === 'es' ?"¡Contáctanos hoy mismo para discutir tus necesidades y obtener una cotización personalizada sin compromiso!" :"Contact us today to discuss your needs and get a personalized, no-obligation quote!",
        a: language === 'es' ?"Contactar Ahora" :"Contact Now",
    }

    return (
        <motion.section
            className="py-20 bg-blue-500 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    className="text-3xl font-bold mb-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    { text.h2 }
                </motion.h2>
                <motion.p
                    className="text-lg mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    { text.p }
                </motion.p>
                <motion.a
                    href="/contacto" // Reemplaza con la ruta a tu página de contacto
                    className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                >
                    { text.a }
                </motion.a>
            </div>
        </motion.section>
    )
}
