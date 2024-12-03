console.log(matriz2);

function sumar_matrices() {
    let matrizResult = new Array(TAM);
    for (let i = 0; i < TAM; i++) {
        let arrayResult = new Array(TAM);
        for (let j = 0; j < TAM; j++) {
            arrayResult[j] = matriz[i][j] + matriz2[i][j];
        }
        matrizResult[i] = arrayResult;
    }

    console.log(matrizResult);
}