document.addEventListener("DOMContentLoaded", function () {
    const extraFields = document.getElementById("extraFields");
    const hiddenFields = document.getElementById("hiddenFields");
    const formulario = document.getElementById("formulario");
    const errorMensaje = document.getElementById("errorMensaje");

    extraFields.addEventListener("change", (event) => {
        hiddenFields.style.display = event.target.checked ? "block" : "none";
    });

    formulario.addEventListener("submit", function (event) {
        errorMensaje.textContent = "";

        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!nombre || !apellidos) {
            errorMensaje.textContent = "El nombre y los apellidos son obligatorios. Por favor, introdúzcalos.";
            event.preventDefault();
            return;
        }

        if (extraFields.checked && !telefono) {
            errorMensaje.textContent = "El teléfono es obligatorio si está marcado. Por favor, introdúzcalos.";
            event.preventDefault();
            return;
        }

        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorMensaje.textContent = "El formato del correo electrónico no es válido. Por favor, intrdúzcalo de nuevo.";
            event.preventDefault();
        }
    });
});