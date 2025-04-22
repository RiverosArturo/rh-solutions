'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useLanguageStore } from '@/store';
import { contactForm, formAlert, formAlertError } from '@/utils';

type FormInputs = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
};

export const ContactForm = () => {
  const { handleSubmit, reset, register, formState: { errors, isValid } } = useForm<FormInputs>({ mode: 'onChange' });
  const [button2, setButton] = useState(false);
  const { language } = useLanguageStore();
  const { h2, label1, placeholderL1, label2, placeholderL2, label3, placeholderL3, label4, label4Opcion, label5, placeholderL5, button } = contactForm(language);

  const onSubmit = async (data: FormInputs) => {
    if (button2) return; // Evita clics múltiples
    setButton(true);

    const res = await fetch('/api/contactoEmail', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    if (result.success === true) {
      formAlert(language);
    } else {
      formAlertError(language, result.message);
    }
    reset();
    setButton(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-0 bg-gradient-to-br from-white to-gray-50 px-4"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 mb-12 drop-shadow-md leading-snug max-w-3xl mx-auto">
        {h2}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-10 space-y-6"
      >
        {/* Nombre */}
        <div className="space-y-2">
          <label htmlFor="name" className="font-semibold text-gray-700">{label1}</label>
          <input
            id="name"
            type="text"
            placeholder={placeholderL1}
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
            {...register('name', { required: 'Este campo es requerido' })}
          />
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="font-semibold text-gray-700">{label2}</label>
          <input
            id="email"
            type="email"
            placeholder={placeholderL2}
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
            {...register('email', {
              required: 'Este campo es requerido',
              pattern: {
                value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                message: 'Correo no válido'
              }
            })}
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>

        {/* Teléfono */}
        <div className="space-y-2">
          <label htmlFor="phone" className="font-semibold text-gray-700">{label3}</label>
          <input
            id="phone"
            type="tel"
            placeholder={placeholderL3}
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
            {...register('phone')}
          />
        </div>

        {/* Servicio */}
        <div className="space-y-2">
          <label htmlFor="service" className="font-semibold text-gray-700">{label4}</label>
          <select
            id="service"
            className="w-full p-4 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500"
            {...register('service', { required: 'Selecciona una opción' })}
          >
            <option value="">{label4Opcion.opcion}</option>
            <option value="página web">{label4Opcion.web}</option>
            <option value="app web">{label4Opcion.appWeb}</option>
            <option value="tienda online">{label4Opcion.tienda}</option>
            <option value="sistema interno">{label4Opcion.sistema}</option>
            <option value="otro">{label4Opcion.otro}</option>
          </select>
          {errors.service && <p className="text-sm text-red-600">{errors.service.message}</p>}
        </div>

        {/* Mensaje */}
        <div className="space-y-2">
          <label htmlFor="message" className="font-semibold text-gray-700">{label5}</label>
          <textarea
            id="message"
            placeholder={placeholderL5}
            rows={5}
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
            {...register('message', { required: 'Este campo es requerido' })}
          ></textarea>
          {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
        </div>

        {/* Botón */}
        <button
          type="submit"
          disabled={button2 || !isValid}
          className={`w-full py-4 rounded-xl font-semibold shadow-lg transition-transform duration-300 hover:-translate-y-1 ${isValid ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl' : 'bg-gray-400 text-white cursor-not-allowed'
            } ${button2 ? 'opacity-50 pointer-events-none' : ''}`}
        >
          {button} 🚀
        </button>
      </form>
    </motion.section>
  );
};
