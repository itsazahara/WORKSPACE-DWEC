var fechaActual = new Date();
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agostos", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
window.alert("Hola usuario, son las "
    + fechaActual.getHours() + ":"
    + fechaActual.getMinutes() + ":"
    + fechaActual.getSeconds()
    + " y la fecha actual es: "
    + fechaActual.getDate()
    + " de " + meses[fechaActual.getMonth()]
    + " de " + fechaActual.getFullYear());
console.log("Una hora antes fueron las "
    + (fechaActual.getHours() - 1) + ":"
    + fechaActual.getMinutes() + ":"
    + fechaActual.getSeconds()
    + " y una hora después serán las "
    + (fechaActual.getHours() + 1) + ":"
    + fechaActual.getMinutes() + ":"
    + fechaActual.getSeconds());
