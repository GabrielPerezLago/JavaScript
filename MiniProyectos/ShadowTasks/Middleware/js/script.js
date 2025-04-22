const _TASKS_ARRAY = [];
let idContador = 1;

function createTask(){
    const _titulo = document.getElementById('titulo').value;
    const _descripcion = document.getElementById('descripcion').value;
    const _prioridad = document.getElementById('prioridad').value;

    if(!_titulo || _titulo === ''){
        return;
    }

    if(!_descripcion || _descripcion === ''){
        return; 
    }

    if(!_prioridad){
        return; 
    }

    _TASKS_ARRAY.push({
        id: idContador++,
        nombre:_titulo ,
        descripcion: _descripcion,
        prioridad : _prioridad
    });

    console.log(_TASKS_ARRAY);

    printTask(_TASKS_ARRAY);

}

function printTask(arr){

    const _contenedor = document.getElementById("contenedor-tasks");
    _contenedor.innerHTML = "";
    arr.forEach((tarea) => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card';
        cardContainer.style = "width: 18rem";

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const cardTittle = document.createElement("h2");
        cardTittle.className = 'card-title';
        const cardText = document.createElement('p');
        cardBody.className = 'card-text';
        
        cardTittle.textContent = tarea.id + "-" + tarea.nombre;
        cardText.textContent = tarea.descripcion;
        
        cardBody.appendChild(cardTittle);
        cardBody.appendChild(cardText);
        cardContainer.appendChild(cardBody);
        _contenedor.appendChild(cardContainer);
    });

    


}

const _createTask = document.getElementById('crear');

_createTask.addEventListener("click", createTask);