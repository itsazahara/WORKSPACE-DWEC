window.addEventListener("DOMContentLoaded", () => {
    const botonColor = document.getElementById("botonColor");

    if (botonColor) {
        botonColor.addEventListener("click", () => {
            const opcion = prompt("Selecciona un color:\n1 - Rojo\n2 - Azul\n3 - Verde");

            switch (opcion) {
                case "1":
                    document.body.style.backgroundColor = "red";
                    break;
                case "2":
                    document.body.style.backgroundColor = "blue";
                    break;
                case "3":
                    document.body.style.backgroundColor = "green";
                    break;
                default:
                    alert("Opción no válida. Por favor selecciona 1, 2 o 3.");
                    break;
            }
        });
    }
});
