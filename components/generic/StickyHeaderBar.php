<?php 

defined('ABSPATH') OR die;

?>

<section id="sticky-header" class="hidden bg-opacity-0 transition-all duration-1000 flex flex-col justify-between items-center h-auto fixed top-0 left-0 w-full bg-white z-30 border-b-[1px] border-b-black">

    <div class="flex w-full justify-between items-center py-2">
        <!-- Logo a la izquierda -->
        <a href="/">
            <?php 
                echo '<div class="block w-16 ml-8">';
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
            <li><a href="#tener-web" class="">La importancia de una web</a></li>
            <li><a href="#sobre-nosotros" class="">Sobre nosotros</a></li>
            <li><a href="#portfolio" class="">Portfolio</a></li>
            <li><a href="#precios" class="">Precios</a></li>
            <li><a href="#testimonios" class="">Testimonios</a></li>
            <li><a href="#contacto" class="">Contacto</a></li>
        </ul>
    </nav>

</section>


<section id="sticky-contact" class="hidden bg-opacity-0 transition-all duration-1000 flex flex-col justify-between items-center h-auto fixed bottom-0 left-0 w-full p-3 z-30">

    <nav class="flex w-full justify-between items-center">
        <a id="budgetSticky" href="#" class="inline-block py-3 w-full text-center rounded-md text-teal-900 bg-orange-200 text-2xl font-sans font-thin">
            Presupuesto online
        </a>
        <!-- <a href="https://wa.me/34686184328?text=Hola,%20estoy%20interesado%20en%20sus%20servicios." target="_blank" class="w-16 h-16 z-40 bg-green-500 p-2 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 flex items-center justify-center">
            <svg fill="#ffffff" class="w-8 h-8" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 308 308" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_468_"> <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path> <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path> </g> </g></svg>
        </a> -->
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

