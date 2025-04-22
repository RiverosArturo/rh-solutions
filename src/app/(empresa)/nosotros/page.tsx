'use client'

import { useLanguageStore } from '@/store'
import { nosotrosTexto } from '@/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function NosotrosPage() {
  const { language } = useLanguageStore();
  const { hero, mision, experiencia, servicios, diferencialesTitle, diferenciales, cta } = nosotrosTexto( language );
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: 'easeOut' }}
        variants={fadeInUp}
        className="text-center mb-20 px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          { hero.title }
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed bg-white/60 backdrop-blur-md px-6 py-4"
        >
          { hero.desc1 }<span className="font-semibold text-blue-700">{ hero.desc2 }</span>{ hero.desc3 }
          <span className="text-purple-700 font-semibold">{ hero.desc4 }</span>{ hero.desc5 }
        </motion.p>
      </motion.section>

      {/* Misión */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        variants={fadeInUp}
        className="mb-20 text-center px-6"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
          { mision.title }
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed bg-white/60 backdrop-blur-md px-6 py-4 rounded-xl shadow-md">
          {mision.desc1} <span className="font-semibold text-indigo-700">{mision.desc2}</span>{mision.desc3}
          <span className="font-semibold text-cyan-700">{mision.desc4}</span> {mision.desc5}
        </p>
      </motion.section>

      {/* Experiencia */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        variants={fadeInUp}
        className="mb-20 px-6"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-center">
          { experiencia.title }
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed bg-white/60 backdrop-blur-md px-6 py-4 rounded-xl shadow-md mb-6">
          {experiencia.desc} <strong className="text-purple-700">{experiencia.desc2}</strong>{experiencia.desc3}
          <strong className="text-pink-700">{experiencia.desc4}</strong> {experiencia.desc5}
        </p>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {servicios.map(({ title, description, color }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className={`bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-200 ${
                i === 2 ? 'sm:col-span-2' : ''
              }`}
            >
              <h3 className={`font-semibold text-lg ${color} mb-2`}>{title}</h3>
              <p className="text-gray-700">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Diferenciales */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        variants={fadeInUp}
        className="mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-tight">
          { diferencialesTitle }
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {diferenciales.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-xl transition"
            >
              <div className="text-3xl">{item.icon}</div>
              <p className="text-gray-700 font-medium leading-snug">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        variants={fadeInUp}
        className="text-center bg-blue-50 py-14 px-6 rounded-3xl shadow-md"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          { cta.title}
        </h3>
        <p className="mb-6 text-gray-700 max-w-xl mx-auto">
          { cta.description }
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition-colors"
        >
          { cta.button }
        </Link>
      </motion.section>
    </main>
  )
}
