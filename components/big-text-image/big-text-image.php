<?php

defined('ABSPATH') OR die;

$img = RTEMU . '/assets/img/componentes/pensando2.png';

?>

<section id="second-section" data-theme="orange" class="w-full relative block bg-orange-200 md:h-[75vh]">
    <aside class="container mx-auto lg:w-3/4 w-full relative z-20 p-12 pt-32 lg:!pt-36 text-right text-teal-900">
        
        <h2 class="w-full font-serif text-6xl lg:!text-7xl font-bold mb-10 text-white">¿Cuánto cuesta una web?</h2>
        <h3 class="w-full font-sans text-4xl lg:!text-5xl font-thin text-right text-stone-500 mb-20 pl-36">Desde 890 €</h3>

    </aside>
    <aside class="container w-full relative">
        <div class="overflow-hidden absolute z-20 -bottom-48 lg:!-bottom-[36rem] lg:left-60">
            <img src=<?php echo $img; ?> alt="¿Cuánto cuesta una web?" class=" w-80 lg:!w-[35rem] h-auto block"/>
        </div>
    </aside>
</section>


<!-- 
<section id="second-section" data-theme="orange" class=" w-full relative">
    <aside class="w-full relative z-20 p-12 !pt-32 text-right text-teal-900 bg-orange-200">
        
        <h2 class="w-full font-serif text-6xl font-bold mb-10 text-white">¿Cuánto cuesta una web?</h2>
        <h3 class="w-full font-sans text-4xl font-thin text-right text-stone-500 mb-20 pl-36">Desde 890 €</h3>

    </aside>
    <aside class="w-full overflow-hidden absolute z-20 -bottom-48 ">
        <img src=<?php //echo $img; ?> alt="¿Cuánto cuesta una web?" class=" w-80 h-auto block"/>
    </aside>
</section> -->
