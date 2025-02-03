document.addEventListener("DOMContentLoaded", function () {
    const enlace = document.getElementById("enlace");
    const botonActivar = document.getElementById("activar-enlace");

    botonActivar.addEventListener("click", function () {
        enlace.style.pointerEvents = "auto";
        enlace.style.opacity = "1";
        enlace.click();
    });
});