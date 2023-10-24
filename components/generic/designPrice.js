const designPrice = [
    {
        title: "Identidad de Marca",
        items: [
            {
                type: "checkbox",
                label: "¿Qué elementos de identidad de marca necesita?",
                description: "Seleccione los elementos que desea para establecer o renovar la identidad de su marca.",
                options: [
                    { label: "Diseño de logotipo", price: 300, tip: "Creación de un logotipo único y representativo para su marca." },
                    { label: "Manual de marca", price: 500, tip: "Guía detallada con las especificaciones de uso de su marca." },
                    { label: "Tarjetas de visita", price: 100, tip: "Diseño de tarjetas de presentación profesionales." },
                    { label: "Papelería corporativa", price: 200, tip: "Diseño de elementos como hojas membretadas, sobres y más." }
                ],
                name: "brandIdentity"
            }
        ]
    },
    {
        title: "Publicidad y Promoción",
        items: [
            {
                type: "checkbox",
                label: "¿Qué materiales promocionales necesita?",
                description: "Seleccione los elementos que desea para promocionar su negocio o evento.",
                options: [
                    { label: "Folletos", price: 150, tip: "Diseño de folletos informativos o promocionales." },
                    { label: "Carteles", price: 200, tip: "Diseño de carteles para eventos o promociones." },
                    { label: "Banners publicitarios", price: 100, tip: "Diseño de banners para publicidad en línea o física." },
                    { label: "Anuncios para redes sociales", price: 100, tip: "Diseño de anuncios optimizados para plataformas de redes sociales." }
                ],
                name: "advertisingMaterials"
            }
        ]
    },
    {
        title: "Empaque y Presentación",
        items: [
            {
                type: "checkbox",
                label: "¿Requiere diseño para empaque o presentación de productos?",
                description: "Seleccione si necesita diseño para cajas, etiquetas o cualquier otro tipo de empaque.",
                options: [
                    { label: "Diseño de cajas", price: 250, tip: "Diseño personalizado para cajas de productos." },
                    { label: "Etiquetas de productos", price: 150, tip: "Diseño de etiquetas para productos." },
                    { label: "Bolsas personalizadas", price: 200, tip: "Diseño de bolsas con la marca o promoción." }
                ],
                name: "packagingDesign"
            }
        ]
    },
    {
        title: "Diseño Digital",
        items: [
            {
                type: "checkbox",
                label: "¿Necesita diseño gráfico para plataformas digitales?",
                description: "Seleccione los elementos de diseño que requiere para plataformas en línea.",
                options: [
                    { label: "Diseño de interfaz de usuario (UI)", price: 500, tip: "Diseño de interfaces para aplicaciones o sitios web." },
                    { label: "Diseño de experiencia de usuario (UX)", price: 600, tip: "Optimización del diseño para mejorar la experiencia del usuario." },
                    { label: "Infografías", price: 200, tip: "Diseño de gráficos informativos para web o redes sociales." }
                ],
                name: "digitalDesign"
            }
        ]
    }
];
