//Vamos a realizar un validador de contraseña. Para ello se muestra en el cformulario un campo texto que rebibe una password que y valida lo siguiente:
//1. Tenga mayúsculas y minúsculas.
//2. Tenga valores numéricos.
//3. Extensión mínimo 8
//4. Contenga los siguientes caracteres: @.

//AMPLIACIÓN: transcurridos 5 segundos, se elimina el mensaje de error
function validar(){
    let password = document.getElementById("password").value;
    let expReg = new RegExp(expReg);

    if(regExp.test(password)){
        console.log("OK.");
    }else{
        let textoError = document.getElementById("error").innerText = "La contraseña no es segura. Vuelva a introducirlo.";

        setTimeout(() => {
            textoError.innerText = "";
        }, 5000);
    }
}

//ME DA ERROR EL expReg