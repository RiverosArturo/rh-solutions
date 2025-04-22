"use client"
import { motion } from "framer-motion";
import { ContactForm, HeroInicio, Proyectos, Servicios } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <HeroInicio />
      <Servicios />
      <Proyectos />

      {/* Contacto */}
      <motion.section
        id="contacto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6 bg-white"
      >
        <ContactForm />
      </motion.section>
    </main>
  );
}
