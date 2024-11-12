//Solicita por consola una cadena y muestra un menu p
//1. Todo en mayúsuclas
//2. Todo en minúsculas
//3. La cadena invertida
//4. Cambias la A por la E
//5. Busca si contiene una letra en concreto
//6. Salir

var texto = prompt("Escribe algo aleatorio:");
var salir = false;

function mostrar_menu(){
    return window.prompt("Elige una de las siguientes opcione para trabajar con el texto:"
        + "/n 1. Transforma a mayúsculas."
        + "/n 2. Transforma a minúsculas."
        + "/n 3. Dale la vuelta."
        + "/n 4. Cambia la letra A por la letra E."
        + "/n 5. Busca si contiene una letra concreta."
        + "/n 6. Salir."
    );
}

do{
    let opcion = mostrar_menu();
    switch(opcion){
        case "1":
            console.log(texto.toUpperCase());
            break;
        case "2":
            console.log(texto.toLowerCase());
            break;
        case "3":
            console.log(texto.split("").reverse().join(""));
            break;
        case "4":
            console.log(texto.replace("a","e"));
            break;
        case "5":
            let buscar_letra = window.prompt("Introduce la letra concreta que quieres buscar:");
            let contiene = texto.indexOf(buscar_letra) != -1;
            if(contiene){
                console.log(buscar_letra + "existe dentro del texto.");
            }else{
                console.log(buscar_letra + "no existe dentro del texto.");
            }
            break;
        case "6":
            salir = true;
            break;
        default:
            salir = true;
            break;
    }
}