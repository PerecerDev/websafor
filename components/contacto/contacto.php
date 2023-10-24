<?php 

defined('ABSPATH') OR die;

?>

<section id="contacto" data-theme="white" class="bg-white text-black px-10 py-16 text-center">
    <div class="container mx-auto">
        <h2 class="text-5xl font-bold font-serif mb-10">¡Hablemos!</h2>
        <p class="text-2xl font-medium mb-8">Estamos aquí para ayudarte a llevar tu negocio al siguiente nivel.</p>
        <p class="text-xl font-thin mb-10">Llámanos o envíanos un WhatsApp al <span class="font-semibold">686 18 43 28</span> o escríbenos a <a href="mailto:info@websafor.com" class="underline font-semibold">info@websafor.com</a>.</p>
  
        <div class="mt-6">
          <button id="emailButton" class="w-full text-center py-4 bg-gray-3 mb-4 rounded-lg mr-2">Llamar</button>
          <button id="whatsappButton" class="w-full text-center py-4 bg-green-600 text-white rounded-lg">Enviar WhatsApp</button>
      </div>
        
        <div class="border-t border-gray-300 mt-10 pt-10">
            <p class="text-xl font-medium mb-6">O si lo prefieres, déjanos tus datos y te contactaremos</p>
            <?php echo do_shortcode('[contact-form-7 id="467209b" title="Contact Form"]'); ?>
        </div>
    </div>
  </section>