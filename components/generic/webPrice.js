const webPrice = [
    {
        title: "Tipo de Web",
        items: [
            {
                type: "radio",
                label: "¿Qué tipo de web necesitas?",
                description: "Escoge el tipo de web que necesitas para tu proyecto",
                options: [
                    { label: "Web de página única", price: 890, tip: "Tus servicios se muestran como un listado en la pagina principal-", checked: true },
                    { label: "Web de Servicios", price: 1290, tip: "Tus servicios tienen su propia pagina para poder ser detallados." },
                    { label: "Tienda Online", price: 1790, tip: "Vende tus productos a través de la web. Cada producto tiene su propia pagina." },
                    { label: "Personalizada", price: 2490, tip: "Tu web completamente a medida. Ideal para proyectos con necesidades especiales." }
                ],
                name: "webType"
            }
        ]
    },
    {
        title: "Reservas y Citas",
        items: [
            {
                type: "checkbox",
                label: "Opciones de Reservas y Citas",
                description: "Seleccione las opciones de reservas y citas que desea integrar en su sitio web.",
                options: [
                    { label: "Sistema de citas por email o whatsapp", price: 190, tip: "Permite a los visitantes reservar citas por email o whatsapp." },
                    { label: "Sistema de citas con calendario", price: 390, tip: "Permite a los visitantes reservar citas a través de un calendario interactivo." }
                ],
                name: "bookingOptions"
            }
        ]
    },
    {
        title: "Contenido y Multimedia",
        items: [
            {
                type: "checkbox",
                label: "Opciones de Contenido y Multimedia",
                description: "Seleccione las características de contenido y multimedia que desea para su sitio web.",
                options: [
                    { label: "Filtros para productos o servicios", price: 290, tip: "Facilita la búsqueda de productos o servicios específicos." },
                    { label: "Sección de noticias (blog)", price: 390, tip: "Comparta noticias, artículos o actualizaciones con sus visitantes." },
                    { label: "Galería", price: 290, tip: "Muestre imágenes o proyectos en un formato visual atractivo." }
                ],
                name: "contentOptions"
            }
        ]
    },
    {
        title: "Comunicación y Feedback",
        items: [
            {
                type: "checkbox",
                label: "Opciones de Comunicación y Feedback",
                description: "Seleccione las opciones de comunicación y feedback que desea para su sitio web.",
                options: [
                    { label: "Integración con redes sociales", price: 140, tip: "Conecte su sitio web con sus perfiles de redes sociales." },
                    { label: "Newsletter", price: 140, tip: "Recopile correos electrónicos para enviar boletines o actualizaciones." },
                    { label: "Comentarios y valoraciones", price: 290, tip: "Permite a los visitantes dejar comentarios o valoraciones." },
                    { label: "Chat en directo", price: 390, tip: "Comunicación en tiempo real con los visitantes del sitio web." }
                ],
                name: "communicationOptions"
            }
        ]
    },
    {
        title: "Funcionalidades Avanzadas",
        items: [
            {
                type: "checkbox",
                label: "Opciones Avanzadas",
                description: "Seleccione las funcionalidades avanzadas que desea para su sitio web.",
                options: [
                    { label: "Acceso para usuarios", price: 490, tip: "Un área exclusiva para miembros o usuarios registrados." },
                    { label: "Multilenguaje", price: 590, tip: "Ofrezca su contenido en varios idiomas." }
                ],
                name: "advancedOptions"
            }
        ]
    },
    {
        title: "Identidad de Marca",
        items: [
            {
                type: "radio",
                label: "¿Tiene logotipo y estilo de marca?",
                description: "Indique si ya cuenta con elementos de identidad de marca.",
                options: [
                    { label: "Tengo logo y estilo de marca", price: 0, tip: "Ya tiene un logotipo y guía de estilo definidos." },
                    { label: "Solo tengo logo", price: 120, tip: "Solo cuenta con un logotipo, pero no una guía de estilo." },
                    { label: "Solo tengo estilo de marca", price: 180, tip: "Tiene una guía de estilo pero no un logotipo." },
                    { label: "No tengo ninguna", price: 280, tip: "Necesita tanto un logotipo como una guía de estilo.", checked: true }
                ],
                name: "brandIdentity"
            }
        ]
    },
    {
        title: "Contenido para la Web",
        items: [
            {
                type: "radio",
                label: "¿Tiene contenido para su web?",
                description: "Indique si ya cuenta con contenido o si necesita que se genere.",
                options: [
                    { label: "Sí, lo tengo", price: 0, tip: "Ya cuenta con todo el contenido necesario para el sitio web.", checked: true },
                    { label: "No, me gustaría contratarlo", price: 550, tip: "Necesita que se genere contenido para el sitio web." }
                ],
                name: "webContent"
            },
        ]
    },
    {
        title: "Público Objetivo",
        items: [
            {
                type: "radio",
                label: "¿A qué público se dirige su negocio?",
                description: "Seleccione el segmento demográfico al que se dirige su negocio.",
                options: [
                    { label: "Mujeres", price: 0, tip: "Su negocio se dirige principalmente a mujeres." },
                    { label: "Hombres", price: 0, tip: "Su negocio se dirige principalmente a hombres." },
                    { label: "Ambos", price: 0, tip: "Su negocio se dirige tanto a hombres como a mujeres.", checked: true }
                ],
                name: "targetGender"
            },
            {
                type: "checkbox",
                label: "¿De qué edad?",
                description: "Seleccione el rango de edad al que se dirige su negocio.",
                options: [
                    { label: "Entre 18 y 30", price: 0, tip: "Jóvenes adultos." },
                    { label: "Entre 31 y 50", price: 0, tip: "Adultos en sus 30s." },
                    { label: "Más de 50", price: 0, tip: "Adultos mayores." },
                    { label: "Todas las edades", price: 0, tip: "Su negocio se dirige a todas las edades." }
                ],
                name: "targetAge"
            }
        ]
    },
    {
        title: "Dominio y Alojamiento",
        items: [
            {
                type: "radio",
                label: "¿Ya cuentan con un dominio y alojamiento web o necesitarán ayuda con esto?",
                description: "Indique si ya tiene dominio y alojamiento o si necesita asistencia con ello.",
                options: [
                    { label: "Tengo dominio y hosting", price: 0, tip: "Ya cuenta con un dominio y alojamiento web." },
                    { label: "Tengo dominio", price: 60, tip: "Solo tiene un dominio, pero necesita alojamiento web." },
                    { label: "No tengo nada", price: 110, tip: "Necesita tanto un dominio como alojamiento web.", checked: true }
                ],
                name: "domainHosting"
            }
        ]
    },   
    
];









