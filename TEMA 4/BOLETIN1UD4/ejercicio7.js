const TAM = 10;
let matriz1 = new Array(TAM);
let matriz2 = new Array(TAM);

//Inicializamos ambas matrices a numeros aleatorios.
for (let i = 0; i < TAM; i++) {
    let array1 = new Array(TAM);
    let array2 = new Array(TAM);
    for (let j = 0; j < TAM; j++) {
        array1[j] = Math.round(Math.random() * 9);
        array2[j] = Math.round(Math.random() * 9);
    }
    matriz1[i] = array1;
    matriz2[i] = array2;
}

console.log(matriz1);
console.log(matriz2);

function sumar_matrices() {
    let matrizResult = new Array(TAM);
    for (let i = 0; i < TAM; i++) {
        let arrayResult = new Array(TAM);
        for (let j = 0; j < TAM; j++) {
            arrayResult[j] = matriz1[i][j] + matriz2[i][j];
        }
        matrizResult[i] = arrayResult;
    }

    console.log(matrizResult);
}

function traspuesta() {
    let traspuesta = new Array(TAM);
    for (let i = 0; i < TAM; i++) {
        let arrayTraspuesta = new Array(TAM);
        for (let j = 0; j < TAM; j++) {
            arrayTraspuesta[j] = matriz1[j][i];
        }
        traspuesta[i] = arrayTraspuesta;
    }

    console.log(traspuesta);
}