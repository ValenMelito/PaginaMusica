let mensajeUsuario = document.querySelector("#mensajeUsuario");
let mensajeContrasenia = document.querySelector("#mensajeContrasenia");

let form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    entrar();
});
//validacion de usuario
function entrar(){

    let error=false;
    let mensajesError="<p>No puede estar vacío</p>";
    let mensajeBlanco="";
    var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

    //validacionn de usuario
    if (document.getElementById("usuario").value == "") {
        document.getElementById("usuario").focus();
        error=true;
        mensajesError = "Escriba un usuario existente";
    }
    if(error){
        mensajeUsuario.innerHTML = mensajesError;
    }else{
        mensajeUsuario.innerHTML = mensajeBlanco;
    }
    
    //validacion  de contraseña
    if (document.getElementById("password").value.length === 0) {
        //alert("Tiene que escribir una contraseña");
        document.getElementById("password").focus();
        error=true;
        mensajesError = "La contraseña debe coincidir";

    }
    if(error){
        mensajeContrasenia.innerHTML = mensajesError;
    }else{
        mensajeContrasenia.innerHTML = mensajeBlanco;
        
    }

    if(!error){
        form.submit();
        window.location.href = "pages/vistaPantallaPrincipal.html";
    }
}