/*
<div>

    Lista de Precios de Diseño y Desarrollo Web
    1. Sitio Web Básico (1-5 páginas)

    Diseño estándar: 500€ - 1.500€
    2. Sitio Web Corporativo (5-15 páginas)

    Diseño personalizado: 1.500€ - 4.000€
    3. Tienda en Línea (eCommerce)

    Basada en WooCommerce o PrestaShop: 2.500€ - 7.000€
    4. Blog o Sitio Web de Revista

    Diseño personalizado: 1.000€ - 3.500€
    5. Sitio Web con Funcionalidades Específicas

    Plataformas de reserva, foros, etc.: Desde 4.000€
    6. Diseño Responsivo

    Adicional: 200€ - 1.000€
    7. Creación de Contenido

    Por página: 50€ - 150€
    Por hora: 20€ - 50€
    8. Mantenimiento

    Mensual: 50€ - 200€
    Componentes Web Individuales
    1. Diseño Web

    Plantilla estándar: 100€ - 500€
    Diseño personalizado: 500€ - 3.000€
    2. Página Principal (Landing Page)

    Básica: 100€ - 300€
    Avanzada: 300€ - 1.000€
    3. Páginas Internas

    Por página: 50€ - 200€
    4. Blog o Sección de Noticias

    Diseño básico: 200€ - 500€
    Diseño avanzado: 500€ - 1.000€
    5. Tienda en Línea (eCommerce)

    Integración básica: 500€ - 1.500€
    Personalizada: 1.500€ - 5.000€
    6. Formularios

    Básico: 50€ - 100€
    Avanzado: 100€ - 500€
    7. Galería o Portafolio

    Básica: 100€ - 300€
    Avanzada: 300€ - 700€
    8. Integraciones Externas

    Por integración: 100€ - 1.000€
    9. Diseño Responsivo Adicional

    200€ - 500€
    10. Optimización SEO

    Básica: 100€ - 500€
    Avanzada: 500€ - 2.000€
    Paquete de Diseño Web Personalizado
    1. Diseño Web con Plantilla Personalizada

    Plantilla estándar: 100€ - 500€
    Personalización de colores: 50€ - 150€
    2. Página Principal

    Básica: 100€ - 300€
    3. Blog o Sección de Noticias

    Diseño básico: 200€ - 500€
    4. Formulario de Contacto

    Básico: 50€ - 100€
    5. Servicios con Página Propia

    Por página (6 páginas): 300€ - 1.200€
    6. Página "Sobre Nosotros"

    50€ - 200€
    7. Funcionalidades Menores Adicionales

    50€ - 200€
    Desarrollo de Funcionalidades Específicas
    Solución Preexistente (Plugin WordPress): 50€ - 1.000€
    Sistema Personalizado: 1.000€ - 10.000€+
    Mantenimiento y Soporte: 50€ - 200€ mensuales


</div>
*/
