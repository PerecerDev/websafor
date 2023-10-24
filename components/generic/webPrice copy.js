const webPrice = [
    {
        title: "Tipo de Web",
        items: [
            {
                type: "radio",
                label: "¿Qué tipo de web necesitas?",
                description: "Escoge el tipo de web que necesitas para tu proyecto",
                options: [
                    { label: "Presentación (Landing Page)", price: 300, tip: "Web de una sola pagina. Perfecta como carta de presentación.", checked: true },
                    { label: "Servicios", price: 500, tip: "Web para mostrar cada servicio con su propia pagina. Perfecta para detallar tus servicios." },
                    { label: "Tienda Online", price: 1800, tip: "Web para vender tus productos. Cada producto tiene su propia pagina." },
                    { label: "Personalizada", price: 3000, tip: "Tu web completamente a medida. Ideal para proyectos con necesidades especiales." }
                ],
                name: "webType"
            }
        ]
    },
    {
        title: "Funcionalidades",
        items: [
            {
                type: "checkbox",
                label: "¿Qué funcionalidades necesita en su web?",
                description: "Seleccione las funcionalidades que desea incorporar en su sitio web.",
                options: [
                    { label: "Formulario de contacto", price: 50, tip: "Permite a los visitantes enviar mensajes directamente desde el sitio web." },
                    { label: "Sección de noticias (blog)", price: 200, tip: "Comparta noticias, artículos o actualizaciones con sus visitantes." },
                    { label: "Galería", price: 150, tip: "Muestre imágenes o proyectos en un formato visual atractivo." },
                    { label: "Sistema de reservas", price: 300, tip: "Permite a los visitantes reservar citas o servicios." },
                    { label: "Integración con redes sociales", price: 100, tip: "Conecte su sitio web con sus perfiles de redes sociales." },
                    { label: "Comentarios y valoraciones", price: 100, tip: "Permite a los visitantes dejar comentarios o valoraciones." },
                    { label: "Suscripción a newsletter", price: 80, tip: "Recopile correos electrónicos para enviar boletines o actualizaciones." },
                    { label: "Área de miembros", price: 250, tip: "Un área exclusiva para miembros o usuarios registrados." },
                    { label: "Chat en vivo", price: 150, tip: "Comunicación en tiempo real con los visitantes del sitio web." },
                    { label: "Multilenguaje", price: 300, tip: "Ofrezca su contenido en varios idiomas." }
                ],
                name: "webFeatures"
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
                    { label: "Solo tengo logo", price: 150, tip: "Solo cuenta con un logotipo, pero no una guía de estilo." },
                    { label: "Solo tengo estilo de marca", price: 150, tip: "Tiene una guía de estilo pero no un logotipo." },
                    { label: "No tengo ninguna", price: 300, tip: "Necesita tanto un logotipo como una guía de estilo.", checked: true }
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
                    { label: "No, me gustaría contratarlo", price: 500, tip: "Necesita que se genere contenido para el sitio web." }
                ],
                name: "webContent"
            },
            {
                type: "checkbox",
                label: "¿Qué tipo de contenido necesita?",
                description: "Seleccione el tipo de contenido que necesita para su sitio web.",
                options: [
                    { label: "Redacción de textos", price: 200, tip: "Creación de textos y artículos para el sitio web." },
                    { label: "Fotografía", price: 300, tip: "Imágenes profesionales para mejorar la estética del sitio web." },
                    { label: "Producción de video", price: 500, tip: "Videos promocionales o explicativos para el sitio web." }
                ],
                name: "contentTypes"
            }
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
                    { label: "Entre 31 y 40", price: 0, tip: "Adultos en sus 30s." },
                    { label: "Entre 41 y 50", price: 0, tip: "Adultos en sus 40s." },
                    { label: "Entre 51 y 60", price: 0, tip: "Adultos en sus 50s." },
                    { label: "Más de 60", price: 0, tip: "Adultos mayores." },
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
                    { label: "Tengo dominio", price: 50, tip: "Solo tiene un dominio, pero necesita alojamiento web." },
                    { label: "No tengo nada", price: 150, tip: "Necesita tanto un dominio como alojamiento web.", checked: true }
                ],
                name: "domainHosting"
            }
        ]
    },
    {
        title: "Mantenimiento y Actualizaciones",
        items: [
            {
                type: "radio",
                label: "¿Le gustaría un paquete de mantenimiento para su sitio web?",
                description: "Elija si desea un paquete de mantenimiento para mantener su sitio web actualizado y seguro.",
                options: [
                    { label: "No, me encargaré yo mismo", price: 0, tip: "Prefiere manejar el mantenimiento del sitio web por su cuenta.", checked: true },
                    { label: "Sí, mantenimiento mensual", price: 100, tip: "Mantenimiento regular cada mes." },
                    { label: "Sí, mantenimiento trimestral", price: 250, tip: "Mantenimiento regular cada tres meses." },
                    { label: "Sí, mantenimiento anual", price: 900, tip: "Mantenimiento regular una vez al año." }
                ],
                name: "maintenancePackage"
            }
        ]
    },
    {
        title: "Integraciones Especiales",
        items: [
            {
                type: "checkbox",
                label: "¿Requiere alguna integración especial?",
                description: "Seleccione si necesita integraciones especiales, como CRM, sistemas de pago, entre otros.",
                options: [
                    { label: "Integración con CRM", price: 300, tip: "Conecte su sitio web con un sistema de gestión de relaciones con clientes." },
                    { label: "Integración con sistema de pago", price: 200, tip: "Agregue opciones de pago en línea a su sitio web." },
                    { label: "Integración con sistema de facturación", price: 250, tip: "Conecte su sitio web con un sistema de facturación." },
                    { label: "APIs personalizadas", price: 500, tip: "Desarrollo de APIs personalizadas para funciones específicas." },
                    { label: "Integración con tienda física", price: 400, tip: "Conecte su tienda en línea con su tienda física." }
                ],
                name: "specialIntegrations"
            }
        ]
    }
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
