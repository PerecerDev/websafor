document.addEventListener("DOMContentLoaded", function() {

    /*
    import {webPrice} from "../generic/webPrice.js";
    import {contentPrice} from "../generic/contentPrice.js";
    import {designPrice} from "../generic/designPrice.js";
    */

    function generatePriceList(prices) {
    let priceList = '<span class="text-lg font-medium block text-center mb-4">Listado de precios</span>';

    prices.forEach(section => {
        priceList += `<span class="text-md font-semibold block mt-4 mb-2">${section.title}</span><ul class="list-disc pl-5">`;
        section.items.forEach(item => {
            item.options.forEach(option => {
                if (option.price !== 0) { // Solo agregamos a la lista si el precio no es 0
                    priceList += `<li class="mb-2">${option.label}: <strong>${option.price}€</strong></li>`;
                }
            });
        });
        priceList += '</ul>';
    });

    return priceList;
    }




    function toggleVisibility(element) {
        if(element.classList.contains('hidden')) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    }

    document.getElementById('webDesignList').addEventListener('click', function(e){
        e.preventDefault();
        const pricesContainer = document.getElementById('webDesignPrices');
        if(pricesContainer.innerHTML.trim() === '') {
            pricesContainer.innerHTML = generatePriceList(webPrice);
        }
        toggleVisibility(pricesContainer);
    });

    document.getElementById('webContentList').addEventListener('click', function(e){
        e.preventDefault();
        const pricesContainer = document.getElementById('webContentPrices');
        if(pricesContainer.innerHTML.trim() === '') {
            pricesContainer.innerHTML = generatePriceList(contentPrice);
        }
        toggleVisibility(pricesContainer);
    });

    document.getElementById('graphicDesignList').addEventListener('click', function(e){
        e.preventDefault();
        const pricesContainer = document.getElementById('graphicDesignPrices');
        if(pricesContainer.innerHTML.trim() === '') {
            pricesContainer.innerHTML = generatePriceList(designPrice);
        }
        toggleVisibility(pricesContainer);
    });
});
