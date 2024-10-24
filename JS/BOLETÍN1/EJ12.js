//Activamos el temporizador
console.time();

let valor = 0;
for(let i = 0; i < 100; i++){
    valor = valor + 10;
}

//Paramos el temporizador
console.timeEnd();