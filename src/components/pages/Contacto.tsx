'use client';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { ContactForm } from '@/components';
import { useLanguageStore } from '@/store';
import { contactoTexto, fadeIn } from '@/utils';
import Link from 'next/link';

export const Contacto = () => {
    const { language } = useLanguageStore();
    const { hero, beneficios, beneficiosTitle, redes } = contactoTexto(language)
    return (
        <main className="max-w-5xl mx-auto px-6 py-20">
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={0}
                className="text-center mb-20"
            >
                <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                    {hero.title}
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    {hero.desc} <strong className="text-blue-600">{hero.desc2}</strong> {hero.desc3}
                </p>
                <div className="mt-8 flex justify-center">
                    <Link
                        href="#seccontacto"
                        className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-full shadow-lg"
                    >
                        {hero.button}
                    </Link>
                </div>
            </motion.section>

            {/* Beneficios */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={1}
                className="mb-20"
            >
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    {beneficiosTitle}
                </h2>
                <ul className="grid md:grid-cols-2 gap-8">
                    {beneficios.map((item, i) => (
                        <motion.li
                            key={i}
                            className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
                            variants={fadeIn}
                            custom={i + 2}
                        >
                            <div className="text-4xl mb-3">{item.icon}</div>
                            <p className="text-gray-700 font-medium">{item.text}</p>
                        </motion.li>
                    ))}
                </ul>
            </motion.section>

            {/* Redes Sociales */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={5}
                className="mb-20 text-center"
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {redes.title}
                </h2>
                <p className="text-gray-600 mb-6">{redes.desc}</p>

                <div className="flex justify-center gap-6 text-4xl">
                    <Link
                        href="https://www.facebook.com/share/16VVFCaeCu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition"
                        aria-label="Facebook"
                    >
                        <FaFacebook />
                    </Link>
                    <Link
                        href="https://www.instagram.com/rhsolutions_oficial?igsh=OGozMjZqOW44YjZp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-600 transition"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        href="https://wa.me/5212311392413"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 transition"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp />
                    </Link>
                    <Link
                        href="mailto:rh.solutions.contacto@gmail.com"
                        className="text-gray-600 hover:text-gray-800 transition"
                        aria-label="Correo"
                    >
                        <FaEnvelope />
                    </Link>
                </div>
            </motion.section>

            {/* Formulario */}
            <motion.section
                id="seccontacto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={6}
            >
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    {redes.formularioTitle}
                </h2>
                <ContactForm />
            </motion.section>
        </main>
    )
}
