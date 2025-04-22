'use client'

import { useLanguageStore } from '@/store'
import { ventajasTexto } from '@/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
}

export default function PorQueDigitalizarPage() {
  const { language } = useLanguageStore();
  const { hero, ventajasLista, appWeb, cta } = ventajasTexto( language );
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={0}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 tracking-tight drop-shadow-md">
          { hero.h2 }
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          { hero.p1 } <br className="hidden sm:block" /> { hero.p2 }
        </p>
      </motion.section>

      
      <section className="grid gap-10 md:grid-cols-2 lg:gap-12">
        {ventajasLista.map((b, i) => (
          <motion.div
            key={i}
            className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <h3 className="text-2xl font-bold text-neutral-800 mb-3 group-hover:text-blue-600 transition-colors">
              {b.h3}
            </h3>
            <p className="text-gray-600 leading-relaxed">{b.p}</p>
          </motion.div>
        ))}
      </section>

      
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={ventajasLista.length}
        className="mt-24 bg-gradient-to-br from-blue-50 to-white px-6 py-14 rounded-3xl text-center shadow-lg max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-800 mb-6 tracking-tight leading-tight">
          { appWeb.h2 }
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4 leading-relaxed">
          { appWeb.p1 }
        </p>

        <p className="text-gray-600 text-base mb-8 leading-relaxed">
          { appWeb.p2 } <br className="hidden sm:block" /> {appWeb.p3}
        </p>

        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition"
          aria-label="Ir a la página de contacto para solicitar una app web"
        >
          🚀 { appWeb.button }
        </Link>
      </motion.section>

      
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={ventajasLista.length + 1}
        className="mt-28 text-center px-6 py-16 bg-neutral-50 rounded-3xl shadow-inner max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-800 mb-6 tracking-tight leading-tight">
          { cta.h2 }
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
          { cta.p }
        </p>

        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition"
          aria-label="Ir a la página de contacto para digitalizar tu negocio"
        >
          💡 { cta.button }
        </Link>
      </motion.section>
    </main>
  )
}