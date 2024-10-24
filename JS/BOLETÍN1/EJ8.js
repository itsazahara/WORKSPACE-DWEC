//Almaceno el mayor valor posible en un number
var num = Number.MAX_VALUE;
console.log(num);

//Intento, sin éxito, aumentar el valor en un number (no cabe)
var result = num + 100;
console.log(BigInt(num));

//Para poder hacelro, debo utilizar el tipo BigInt
var num2 = BigInt(Number.MAX_VALUE);

//Ahora sí aumentamos el valor de num2
var result2 = num2 + BigInt(100);
console.log(result2);