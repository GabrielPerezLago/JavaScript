function main() {
  
    //Obtener los datos de los inputs en este caso el del contenedor donde
    // se va a imprimir la tabla
    const contenedor = document.getElementById("contenedor-tabla");
    contenedor.innerHTML = ""; // aqui lo vaciamos para despues actualizar la tabla
  
    const alumnosInput = document.getElementById("alumnos").value;
    const asignaturasInput = document.getElementById("asignaturas").value;
  
    if (!alumnosInput || !asignaturasInput) {
      const errorMensaje = document.createElement("p");
      errorMensaje.textContent =
        "Error: Debe insertar datos en ambos campos (Alumnos y Asignaturas).";
      errorMensaje.className = "text-danger text-center fw-bold"; // Clases de Bootstrap para estilizar el mensaje
      contenedor.appendChild(errorMensaje);
      return;
    }
  
    const alumnos = procesarDatos(alumnosInput.split(","));
    const asignaturas = procesarDatos(asignaturasInput.split(","));
  
    const notas = asignarNotas(alumnos, asignaturas);
  
    // Aqui se crea y se genera la tabla
    const table = document.createElement("table");
    table.className = "table table-striped table-bordered"; // Clases de Bootstrap para estilizar la tabla
  
    const thead = document.createElement("thead");
    thead.className = "table-dark"; // Clase de Bootstrap para un encabezado oscuro
  
    const tbody = document.createElement("tbody");
  
    // Crear encabezado de la tabla
    const trEncabezado = document.createElement("tr");
  
    const thAlumno = document.createElement("th");
    thAlumno.textContent = "Alumnos";
    trEncabezado.appendChild(thAlumno);
  
    const thMedia = document.createElement("th");
    thMedia.textContent = "Media";
  
    asignaturas.forEach((asignatura) => {
      const th = document.createElement("th");
      th.textContent = asignatura;
      trEncabezado.appendChild(th);
    });
    trEncabezado.appendChild(thMedia);
  
    thead.appendChild(trEncabezado);
  
    const trMedia = document.createElement("tr");
    // Crear filas de la tabla
    alumnos.forEach((alumno) => {
      const tr = document.createElement("tr");
  
      const tdAlumnos = document.createElement("td");
      tdAlumnos.textContent = alumno;
      tdAlumnos.className = "fw-bold"; // Clase de Bootstrap para texto en negrita
      tr.appendChild(tdAlumnos);
  
      // Calcular las medias de los alumnosç
  
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
      tdMediaAlumnos.className = "fw-bold";
      tr.appendChild(tdMediaAlumnos);
  
      tbody.appendChild(tr);
    });
  
    const trMediasAsignaturas = document.createElement("tr");
    const tdTituloMediasAsignaturas = document.createElement("td");
    tdTituloMediasAsignaturas.textContent = "Media";
    tdTituloMediasAsignaturas.className = "fw-bold"; // Clase de Bootstrap para texto en negrita
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
      trMediasAsignaturas.appendChild(tdMediaAsignatura);
    });
  
    const tdVacio = document.createElement("td");
    trMediasAsignaturas.appendChild(tdVacio);
  
    tbody.appendChild(trMediasAsignaturas);
  
    table.appendChild(thead);
    table.appendChild(tbody);
    contenedor.appendChild(table);
  
}

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

function procesarDatos(datos) {
  const resultado = [];

  datos.forEach((dato) => {
    resultado.push(dato);
  });
  return resultado;
}

function crearNotasRandom() {
  return (Math.random() * 10).toFixed(2);
}

function calcularMedia(notas) {
  const media =
    notas.reduce((acumulador, valorActual) => acumulador + valorActual, 0) /
    notas.length;
  return media.toFixed(2);
}
