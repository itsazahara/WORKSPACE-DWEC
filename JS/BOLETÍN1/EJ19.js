function adivinarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let intentos = 0;
    let acertado = false;

    while (!acertado) {
        let intento = parseInt(prompt("Introduzca un número entre 1 y 10:"));
        intentos++;

        if (intento === numeroAleatorio) {
            alert("Has acertado el número.");
            acertado = true;
        } else {
            alert("No es correcto, inténtelo de nuevo.");
        }
    }

    alert("Has acertado en " + intentos + " intentos.");
}