// Event Tracking Functions
function trackNavButtonClick(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => {
        gtag('event', 'click', {
          'event_category': 'Navigation',
          'event_label': buttonId,
        });
      });
    }
  }
  
  function trackStickyButtonClick(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => {
        gtag('event', 'click', {
          'event_category': 'Sticky Buttons',
          'event_label': buttonId,
        });
      });
    }
  }
  
  function trackPricingButtonClick(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => {
        gtag('event', 'click', {
          'event_category': 'Pricing',
          'event_label': buttonId,
        });
      });
    }
  }
  
  function trackContactButtonClick(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => {
        gtag('event', 'click', {
          'event_category': 'Contact',
          'event_label': buttonId,
        });
      });
    }
  }
  
  // Track Navigation Buttons
  trackNavButtonClick('tenerWebButtonNav');
  trackNavButtonClick('sobreNosotrosButtonNav');
  trackNavButtonClick('portfolioButtonNav');
  trackNavButtonClick('preciosButtonNav');
  trackNavButtonClick('procesoButtonNav');
  trackNavButtonClick('testimoniosButtonNav');
  trackNavButtonClick('contactoButtonNav');
  
  // Track Sticky Buttons
  trackStickyButtonClick('budgetSticky');
  trackStickyButtonClick('phoneSticky');
  
  // Track Other Buttons
  trackContactButtonClick('openPopUpBudget');
  trackPricingButtonClick('precioLan');
  trackPricingButtonClick('precioTie');
  trackPricingButtonClick('precioPersonalizado');
  trackContactButtonClick('phoneButton');
  trackContactButtonClick('whatsappButton');
  trackContactButtonClick('emailButton');
  

  function trackFormSubmission(selector) {
    var form = document.querySelector(selector);
    if (form) {
      form.addEventListener('submit', function(event) {
        // Evita el envío del formulario por defecto
        event.preventDefault();
  
        // Datos del formulario para ser enviados tras el rastreo
        var formData = new FormData(form);
  
        // Enviar evento a Google Analytics
        gtag('event', 'submit', {
          'event_category': 'Form',
          'event_label': selector,
          'event_callback': function() {
            // Envía el formulario después del callback
            form.submit();
          }
        });
  
        // Asegúrate de que el formulario se envíe incluso si Google Analytics no responde
        setTimeout(function() {
            form.submit();
        }, 2000); // Ajusta el tiempo de espera según sea necesario
      });
    }
  }
  
  // Rastrear envíos de formularios específicos
  trackFormSubmission('#finalScreen form');
  trackFormSubmission('#contacto form');
  

  // Función de seguimiento de secciones
function trackSection(sectionId) {
    let options = {
      root: null, // toma como viewport el navegador
      rootMargin: '0px',
      threshold: 0.5 // al menos el 50% de la sección debe estar visible
    };
  
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Cuando la sección es visible
        if (entry.isIntersecting) {
          gtag('event', 'section_view', {
            'event_category': 'Scroll Tracking',
            'event_label': sectionId
          });
          // Opcional: Deja de observar la sección después de que se ha registrado la vista
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    let section = document.getElementById(sectionId);
    if (section) {
      observer.observe(section);
    }
  }
  
  // Rastrear secciones específicas
  trackSection('first-section');
  trackSection('second-section');
  trackSection('third-section');
  trackSection('tener-web');
  trackSection('sobre-nosotros');
  trackSection('portfolio');
  trackSection('precios');
  trackSection('proceso');
  trackSection('testimonios');
  trackSection('contacto');
  