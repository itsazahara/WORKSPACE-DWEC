function solicita_redireccion(){
    var url: string = prompt("Introduce la url") as string;
    window.location.assign(url);
}