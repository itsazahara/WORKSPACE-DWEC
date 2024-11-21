let notas = [10, 6, 3, 5, 9, 10, 0, 4, 6, 5];
console.log(notas);

notas.sort((start, end) => end - start); //Esto ordena descendentemente
console.log("La mayor nota es: " + notas[0]);

notas.sort((start, end) => start - end); //Esto ordena ascendentemente
console.log("La menor nota es: " + notas[0]);