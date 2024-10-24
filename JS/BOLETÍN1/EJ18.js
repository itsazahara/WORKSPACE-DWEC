var edad = prompt("Introduce tu edad: ");

switch(true){
    case edad < 0:
        console.log("Debes introducir valores positivos.");
        break;
    case edad <= 16:
        console.log("Eres un niño.");
        break;
    case edad <= 25:
        console.log("Eres joven.");
        break;
    case edad <= 60:
        console.log("Eres mayor.");
        break;
    case edad > 60:
        console.log("Eres senior.");
        break;
    default 
}