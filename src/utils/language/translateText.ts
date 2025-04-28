export const getNavLinks = (language: 'es' | 'en') => [
    { name: language === 'es' ? "Inicio" : "Home", href: "/" },
    { name: language === 'es' ? "Ventajas" : "Benefits", href: "/ventajas" },
    { name: language === 'es' ? "Nosotros" : "About Us", href: "/nosotros" },
    { name: language === 'es' ? "Nuestros Planes" : "Our Plans", href: "/plan" },
    { name: language === 'es' ? "Contacto" : "Contact Us", href: "/contacto" },
];

export const heroIni = (language: 'es' | 'en') => ({
    h1: language === "es" ? "Soluciones Digitales" : "Digital Solutions",
    h2: language === "es" ? "a tu Medida" : "tailored to You",
    p: language === "es" ? "Desarrollamos sitios y apps web que optimizan tus procesos, ahorran tiempo y potencian el crecimiento de tu empresa." : "We develop websites and web apps that optimize your processes, save time, and boost the growth of your company.",
    button: language === "es" ? "Solicita tu cotización gratis" : "Request your free quote"
});

export const serviciosT = (language: 'es' | 'en') => ({
    h2: language === "es" ? "Nuestros Servicios" : "Our Services",
    servicios: [
        {
            form: "💻",
            h3: language === "es" ? "Desarrollo web" : "Web Development",
            p: language === "es" ? "Creamos páginas web personalizadas, rápidas y optimizadas para celulares. Desde sitios informativos hasta tiendas en línea (e-commerce)." : "We create customized, fast, and mobile-optimized websites. From informational sites to online stores (e-commerce).",
        },
        {
            form: "🧩",
            h3: language === "es" ? "Apps web" : "Web Apps",
            p: language === "es" ? "Aplicaciones modernas, escalables y hechas a la medida de tus procesos internos o clientes." : "Modern, scalable, and custom-made applications for your internal processes or clients.",
        },
        {
            form: "⚙️",
            h3: language === "es" ? "Optimización de Procesos" : "Process Optimization",
            p: language === "es" ? "Automatiza tareas, reduce errores y enfoca tu tiempo en lo que realmente importa." : "Automate tasks, reduce errors, and focus your time on what truly matters.",
        },
    ],
});

export const proyectosT = (language: 'es' | 'en') => ({
    h2: language === "es" ? "Proyectos Realizados" : "Completed Projects",
    proyectos: [
        {
            titulo: 'Hotel Danini',
            imagen: 'https://res.cloudinary.com/dsu3au60t/image/upload/v1745271497/hotelDanini_zu7tvl.png',
            link: 'https://hoteldanini.com',
            descripcion: language === "es"
                ?"Desarrollamos una web optimizada que impulsó sus reservas directas y aumentó su visibilidad online. El resultado: mayor ocupación y una conexión más rentable con sus huéspedes."
                :"We developed an optimized website that boosted their direct bookings and increased their online visibility. The result: higher occupancy and a more profitable connection with their guests.",
        },
        {
            titulo: 'Santa Fé Casa Club',
            imagen: 'https://res.cloudinary.com/dsu3au60t/image/upload/v1745271497/santafeCasaClub_wttbxy.png',
            link: 'https://santafecasaclub.com',
            descripcion: language === "es"
                ?"Impulsamos la experiencia familiar y deportiva de Santa Fe Casa Club a través de un diseño web centrado en sus servicios exclusivos: desde gimnasio y piscina hasta áreas de juego y restaurante. El resultado: mayor atracción de miembros y eventos, fortaleciendo su comunidad y la calidad de vida de sus socios."
                :"We promoted the family and sports experience of Santa Fe Casa Club through a website design focused on its exclusive services: from the gym and pool to the playground and restaurant. The result: increased membership and event attraction, strengthening its community and its members' quality of life.",
        },
        {
            titulo: 'Teslo Shop',
            imagen: 'https://res.cloudinary.com/dsu3au60t/image/upload/v1745271496/teslo_e8o9s3.png',
            link: 'https://teslo-shop-five-bice.vercel.app',
            descripcion: language === "es"
                ?"Proyecto personal de e-commerce desarrollado para la práctica y aplicación de tecnologías web modernas en la creación de una tienda online funcional y atractiva. Se exploraron e implementaron diversas funcionalidades de comercio electrónico, desde la visualización de productos hasta la gestión de carritos y simulación de procesos de compra, con el objetivo de fortalecer habilidades técnicas y comprender el flujo completo de una plataforma de venta en línea."
                :"Personal e-commerce project developed to practice and apply modern web technologies to create a functional and attractive online store. Various e-commerce functionalities were explored and implemented, from product display to shopping cart management and purchasing process simulation, with the goal of strengthening technical skills and understanding the complete flow of an online sales platform.",
        },
    ]
});

