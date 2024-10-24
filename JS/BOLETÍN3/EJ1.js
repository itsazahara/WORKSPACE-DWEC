var num = prompt("Introduzca un número: ");

if(!isNaN(num)){
    console.log("Número correcto.");
    var cifras = 0;
    while(num >= 1){
        num = num / 10;
        cifras++;
    }
    console.log("El número tiene " + cifras + " cifras.");
} else {
    console.error("Debe ser un valor numérico.");
}