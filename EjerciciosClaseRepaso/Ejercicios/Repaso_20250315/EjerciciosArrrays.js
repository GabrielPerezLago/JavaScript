/**
 * @Literal
 *  
 * Crear un Array de manera literal '([])'
 * 
 * */ 

function arrrayLiteral(){
    const arr = [1, 2, 3, 4];
    let emptyArr = [];

    alert(arr);
    alert(emptyArr);
}


/**
 * @Constructor 
 * 
 * Crear Arrays con el construcor de new Array()
 * 
 */

function constuctArray(){
    const arr = new Array(1,2,2);
    alert(arr);
}


/**
 * @ArrayOf
 * 
 * Crear Arrays con Array.of
 * 
 */

function arrayOf(){
    const arr = Array.of(1, 2, "Pan");
    alert(arr);
}

/**
 * @ArrayFrom
 * 
 * Crear Arrays Usando array From 
 * 
 */

function arrrayFrom(){
    const data = '1973';
    const arr = Array.from(data);

    alert(arr);
}

/**
 * @Spread
 * 
 * Como funciona el Operador Spread 
 * 
 */

function spreadOperator(){
    const arr = [...'acbd'];
    const arr_2 = [...[1, 2, 3], 4, 5];

    alert(arr);
    alert(arr_2);
}

/**
 * @AsignacionDinamica
 * 
 * Crear un array copiando elementos de un iterable (como otro array, strting, etc...).
 * # Añadir valores a las posiciones seleccionadas en el array
 */

function dinamicAsociation(){
    const arr = [];
    //#
    arr[0] = 1;
    arr[1] = 2;

    alert(arr);
}






/** 
 * @Funciones
 * 
 * Llamada a funciones
 * 
*/


// arrrayLiteral();
// constuctArray();
// arrayOf();
// arrrayFrom();
// spreadOperator();
// dinamicAsociation();