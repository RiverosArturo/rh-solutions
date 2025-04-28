'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguageStore } from '@/store';
import { heroIni } from '@/utils';

export const HeroInicio = () => {
    const { language } = useLanguageStore();
    const { h1, h2, p, button } = heroIni(language);
    return (
        <section className="w-full h-screen flex flex-col md:flex-row items-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white overflow-hidden px-0">
            {/* Texto lado izquierdo */}
            <div className="w-full lg:w-1/2 z-10 text-center md:text-left pl-3 md:pl-10">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 md:mt-0 mt-14"
                >
                    {h1} <br /> {h2}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-md md:text-lg text-gray-300 mb-8 max-w-xl mx-auto md:mx-0"
                >
                    {p}
                </motion.p>

                <Link href="#seccontacto" passHref>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-medium shadow-lg"
                    >
                        {button} <span className="ml-2">↗</span>
                    </motion.button>
                </Link>
            </div>

            {/* Imagen lado derecho */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center justify-center w-full lg:w-1/2 mt-16 md:mt-0 relative z-10 pr-3 md:pr-10"
            >
                <div className="relative w-[340px] h-[440px]">
                    <Image
                        src="https://res.cloudinary.com/dsu3au60t/image/upload/v1745271496/heroImage_xzzymn.png"
                        alt="Persona señalando"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        className="object-cover rounded-xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-xl rotate-6 -z-10"></div>
                    <div className="absolute top-4 left-4 w-full h-full border-2 border-blue-500 rounded-xl rotate-12 -z-20"></div>
                </div>
            </motion.div>

            {/* Formas decorativas */}
            {/* <div className="absolute top-10 right-10 w-6 h-6 border-2 border-white rounded-full"></div> */}
            {/* <div className="absolute bottom-16 left-10 w-8 h-8 border-l-2 border-b-2 rotate-45 border-white"></div> */}
        </section>
    );
};
