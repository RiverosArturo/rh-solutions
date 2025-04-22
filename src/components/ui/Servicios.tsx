import { useLanguageStore } from "@/store";
import { serviciosT } from "@/utils";
import { motion } from "framer-motion";

export const Servicios = () => {
  const { language } = useLanguageStore();
  const { h2, servicios } = serviciosT(language);
  return (
    <motion.section
      id="servicios"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 bg-white"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 tracking-tight drop-shadow-md">
        {h2}
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {
          servicios.map(servicio => (
            <div key={ servicio.h3 } className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out group">
              <div className="text-blue-600 text-4xl mb-4 group-hover:rotate-6 transition-transform">{servicio.form}</div>
              <h3 className="text-2xl font-semibold mb-3 text-neutral-800">{servicio.h3}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {servicio.p}
              </p>
            </div>
          ))
        }
      </div>
    </motion.section>
  )
}
