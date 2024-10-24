function validarDatos(){
    let expRegMail = new RegExp("[0-9][a-z][A-Z]");

    let mail = document.getElementById("mail") as HTMLInputElement;

    alert(mail.value);
}