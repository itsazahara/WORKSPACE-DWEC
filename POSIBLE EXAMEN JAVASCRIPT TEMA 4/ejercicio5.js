//Crea un campo html con un listado de elementos (selector). Cuando seleccionemos un dato almacenado en una consola al a

function guarda_cookie(){
    let valor = document.getElementById("marcas").value;
    console.log(valor);
    document.cookie = "marca=" + valor;
}

window.onload = 