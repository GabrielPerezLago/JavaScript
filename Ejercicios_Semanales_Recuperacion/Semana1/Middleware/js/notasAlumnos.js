const alumnos = document.getElementById('alumnos').value.split(',');
const asignaturas = document.getElementById('asignaturas').value.split(',');

const datosAlumnos = [];

function procesarDatosAlumnos() {
    for (let i = 0; i < alumnos.length; i++) {
        const notas = [];
        for (let j = 0; j < asignaturas.length; j++) {
            notas.push(Math.floor(Math.random() * 10) + 1);
        }
        datosAlumnos.push({
            alumno: alumnos[i],
            notas: notas
        });
    }
}

//function generarNotasAleatorias();