function cambiar_color() {
    let body: HTMLBodyElement = window.document.getElementsByTagName("body")[0];
    let opcion = prompt("Selecciona un color" as string);

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
}