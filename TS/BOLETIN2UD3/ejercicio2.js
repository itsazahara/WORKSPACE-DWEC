window.addEventListener("DOMContentLoaded", function () {
    var dimensionButton = document.getElementById("dimensionButton");
    if (dimensionButton) {
        dimensionButton.addEventListener("click", function () {
            var anchoVentana = window.innerWidth;
            var altoVentana = window.innerHeight;
            console.log("Ancho de la ventana: ".concat(anchoVentana, "px"));
            console.log("Altura de la ventana: ".concat(altoVentana, "px"));
        });
    }
});
