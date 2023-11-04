<?php 

defined('ABSPATH') OR die;

?>

<section id="sticky-header" class="hidden bg-opacity-0 transition-all duration-1000 flex flex-col justify-between items-center h-auto fixed top-0 left-0 w-full bg-white z-30 border-b-[1px] border-b-black">
    <aside class="container w-full mx-auto lg:!w-3/4">
            
        <div class="flex w-full justify-between items-center py-2">
            <!-- Logo a la izquierda -->
            <a href="/">
                <?php 
                    echo '<div class="block w-16 md:!w-17 lg:!w-18 ml-8">';
                        show_component('logo','generic');
                    echo '</div>';
                ?>
            </a>
            <!-- Botón '+' a la derecha -->
            <a href="javascript:void(0)" id="toggleButton" class="block right-0 mr-6 font-thin text-4xl">
                +
            </a>
        </div>

        <!-- Menú de navegación debajo -->
        <nav id="navMenu" class="transition-opacity transition-max-height duration-00 opacity-0 max-h-0 overflow-hidden w-full font-sans font-light text-xl mt-0 mb-0">

            <ul class="grid columns-1 gap-5 text-right mr-6 space-x-8">
                <li><a id="tenerWebButtonNav" href="#tener-web" class="">La importancia de una web</a></li>
                <li><a id="sobreNosotrosButtonNav" href="#sobre-nosotros" class="">Sobre nosotros</a></li>
                <li><a id="portfolioButtonNav" href="#portfolio" class="">Portfolio</a></li>
                <li><a id="preciosButtonNav" href="#precios" class="">Precios</a></li>
                <li><a id="procesoButtonNav" href="#proceso" class="">Proceso</a></li>
                <li><a id="testimoniosButtonNav" href="#testimonios" class="">Testimonios</a></li>
                <li><a id="contactoButtonNav" href="#contacto" class="">Contacto</a></li>
            </ul>
        </nav>

    </aside>
</section>


<section id="sticky-contact" class="hidden bg-opacity-0 transition-all duration-1000 flex justify-between items-center h-auto fixed bottom-0 left-0 w-full p-3 z-30">

    <nav class="container grid grid-cols-4 gap-4 w-full mx-auto lg:!w-3/4 justify-between items-center">
        <a id="budgetSticky" href="#" class="col-span-3 py-3 w-full text-center rounded-md text-teal-900 bg-orange-200 text-2xl font-sans font-thin">
            Presupuesto online
        </a>
        <a id="phoneSticky" href="tel:+34644286244" class="col-span-1 py-3 w-full text-center rounded-md text-teal-900 bg-orange-200 text-2xl font-sans font-thin flex justify-center items-center gap-4">
            <svg id="phoneIcon" data-name="Capa 1" width="2rem" height="2rem" style="fill: #134e4a;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.62 10.67">
                <path class="cls-1" d="m6.62,5.33c0,1.34,0,2.69,0,4.03,0,.65-.42,1.16-1.05,1.29-.07.01-.13.02-.2.02-1.37,0-2.75,0-4.12,0-.67,0-1.24-.56-1.25-1.23,0-.44,0-.89,0-1.33,0-2.27,0-4.53,0-6.8C0,.65.42.14,1.06.02c.07-.01.13-.02.2-.02,1.37,0,2.73,0,4.1,0,.69,0,1.26.57,1.26,1.27,0,1.35,0,2.71,0,4.06Zm-6.09,0c0,1.34,0,2.68,0,4.02,0,.48.31.79.79.79,1.33,0,2.65,0,3.98,0,.07,0,.14,0,.21-.02.35-.09.57-.38.57-.77,0-2.68,0-5.36,0-8.03,0-.03,0-.06,0-.08-.02-.37-.33-.68-.7-.7-.19,0-.39,0-.58,0-.08,0-.12.03-.15.1-.05.11-.11.22-.16.33-.1.23-.29.33-.53.33-.44,0-.88,0-1.32,0-.24,0-.42-.11-.52-.33-.05-.12-.12-.23-.18-.35-.02-.04-.04-.08-.08-.08-.27,0-.54-.04-.8.03-.32.09-.53.38-.53.73,0,1.34,0,2.69,0,4.03Z"/>
                <path class="cls-1" d="m3.31,8.11c.26,0,1.33-.18,1.28.29-.04.41-1.05.24-1.32.24-.26,0-1.25.17-1.24-.27.01-.44,1.01-.26,1.28-.26Z"/>
            </svg>

            <span class=" hidden md:!inline-block lg:!inline-block">644 286 244</span>
        </a>
    </nav>

</section>





<script>
document.addEventListener('DOMContentLoaded', function() {

    const stickyHeader = document.getElementById('sticky-header');
    const stickyContact = document.getElementById('sticky-contact');
    const secondSection = document.getElementById('second-section');
    const tenerWebSection = document.getElementById('tener-web');
    const navMenu = document.getElementById('navMenu');
    const toggleButton = document.getElementById('toggleButton');
    
    const isHomePage = !!secondSection;
    if (isHomePage) {
        window.addEventListener('scroll', function() {
            if (window.scrollY >= secondSection.offsetTop) {
                stickyHeader.style.display = 'flex';
            } else {
                stickyHeader.style.display = 'none';
            }
        });

        window.addEventListener('scroll', function() {
            // Determina la posición de activación usando la altura del viewport
            const activationPoint = tenerWebSection.offsetTop - window.innerHeight + 100;

            if (window.scrollY >= activationPoint) {
                stickyContact.style.display = 'flex';
            } else {
                stickyContact.style.display = 'none';
            }
        });
    }else{
        stickyHeader.style.display = 'flex';
        stickyContact.style.display = 'flex';
    }

    toggleButton.addEventListener('click', function() {
        if (navMenu.style.maxHeight === "0px" || navMenu.style.maxHeight === "") {
            let actualHeight = navMenu.scrollHeight + "px"; 

            navMenu.style.opacity = "1";
            navMenu.style.maxHeight = actualHeight;

            // Añade margen al abrir el menú
            navMenu.classList.remove('mt-0', 'mb-0');
            navMenu.classList.add('mt-2', 'mb-8');

            this.textContent = '-';
        } else {
            navMenu.style.opacity = "0";
            navMenu.style.maxHeight = "0";

            // Remueve margen al cerrar el menú
            navMenu.classList.add('mt-0', 'mb-0');
            navMenu.classList.remove('mt-2', 'mb-8');

            this.textContent = '+';
        }
    });

    // Cerrar el menú automáticamente después de hacer clic en un enlace y ajustar la posición de desplazamiento
    const navLinks = document.querySelectorAll('#navMenu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            const targetId = this.getAttribute('href'); // Obtener el valor del atributo href (por ejemplo, "#ejemplos")
            const targetElement = document.querySelector(targetId); // Seleccionar el elemento correspondiente en la página

            // Calcular la posición de desplazamiento ajustada
            const offset = 10; // Ajusta este valor según tus necesidades
            const adjustedScrollPosition = targetElement.offsetTop - offset;

            // Desplazarse a la posición ajustada
            window.scrollTo({
                top: adjustedScrollPosition,
                behavior: 'smooth'
            });

            // Cerrar el menú
            navMenu.style.opacity = "0";
            navMenu.style.maxHeight = "0";  // Restablecer la altura máxima a "0px"
            navMenu.classList.add('mt-0', 'mb-0');
            navMenu.classList.remove('mt-2', 'mb-8');
            toggleButton.textContent = '+';
        });
    });

});

</script>

