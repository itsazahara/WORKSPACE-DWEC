const num_filas = 10;
const num_cols = 15;

let matriz = new Array(num_filas);

for (let i = 0; i < matriz.length; i++) {
    let fila = new Array(num_cols).fill(0);
    matriz[i] = fila;
}

window.onload = () => {
    for (let i = 0; i < num_filas; i++) {
        for (let j = 0; j < num_cols; j++) {
            let div2 = document.createElement("div");
            div2.style.border = "1px solid black";
            div2.style.display = "flex";
            div2.style.float = "left";
            div2.textContent = "0";
            document.body.appendChild(div2);
        }
    }
}

function ocupar_butacas() {
    let num_vueltas = 0;
    while (num_vueltas < 5) {
        let fila_rand = Math.round(
            Math.random() * (num_filas - 1));
        let col_rand = Math.round(
            Math.random() * (num_cols - 1));

        console.log("Posicion: " + fila_rand + ", " + col_rand);

        if (matriz[fila_rand][col_rand] == 0) {
            matriz[fila_rand][col_rand] = 1;
            num_vueltas++;
        }
    }
}

console.log(matriz);