export const contactForm = (language: 'es' | 'en') => ({
    h2: language === "es" ? "¿Tienes un proyecto en mente? Escribenos y te respondemos en menos de 24 horas." : "Do you have a project in mind? Write to us and we'll respond within 24 hours.",
    label1: language === "es" ? "Nombre completo" : "Full Name",
    placeholderL1: language === "es" ? "Ej. Juan Pérez" : "e.g. John Doe",
    label2: language === "es" ? "Correo electrónico" : "Email Address",
    placeholderL2: language === "es" ? "Ej. juan@email.com" : "e.g. john@email.com",
    label3: language === "es" ? "Número de teléfono (opcional)" : "Phone Number (optional)",
    placeholderL3: language === "es" ? "Ej. 231-123-4567" : "e.g. 555-123-4567",
    label4: language === "es" ? "¿Qué tipo de solución estás buscando?" : "What type of solution are you looking for?",
    label4Opcion: {
        opcion: language === "es" ? "Selecciona una opción" : "Select an option",
        web: language === "es" ? "Página Web" : "Website",
        appWeb: language === "es" ? "Aplicación Web" : "Web Application",
        tienda: language === "es" ? "Tienda en Línea" : "Online Store",
        sistema: language === "es" ? "Sistema Interno" : "Internal System",
        otro: language === "es" ? "Otro" : "Other",
    },
    label5: language === "es" ? "Cuéntanos sobre tu proyecto o idea" : "Tell us about your project or idea",
    placeholderL5: language === "es" ? "Describe brevemente lo que necesitas..." : "Briefly describe what you need...",
    button: language === "es" ? "Enviar mensaje" : " Send message "
});

export const ventajasTexto = (language: 'es' | 'en') => ({
    hero: {
        h2: language === "es" ? "¿Por qué digitalizar tu negocio?" : "Why digitize your business?",
        p1: language === "es"
            ? "Si aún no estás en internet, estás perdiendo oportunidades."
            : "If you're not online yet, you're missing out on opportunities.",
        p2: language === "es"
            ? "Hoy, el éxito comienza en lo digital."
            : "Today, success begins digitally.",
    },
    ventajasLista: [
        {
            h3: language === "es" ? "Aumenta tus ventas" : "Increase your sales",
            p: language === "es"
                ? "Una página web permite que tus clientes te encuentren 24/7, sin depender de horarios ni atención física."
                : "A website allows your customers to find you 24/7, regardless of schedules or physical presence.",
        },
        {
            h3: language === "es" ? "Genera confianza y profesionalismo" : "Build trust and professionalism",
            p: language === "es"
                ? "Una presencia digital bien cuidada transmite seriedad, seguridad y aumenta la credibilidad de tu negocio."
                : "A well-maintained digital presence conveys seriousness, security, and increases the credibility of your business.",
        },
        {
            h3: language === "es" ? "Automatiza procesos" : "Automate processes",
            p: language === "es"
                ? "Agendas, cotizaciones, cobros, catálogos: todo puede estar automatizado en tu sitio web o aplicación."
                : "Schedules, quotes, payments, catalogs: everything can be automated on your website or app.",
        },
        {
            h3: language === "es" ? "Llega a nuevos mercados" : "Reach new markets",
            p: language === "es"
                ? "Con marketing digital puedes expandir tu alcance a clientes que antes ni sabían que existías."
                : "With digital marketing, you can expand your reach to customers who didn't even know you existed before.",
        },
    ],
    appWeb: {
        h2: language === "es" ? "¿Te imaginas tener tu propia App Web?" : "Can you imagine having your own Web App?",
        p1: language === "es"
            ? "Automatiza procesos como control de inventarios, gestión de citas, reportes de ventas, seguimiento de clientes y más."
            : "Automate processes such as inventory control, appointment management, sales reporting, customer follow-up, and more.",
        p2: language === "es"
            ? "Todo adaptado a las necesidades específicas de tu negocio."
            : "All adapted to the specific needs of your business.",
        p3: language === "es"
            ? "¡Menos trabajo manual, menos errores, más control y más tiempo para ti!"
            : "Less manual work, fewer errors, more control and more time for you!",
        button: language === "es" ? "Quiero una App Web para mi negocio" : "I want a Web App for my business",
    },
    cta: {
        h2: language === "es" ? "Tu competencia ya está en internet. ¿Y tú?" : "Your competition is already online. Are you?",
        p: language === "es"
            ? "No necesitas ser experto para tener presencia digital. Nosotros nos encargamos del diseño, desarrollo y automatización, para que tú solo te enfoques en hacer crecer tu negocio."
            : "You don't need to be an expert to have a digital presence. We handle the design, development, and automation, so you can focus solely on growing your business.",
        button: language === "es" ? "Digitaliza tu negocio ahora" : "Digitize your business now",
    }
});

