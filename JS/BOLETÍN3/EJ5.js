var num = parseInt(prompt("Introduzca un número en binario: "));
var valor = 0;

for(let i = num.length - 1; i >= 0; i--){
    valor += num[i]*Math.pow(2,i);
}

console.log("El número introducido es: " + valor);