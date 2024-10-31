console.log(window);

//PROPIEDADES Y OBJETOS
window.onload = function () { (window.alert("Hola a todos.")); }

window.location; //Muestra la url de la página que estás visitando actualmente

window.navigator; //Muestra información sobre el navegador que estamos utilizando

window.history; //Muestra el historial de navegación

window.innerWidth; //Muestra el ancho interno de la ventana que se está visualizando

window.innerHeight; //Muestra el alto interno de la ventana que se está visualizando

window.document; //Muestra la referencia a la página web actualmente cargada

window.length; //Muestra el número de frames que tiene la ventana

//MÉTODOS

window.alert(); //Muestra mensaje por ventana de alerta

window.confirm(); //Muestra una alerta con botón de confirmación

window.prompt(); //Pide un valor de entrada al usuario a través de una ventana de alerta

let msg = window.atob("Codifica este mensaje y lo almacena en la variable de retorno msg");
console.log(msg); 

let msgOrig = window.btoa("Decodifica el mensaje codificado msg y lo almacena en la variable de retorno msgOrig");
console.log(msgOrig);

let ventana = window.open("https://www.url_de_una_ventana_nueva");

window.close(); //Cierra la ventana actual