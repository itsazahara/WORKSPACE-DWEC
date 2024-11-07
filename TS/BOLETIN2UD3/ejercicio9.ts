var primeraFoto = 1;
const extension = ".jpg";
const folder = "images/";

window.onload = function carga_inicial() {
    var img = document.getElementById("image");
    img?.setAttribute("src", folder + primeraFoto + extension);
}

function cambia(avance: number) {
    primeraFoto = primeraFoto + avance;
    if (primeraFoto > 10) {
        primeraFoto = 1;
    }

    if (primeraFoto < 1) {
        primeraFoto = 10;
    }

    var img = document.getElementById("image");
    img?.setAttribute("src", folder + primeraFoto + extension);
}