let frutas = new Array("Aguacate", "Banana", "Chirimoya",
    "Dátil", "Fresa", "Guayaba", "Kiwi", "Limón", "Naranja", "Pera", "Sandía", "Uva", "Yuca");

//Esto lo mete en el array
frutas.push("Melón");

//Esto lo ordena por defecto alfabéticamente, en caso de números hay que indicarle el orden
frutas.sort();

//Si quiero que lo ordene alfabéticamente pero al revés, se pone así
frutas.sort().reverse();

console.log(frutas);