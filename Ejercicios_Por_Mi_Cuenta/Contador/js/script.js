function getActualDate(){
    const horaactual = new Date();
    return horaactual;
}

function getHoraFinal(){
    const horaFinal = document.getElementById('horaFinal').value;
    return !horaFinal === null ? horaActual : null ;
}

function createContador(){
    const horaActual = getActualDate();
    const horaselect = getHoraFinal();

    if(horaselect === null){
        return;
    }

    


}

