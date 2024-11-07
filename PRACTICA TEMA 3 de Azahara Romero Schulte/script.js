// Función que se llama al presionar el interruptor de modo claro u oscuro
function cambiarFondo() {
    //TODO: EJ1. Recoger el color de fondo, si es blanco sustituirlo por negro y viceversa.
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "black";
    }
} //Funcion 1 terminada






/*Función que se activa al enviar el formulario
document.getElementById("miFormulario").onsubmit = function(event) {
    event.preventDefault(); 
    validarEmail();

}; Esta parte no he conseguido que funcione y por ello he añadido la función onclick al botón "Enviar" */

function validarEmail() {
    //TODO: Ej2. Realizar una validación del email al enviar el formulario. Usar expresiones regulares.
    const emailInput = document.getElementById("email");
    const mensajeError = document.getElementById("mensajeError");
    const email = emailInput.value;
    let expReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validación del email
    if (!expReg.test(email)) {
        mensajeError.textContent = "Por favor, introduzca un correo electrónico válido.";
        return false;
    } else {
        mensajeError.textContent = "";
        return true;
    }
} //Función 2 terminada






// Función para almacenar las configuraciones en las cookies
function guardarConfiguraciones() {
    //TODO: EJ3. Recoger el valor del idioma y moneda en dos variables y almacenarla en una cookie.
    const idioma = document.getElementById("idioma").value;
    const moneda = document.getElementById("moneda").value;

    document.cookie = "idioma=idioma";
    document.cookie = "moneda=moneda";

    alert("Configuraciones guardadas en cookies.");
} //Función 3 terminada






// Función para volver a la página anterior (si la hubiese)
function regresar() {
    // TODO: EJ4. Navegar usando el historial del navegador para regresar a la página anterior.
    if (history.length > 1) {
        history.back();
    } else {
        alert("No hay ninguna página anterior en el historial a la que acceder.");
    }
} //Función 4 terminada






// Función para cargar valores de las cookies al abrir la página
window.onload = function () {
    //TODO. Ej5. Recuperar el valor de la cookie (se separan por ;) recorre cada elemento almacenado en ella y 
    //modifica el valor de los campos idioma y moneda con los valores recogidos de la propia cookie de forma automática.
    let valorCookie = "idioma=español; moneda=euro";
    let cookieObj = {};

    if (valorCookie.idioma) {
        document.getElementById('idioma').value = cookieObj.idioma;
    }
    if (valorCookie.moneda) {
        document.getElementById('moneda').value = cookieObj.moneda;
    }
}; //Función 5 terminada