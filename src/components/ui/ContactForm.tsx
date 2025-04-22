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
}

export const ContactForm = () => {
  const { handleSubmit, reset, register, formState: { isValid } } = useForm<FormInputs>();
  const [button2, setButton] = useState<boolean>(false);
  const { language } = useLanguageStore();
  const { h2, label1, placeholderL1, label2, placeholderL2, label3, placeholderL3, label4, label4Opcion, label5, placeholderL5, button } = contactForm(language);
  
  const onSubmit = async (data: FormInputs) => {
    setButton(true);
    const { name, email, phone, service, message = "" } = data;
    setButton(true);
    const response = await fetch('/api/contactoEmail',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            phone,
            service,
            message
        })
    });
    
    const res = await response.json();
    if (res.success === true) {
      formAlert(language);
    } else {
      formAlertError(language, res.message);
    }
    reset();
    setButton(false);
  }

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
        className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-10 space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2">
          <label htmlFor="name" className="font-semibold text-gray-700">{label1}</label>
          <input
            id="name"
            autoComplete="name"
            type="text"
            placeholder={placeholderL1}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('name', { required: true })}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="font-semibold text-gray-700">{label2}</label>
          <input
            id="email"
            autoComplete="email"
            type="email"
            placeholder={placeholderL2}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('email', {
              required: 'El correo es requerido',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Ingrese un correo valido'
              }
            })}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="font-semibold text-gray-700">{label3}</label>
          <input
            id="phone"
            autoComplete="phone"
            type="tel"
            placeholder={placeholderL3}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('phone')}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="font-semibold text-gray-700">{label4}</label>
          <select
            id="service"
            className="w-full p-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('service', { required: true })}
          >
            <option value="">{label4Opcion.opcion}</option>
            <option value="página web">{label4Opcion.web}</option>
            <option value="app web">{label4Opcion.appWeb}</option>
            <option value="tienda online">{label4Opcion.tienda}</option>
            <option value="sistema interno">{label4Opcion.sistema}</option>
            <option value="otro">{label4Opcion.otro}</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="font-semibold text-gray-700">{label5}</label>
          <textarea
            id="message"
            {...register('message', { required: true })}
            rows={5}
            placeholder={placeholderL5}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={button2}
          className={`w-full bg-gradient-to-r ${isValid ? 'from-blue-600 to-indigo-600 text-white' : 'bg-red-500 text-white'} py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 duration-300`}
        >
          {button} 🚀
        </button>
      </form>
    </motion.section>
  )
}
