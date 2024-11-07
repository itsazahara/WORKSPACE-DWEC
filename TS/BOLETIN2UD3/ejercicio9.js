var primeraFoto = 1;
var extension = ".jpg";
var folder = "images/";
window.onload = function carga_inicial() {
    var img = document.getElementById("image");
    img === null || img === void 0 ? void 0 : img.setAttribute("src", folder + primeraFoto + extension);
};
function cambia(avance) {
    primeraFoto = primeraFoto + avance;
    if (primeraFoto > 10) {
        primeraFoto = 1;
    }
    if (primeraFoto < 1) {
        primeraFoto = 10;
    }
    var img = document.getElementById("image");
    img === null || img === void 0 ? void 0 : img.setAttribute("src", folder + primeraFoto + extension);
}
