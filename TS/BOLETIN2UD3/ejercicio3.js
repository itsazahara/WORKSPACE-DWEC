window.addEventListener("DOMContentLoaded", function () {
    var botonRedireccion = document.getElementById("botonRedireccion");
    if (botonRedireccion) {
        botonRedireccion.addEventListener("click", function () {
            var urlDestino = prompt("Ingresa la URL a la que deseas ir (por ejemplo, https://www.ejemplo.com):");
            if (urlDestino && urlDestino.startsWith("http")) {
                window.location.href = urlDestino;
            }
            else {
                console.log("URL no válida o acción cancelada.");
            }
        });
    }
});
