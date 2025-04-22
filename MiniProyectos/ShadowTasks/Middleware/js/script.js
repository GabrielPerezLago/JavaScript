let _TASKS_ARRAY = [];
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
    _contenedor.className = "d-flex flex-wrap gap-3"
    arr.forEach((tarea) => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card shadow-sm rounded-3';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTittle = document.createElement("h2");
        cardTittle.className = 'card-title m-4 ';

        const cardText = document.createElement('p');
        cardBody.className = 'card-text m-3';

        const deleteButton = document.createElement('input');

        const buttonContainaner = document.createElement('div');
        buttonContainaner.className = "d-flex justify-content-end align-items-center";
        deleteButton.type = 'button';
        deleteButton.value = 'Eliminar';
        deleteButton.className = 'btn btn-sm btn-outline-danger';


        deleteButton.addEventListener("click",() => {deleteTasks(tarea.id);});

        
        cardTittle.textContent = tarea.nombre;
        cardText.textContent = tarea.descripcion;
        
        buttonContainaner.appendChild(deleteButton);
        cardBody.appendChild(cardTittle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(buttonContainaner);
        cardContainer.appendChild(cardBody);
        _contenedor.appendChild(cardContainer);
    });
}

function deleteTasks(id){
    _TASKS_ARRAY =_TASKS_ARRAY.filter(t => t.id !== id);
    printTask(_TASKS_ARRAY);
}

const _createTask = document.getElementById('crear');

_createTask.addEventListener("click", (event) => {
    event.preventDefault();
    createTask();
});