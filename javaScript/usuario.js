
//funcion que al cargar
window.onsubmit = function guardarNombreUsuario() {
    let nombreUsuario = document.querySelector('#usuario');
    localStorage.setItem('nombreUsuario',nombreUsuario.value)
    //se guarda correctamente
    console.log(localStorage.getItem('nombreUsuario'));
  };
  
function obtenerNombreDeUsuario(){
    let posicionNombreUsuario = document.querySelector('.posicionNombreUsuario');
    let nuevoNombreUsuario =localStorage.getItem('nombreUsuario');
    posicionNombreUsuario.textContent=nuevoNombreUsuario;
}
  
  
  
  
  