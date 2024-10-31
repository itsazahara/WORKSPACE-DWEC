window.addEventListener("DOMContentLoaded", function () {
    var botonDimension = document.getElementById("botonDimension");
    if (botonDimension) {
        botonDimension.addEventListener("click", function () {
            var anchoVentana = window.innerWidth;
            var altoVentana = window.innerHeight;
            console.log("Ancho de la ventana: ".concat(anchoVentana, "px"));
            console.log("Altura de la ventana: ".concat(altoVentana, "px"));
        });
    }
});
