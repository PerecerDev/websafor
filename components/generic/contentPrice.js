const contentPrice = [
    {
        title: "Tipo de Contenido",
        items: [
            {
                type: "radio",
                label: "¿Qué tipo de contenido necesita?",
                description: "Seleccione el tipo de contenido que desea para su sitio web.",
                options: [
                    { label: "Artículos de blog", price: 100, tip: "Contenido escrito para mantener a su audiencia informada y mejorar el SEO.", checked: true },
                    { label: "Descripciones de productos", price: 150, tip: "Textos detallados y persuasivos para sus productos." },
                    { label: "Estudios de caso", price: 200, tip: "Historias detalladas sobre cómo su producto o servicio ayudó a un cliente." },
                    { label: "E-books o guías", price: 500, tip: "Contenido extenso y detallado sobre un tema específico." }
                ],
                name: "contentType"
            }
        ]
    },
    {
        title: "Optimización SEO",
        items: [
            {
                type: "checkbox",
                label: "¿Requiere optimización SEO para su contenido?",
                description: "Seleccione si desea que su contenido esté optimizado para motores de búsqueda.",
                options: [
                    { label: "Optimización básica", price: 50, tip: "Incorporación de palabras clave y metadescripciones." },
                    { label: "Optimización avanzada", price: 150, tip: "Investigación de palabras clave, enlazado interno y optimización de imágenes." },
                    { label: "Auditoría SEO", price: 200, tip: "Revisión completa de su sitio web para identificar áreas de mejora." }
                ],
                name: "seoOptimization"
            }
        ]
    },
    {
        title: "Multimedia",
        items: [
            {
                type: "checkbox",
                label: "¿Necesita elementos multimedia para su contenido?",
                description: "Seleccione si requiere imágenes, videos o infografías para complementar su contenido.",
                options: [
                    { label: "Imágenes personalizadas", price: 100, tip: "Fotografías o gráficos diseñados específicamente para su contenido." },
                    { label: "Videos promocionales", price: 500, tip: "Videos cortos para promocionar un producto, servicio o idea." },
                    { label: "Infografías", price: 200, tip: "Gráficos informativos que resumen un tema de manera visual." }
                ],
                name: "multimediaContent"
            }
        ]
    },
    {
        title: "Redes Sociales",
        items: [
            {
                type: "checkbox",
                label: "¿Requiere contenido para redes sociales?",
                description: "Seleccione si necesita publicaciones o anuncios para plataformas de redes sociales.",
                options: [
                    { label: "Publicaciones regulares", price: 50, tip: "Contenido diseñado para mantener activa su presencia en redes sociales." },
                    { label: "Anuncios publicitarios", price: 100, tip: "Contenido diseñado para promocionar un producto o servicio en redes sociales." },
                    { label: "Historias o reels", price: 75, tip: "Contenido breve y atractivo para plataformas como Instagram o TikTok." }
                ],
                name: "socialMediaContent"
            }
        ]
    },
    {
        title: "Revisión y Edición",
        items: [
            {
                type: "radio",
                label: "¿Requiere servicios de revisión y edición?",
                description: "Indique si necesita que su contenido existente sea revisado y mejorado.",
                options: [
                    { label: "No, solo contenido nuevo", price: 0, tip: "Solo está interesado en contenido nuevo.", checked: true },
                    { label: "Sí, revisión básica", price: 50, tip: "Revisión gramatical y ortográfica." },
                    { label: "Sí, revisión y reescritura", price: 150, tip: "Revisión completa y reescritura para mejorar la calidad y el impacto." }
                ],
                name: "contentReview"
            }
        ]
    }
];
