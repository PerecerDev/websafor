
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
