'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useLanguageStore } from '@/store';
import { proyectosT } from '@/utils';
import Image from 'next/image';

export const Proyectos = () => {
  const { language } = useLanguageStore();
  const { h2, proyectos } = proyectosT(language);

  return (
    <motion.section
      id="proyectos"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50 py-20 px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative">
        {h2}
        <span className="block w-24 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
      </h2>

      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        className="max-w-5xl mx-auto"
      >
        {proyectos.map((proyecto, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl overflow-hidden bg-white shadow-xl transition-transform duration-300"
            >
              {/* Imagen del proyecto */}
              <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh]">
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Información del proyecto */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                  {proyecto.titulo}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {proyecto.descripcion}
                </p>
                <a
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium transition"
                >
                  Ver proyecto →
                </a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};
