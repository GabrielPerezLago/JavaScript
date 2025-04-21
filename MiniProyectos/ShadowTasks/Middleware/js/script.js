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
    const _contenedor = getElementById('contenedor-tasks');
    
    
}

const _createTask = document.getElementById('crear');

_createTask.addEventListener("click", createTask);