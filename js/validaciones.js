window.onload = function () {
    var enviar;

    enviar = document.getElementById ("enviar");
    enviar.onclick = EnviarForm;
}

function EnviarForm (){
    var seEnvio=false;
    
    var formulario = document.getElementById ("formulario");
    var usuario=document.getElementById("usuario");
    var contraseña=document.getElementById("password");


    var condicion1=verificarUsuario(usuario);
    var condicion2=verficarContraseña(contraseña);

    seEnvio=condicion1&&condicion2;

    if (seEnvio) {
		
		alert ("Validación exitosa");
        location.href = "pages/vistaPantallaPrincipal.html";
        formulario.submit();
	}
    
}

function verficarContraseña(contraseña){
    var condicion2=true
    if(!contraseña.value){
        alert("no ingreso contraseña");
        usuario.focus();
        condicion2=false    
    }
    return condicion2;
}

function verificarUsuario(usuario){
    var condicion1=true
    if(!usuario.value){
        alert("no ingreso Nombre de usuario");
        usuario.focus();
        condicion1=false     
    }
    return condicion1;

}

