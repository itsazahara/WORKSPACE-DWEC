window.addEventListener("DOMContentLoaded", () => {
    const botonDimension = document.getElementById("botonDimension");
  
    if (botonDimension) {
        botonDimension.addEventListener("click", () => {
        const anchoVentana = window.innerWidth;
        const altoVentana = window.innerHeight;
  
        console.log(`Ancho de la ventana: ${anchoVentana}px`);
        console.log(`Altura de la ventana: ${altoVentana}px`);
      });
    }
  });
  