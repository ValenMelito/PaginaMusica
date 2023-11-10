let mensajeUsuario = document.querySelector("#mensajeUsuario");
let mensajeContrasenia = document.querySelector("#mensajeContrasenia");
let mensajeRepetirContrasenia = document.querySelector("#mensajeRepetirContrasenia");
let mensajeNac= document.querySelector("#mensajeNac");
let mensajeMail = document.querySelector("#mensajeMail");

//validacion de registro
let form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validar();
});

function valida_enviar(){

    let error=false;
    let mensajesError="<p>No puede estar vacío</p>";
    let mensajeBlanco="";
    var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

    //validacionn de usuario
    if (document.getElementById("usuario").value == "") {
        document.getElementById("usuario").focus();
        mensajesError;
        error=true;
    }
    if(error){
        mensajeUsuario.innerHTML = mensajesError;
    }else{
        mensajeUsuario.innerHTML = mensajeBlanco;
    }
    
    //validacion  de contraseña
    if (document.getElementById("contrasena").value.length === 0) {
        //alert("Tiene que escribir una contraseña");
        document.getElementById("contrasena").focus();
        mensajesError;
        error=true;
    }
    if(error){
        mensajeContrasenia.innerHTML = mensajesError;
    }else{
        mensajeContrasenia.innerHTML = mensajeBlanco;
    }
    //validacion de repetir contraseña
    if (document.getElementById("repetirContrasena").value !== document.getElementById("contrasena").value) {
        //alert("Las contraseñas deben coincidir");
        document.getElementById("repetirContrasena").focus();
        mensajesError = "La contraseña debe coincidir";
        error=true;
    }
    if(error){
        mensajeRepetirContrasenia.innerHTML = mensajesError;
    }else{
        mensajeRepetirContrasenia.innerHTML = mensajeBlanco;
    }  
    //validacion de poner una fecha
    if (document.getElementById("fechaNacimiento").value.length === 0) {
        //alert("Debe completar la fecha de nacimiento");
        document.getElementById("fechaNacimiento").focus();
        mensajesError = "Debe elegir la fecha de nacimiento";
        error=true;
    }
    if(error){
        mensajeNac.innerHTML = mensajesError;
    }else{
        mensajeNac.innerHTML = mensajeBlanco;
    }
    //validacion del  mail
    if ((regexp.test(document.getElementById("email").value)==0)
||    document.getElementById("email").value.length === 0) {
        //alert("El mail debe ser valido");
        document.getElementById("email").focus();
        mensajesError = "Complete con un mail valido";
        error=true;
    }
    if(error){
        mensajeMail.innerHTML = mensajesError;
    }else{
        mensajeMail.innerHTML = mensajeBlanco;
        form.submit();
    }


    //document.form.submit();
}

let actualizacionIRL = document.querySelector('#usuario');
actualizacionIRL.addEventListener("keyup",()=>{
    
    var posicionNombreUsuario= document.querySelector('.posicionNombreUsuario');
    var nombre=actualizacionIRL.value;
    posicionNombreUsuario.textContent=nombre;
if(actualizacionIRL.value==null){
        console.log(nombre)
        posicionNombreUsuario.textContent="nombre";
    }

})