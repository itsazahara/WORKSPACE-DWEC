const http_prefix = "https://";

function solicita_redireccion(){
    var url: string = prompt("Introduce la url") as string;

    if(url.indexOf(http_prefix) == -1){
        url = http_prefix + url;
    }

    window.location.assign(url);
}