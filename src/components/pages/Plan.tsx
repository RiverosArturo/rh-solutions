"use client";
import { motion } from "framer-motion";
import { ContactForm } from "../ui/ContactForm";
import { FaCheckCircle, FaRocket, FaPaintBrush } from "react-icons/fa";
import Link from "next/link";
import { useLanguageStore } from "@/store";
import { planTexto } from "@/utils";

export const Plan = () => {
    const { language } = useLanguageStore();
    const { title, card1, card2 } = planTexto(language)
    return (
        <section className="py-20 bg-gray-50" id="planes">
            <div className="container mx-auto px-6">
                <motion.h1
                    className="text-5xl font-extrabold text-center text-blue-700 leading-tight mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {title}
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                    <motion.div
                        className="p-8 bg-white rounded-2xl shadow-lg flex flex-col justify-between border-2 border-blue-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-blue-600 flex items-center"><FaRocket className="mr-2" />{card1.title}</h3>
                        <p className="mb-6 text-gray-700">
                            {card1.p}
                        </p>
                        <ul className="space-y-3 mb-6 text-gray-600">
                            {
                                card1.list.map((li) => (
                                    <li key={li.name} className="flex items-center"><FaCheckCircle className="mr-2 text-green-500" />{li.name}</li>
                                ))
                            }
                        </ul>
                        <p className="text-3xl font-bold text-blue-600 mb-6">{card1.p2}</p>
                        <Link href="#seccontacto" className="text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition font-semibold">
                            {card1.button}
                        </Link>
                    </motion.div>

                    <motion.div
                        className="p-8 bg-white rounded-2xl shadow-lg flex flex-col justify-between border-2 border-green-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-green-600 flex items-center"><FaPaintBrush className="mr-2" />{card2.title}</h3>
                        <p className="mb-6 text-gray-700">
                            {card2.p}
                        </p>
                        <ul className="space-y-3 mb-6 text-gray-600">
                            {
                                card2.list.map((li) => (
                                    <li key={li.name} className="flex items-center"><FaCheckCircle className="mr-2 text-green-500" />{li.name}</li>
                                ))
                            }
                            {/* <li className="flex items-center"><FaCheckCircle className="mr-2 text-green-500" /> 1 actualización de contenido al mes</li> */}
                        </ul>
                        <p className="text-3xl font-bold text-green-600 mb-6">{card2.p2}</p>
                        <Link href="#seccontacto" className="text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition font-semibold">
                            {card2.button}
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="py-20 px-6" id="seccontacto">
                <ContactForm />
            </div>
        </section>
    )
}