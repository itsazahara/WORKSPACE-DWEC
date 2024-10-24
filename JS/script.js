//Ejemplo de javascript

//window.alert("Ventana de alerta");
//console.log("Mismo mensaje pero en la consola: ventana de alerta.");

function cambioColor(){
    document.getElementById("content").style.backgroundColor = "blue";
    console.log("Cambiando el color...");
}

function cambioColor2(){
    var color = ["yellow", "pink"];
    var result = color[Math.floor(Math.random() * color.length)];
    console.log("El color que se está mostrando es: " + result);
    document.getElementById("content").style.backgroundColor = result;
    console.log("Cambiando el color 2...");
}

function cambioColor3(){
    var simbolos = "0123456789ABCDEF";
    var cifrasHex = 6;
    var color = "#";
    for(let i = 0; i < cifrasHex; i++){
        var indice_aleatorio = Math.floor(Math.random() * simbolos.length);
        /*La variable indice_aleatorio no es necesaria pero se hace polr limpieza en el código*/
        color = color + simbolos[indice_aleatorio];
    }
    console.log("Color calculado" + color);
    document.getElementById("content").style.backgroundColor = color;
}

/*El boton 2 y el boton 3 son iguales pero con codigo diferente*/