
const webPrice = [
    {
        title: "Nombre del Negocio",
        items: [
            {
                type: "text",
                label: "¿Cómo se llama el negocio?",
                description: "Introduce el nombre de tu negocio.",
                name: "businessName",
                price: 0
            }
        ]
    },
    {
        title: "Sector del Negocio",
        items: [
            {
                type: "select",
                label: "¿Cuál es el sector de tu negocio?",
                description: "Selecciona el sector al que pertenece tu negocio.",
                name: "businessSector",
                options: [
                    { label: "Agricultura y Ganadería", value: "agricultura_ganaderia", price: 890},
                    { label: "Alimentación y Bebidas", value: "alimentacion_bebidas", price: 890 },
                    { label: "Arte y Cultura", value: "arte_cultura", price: 890 },
                    { label: "Automoción", value: "automocion", price: 890 },
                    { label: "Construcción e Inmobiliaria", value: "construccion_inmobiliaria", price: 890 },
                    { label: "Educación", value: "educacion", price: 890 },
                    { label: "Energía y Medio Ambiente", value: "energia_medioambiente", price: 890 },
                    { label: "Finanzas y Seguros", value: "finanzas_seguros", price: 890 },
                    { label: "Industria y Manufactura", value: "industria_manufactura", price: 890 },
                    { label: "Informática y Tecnología", value: "informatica_tecnologia", price: 890 },
                    { label: "Medicina y Salud", value: "medicina_salud", price: 890 },
                    { label: "Moda y Belleza", value: "moda_belleza", price: 890 },
                    { label: "Ocio y Entretenimiento", value: "ocio_entretenimiento", price: 890 },
                    { label: "Restauración y Hostelería", value: "restauracion_hosteleria", price: 890 },
                    { label: "Servicios Profesionales", value: "servicios_profesionales", price: 890 },
                    { label: "Transporte y Logística", value: "transporte_logistica", price: 890 },
                    { label: "Otros", value: "otros", price: 890 }
                ]
            }
        ]
    },
    {
        title: "Web Existente",
        items: [
            {
                type: "radio",
                label: "¿Ya tienes una web?",
                description: "Indica si ya cuentas con una página web.",
                name: "existingWebsite",
                options: [
                    { label: "No, esta será mi primera web", value: "no", price: 70, tip: "Si esta es tu primera web, te ayudaremos a crear una presencia en línea desde cero.", checked: true },
                    { label: "Sí, ya tengo web y quiero renovarla", value: "yes", price: 0, tip: "Si ya tienes una web, trabajaremos en mejorarla y adaptarla a tus necesidades actuales."},
                ]
            }
        ]
    },
    {
        title: "Imágenes",
        items: [
            {
                type: "radio",
                label: "¿Tienes imágenes de tus productos o servicios?",
                description: "Indica si cuentas con las imágenes necesarias para mostrar en tu página web.",
                name: "hasImages",
                options: [
                    { label: "No, necesito contratarlas", value: "no", price: 250, tip: "Si no tienes imágenes, podemos ayudarte a obtener fotografías profesionales para tu web.", checked: true },
                    { label: "Sí, ya cuento con las imagenes necesarias", value: "yes", price: 0, tip: "Si ya tienes imágenes, las integraremos en tu web para que se vean de la mejor manera." },
                ]
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
