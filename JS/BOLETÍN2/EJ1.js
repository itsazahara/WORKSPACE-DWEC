//OPCIÓN1
var num = prompt("Introduzca un número: ");
var result = 1;
var contador = 1;
var factorial = num;

do {
    result *= (num - 1);
    num--;
} while (num > 1);

alert("El resultado de " + factorial + " es : " + result);



//OPCIÓN 2
var num = prompt("Introduzca un número: ");
var result = 1;

for(let i = 1; i < num; i++){
    result *= i;
}

alert("El resultado de " + num + " es : " + result);