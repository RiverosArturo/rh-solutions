'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
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
      className="py-20 px-6 bg-gray-50"
    >
      <h2 className="relative text-3xl font-semibold text-center mb-12 text-gray-800 after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2" >{h2}</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        className="max-w-full mx-auto"
      >
        {proyectos.map((proyecto, i) => (
          <SwiperSlide key={i}>
            <motion.a
              href={proyecto.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="block overflow-hidden rounded-xl shadow-lg group transition relative"
            >
              <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:opacity-80 transition rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-x3 bg-black/15 py-4 px-6 text-white text-center">
                  <div className="text-xl font-semibold tracking-wide drop-shadow-sm">
                    {proyecto.titulo}
                  </div>
                </div>
              </div>
            </motion.a>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};
