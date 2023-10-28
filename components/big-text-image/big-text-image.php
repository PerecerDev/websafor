<?php

defined('ABSPATH') OR die;

$img = RTEMU . '/assets/img/componentes/pensando2.png';

?>

<section id="second-section" data-theme="orange" class="w-full relative block bg-orange-200 md:h-[75vh]">
    <aside class="container mx-auto w-full md:!w-3/4 relative z-20 p-12 pt-32 xl:!pt-36 text-right text-teal-900">
        
        <h2 class="w-full font-serif text-6xl xl:!text-7xl font-bold mb-10 text-white">¿Cuánto cuesta una web?</h2>
        <h3 class="w-full font-sans text-4xl xl:!text-5xl font-thin text-right text-teal-900 mb-20 pl-36">Desde 890 €</h3>

    </aside>
    <aside class="container w-full relative">
        <div class="overflow-hidden absolute z-20 -bottom-48 lg:!-bottom-[18rem] lg:left-32 xl:!-bottom-[36rem] xl:left-60">
            <img src=<?php echo $img; ?> alt="¿Cuánto cuesta una web?" class=" w-80 xl:!w-[28rem] h-auto block"/>
        </div>
    </aside>
</section>

