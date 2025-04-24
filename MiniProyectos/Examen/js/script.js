function main(){
    const formContainer = document.createElement('div');
    const form = document.createElement('form');

    const label = document.createElement('label');
    label.textContent = "Productos";

    const input = document.createElement('input');
    input.type = "text";
    input.id = "productos";
    input.name = "productos";

    const button = document.createElement('input');
    button.type = 'button';
    button.value = "Procesar";


    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);

    formContainer.appendChild(form);

    documen.body.appendChild(formContainer);
}


document.addEventListener("DOMContentLoaded", main);