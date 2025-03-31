function main() {
  
    //Obtener los datos de los inputs en este caso el del contenedor donde
    // se va a imprimir la tabla
    const contenedor = document.getElementById("contenedor-tabla");
    contenedor.innerHTML = ""; // aqui lo vaciamos para despues actualizar la tabla
  
    //Tomar datos de los inputs de alumnos y asignaturas
    const alumnosInput = document.getElementById("alumnos").value;
    const asignaturasInput = document.getElementById("asignaturas").value;



    // Comprobar si los inputs están vacíos
    // Si alguno de los inputs está vacío, mostrar un mensaje de error y salir de la función
    if (!alumnosInput || !asignaturasInput) {
      const errorMensaje = document.createElement("p");
      errorMensaje.textContent =
        "Error: Debe insertar datos en ambos campos (Alumnos y Asignaturas).";
      errorMensaje.className = "text-danger text-center fw-bold"; 
      contenedor.appendChild(errorMensaje);
      return;
    }



    // Procesar los datos de los inputs como arrays 
    const alumnos = procesarDatos(alumnosInput.split(","));
    const asignaturas = procesarDatos(asignaturasInput.split(","));
  
    // Crear las notas aleatorias para cada alumno y asignatura
    // y guardarlas en un array de notas
    const notas = asignarNotas(alumnos, asignaturas);


  
    // Aqui se crea y se genera la tabla
    const table = document.createElement("table");
    table.className = "table table-striped table-bordered pasar";
    
    const thead = document.createElement("thead");
    thead.className = "table pasar";
    
    const tbody = document.createElement("tbody");
    
    // Crear encabezado de la tabla
    const trEncabezado = document.createElement("tr");
    trEncabezado.className = "pasar";
    
    const thAlumno = document.createElement("th");
    thAlumno.textContent = "Alumnos";
    thAlumno.className = "pasar";
    trEncabezado.appendChild(thAlumno);
    
    const thMedia = document.createElement("th");
    thMedia.textContent = "Media Alumnos";
    thMedia.className = "pasar";
    
    asignaturas.forEach((asignatura) => {
      const th = document.createElement("th");
      th.textContent = asignatura;
      th.className = "pasar";
      trEncabezado.appendChild(th);
    });
    trEncabezado.appendChild(thMedia);
    
    thead.appendChild(trEncabezado);
    
    
    // Crear filas de la tabla
    alumnos.forEach((alumno) => {
      const tr = document.createElement("tr");
      tr.className = "pasar";
    
      const tdAlumnos = document.createElement("td");
      tdAlumnos.textContent = alumno;
      tdAlumnos.className = "fw-bold pasar";
      tr.appendChild(tdAlumnos);
    
      //Guardar las notas de los alumnos para despues hacer la media.
      const notasAlumno = [];
    
      asignaturas.forEach((asignatura) => {
        const tdNotas = document.createElement("td");
    
        const nota = notas.find(
          (nota) => nota[0] === alumno && nota[1] === asignatura
        );
    
        tdNotas.textContent = nota[2];
        notasAlumno.push(parseFloat(nota[2]));
    
        // Aplicar colores según la nota
        if (nota[2] < 3 && nota[2] >= 0) {
          tdNotas.style.backgroundColor = "red";
        } else if (nota[2] >= 3 && nota[2] < 5) {
          tdNotas.style.backgroundColor = "yellow";
        } else if (nota[2] >= 5 && nota[2] <= 7) {
          tdNotas.style.backgroundColor = "blue";
        } else if (nota[2] > 7 && nota[2] <= 10) {
          tdNotas.style.backgroundColor = "green";
        }
    
        tr.appendChild(tdNotas);
      });
    
      const tdMediaAlumnos = document.createElement("td");
      tdMediaAlumnos.textContent = calcularMedia(notasAlumno);
      tdMediaAlumnos.className = "fw-bold pasar";
      tr.appendChild(tdMediaAlumnos);
    
      tbody.appendChild(tr);
    });
    
    const trMediasAsignaturas = document.createElement("tr");
    trMediasAsignaturas.className = "pasar";
    const tdTituloMediasAsignaturas = document.createElement("td");
    tdTituloMediasAsignaturas.textContent = "Media Asignaturas";
    tdTituloMediasAsignaturas.className = "fw-bold pasar";
    trMediasAsignaturas.appendChild(tdTituloMediasAsignaturas);
    
    asignaturas.forEach((asignatura) => {
      const notasAsignatura = [];
    
      // Sumar las notas de todos los alumnos para esta asignatura
      alumnos.forEach((alumno) => {
        const nota = notas.find(
          (nota) => nota[0] === alumno && nota[1] === asignatura
        );
        notasAsignatura.push(parseFloat(nota[2]));
      });
    
      const tdMediaAsignatura = document.createElement("td");
      tdMediaAsignatura.textContent = calcularMedia(notasAsignatura);
      tdMediaAsignatura.className = "pasar";
      trMediasAsignaturas.appendChild(tdMediaAsignatura);
    });
    
    const tdVacio = document.createElement("td");
    tdVacio.className = "pasar";
    trMediasAsignaturas.appendChild(tdVacio);
    
    tbody.appendChild(trMediasAsignaturas);
    
    table.appendChild(thead);
    table.appendChild(tbody);
    contenedor.appendChild(table);
  
}

/**
 * 
 * @param {*} alumnos 
 * @param {*} asignaturas 
 * @returns {Array} Array de notas aleatorias 
 * Esta funcion se encarga de crear notas aleatorias para cada alumno y asignatura.
 */
function asignarNotas(alumnos, asignaturas) {
  const notas = [];
  alumnos.forEach((alumno) => {
    asignaturas.forEach((asignatura) => {
      const nota = crearNotasRandom();
      notas.push([alumno, asignatura, nota]);
    });
  });
  return notas;
}

/**
 * 
 * @param {*} datos 
 * @returns {Array} Array de datos procesados
 * Esta funcion se encarga de transformar en un array los datos de los inputs
 * que se le pasan como parametros.
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
 * @returns {Number} Nota aleatoria
 * Esta funcion se encarga de crear una nota aleatoria entre 0 y 10
 */
function crearNotasRandom() {
  return (Math.random() * 10).toFixed(2);
}

/**
 * 
 * @param {*} notas 
 * @returns {Number} Media de las notas
 * Esta funcion se encarga de calcular la media de un array de notas que se le pasan como parametro.
 */

function calcularMedia(notas) {
  const media =
    notas.reduce((acumulador, valorActual) => acumulador + valorActual, 0) /
    notas.length;
  return media.toFixed(2);
}
