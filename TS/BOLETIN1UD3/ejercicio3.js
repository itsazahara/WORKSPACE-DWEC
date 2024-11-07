var redimension = prompt("Introduce el porcentaje de redimensión.");
var cambiar = confirm("Desea confirmar los cambios?");
if (cambiar) {
    var porcentaje = redimension != null ? parseInt(redimension) : 100;
    var ancho = window.innerWidth * (porcentaje / 100);
    var alto = window.innerHeight * (porcentaje / 100);
    window.resizeTo(ancho, alto);
    console.log("Cambiando altura de " + window.innerHeight + alto);
    console.log("Cambiando anchura de " + window.innerWidth + ancho);
}
else {
    console.log("No realizamos nada.");
}
//NO SE PUEDE REALIZAR LA ACTIVIDAD PORQUE JAVASCRIPT LO HA DESACTIVADO
