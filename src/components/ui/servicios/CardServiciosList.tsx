'use client';

import { JSX } from "react";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

interface Props {
    objeto: {
        title: string;
        services: {
            title: string;
            description: string[];
            icon: JSX.Element;
        }[];
    };
}

export const CardServiciosList = ({ objeto }: Props) => {
    const servicioVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-800 my-6 text-center tracking-tight leading-snug">
                {objeto.title}
            </h3>
            {/* Carrusel en pantallas pequeñas */}
            <div className="block md:hidden">
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={16}
                    centeredSlides={true} // <-- Esto centra el slide activo
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="!pb-8"
                >
                    {objeto.services.map((servicio, index) => (
                        <SwiperSlide key={index} className="flex">
                            <motion.div
                                className="bg-white rounded-xl shadow-lg p-6 mx-auto flex flex-col items-center text-center w-full h-full max-w-[90%]"
                                variants={servicioVariants}
                            >
                                <div className="text-4xl text-blue-600 mb-3">{servicio.icon}</div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">{servicio.title}</h4>
                                {servicio.description.map((desc, i) => (
                                    <p key={i} className="text-gray-600 text-sm mb-1">{desc}</p>
                                ))}
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


            {/* Grid en pantallas medianas/grandes */}
            <div
                className={`hidden md:grid gap-8 ${objeto.services.length === 1
                        ? 'place-items-center grid-cols-1'
                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    }`}
            >
                {objeto.services.map((servicio, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center w-full max-w-md"
                        variants={servicioVariants}
                    >
                        <div className="text-4xl text-blue-600 mb-4">{servicio.icon}</div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{servicio.title}</h4>
                        {servicio.description.map((desc, i) => (
                            <p key={i} className="text-gray-600 text-sm mb-1">{desc}</p>
                        ))}
                    </motion.div>
                ))}
            </div>

        </>
    )
}
