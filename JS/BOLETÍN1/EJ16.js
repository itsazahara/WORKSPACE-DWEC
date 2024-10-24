function verificacionDatos() {
    let edad = parseInt(prompt("Introduce tu edad:"));
    let nombre = prompt("Introduce tu nombre:");
    let ciudad = prompt("Introduce tu ciudad:");
    let direccion = prompt("Introduce tu dirección:");
    let telefono = prompt("Introduce tu número de teléfono:");

    let edadNueva = Math.pow(edad, 5);

    if (edadNueva == telefono || ciudad.toLowerCase() === "mairena del alcor") {
        alert("Enhorabuena, " + nombre + " cumples con los requisitos.");
    } else {
        alert("Lo siento, no cumples con los requisitos.");
    }
}