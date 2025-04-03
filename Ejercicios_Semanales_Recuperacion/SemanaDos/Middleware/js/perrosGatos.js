function cargarImagenes(url){
    const imagenes = [];
    const img = new Image();
    img.src = url;
    imagenes.push(img);
    return imagenes;
}

const perros = [
    { nombre: "Perro 1", imagenes: cargarImagenes("../img/perros/perros_01.jpg") },
    { nombre: "Perro 2", imagenes: cargarImagenes("../img/perros/perros_02.jpg") },
    { nombre: "Perro 3", imagenes: cargarImagenes("../img/perros/perros_03.jpg") },
    { nombre: "Perro 4", imagenes: cargarImagenes("../img/perros/perros_04.jpg") }
];

const gatos = [
    { nombre: "Gato 1", imagenes: cargarImagenes("../img/gatos/gatos_01.jpg") },
    { nombre: "Gato 2", imagenes: cargarImagenes("../img/gatos/gatos_02.jpg") },
    { nombre: "Gato 3", imagenes: cargarImagenes("../img/gatos/gatos_03.jpg") },
    { nombre: "Gato 4", imagenes: cargarImagenes("../img/gatos/gatos_04.jpg") }
];

function generateCarrousel(){
    const arrImg = [...perros, ...gatos];
    const arrALeatorio = arrImg.sort(() => Math.random() - 0.5); //sort hace que los elementos de la array sean ordenados , y al pasarle mat random se aleotizan por que pasan un numero entre 0 y 1  , los menos son los primeros ,los mayores son los ultimos y si es 0 se quedan.
    return arrALeatorio;
}


function main(){
    const contenedorPerros = document.getElementById("perros");
    const contenedorGatos = document.getElementById("gatos");

    const carrousel = document.getElementById("imagenes");
    const div = document.createElement("div");
    
    const carrouselImagenes = generateCarrousel();
    carrouselImagenes.forEach(imagen => {
        const img = document.createElement("img");
        img.src = imagen.imagenes[0].src;
        img.alt = imagen.nombre;
        img.width = 200;
        img.height = 150;
        img.style.padding = "5px";
        img.draggable = true;
        img.id = `img_${imagen.nombre}`;
        img.addEventListener("dragstart", arrastrar);
        div.appendChild(img);

       
    });

    carrousel.appendChild(div);
    
    

    contenedorPerros.addEventListener("dragover", arrastrarSobre);
    contenedorPerros.addEventListener("drop", soltar);

    contenedorGatos.addEventListener("dragover", arrastrarSobre);
    contenedorGatos.addEventListener("drop", soltar);

    
}

function arrastrar(event){
    event.dataTransfer.setData("imagen", event.target.id);
}

function arrastrarSobre(event){
    event.preventDefault();
}

function soltar(event){
    event.preventDefault();
    const data = event.dataTransfer.getData("imagen");
    const img = document.getElementById(data);

    if(!img || event.target.id === img) return;

    const perro = img.id.includes("Perro");
    const gato = img.id.includes("Gato");

    if((event.target.id === "perros" && perro) || (event.target.id === "gatos" && gato)){
        event.target.appendChild(img);
    }else {
        alert("No puedes soltar esta imagne aqui , los perros solo pueden soltarse en el contenedor de perros, y los gatos solo en el contenedor de gatos");
    }
    
}

document.body.onload = main;