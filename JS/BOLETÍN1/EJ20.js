function contarMultiplosDeSiete() {
    let contador = 0;

    for (let i = 8; i <= 100; i++) {
        if (i % 7 === 0) {
            contador++;
        }
    }

    alert("El número de múltiplos de siete entre 8 y 100 es: " + contador);
}

window.onload = contarMultiplosDeSiete;