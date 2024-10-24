function verificarEdad() {
    var edad = window.prompt("Por favor, introduce tu edad:");

    if (edad >= 0) {
        if (edadNumero >= 18) {
            console.log("Eres mayor de edad porque tienes más de 18 años.");
        } else {
            console.log("No eres mayor de edad porque no tienes más de 18 años.");
        }
    }
}