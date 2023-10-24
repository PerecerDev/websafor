<?php 

defined('ABSPATH') OR die;

?>

<section id="servicios" data-theme="white" class="text-black body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <h2 class="font-serif text-6xl font-bold mb-14">Descubre nuestros servicios</h2>
      </div>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <!-- Diseño Web -->
          <div class="p-12 md:w-1/3 flex flex-col text-center items-center">
            <div class="relative w-24 h-24">
              <div class="relative w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-200 text-teal-950 mb-5 flex-shrink-0"></div>
              <img src=<?php echo RTEMU . "/assets/img/servicios/webs.png"; ?> class="absolute z-10 w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div class="flex-grow">
              <h2 class="font-sans text-2xl font-medium mb-3">Creación Web</h2>
              <span class="font-sans text-xl font-thin">Diseño responsivo, e-commerce, blogs y más. Adaptamos tu sitio a las necesidades de tu negocio.</span>
              <a href="#" id="webDesignBtn" class="block w-full p-6 mt-8 mb-2 text-center rounded-md text-white bg-teal-950 text-2xl font-sans font-thin">Obtén un presupuesto gratuito al instante</a>
              <a href="#" id="webDesignList" class=" block mt-4 text-center text-teal-900 text-md font-sans font-thin">Consulta la lista de precios</a>
              <div id="webDesignPrices" class="hidden w-full p-8 mt-8 mb-2 text-left bg-orange-200 rounded-md text-teal-900 text-md font-sans font-thin"></div>
            </div>
          </div>
          <!-- Mantenimiento Web -->
          <div class="p-12 md:w-1/3 flex flex-col text-center items-center">
            <div class="relative w-24 h-24">
              <div class="relative w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-200 text-teal-950 mb-5 flex-shrink-0"></div>
              <img src=<?php echo RTEMU . "/assets/img/servicios/content.png"; ?> class="absolute z-10 w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div class="flex-grow">
              <h2 class="font-sans text-2xl font-medium mb-3">Contenido Web</h2>
              <span class="font-sans text-xl font-thin">Mantenimiento y actualizaciones para tu sitio web, garantizando su óptimo funcionamiento.</span>
              <a href="#" id="webContentBtn" class="block w-full p-6 mt-8 mb-2 text-center rounded-md text-white bg-teal-950 text-2xl font-sans font-thin">Calcula el precio de tu contenido</a>
              <a href="#" id="webContentList" class=" block mt-4 text-center text-teal-900 text-md font-sans font-thin">Consulta la lista de precios</a>
              <div id="webContentPrices" class="hidden w-full p-8 mt-8 mb-2 text-left bg-orange-200 rounded-md text-teal-900 text-md font-sans font-thin"></div>
            </div>
          </div>
          <!-- Diseño Gráfico -->
          <div class="p-12 md:w-1/3 flex flex-col text-center items-center">
            <div class="relative w-24 h-24">
              <div class="relative w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-200 text-teal-950 mb-5 flex-shrink-0"></div>
              <img src=<?php echo RTEMU . "/assets/img/servicios/graphic-design.png"; ?> class="absolute z-10 w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div class="flex-grow">
              <h2 class="font-sans text-2xl font-medium mb-3">Diseño Gráfico</h2>
              <span class="font-sans text-xl font-thin">Logos personalizados, tarjetas de visita, y más. Refleja la identidad de tu marca con un diseño único.</span>
              <a href="#" id="graphicDesignBtn" class="block w-full p-6 mt-8 mb-2 text-center rounded-md text-white bg-teal-950 text-2xl font-sans font-thin">Consulta la lista</a>
              <a href="#" id="graphicDesignList" class=" block mt-4 text-center text-teal-900 text-md font-sans font-thin">Consulta la lista de precios</a>
              <div id="graphicDesignPrices" class="hidden w-full p-8 mt-8 mb-2 text-left bg-orange-200 rounded-md text-teal-900 text-md font-sans font-thin"></div>
            </div>
          </div>
          
        </div>
    </div>
  </section>