export const nosotrosTexto = (language: 'es' | 'en') => ({
    hero: {
        title:
            language === 'es'
                ? 'Conoce RH Solutions'
                : 'Meet RH Solutions',
        desc1:
            language === 'es'
                ? 'En'
                : 'At',
        desc2:
            language === 'es'
                ? ' RH Solutions'
                : ' RH Solutions',
        desc3:
            language === 'es'
                ? ', transformamos ideas en'
                : ', we turn ideas into',
        desc4:
            language === 'es'
                ? ' experiencias digitales únicas.'
                : ' unique digital experiences.',
        desc5:
            language === 'es'
                ? ' Nos especializamos en desarrollo web y apps personalizadas que no solo destacan visualmente, sino que impulsan resultados reales.'
                : ' We specialize in web and custom app development that not only look great but drive real results.',
    },
    mision: {
        title: language === 'es'
            ? 'Nuestra Misión' : 'Our Mission',

        desc1: language === 'es'
            ? 'Impulsar a ' : 'Empowering ',

        desc2: language === "es"
            ? "empresas " : "businesses ",

        desc3: language === "es"
            ? "y " : "and ",

        desc4: language === "es"
            ? "emprendedores " : "entrepreneurs ",

        desc5: language === "es"
            ? "mediante tecnología moderna, eficiente y alineada a sus metas."
            : "with modern, efficient technology aligned with their goals."
    },
    experiencia: {
        title: language === 'es'
            ? 'Experiencia Que Respalda'
            : 'Proven Experience',
        desc: language === 'es'
            ? 'Con más de '
            : 'With over ',
        desc2: language === "es"
            ? '2 años de experiencia, '
            : '2 years of experience, ',
        desc3: language === "es"
            ? 'hemos desarrollado proyectos usando tecnologías como '
            : 'we’ve developed projects using technologies like ',
        desc4: language === "es"
            ? 'React, Next.js, NestJS, PostgreSQL, MongoDB '
            : 'React, Next.js, NestJS, PostgreSQL, MongoDB, ',
        desc5: language === "es"
            ? 'y más.'
            : 'and more.'

    },
    servicios: [
        {
            title: language === 'es' ? '🧭 Sitios web informativos' : '🧭 Informational Websites',
            color: 'text-purple-700',
            description: language === 'es'
                ? 'Diseñados para comunicar, captar atención y posicionarse en motores de búsqueda (SEO).'
                : 'Designed to communicate, capture attention, and rank on search engines (SEO).',
        },
        {
            title: language === 'es' ? '🛒 E-commerce personalizados' : '🛒 Custom E-commerce',
            color: 'text-pink-700',
            description: language === 'es'
                ? 'Con pasarelas de pago seguras, velocidad optimizada y experiencia intuitiva.'
                : 'With secure payment gateways, optimized speed, and intuitive user experience.',
        },
        {
            title: language === 'es' ? '📊 Dashboards administrativos' : '📊 Admin Dashboards',
            color: 'text-indigo-700',
            description: language === 'es'
                ? 'Paneles adaptados a las necesidades del cliente para gestionar su negocio de forma eficiente.'
                : 'Dashboards tailored to your needs to efficiently manage your business.',
        },
    ],
    diferencialesTitle:
        language === 'es'
            ? 'Lo que nos hace diferentes'
            : 'What Makes Us Different',
    diferenciales: [
        {
            icon: '💻',
            title: language === 'es'
                ? 'Calidad en cada línea de código'
                : 'Quality in every line of code',
        },
        {
            icon: '💬',
            title: language === 'es'
                ? 'Comunicación clara y cercana'
                : 'Clear and close communication',
        },
        {
            icon: '⏱️',
            title: language === 'es'
                ? 'Entregas puntuales y eficientes'
                : 'Timely and efficient deliveries',
        },
        {
            icon: '🎯',
            title: language === 'es'
                ? 'Enfoque en tus metas de negocio'
                : 'Focus on your business goals',
        },
    ],
    cta: {
        title:
            language === 'es'
                ? '¿Listo para llevar tu proyecto al siguiente nivel?'
                : 'Ready to take your project to the next level?',
        description:
            language === 'es'
                ? 'Cuéntanos tu idea y descubre cómo podemos ayudarte a hacerla realidad.'
                : 'Tell us your idea and let’s bring it to life together.',
        button:
            language === 'es'
                ? '💬 Contáctanos'
                : '💬 Contact Us',
    }
});

