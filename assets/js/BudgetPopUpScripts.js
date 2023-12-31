document.addEventListener("DOMContentLoaded", function() {

    const secondSection = document.getElementById('second-section');
    const isHomePage = !!secondSection;
    let questions = [];
    let totalCategories = 0;

    function setQuestions(source) {
        switch(source) {
            case 'webDesign':
                questions = webPrice;
                break;
            case 'webContent':
                questions = contentPrice;
                break;
            case 'graphicDesign':
                questions = designPrice;
                break;
        }
        totalCategories = questions.length;  // Actualizar totalCategories aquí
        generateQuestions();
        document.getElementById('popUpBudget').classList.remove('hidden');
    }

    if (isHomePage) {
            
        document.querySelector('#openPopUpBudget').addEventListener('click', function(e){
            e.preventDefault();
            setQuestions('webDesign');
        });
        
        document.getElementById('precioLan').addEventListener('click', function(e){
            e.preventDefault();
            setQuestions('webDesign');
        });

        document.getElementById('precioTie').addEventListener('click', function(e){
            e.preventDefault();
            setQuestions('webDesign');
        });

        document.getElementById('precioCre').addEventListener('click', function(e){
            e.preventDefault();
            setQuestions('webDesign');
        });

        document.getElementById('precioPro').addEventListener('click', function(e){
            e.preventDefault();
            setQuestions('webDesign');
        });

    }

    document.querySelector('#budgetSticky').addEventListener('click', function(e){
        e.preventDefault();
        setQuestions('webDesign');
    });

    document.getElementById('closePopUp').addEventListener('click', function(e){
        document.getElementById('popUpBudget').classList.add('hidden');
    });

    let answers = {};
    let currentCategory = 1;

    document.getElementById('startButton').addEventListener('click', function() {
        document.getElementById('introScreen').classList.add('hidden');
        document.getElementById('questionScreens').classList.remove('hidden');
        document.getElementById('questionIndicator').textContent = `${currentCategory} / ${totalCategories}`;

    });

    document.getElementById('nextCategory').addEventListener('click', function() {
        // Almacenar las respuestas actuales
        let currentInputs = document.querySelectorAll(`.category[data-category="${currentCategory}"] input, .category[data-category="${currentCategory}"] select`);
        currentInputs.forEach(input => {
            if (input.type === "text" || input.type === "select-one" || input.type === "radio") {
                if (input.checked || input.type !== "radio") {  // Asegurarse de que el radio esté seleccionado
                    //answers[input.name] = input.value;
                    answers[input.name] = input.value;
                } 
            } else if (input.type === "checkbox" && input.checked) {
                if (!answers[input.name]) {
                    answers[input.name] = [];
                }
                answers[input.name].push(input.value);
            }
        });

        if (currentCategory < totalCategories) {
            document.querySelector(`.category[data-category="${currentCategory}"]`).classList.add('hidden');
            currentCategory++;
            document.querySelector(`.category[data-category="${currentCategory}"]`).classList.remove('hidden');
            document.getElementById('questionIndicator').textContent = `${currentCategory} / ${totalCategories}`;
            
            if (currentCategory > 1) {
                document.getElementById('prevCategory').classList.remove('hidden');
            }

        }  else {
            document.getElementById('questionScreens').classList.add('hidden');
            document.getElementById('finalScreen').classList.remove('hidden');
            
            // Mostrar las respuestas en la pantalla final
            let summary = document.getElementById('summary');
            let answerList = '';
            let summarList = '';
            for (let key in answers) {
                if (answers[key]) {  // Asegurarse de que la respuesta tiene valor
                    let { questionLabel, optionLabels } = findQuestionLabelByKey(key);
                    answerList += `<div class="mb-4">`;
                    answerList += `<p>${questionLabel}:</p>`;
                    summarList += `· ${questionLabel} \r\n`;
                    if (Array.isArray(answers[key])) {
                        // Usar optionLabels, que ahora contiene los labels en lugar de los values
                        answerList += `<p class="font-bold ml-4">${optionLabels.join(', ')}</p>`;
                        summarList += `- ${optionLabels.join(', ')} \r\n\r\n`;
                    } else {
                        // Usar optionLabels que debería tener un solo label en este caso
                        answerList += `<p class="font-bold ml-4">${optionLabels[0] || answers[key]}</p>`;
                        summarList += `- ${optionLabels[0] || answers[key]} \r\n\r\n`;
                    }
                    answerList += `</div>`;
                }
            }
            summary.innerHTML = answerList;
            
            // Calcular el precio en función de las respuestas y mostrarlo
            let price = calculatePrice(answers);
            document.getElementById('finalPrice').textContent = `Precio estimado: ${price}€`;

            // Suponiendo que ya has generado estos valores con tu código
            let generatedSummary = summarList; // o como generes el resumen
            let generatedFinalPrice = `Precio estimado: ${price}€ *IVA inc.`; // o como generes el precio

            // Actualiza los campos ocultos en el formulario
            document.querySelector('[name="summary"]').value = generatedSummary;
            document.querySelector('[name="finalPrice"]').value = generatedFinalPrice;
            document.getElementById('finalPrice').classList.add('block','mt-8');
            document.getElementById('finalScreen').classList.remove('hidden');

            // Eventos para los botones de enviar por email y WhatsApp
            document.getElementById('emailButton').addEventListener('click', function() {
                // Ocultar resumen y precio
                document.getElementById('summary').classList.add('hidden');
                document.getElementById('finalPrice').classList.add('hidden');
                document.getElementById('emailButton').classList.add('hidden');
                document.getElementById('whatsappButton').classList.add('hidden');

                document.querySelector('#priceTitle').innerHTML = "Añade tu direcicón de email para enviarte el Presupuesto";

                // Mostrar el formulario de email y ocultar el de WhatsApp
                document.getElementById('emailForm').classList.remove('hidden');
                document.getElementById('whatsappForm').classList.add('hidden');
            });

            document.getElementById('whatsappButton').addEventListener('click', function() {
                // Ocultar resumen y precio
                document.getElementById('summary').classList.add('hidden');
                document.getElementById('finalPrice').classList.add('hidden');
                document.getElementById('emailButton').classList.add('hidden');
                document.getElementById('whatsappButton').classList.add('hidden');

                document.querySelector('#priceTitle').innerHTML = "Añade tu número de Whatsapp para enviarte el Presupuesto";

                // Mostrar el formulario de WhatsApp y ocultar el de email
                document.getElementById('whatsappForm').classList.remove('hidden');
                document.getElementById('emailForm').classList.add('hidden');
            });

            // Funcionalidad de envío por email (Ejemplo, requiere backend para enviar realmente el email)
            document.getElementById('sendEmailButton').addEventListener('click', function() {
                const email = document.getElementById('emailInput').value;
                // Aquí agregar la lógica para enviar por email
                document.querySelector('#5b42666').submit(); // Reemplaza 'ID_DEL_FORMULARIO' con el ID real del formulario de Contact Form 7
            });
            
            // Funcionalidad de envío por WhatsApp
            document.getElementById('sendWhatsappButton').addEventListener('click', function() {
                const phoneNumber = document.getElementById('whatsappInput').value;
                const message = `Hola, aquí está el presupuesto que calculé: ${totalPrice}. Detalles: ${selectionList}.`;
                window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
            });

        }
    });

    document.getElementById('prevCategory').addEventListener('click', function() {
        if (currentCategory > 1) {
            document.querySelector(`.category[data-category="${currentCategory}"]`).classList.add('hidden');
            currentCategory--;
            document.querySelector(`.category[data-category="${currentCategory}"]`).classList.remove('hidden');
            document.getElementById('questionIndicator').textContent = `${currentCategory} / ${totalCategories}`;
            if (currentCategory === 1) {
                document.getElementById('prevCategory').classList.add('hidden');
            }
        }
    });

    function findQuestionLabelByKey(key) {
        let questionLabel, optionLabels = [];
    
        // Encontrar la pregunta correspondiente
        questions.forEach(question => {
            question.items.forEach(item => {
                if (item.name === key) {
                    questionLabel = item.label; // Label de la pregunta
    
                    // Si la pregunta tiene opciones, encontrar el label de la opción
                    if (item.options && item.options.length) {
                        optionLabels = item.options.filter(option => {
                            if (Array.isArray(answers[key])) {
                                // Si es un array, es decir, un checkbox con varias opciones seleccionadas
                                return answers[key].includes(option.value);
                            } else {
                                // Si no es un array, es decir, un select o un radio
                                return option.value === answers[key];
                            }
                        }).map(option => option.label); // Guardar los labels en lugar de los values
                    }
                }
            });
        });
    
        // Devolver tanto el label de la pregunta como el/los label(s) de la opción(es) seleccionada(s)
        return { questionLabel, optionLabels };
    }
    

    function calculatePrice(answers) {
        let price = 0;
    
        questions.forEach(question => {
            question.items.forEach(item => {
                if (item.type === "select" || item.type === "radio") {
                    let selectedOption = item.options.find(option => option.value === answers[item.name]);
                    if (selectedOption) {
                        price += selectedOption.price;
                    }
                } else if (item.type === "checkbox" && answers[item.name]) {
                    answers[item.name].forEach(answerOption => {
                        let selectedOption = item.options.find(option => option.value === answerOption);
                        if (selectedOption) {
                            price += selectedOption.price;
                        }
                    });
                }
            });
        });
    
        return price;
    }

    let lastClickedIcon = null;  // Variable para rastrear el último ícono clickeado

    function showTip(tipText, event) {
        // Buscar si ya existe un tipBox
        const existingTipBox = document.querySelector('.tipBox');
        
        // Si ya existe un tipBox, eliminarlo
        if (existingTipBox) {
            existingTipBox.remove();
        }

        // Si el tipBox eliminado pertenece al mismo ícono, salir de la función
        if (event.target === lastClickedIcon) {
            lastClickedIcon = null;  // Resetear la variable
            return;
        }

        // Crear el contenedor del tip
        const tipDiv = document.createElement('div');
        tipDiv.textContent = tipText;
        tipDiv.classList.add('tipBox', 'bg-gray-800', 'text-white', 'p-4', 'text-md', 'font-thin', 'rounded-md', 'z-50', 'max-w-xs', 'mt-2', 'overflow-hidden', 'transition-all', 'duration-500', 'ease-in-out', 'opacity-0', 'max-h-0');

        // Insertar el tipBox justo después del ícono de información
        event.target.parentNode.insertBefore(tipDiv, event.target.nextSibling);

        // Captura la altura real del contenido una vez que se ha añadido al DOM.
        let actualHeight = tipDiv.scrollHeight + "px";  // scrollHeight te da la altura real del contenido, incluso si está oculto

        // Establecer un delay MUY CORTO para cambiar el max-height y opacity y desencadenar la animación
        setTimeout(() => {
            tipDiv.style.maxHeight = actualHeight;
            tipDiv.style.opacity = "1";
        }, 10);

        // Agregar un evento para ocultar el tipBox al hacer clic fuera
        document.addEventListener('click', function removeTip() {
            tipDiv.style.maxHeight = "0";
            tipDiv.style.opacity = "0";

            // Establecer un delay para remover el tip del DOM después de que la animación haya terminado
            setTimeout(() => {
                tipDiv.remove();
            }, 500); // Asegúrate de que este valor coincida con la duración de la transición (duration-500 en este caso)
        }, { once: true });

        // Actualizar la variable con el ícono clickeado
        lastClickedIcon = event.target;
    }

    // Generador de preguntas
    function generateQuestions() {
        const form = document.getElementById('questionForm');
        form.innerHTML = ''; 
    
        questions.forEach((category, index) => {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('category');
            categoryDiv.setAttribute('data-category', index + 1);
            if (index !== 0) {
                categoryDiv.classList.add('hidden');
            }
    
            category.items.forEach(item => {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('mb-4');
    
                const label = document.createElement('h3');
                label.textContent = item.label;
                label.classList.add('block', 'font-bold', 'text-2xl', 'font-serif', 'mb-4');
                questionDiv.appendChild(label);
    
                // Descripción de la pregunta
                if (item.description) {
                    const questionDescription = document.createElement('p');
                    questionDescription.textContent = item.description;
                    questionDescription.classList.add('mb-8', 'text-lg');
                    questionDiv.appendChild(questionDescription);
                }
    
                if (item.type === "text") {
                    const input = document.createElement('input');
                    input.type = "text";
                    input.id = item.name;
                    input.name = item.name;
                    input.classList.add('bg-gray-200','p-4','w-full', 'rounded-lg', 'mb-2');
                    questionDiv.appendChild(input);
                } else if (item.type === "checkbox" || item.type === "radio") {
                    item.options.forEach(option => {
                        const optionDiv = document.createElement('div');
                        optionDiv.classList.add('mb-1', 'text-left', 'py-2','px-4',);
    
                        const input = document.createElement('input');
                        input.type = item.type;
                        input.name = item.name;
                        input.value = option.value || option.label;
                        input.id = `${item.name}_${option.label}`; // Añadir un ID único para cada input
    
                        if (option.checked) { 
                            input.setAttribute('checked', 'checked');
                        }
    
                        optionDiv.appendChild(input);
    
                        const optionLabel = document.createElement('label');
                        optionLabel.setAttribute('for', input.id); // Asociar el label con el input mediante el ID
                        optionLabel.textContent = option.label;
                        optionLabel.classList.add('ml-2', 'cursor-pointer');
                        optionDiv.appendChild(optionLabel);
    
                        if (option.tip) {
                            const infoIcon = document.createElement('span');
                            infoIcon.textContent = 'i';
                            infoIcon.classList.add('inline-block', 'text-sm', 'bg-gray-200', 'ml-4', 'w-5', 'h-5', 'text-center', 'rounded-full', 'font-normal', 'font-serif', 'cursor-pointer');
    
                            infoIcon.setAttribute('data-tip', option.tip);
                            optionDiv.appendChild(infoIcon);
    
                            infoIcon.addEventListener('click', function(event) {
                                event.stopPropagation();
                                showTip(event.target.getAttribute('data-tip'), event);
                            });
                        }
    
                        questionDiv.appendChild(optionDiv);
                    });
                } else if (item.type === "select") {
                    const select = document.createElement('select');
                    select.id = item.name;
                    select.name = item.name;
                    item.options.forEach(option => {
                        const optionElement = document.createElement('option');
                        optionElement.value = option.value || option.label;
                        optionElement.textContent = option.label;
                        select.appendChild(optionElement);
                    });
                    select.classList.add('bg-gray-200','p-4','w-full', 'rounded-lg', 'mb-2');
                    questionDiv.appendChild(select);
                }
    
                categoryDiv.appendChild(questionDiv);
            });
    
            form.appendChild(categoryDiv);
        });
    }
    
    // Llamar a la función al cargar la página
    document.addEventListener('DOMContentLoaded', generateQuestions);

});

