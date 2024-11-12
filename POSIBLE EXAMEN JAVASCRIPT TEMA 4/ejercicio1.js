//Crea un ejercico en javascript que muestre por consola la fecha de 2 formas diferentes.
//1. Formato numérico (12/11/2024 09:41)
//2. Foramto texto (12 de noviemde de 2024 a las 9:41)

var date = new Date();
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septimebre", "Octubre", "Noviembre", "Diciembre"];
console.log("Formato numérico: " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes());
console.log("Formato texto: " + date.getDate() + " de " + months[date.getMonth()] + " de " + date.getFullYear() + " a las " + date.getHours() + ":" + date.getMinutes());