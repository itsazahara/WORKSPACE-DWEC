do {
    var a = prompt("Introduzca el coeficiente a: ");
    var b = prompt("Introduzca el coeficiente b: ");
    var c = prompt("Introduzca el coeficiente c: ");
    condicion = Math.pow(b,2) >= (4*a*c);
    if(condicion){
        console.error("Los datos introducidos no son correctos");
    }
    
} while (!condicion);

alert("Tu ecuación: " + a + "x ^ 2 + " + b + " x + " + c + " = 0");

var raiz = Math.sqrt(Math.pow(b,2) - 4*a*c);

var sol1 = (-b + raiz) / (2*a);
var sol2 = (-b - raiz) / (2*a);

alert = ("La solución de la ecuación es: x1 = " + sol1 + " , x2 = " + sol2);