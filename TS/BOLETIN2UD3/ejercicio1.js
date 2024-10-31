// 1. Imprimir el objeto `window` completo para inspección general
console.log("Objeto window (BOM):", window);
// 2. Propiedades del objeto `window`
// Propiedad 1: `window.innerWidth` - Ancho interno de la ventana
console.log("Ancho interno de la ventana:", window.innerWidth);
// Propiedad 2: `window.innerHeight` - Alto interno de la ventana
console.log("Alto interno de la ventana:", window.innerHeight);
// Propiedad 3: `window.location` - Información sobre la URL actual
console.log("Ubicación de la URL:", window.location);
// Propiedad 4: `window.navigator` - Información del navegador
console.log("Información del navegador:", window.navigator);
// Propiedad 5: `window.history` - Acceso al historial de navegación
console.log("Historial de navegación:", window.history);
// 3. Métodos del objeto `window`
// Método 1: `window.alert()` - Muestra un cuadro de alerta
window.alert("Este es un ejemplo de alerta en el BOM");
// Método 2: `window.confirm()` - Muestra un cuadro de confirmación
var confirmacion = window.confirm("¿Deseas continuar?");
console.log("Respuesta de confirmación:", confirmacion);
// Método 3: `window.open()` - Abre una nueva ventana o pestaña
var nuevaVentana = window.open("https://www.wikipedia.com");
console.log("Nueva ventana abierta:", nuevaVentana);
// Método 4: `window.close()` - Cierra la ventana actual
// Advertencia: este método solo funciona en ventanas abiertas con `window.open()`
// if (nuevaVentana) nuevaVentana.close();
// Método 5: `window.scrollTo()` - Desplaza la ventana a una posición específica
window.scrollTo(0, 100);
console.log("La ventana se desplazó 100 píxeles hacia abajo");
// Imprimir una línea adicional para indicar que el código TypeScript ha terminado de ejecutarse
console.log("Inspección BOM completada.");
