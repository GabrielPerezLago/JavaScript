const contenedor = document.getElementById('reloj');

setReloj = setInterval(generateReloj, 1000);

function generateReloj(){
    const fecha = new Date();

    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2,"0");
    const segundos = fecha.getSeconds().toString().padStart(2,"0");

    contenedor.innerHTML = `${horas}:${minutos}:${segundos}`;
}



