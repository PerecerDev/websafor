<?php 

defined('ABSPATH') OR die;

?>

<section id="popUpBudget" class="hidden grid place-items-center fixed z-40 top-0 left-0 right-0 !mt-0 w-full h-screen bg-white overflow-y-auto">    
    <div id="closePopUp" class="absolute top-4 right-4 text-right rounded-xl text-lg text-teal-900 cursor-pointer hover:bg-gray-200 p-2 z-50">X</div>
    <div id="popUpcontent" class="container w-full lg:!w-3/4 text-center p-8">
        <!-- Pantalla de presentación -->
        <div id="introScreen">
            <h3 class="text-3xl font-serif font-bold mb-8">Estas son algunas preguntas para poder darte un presupuesto detallado</h3>
            <button id="startButton" class="mt-4 w-full text-cente py-4 bg-teal-900 text-white rounded-lg hover:bg-teal-800">Empezar</button>
        </div>
        
        <div id="questionScreens" class="hidden">
            <p id="questionIndicator" class="text-md top-6 left-0 right-0 block absolute"></p>
            <form id="questionForm" class="space-y-4 mx-auto max-w-xl mt-10 mb-20">
                <!-- Aquí se insertarán las preguntas dinámicamente -->
            </form>
            <div class=" space-x-4">
                <button type="button" id="prevCategory" class="hidden px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">← Anterior</button>
                <button type="button" id="nextCategory" class="px-4 py-2 bg-teal-900 text-white rounded-lg hover:bg-teal-800">Siguiente →</button>
            </div>
        </div>
        
        <!-- Pantalla final -->
        <div id="finalScreen" class="hidden">
            <h3 id="priceTitle" class="text-2xl font-serif font-bold mb-4">Este es el presupuesto de tu web</h3>
            <div id="summary" class="mb-4"></div> <!-- Contenedor para las respuestas -->
            <div id="finalPrice" class="text-2xl font-bold mb-4"></div> <!-- Contenedor para el precio -->

            <!-- Botones para enviar -->
            <div class="mt-6">
                <button id="emailButton" class="w-full text-center py-4 bg-teal-900 text-white mb-4 rounded-lg mr-2">Enviar por email</button>
<!--                 <button id="whatsappButton" class="w-full text-center py-4 bg-green-600 text-white rounded-lg">Enviar por WhatsApp</button>
 -->            </div>

            <!-- Formulario para email -->
            <!-- <div id="emailForm" class="mt-4 hidden mb-8">
                <label for="nameMail" class="block mb-2">Nombre</label>
                <input id="nameMail" type="text" class="bg-gray-200 p-4 w-full rounded-lg mb-2">
                <label for="emailInput" class="block mb-2">Dirección de Email</label>
                <input id="emailInput" type="email" class="bg-gray-200 p-4 w-full rounded-lg mb-4">
                <button id="sendEmailButton" class="w-full text-center py-4 mt-8 bg-teal-900 text-white rounded-lg">Enviar Presupuesto</button>
            </div> -->

            <div id="emailForm" class="mt-4 hidden mb-8">
                <?php echo do_shortcode('[contact-form-7 id="5b42666" title="Budget Form"]'); ?>
            </div>

            <!-- Formulario para WhatsApp -->
            <!-- <div id="whatsappForm" class="mt-4 hidden">
                <label for="nameWhatsapp" class="block mb-2">Nombre</label>
                <input id="nameWhatsapp" type="text" class="bg-gray-200 p-4 w-full rounded-lg mb-2">
                <label for="whatsappInput" class="block mb-2">Número de Whatsapp</label>
                <input id="whatsappInput" type="tel" class="bg-gray-200 p-4 w-full rounded-lg mb-4">
                <button id="sendWhatsappButton" class="w-full text-center py-4 mt-8 bg-teal-900 text-white rounded">Enviar Presupuesto</button>
            </div> -->
        </div>

    </div>
</section>
