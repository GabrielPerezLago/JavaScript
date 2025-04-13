function printReloj(){
    const horaactual = new Date();
    
    const hora = horaactual.getHours().toString().padStart(2, '0');
    const minuto = horaactual.getMinutes().toString().padStart(2, '0');
    const segundo = horaactual.getSeconds().toString().padStart(2, '0');0

    return `${hora}:${minuto}:${segundo}`;

}


function prcessData(input){
    return !input === '' ?  input.value.split(',') : null;
}

function main(){
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Productos - Fecha';

    const contendorHeader = document.createElement('div');
    const contenedorForm = document.createElement('div');
    const contenedorTable = document.createElement('div');

    contendorHeader.appendChild(h1);

    const form = document.createElement('form');

    const label = document.createElement('label');
    label.innerHTML = 'Inserte Productos:'; 
    label.for = 'productos';

    const input = document.createElement('input');
    input.name = 'productos';
    input.id = 'productos';

    const button = document.createElement('input');
    button.type = 'button';
    button.value = 'Procesar';

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);

    button.addEventListener('click', function(){
        const productos = prcessData(input);
        const fecha = new Date();

        if(productos === null){
            return;
        }

        const table = document.createElement("table");
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');


        const thProductos = document.createElement('th');
        thProductos.innerHTML = "Producto";

        const trHead = document.createElement('tr');
        trHead.appendChild(thProductos);
        thead.appendChild(trHead);


        table.appendChild(trHead);

        contenedorTable.appendChild(table);
        document.body.appendChild(contenedorTable);
        

    });

    contenedorForm.appendChild(form);
    
    document.body.appendChild(contendorHeader);
    document.body.appendChild(contenedorForm);

}

addEventListener('DOMContentLoaded', main);