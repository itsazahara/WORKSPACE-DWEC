window.addEventListener("DOMContentLoaded", () => {
    const botonRedireccion = document.getElementById("botonRedireccion");
  
    if (botonRedireccion) {
        botonRedireccion.addEventListener("click", () => {
        const urlDestino = prompt("Ingresa la URL a la que deseas ir (por ejemplo, https://www.ejemplo.com):");
  
        if (urlDestino && urlDestino.startsWith("http")) {
          window.location.href = urlDestino;
        } else {
          console.log("URL no válida o acción cancelada.");
        }
      });
    }
  });

  //NO TERMINADO POR ERROR