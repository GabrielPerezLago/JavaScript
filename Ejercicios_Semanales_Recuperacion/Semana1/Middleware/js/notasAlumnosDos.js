const send = document.getElementById("send");
const contenedorTabla = document.getElementById("contenedor-tabla");
const alumnosValue = null;
const asignaturasValue = null;

const alumnos = [];
const asignaturas = [];

function printTable() {
  const alumnosValue = document.getElementById("alumnos").value.split(",");
  const asignaturasValue = document.getElementById("asignaturas").value.split(",");
  
  contenedorTabla.innerHTML = "";

  const alumnos = procesarDatos(alumnosValue);
  const asignaturas = procesarDatos(asignaturasValue);


  const notas = () => {
    const resultado = [];
    alumnos.forEach((alumno) => { 
        asignaturas.forEach((asignatura) => {
            const nota = generarNotaAleatoria();
            resultado.push([alumno, asignatura, nota]);
        });
    }); 
    return resultado;
  };
  
  console.log(notas);
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const trEncabezado = document.createElement("tr");

  const thAlumno = document.createElement("th");
  thAlumno.textContent = "Alumnos";
    trEncabezado.appendChild(thAlumno);
  // Generacion de la cabecera de la tabla con los nombres de los alumnos
  asignaturas.forEach((asignatura) => {
    const th = document.createElement("th");
    th.textContent = asignatura;
    trEncabezado.appendChild(th);
    thead.appendChild(trEncabezado);
  });

  alumnos.forEach((alumno) => {
    // Aqui se crea el tr y el th del tbody con el nombre de la asignatura
    // Y al hacer el bucle se esta insertando el td en cada tr que se genera estando las asignaturas en la misma columna
    const tdAsignaturas = document.createElement("td");
    const tr = document.createElement("tr");
    tdAsignaturas.textContent = alumno;
    tr.appendChild(tdAsignaturas);

    asignaturas.forEach((asignatura) => {
        const td = document.createElement("td");
       // aqui a a nota le asigno el valor de la busqueda con .find 
       // de la nota que corresponde al alumno y asignatura
        const nota = notas.find(
            (nota) => nota[0] === alumno && nota[1] === asignatura
        );
        
        
        td.textContent = nota[2];
        if(parseFloat(nota[2]) >= 0 && parseFloat(nota[2]) <= 3){
            td.style.backgroundColor = "red";
        }else if (parseFloat(nota[2]) > 3 && parseFloat(nota[2]) <= 5){
            td.style.backgroundColor = "yellow";
        }else if (parseFloat(nota[2]) > 5 && parseFloat(nota[2]) <= 7){
            td.style.backgroundColor = "lightblue";
        }else if (parseFloat(nota[2]) > 7 && parseFloat(nota[2]) <= 10){
            td.style.backgroundColor = "green";
        }
        tr.appendChild(td);
        });
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  contenedorTabla.appendChild(table);
}

/**
 * Esta funcion asigna notas aleatorias a los alumnos y sus respectivas asignaturas
//  */
// function asignarNotas() {
//   alumnos.forEach((alumno) => {
//     asignaturas.forEach((asignatura) => {
//       const nota = generarNotaAleatoria();
//       notas.push([alumno, asignatura, nota]);
//     });
//   });
// }

/**
 *
 * @param {*} datos
 * @returns {Array}
 *
 * Funcion que recibe un array de datos y los procesa
 */
function procesarDatos(datos) {
  const resultado = [];
  datos.forEach((dato) => {
    resultado.push(dato);
  });

 return resultado;

}

/**
 *
 * @returns {Float}
 *
 * Funcion que genera notas aleatorias
 */
function generarNotaAleatoria() {
  return (Math.random() * 10).toFixed(2);
}

send.addEventListener("click",() => {
    printTable();
});
