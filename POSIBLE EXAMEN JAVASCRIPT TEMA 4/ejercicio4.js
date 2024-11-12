//Crea un formulario con un campo de texto que solicite una url, si l url contiene el http:// navega y si no, no navega y añade el listado de intentos.

function navegar(){
    let list = document.createElement("ul");
    let url = document.getElementById("url").value;
    if(url.indexOf("https://") != -1 ){
        window.location.assign(url);
    }else{
        let time = document.createElement("li");
        item.textContent = url;
        list.appendChild(item);
    }
    document.getElementById()
}