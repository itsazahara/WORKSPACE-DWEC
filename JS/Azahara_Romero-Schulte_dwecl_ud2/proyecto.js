let jugador = null;
let tiradas = 0;
const maximoTiradas = 3;
let puntosAcumulados = 0;
let totalTiradas = 0;
let totalPuntos = 0;
let tiempoInicio = null;

function iniciarJuego() {
    let nombre = prompt("Introduzca su nombre, por favor:");
    let edad = prompt("Introduzca su edad, por favor:");
    if (nombre && edad) {
        jugador = { nombre: nombre, edad: edad };
        tiradas = 0;
        totalTiradas = 0;
        puntosAcumulados = 0;
        tiempoInicio = new Date();
        console.log("El juego ha sido iniciado por " + jugador.nombre + " con " + jugador.edad + " años.");
    } else {
        console.error("Error: debes ingresar un nombre y una edad válidos.");
    }
}

function lanzarDados() {
    if (!jugador) {
        console.error("Error: debes iniciar el juego antes de lanzar los dados.");
        return;
    }

    let duplicados = 0;

    do {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        var suma = dado1 + dado2;
        totalPuntos += suma;
        totalTiradas++;
        console.log("El jugador " + jugador.nombre + " ha obtenido " + dado1 + " y " + dado2 + " en esta tirada. El total sería: " + suma + ".");

        if (dado1 === dado2) {
            duplicados++;
            console.log("Duplicado obtenido: " + duplicados + ". Tirada extra n.º " + duplicados + ".");
        } else {
            duplicados = 0;
        }

        if (duplicados > maximoTiradas) {
            totalPuntos = 0;
            console.log("Se ha excedido el límite de tiradas extra. Puntuación de esta ronda: 0.");
            break;
        }
    } while (duplicados > 0 && duplicados <= maximoTiradas);

    /*if (totalPuntos > 0) {
        puntosAcumulados += totalPuntos;
    }

    console.log("Puntos totales acumulados: " + puntosAcumulados);*/
}

function mostrarEstadisticas() {
    if (!jugador) {
        console.error("Error: debes iniciar el juego para ver las estadísticas.");
        return;
    }

    if (tiradas.length === 0) {
        console.log("No se ha realizado ninguna tirada aún. Por favor, lance los dados.");
        return;
    }

    if (totalPuntos > 0) {
        puntosAcumulados += totalPuntos;
    }

    let valorMaximo = 0;
    let valorMinimo = 0;

    if (tiradas == 1) {
        min = suma;
    } else if (suma < min) {
        min = suma;
    }

    if (suma > valorMaximo) {
        valorMaximo = suma;


        alert("Número total de tiradas realizadas: " + totalTiradas);

        alert("Valor máximo obtenido: " + valorMaximo);
        alert("Valor mínimo obtenido: " + valorMinimo);
    }

    function salir() {
        if (!jugador) {
            console.error("Error: no has iniciado el juego. Por favor, inicia el juego introduciendo tu nombre y tu edad.");
            return;
        }

        let tiempoFin = new Date();
        let tiempoJugado = Math.floor((tiempoFin - tiempoInicio) / 60000);
        console.log("Fin del juego. Has estado jugando ${tiempoJugado} minutos.");
        jugador = null;
    }
}