export const contactoTexto = (language: 'es' | 'en') => ({
    hero: {
        title: language === 'es'
            ? 'Impulsa tu negocio con tecnología a tu medida 🚀'
            : 'Boost your business with tailored technology 🚀',
        desc: language === 'es'
            ? 'En '
            : 'At ',
        desc2: language === 'es'
            ? 'RH Solutions '
            : 'RH Solutions',
        desc3: language === 'es'
            ? 'diseñamos y desarrollamos herramientas digitales personalizadas que elevan la eficiencia de tu empresa: sitios web, apps web, automatizaciones y más.'
            : ', we design and develop custom digital tools to boost your company’s efficiency: websites, web apps, automations, and more.',
        button: language === 'es'
            ? 'Agenda tu asesoría gratuita'
            : 'Book your free consultation',
    },


    beneficiosTitle:
        language === 'es'
            ? '¿Qué puedes lograr con nosotros?'
            : 'What can you achieve with us?',
    beneficios: [
        {
            icon: '🌐',
            text: language === 'es'
                ? 'Sitios web modernos, rápidos y responsivos'
                : 'Modern, fast, and responsive websites',
        },
        {
            icon: '⚙️',
            text: language === 'es'
                ? 'Apps web que automatizan tu trabajo diario'
                : 'Web apps that automate your daily work',
        },
        {
            icon: '⏱️',
            text: language === 'es'
                ? 'Procesos optimizados = más tiempo para ti'
                : 'Optimized processes = more time for you',
        },
        {
            icon: '📊',
            text: language === 'es'
                ? 'Paneles de control claros y fáciles de usar'
                : 'Clear and easy-to-use dashboards',
        },
    ],
    redes: {
        title: language === 'es'
            ? 'Estamos donde tú estás ✨'
            : 'We are where you are ✨',
        desc: language === 'es'
            ? 'Síguenos o escríbenos directamente:'
            : 'Follow us or message us directly:',

        formularioTitle: language === 'es'
            ? '¡Conversemos sobre tu proyecto!'
            : 'Let’s talk about your project!',
    }
});

export const planTexto = (language: 'es' | 'en') => ({
    title: language === 'es'
        ?"Impulsa tu proyecto con nuestros planes"
        :"Boost your project with our plans",
    card1: {
        title: language == 'es'
            ?"Pago Único"
            :"Single Payment",
        p: language === 'es'
            ?"Propiedad total de tu proyecto, inversión única y sin pagos recurrentes."
            :"Full ownership of your project, a one-time investment, and no recurring payments.",
        list: [
            { name: language === 'es' ?"Inversión única" :"Single investment" },
            { name: language === 'es' ?"1 mes de soporte gratis" :"1 month of free support" },
            { name: language === 'es' ?"Diseño 100% personalizado" :"100% custom design" },
            { name: language === 'es' ?"Escalabilidad garantizada" :"Guaranteed scalability" },
        ],
        p2: language === 'es' ?"Con una inversión única, impulsa tu proyecto en la web." :"With a one-time investment, boost your project on the web.",
        button: language === 'es' ?"Solicitar Cotización" :"Request a Quote"
    },
    card2: {
        title: language == 'es'
            ?"Renta Mensual"
            :"Monthly Rent",
        p: language === 'es'
            ?"Proyecto accesible sin alta inversión inicial. Hosting, soporte y actualizaciones incluidas."
            :"Affordable project with no high initial investment. Hosting, support, and updates included.",
        list: [
            { name: language === 'es' ?"Hosting y mantenimiento incluidos" :"Hosting and maintenance included" },
            { name: language === 'es' ?"Opción de compra futura" :"Future purchase option" },
            { name: language === 'es' ?"Diseño 100% personalizado" :"100% custom design" },
            { name: language === 'es' ?" Crece con tu negocio" :"Grow with your business" },
        ],
        p2: language === 'es' ?"Invierte en tu Presencia Online con un plan mensual accesible." :"Invest in your online presence with an affordable monthly plan.",
        button: language === 'es' ?"Conocer Más" :"Learn more"
    }
})