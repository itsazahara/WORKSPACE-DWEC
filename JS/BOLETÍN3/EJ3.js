var opc = null;
var num = null;
var max = null;
var min = null;
var media = null;
var contador = 0;

do {
    opc = parseInt(prompt("Introduzca una de las siguientes opciones: \n"
        + "a. Introduzca nuevo número \n"
        + "b. Calcular máximo \n"
        + "c. Calcular mínimo \n"
        + "d. Calcula la media \n"
        + "e. Salir")
    );

    switch (opc) {
        case 'a':
            num = solicitar_numero();
            contador++;
            max = calcular_maximo();
            min = calcular_minimo();
            media = calcular_media();
            break;
        case 'b':
            console.log("El maximo es " + maximo);
            break;
        case 'c':
            console.log("El mínimo es " + mínimo);
            break;
        case 'd':
            console.log("La media es " + media);
            break;
        case 'e':
            console.log("Salir del programa.");
            break;
        default:
    }

    console.log("La opción introducida es: " + opc);
} while (opc != 'e');

function solicitar_numero() {
    return prompt("Introduce el número: ");
}

function calcular_maximo() {
    if (maximo == null || num > maximo) {
        maximo = num;
    }
}

function calcular_minimo() {
    if (minimo == null || num < minimo) {
        minimo = num;
    }
}

function calcular_media() {
    if (media == null) {
        media = num;
    } else {
        media = (media + num) / contador;
    }
}