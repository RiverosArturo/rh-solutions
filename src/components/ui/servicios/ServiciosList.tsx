'use client';
import { motion } from 'framer-motion';
import { FaCode, FaShoppingCart, FaMobileAlt, FaSearch, FaPaperPlane, FaLightbulb, FaSitemap, FaRocket, FaCogs, FaServer, FaChartLine, FaTools, FaEnvelope, FaQrcode, FaNewspaper, FaDesktop, FaFileAlt, FaHandshake, FaPencilAlt, FaExchangeAlt, FaBuilding, FaUsers, FaDatabase, FaChartBar, FaMousePointer, FaImage, FaGlobe, FaLock, FaCreditCard, FaShareAlt, FaChartPie, FaCommentDots, FaHeart, FaUserCircle } from 'react-icons/fa';
import { FaBusinessTime } from 'react-icons/fa6';

import { useLanguageStore } from '@/store';
import { CardServiciosList } from './CardServiciosList';



const servicios = (language: 'es' | 'en') => ({
  desarrolloWeb: {
    title: language === 'es' ? "Desarrollo Web" : "Web Development",
    services: [
      {
        title: language === 'es' ? "Sitios web corporativos" : "Corporate Websites",
        description: language === 'es' ? ['Diseños profesionales que representan tu marca y atraen clientes.'] : ['Professional designs that represent your brand and attract clients.'],
        icon: <FaDesktop size={32} />,
      },
      {
        title: language === 'es' ? "Landing pages (páginas de destino)" : "Landing Pages",
        description: language === 'es' ? ['Páginas enfocadas en la conversión para campañas específicas.'] : ['Conversion-focused pages for specific campaigns.'],
        icon: <FaRocket size={32} />,
      },
      {
        title: language === 'es' ? "Tiendas online / E-commerce" : "Online Stores / E-commerce",
        description: language === 'es' ? ['Plataformas completas para vender tus productos y servicios en línea.'] : ['Complete platforms to sell your products and services online.'],
        icon: <FaShoppingCart size={32} />,
      },
      {
        title: language === 'es' ? "Blogs" : "Blogs",
        description: language === 'es' ? ['Crea contenido valioso para atraer y fidelizar a tu audiencia.'] : ['Create valuable content to attract and retain your audience.'],
        icon: <FaNewspaper size={32} />,
      },
      {
        title: language === 'es' ? "Portafolios online" : "Online Portfolios",
        description: language === 'es' ? ['Muestra tu trabajo de forma atractiva y profesional.'] : ['Showcase your work in an attractive and professional way.'],
        icon: <FaFileAlt size={32} />,
      },
      {
        title: language === 'es' ? "Sitios web para eventos" : "Websites for Events",
        description: language === 'es' ? ['Plataformas informativas y de gestión para tus eventos.'] : ['Informative and management platforms for your events.'],
        icon: <FaHandshake size={32} />,
      },
      {
        title: language === 'es' ? "Micrositios" : "Microsites",
        description: language === 'es' ? ['Sitios web pequeños y enfocados para campañas o propósitos específicos.'] : ['Small and focused websites for specific campaigns or purposes.'],
        icon: <FaSitemap size={32} />,
      },
      {
        title: language === 'es' ? "One-page websites" : "One-Page Websites",
        description: language === 'es' ? ['Toda la información importante en una sola página.'] : ['All important information on a single page.'],
        icon: <FaDesktop size={32} />,
      },
      {
        title: language === 'es' ? "Sitios web estáticos" : "Static Websites",
        description: language === 'es' ? ['Sitios web rápidos y sencillos con contenido fijo.'] : ['Fast and simple websites with fixed content.'],
        icon: <FaCode size={32} />,
      },
    ],
  },
  desarrolloWebMedida: {
    title: language === 'es' ? "Desarrollo Web a Medida" : "Custom Web Development",
    services: [
      {
        title: language === 'es' ? "Funcionalidades personalizadas" : "Custom Functionalities",
        description: language === 'es' ? ['Desarrollo de características únicas para tu sitio web.'] : ['Development of unique features for your website.'],
        icon: <FaCogs size={32} />,
      },
      // {
      //   title: 'Integración con sistemas externos (CRM, ERP, etc.)',
      //   description: ['Conecta tu web con otras herramientas empresariales para una gestión eficiente.'],
      //   icon: <FaLink size={32} />,
      // },
      // {
      //   title: 'Desarrollo de APIs',
      //   description: ['Crea interfaces para que diferentes sistemas se comuniquen entre sí.'],
      //   icon: <FaCode size={32} />,
      // },
    ]
  },
  mantenimientoYAct: {
    title: language === 'es' ? "Mantenimiento y Actualización Web" : "Website Maintenance and Updates",
    services: [
      {
        title: language === 'es' ? "Soporte técnico" : "Technical Support",
        description: language === 'es' ? ['Asistencia para resolver cualquier problema con tu sitio web.'] : ['Assistance to solve any issues with your website.'],
        icon: <FaTools size={32} />,
      },
      // {
      //   title: language === 'es' ? "Actualizaciones de seguridad" : "Security Updates",
      //   description: language === 'es' ? ['Mantén tu sitio protegido contra amenazas.'] : ['Keep your site protected against threats.'],
      //   icon: <FaShieldAlt size={32} />,
      // },
      {
        title: language === 'es' ? "Actualizaciones de contenido" : "Content Updates",
        description: language === 'es' ? ['Mantén tu sitio fresco y relevante con contenido actualizado.'] : ['Keep your site fresh and relevant with updated content.'],
        icon: <FaPencilAlt size={32} />,
      },
      {
        title: language === 'es' ? "Optimización de rendimiento" : "Performance Optimization",
        description: language === 'es' ? ['Mejora la velocidad y eficiencia de tu sitio web.'] : ['Improve the speed and efficiency of your website.'],
        icon: <FaChartLine size={32} />,
      },
      {
        title: language === 'es' ? "Monitorización del sitio" : "Site Monitoring",
        description: language === 'es' ? ['Supervisión constante para asegurar el correcto funcionamiento.'] : ['Constant monitoring to ensure proper functioning.'],
        icon: <FaServer size={32} />,
      },
      // {
      //   title: 'Actualizaciones de seguridad',
      //   description: ['Mantén tu sitio protegido contra amenazas.'],
      //   icon: <FaShieldAlt size={32} />,
      // },
      // {
      //   title: 'Copias de seguridad',
      //   description: ['Protege tus datos con copias de seguridad regulares.'],
      //   icon: <FaSave size={32} />,
      // },
    ],
  },
  optiSEO: {
    title: language === 'es' ? 'Optimización SEO (Básica y Avanzada)' : "SEO Optimization (Basic and Advanced)",
    services: [
      {
        title: language === 'es' ? "Análisis de palabras clave" : "Keyword Analysis",
        description: language === 'es' ? ['Identifica los términos que tu público objetivo busca.'] : ['Identify the terms your target audience is searching for.'],
        icon: <FaSearch size={32} />,
      },
      {
        title: language === 'es' ? "Optimización on-page (títulos, meta descripciones, contenido)" : "On-page Optimization (titles, meta descriptions, content)",
        description: language === 'es' ? ['Mejora los elementos internos de tu sitio para un mejor ranking.'] : ['Improve the internal elements of your site for better ranking.'],
        icon: <FaPencilAlt size={32} />,
      },
      {
        title: language === 'es' ? "Optimización técnica (velocidad, estructura, mobile-friendly)" : "Technical Optimization (speed, structure, mobile-friendly)",
        description: language === 'es' ? ['Asegura que tu sitio cumpla con los requisitos técnicos de los motores de búsqueda.'] : ['Ensure your site meets the technical requirements of search engines.'],
        icon: <FaCogs size={32} />,
      },
      // {
      //   title: 'Estrategias de linkbuilding',
      //   description: ['Construye una red de enlaces de calidad hacia tu sitio.'],
      //   icon: <FaLink size={32} />,
      // },
    ],
  },
  disRes: {
    title: language === 'es' ? "Diseño Responsivo" : "Responsive Design",
    services: [
      {
        title: language === 'es' ? "Adaptación de sitios web a diferentes dispositivos" : "Website adaptation to different devices",
        description: language === 'es' ? ['Tu sitio se verá genial en computadoras, tablets y teléfonos.'] : ['Your site will look great on computers, tablets, and phones.'],
        icon: <FaMobileAlt size={32} />,
      },
    ],
  },
  consultoria: {
    title: language === 'es' ? "Consultoría Web" : "Web Consulting",
    services: [
      {
        title: language === 'es' ? "Análisis de necesidades" : "Needs Analysis",
        description: language === 'es' ? ['Evaluamos tus objetivos y te ayudamos a definir la mejor estrategia web.'] : ['We evaluate your objectives and help you define the best web strategy.'],
        icon: <FaLightbulb size={32} />,
      },
      {
        title: language === 'es' ? "Planificación de proyectos web" : "Web Project Planning",
        description: language === 'es' ? ['Creamos un plan detallado para el desarrollo de tu sitio o aplicación.'] : ['We create a detailed plan for the development of your site or application.'],
        icon: <FaSitemap size={32} />,
      },
      {
        title: language === 'es' ? "Asesoramiento tecnológico" : "Technological Advice",
        description: language === 'es' ? ['Te guiamos en la elección de las mejores tecnologías para tu proyecto.'] : ['We guide you in choosing the best technologies for your project.'],
        icon: <FaCode size={32} />,
      },
    ],
  },
  migracion: {
    title: language === 'es' ? "Migración de Sitios Web" : "Website Migration",
    services: [
      {
        title: language === 'es' ? "Cambio de hosting" : "Hosting Change",
        description: language === 'es' ? ['Te ayudamos a mover tu sitio a un nuevo proveedor de alojamiento sin problemas.'] : ['We help you move your site to a new hosting provider seamlessly.'],
        icon: <FaServer size={32} />,
      },
      {
        title: language === 'es' ? "Cambio de plataforma (ej. de WordPress a un desarrollo a medida)" : "Platform Change (e.g., from WordPress to a custom development)",
        description: language === 'es' ? ['Migramos tu sitio de una plataforma a otra de forma segura.'] : ['We migrate your site from one platform to another safely.'],
        icon: <FaExchangeAlt size={32} />,
      },
    ],
  },
  intranets: {
    title: language === 'es' ? "Desarrollo de Intranets y Extranets" : "Intranet and Extranet Development",
    services: [
      {
        title: language === 'es' ? "Plataformas internas para empresas" : "Internal platforms for companies",
        description: language === 'es' ? ['Herramientas web para mejorar la comunicación y la eficiencia dentro de tu organización.'] : ['Web tools to improve communication and efficiency within your organization.'],
        icon: <FaBuilding size={32} />,
      },
      {
        title: language === 'es' ? "Plataformas colaborativas para socios o clientes" : "Collaborative platforms for partners or clients",
        description: language === 'es' ? ['Espacios web para trabajar de forma conjunta con tus colaboradores externos.'] : ['Web spaces to work jointly with your external collaborators.'],
        icon: <FaUsers size={32} />,
      },
    ],
  },
  appWeb: {
    title: language === 'es' ? "Desarrollo de Aplicaciones Web" : "Web Application Development",
    services: [
      {
        title: language === 'es' ? "Desarrollo de Single Page Applications (SPAs)" : "Single Page Application (SPA) Development",
        description: language === 'es' ? ['Aplicaciones web rápidas y fluidas con una experiencia de usuario moderna.'] : ['Fast and fluid web applications with a modern user experience.'],
        icon: <FaCode size={32} />,
      },
      {
        title: language === 'es' ? "Desarrollo de Progressive Web Apps (PWAs)" : "Progressive Web App (PWA) Development",
        description: language === 'es' ? ['Aplicaciones web que funcionan como aplicaciones nativas en cualquier dispositivo.'] : ['Web applications that function like native applications on any device.'],
        icon: <FaMobileAlt size={32} />,
      },
      {
        title: language === 'es' ? "Desarrollo de aplicaciones web complejas con bases de datos" : "Development of complex web applications with databases",
        description: language === 'es' ? ['Soluciones web robustas para la gestión de grandes volúmenes de información.'] : ['Robust web solutions for managing large volumes of information.'],
        icon: <FaDatabase size={32} />,
      },
      {
        title: language === 'es' ? "Desarrollo de dashboards y paneles de administración" : "Development of dashboards and administration panels",
        description: language === 'es' ? ['Interfaces intuitivas para la gestión y visualización de datos importantes.'] : ['Intuitive interfaces for managing and visualizing important data.'],
        icon: <FaChartBar size={32} />,
      },
    ],
  },
  servAd: {
    title: language === 'es' ? "Servicios Adicionales" : "Additional Services",
    services: [
      {
        title: language === 'es' ? "Registro de Dominios" : "Domain Registration",
        description: language === 'es' ? ['Te ayudamos a asegurar el nombre de tu sitio web.'] : ['We help you secure your website name.'],
        icon: <FaGlobe size={32} />,
      },
      {
        title: language === 'es' ? "Contratación de Hosting" : "Hosting Contracting",
        description: language === 'es' ? ['Configuramos el alojamiento para tu sitio web.'] : ['We configure hosting for your website.'],
        icon: <FaServer size={32} />,
      },
      {
        title: language === 'es' ? "Implementación de Certificados SSL" : "SSL Certificate Implementation",
        description: language === 'es' ? ['Asegura la conexión de tu sitio web.'] : ['Secure your website connection.'],
        icon: <FaLock size={32} />,
      },
      {
        title: language === 'es' ? "Integración de Pasarelas de Pago" : "Payment Gateway Integration",
        description: language === 'es' ? ['Permite pagos en línea de forma segura.'] : ['Enable secure online payments.'],
        icon: <FaCreditCard size={32} />,
      },
      {
        title: language === 'es' ? "Integración de Redes Sociales" : "Social Media Integration",
        description: language === 'es' ? ['Conecta tu sitio web con tus perfiles sociales.'] : ['Connect your website with your social profiles.'],
        icon: <FaShareAlt size={32} />,
      },
      {
        title: language === 'es' ? "Creación de Cuentas de Correo Electrónico Profesionales" : "Creation of Professional Email Accounts",
        description: language === 'es' ? ['Correos con el dominio de tu empresa.'] : ['Emails with your company domain.'],
        icon: <FaEnvelope size={32} />,
      },
      {
        title: language === 'es' ? "Análisis Básico de Tráfico Web (Google Analytics)" : "Basic Web Traffic Analysis (Google Analytics)",
        description: language === 'es' ? ['Entiende quién visita tu sitio web.'] : ['Understand who visits your website.'],
        icon: <FaChartPie size={32} />,
      },
      {
        title: language === 'es' ? "Creación de Formularios de Contacto Personalizados" : "Creation of Custom Contact Forms",
        description: language === 'es' ? ['Facilita la comunicación con tus clientes.'] : ['Facilitate communication with your clients.'],
        icon: <FaPaperPlane size={32} />,
      },
      {
        title: language === 'es' ? "Implementación de Chat en Vivo" : "Live Chat Implementation",
        description: language === 'es' ? ['Ofrece soporte en tiempo real a tus visitantes.'] : ['Offer real-time support to your visitors.'],
        icon: <FaCommentDots size={32} />,
      },
      {
        title: language === 'es' ? "Creación de Códigos QR para promociones o acceso a la web" : "Creation of QR Codes for promotions or web access",
        description: language === 'es' ? ['Herramientas de marketing innovadoras.'] : ['Innovative marketing tools.'],
        icon: <FaQrcode size={32} />,
      },
      {
        title: language === 'es' ? "Diseño de Newsletter y Boletines Electrónicos (la plantilla)" : "Newsletter and Email Bulletin Design (the template)",
        description: language === 'es' ? ['Comunica novedades y ofertas a tu audiencia.'] : ['Communicate news and offers to your audience.'],
        icon: <FaEnvelope size={32} />,
      },
      // {
      //   title: 'Servicios de Fotografía y Video Básicos para la Web (si tienes el equipo y habilidad)',
      //   description: ['Contenido visual para tu sitio web.'],
      //   icon: <FaCamera size={32} />,
      // },
      {
        title: language === 'es' ? "Creación de Presentaciones Web Interactivas" : "Creation of Interactive Web Presentations",
        description: language === 'es' ? ['Forma dinámica de compartir información.'] : ['Dynamic way to share information.'],
        icon: <FaDesktop size={32} />,
      },
      {
        title: language === 'es' ? "Creación de Favicons personalizados" : "Creation of Custom Favicons",
        description: language === 'es' ? ['Pequeño icono para tu navegador.'] : ['Small icon for your browser.'],
        icon: <FaImage size={32} />,
      },
      // {
      //   title: 'Optimización de Imágenes para la Web (compresión, formatos)',
      //   description: ['Mejora la velocidad de carga de tu sitio.'],
      //   icon: <FaImage size={32} />,
      // },
      {
        title: language === 'es' ? "Pruebas de Usabilidad Básicas" : "Basic Usability Testing",
        description: language === 'es' ? ['Asegura que tu sitio sea fácil de usar.'] : ['Ensure your site is easy to use.'],
        icon: <FaMousePointer size={32} />,
      },
      // {
      //   title: 'Creación de documentación básica para la gestión del sitio',
      //   description: ['Guías para que tus clientes gestionen su web.'],
      //   icon: <FaFileAlt size={32} />,
      // },
    ],
  },
  servEs: {
    title: language === 'es' ? "Servicios Especiales" : "Special Services",
    services: [
      {
        title: language === 'es' ? "Invitaciones de Boda Digitales" : "Digital Wedding Invitations",
        description: language === 'es' ? [
          'Diseño personalizado de invitaciones web interactivas.',
          'Confirmación de asistencia (RSVP) online.',
          'Mapas de ubicación integrados.',
          'Galerías de fotos y videos.',
          'Listas de regalos.',
        ] : [
          'Custom design of interactive web invitations.',
          'Online RSVP (confirmation of attendance).',
          'Integrated location maps.',
          'Photo and video galleries.',
          'Gift registries.',
        ],
        icon: <FaHeart size={32} />,
      },
      {
        title: language === 'es' ? "Tarjetas de Presentación Digitales" : "Digital Business Cards",
        description: language === 'es' ? ['Versiones interactivas de tarjetas de presentación para compartir online.'] : ['Interactive versions of business cards to share online.'],
        icon: <FaBusinessTime size={32} />,
      },
      {
        title: language === 'es' ? "Currículums Vitae Digitales" : "Digital Resumes / CVs",
        description: language === 'es' ? ['Portafolios interactivos para profesionales.'] : ['Interactive portfolios for professionals.'],
        icon: <FaUserCircle size={32} />,
      },
    ],
  },
});


export const ServiciosList = () => {
  const { language } = useLanguageStore();
  const { desarrolloWeb, desarrolloWebMedida, mantenimientoYAct, optiSEO, disRes, consultoria, migracion, intranets, appWeb, servAd, servEs } = servicios(language);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="servicios-lista"
      className="my-16 bg-gray-100"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-blue-700 text-center mb-12"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
        >
          { language === 'es' ?"Nuestros Servicios" :"Our Services"}
        </motion.h2>

        <motion.div
          className="mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <CardServiciosList objeto={ desarrolloWeb }/>
          <CardServiciosList objeto={ desarrolloWebMedida }/>
          <CardServiciosList objeto={ mantenimientoYAct }/>
          <CardServiciosList objeto={ optiSEO }/>
          <CardServiciosList objeto={ disRes }/>
          <CardServiciosList objeto={ consultoria }/>
          <CardServiciosList objeto={ migracion }/>
          <CardServiciosList objeto={ intranets }/>
          <CardServiciosList objeto={ appWeb }/>
          <CardServiciosList objeto={ servAd }/>
          <CardServiciosList objeto={ servEs }/>

        </motion.div>
      </div>
    </motion.section>
  );
}
