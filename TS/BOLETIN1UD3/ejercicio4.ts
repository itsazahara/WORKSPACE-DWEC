function ir(){
    let url = (document.getElementById("url") as HTMLInputElement).value;

    //Validar la URL
    var expReg = new RegExp("https://www.[a-z.-/?=0-9])");
        if(expReg.test(url)){
            window.location.assign(url);
        } else {
            console.error("La url introducida no es válida.");
        }
    
}