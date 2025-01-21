//Empezamos declarando las variables necesarias a lo largo del codigo
var jugador1, jugador2, jugador_turno, meta, en_juego = false;
var tiradas_j1 = 0;
var tiradas_j2 = 0;
var max_puntuacion_j1 = 0;
var max_puntuacion_j2 = 0;
var puntuacion_j1 = 0;
var puntuacion_j2 = 0;
var tiradas_totales_j1 = 0;
var tiradas_totales_j2 = 0;

console.log("!Bienvenidos/as al juego de la peonza!");

//Establecemos la función menú que lo que hace es mostrar el prompt para elegir una de las opciones proporcionadas
function menu() {
    return prompt(
        "Menú:\n" +
        "A. Iniciar juego\n" +
        "B. Introducir meta\n" +
        "C. Girar peonza\n" +
        "D. Terminar juego\n"
    ).toUpperCase();
}

//Establecemos una función para inicializar el juego (en el caso de haber elegido la opción de "iniciar juego")
function iniciarJuego() {
    //Se pide el nick de cada jugador para poder comenzar el juego
    jugador1 = prompt("Introduce el nick del jugador 1:");
    jugador2 = prompt("Introduce el nick del jugador 2:");
    //Se establece por defecto el truno inicial para el jugador 1
    jugador_turno = jugador1;
    meta = -1;
    en_juego = true;
    //Se inicializa todo a 0 para comenzar una nueva partida entre 2 jugadores
    tiradas_j1 = tiradas_j2 = 0;
    puntuacion_j1 = puntuacion_j2 = 0;
    tiradas_totales_j1 = tiradas_totales_j2 = 0;
    console.log("El juego ha comenzado entre " + jugador1 + " y " + jugador2 + ".");
}

//Establecemos una función para poner una meta al juego (en el caso de haber elegido la opción de "introducir meta")
function introducirMeta() {
    //Se verifica si el juego se encuentra inicializado
    if (!en_juego) {
        console.log("Primero debes iniciar el juego.");
        return;
    }

    //Comienza un bucle para validar la meta
    while (true) {
        meta = parseInt(prompt("Introduce la meta (de ser un número entero):"));
        if (!isNaN(meta) && meta > 0) {
            console.log("Meta establecida en " + meta + ".");
            break;
        } else {
            console.log("Por favor, introduce un número válido.");
        }
    }
}

//Establecemos la función para comenzar a girar la peonza (en el caso de haber elegido la opción de "girar peonza")
function girarPeonza() {
    //Se comprueba que cuando se quiere girar la peonza, haya una meta establecida anteriormente
    if (!en_juego || meta == -1) {
        console.log("No se puede girar la peonza, asegúrate de haber iniciado el juego y establecido una meta.");
        return;
    }

    let puntuacion = 0;
    let tiradasExtra = 0;
    let activar = false;

    do {
        let tirada = Math.floor(Math.random() * 10) + 1;
        activar = false;
        console.log(jugador_turno + " ha sacado un " + tirada);
        //Establecemos la regla del 5, en la cual se dice que si se saca un 5 se obtiene una nueva tirada
        if (tirada == 5) {
            puntuacion += tirada;
            tiradasExtra++;
            activar = true;
            console.log(jugador_turno + " obtiene un 5! Tirada adicional.");
            if (tiradasExtra == 5) {
                console.log("Has alcanzado el máximo de 5 tiradas adicionales.");
                if (jugador_turno == jugador1) {
                    puntuacion_j1 = 0;
                } else {
                    puntuacion_j2 = 0;
                }
                puntuacion = 0;
                break; // Limita las tiradas extra a un máximo de 5
            }
            //Establecemos la regla del 7, en la cual se dice que si se saca un 7 se duplica la puntuación
        } else if (tirada == 7) {
            puntuacion = tirada * 2;
            console.log(jugador_turno + " obtiene un 7! Su puntuación se duplica.");
            //Establecemos la regla del 3, en la cual se dice que si se saca un 3 se pierden todos los puntos
        } else if (tirada == 3) {
            if (jugador_turno == jugador1) {
                puntuacion_j1 = 0;
            } else {
                puntuacion_j2 = 0;
            }
            puntuacion = 0;
            console.log(jugador_turno + " obtiene un 3! Su puntuación se resetea a 0.");
        } else {
            puntuacion = tirada;
        }

    } while (activar);

    //Se suman y se actualizan las estadísticas y las puntuaciones de cada jugador
    if (jugador_turno == jugador1) {
        puntuacion_j1 += puntuacion;
        tiradas_j1++;
        tiradas_totales_j1++;
        console.log("El jugador 1 tiene " + puntuacion_j1 + " puntos.");
        if (puntuacion > max_puntuacion_j1) max_puntuacion_j1 = puntuacion;
    } else {
        puntuacion_j2 += puntuacion;
        tiradas_j2++;
        tiradas_totales_j2++;
        console.log("El jugador 2 tiene " + puntuacion_j2 + " puntos.");
        if (puntuacion > max_puntuacion_j2) max_puntuacion_j2 = puntuacion;
    }

    //Verificamos si uno de los 2 jugadores ha alcanzado la meta
    if (puntuacion_j1 >= meta || puntuacion_j2 >= meta) {
        finJuego();
    } else {
        cambiarTurno();
    }
}

//Establecemos una función para cambiar el turno entre ambos jugardores
function cambiarTurno() {
    jugador_turno = (jugador_turno == jugador1) ? jugador2 : jugador1;
    console.log("Es el turno de " + jugador_turno + ".");
}

//Establecemos una función para finalizar la partida del juego y muestra las estadísticas a nivel personal y en general
function finJuego() {
    let ganador = puntuacion_j1 > puntuacion_j2 ? jugador1 : jugador2;
    console.log("!El juego ha terminado. El ganador es " + ganador + ".");
    console.log("Estadísticas finales:");
    console.log("- " + jugador1 + ":");
    console.log("  - Puntuación final: " + puntuacion_j1);
    console.log("  - Tiradas: " + tiradas_j1);
    console.log("  - Puntuación máxima por tirada: " + max_puntuacion_j1);
    console.log("- " + jugador2 + ":");
    console.log("  - Puntuación final: " + puntuacion_j2);
    console.log("  - Tiradas: " + tiradas_j2);
    console.log("  - Puntuación máxima por tirada: " + max_puntuacion_j2);
    console.log("  - Media de tiradas: " + (tiradas_totales_j2 / tiradas_j2).toFixed(2));

    //Hace que el juego termine
    en_juego = false;
}

//Establecemos una función para finalizar el juego manualmente (en el caso de haber elegido la opción de "terminar juego")
function terminarJuego() {
    if (!en_juego) {
        console.log("El juego ya ha terminado.");
        return;
    }
    finJuego();
}

//Esta función es aquella principal para ejecutar el juego
function ejecutarJuego() {
    while (true) {
        let opcion = menu();

        switch (opcion) {
            case "A":
                iniciarJuego();
                break;
            case "B":
                introducirMeta();
                break;
            case "C":
                girarPeonza();
                break;
            case "D":
                terminarJuego();
                return;
            default:
                console.log("Opción no válida, por favor elige nuevamente.");
                break;
        }

        //Esta condición nos da la opción de poder reiniciar el juego una vez que se haya terminado
        if (!en_juego) {
            let seguir = prompt("¿Quieres jugar otra vez? (Sí/No):").toUpperCase();
            if (seguir == "NO") {
                console.log("¡Gracias por jugar! Espero que lo hayas disfrutado.");
                break;
            }
        }
    }
}

//Establecemos una función que inicia el juego
ejecutarJuego();