let abrir=document.querySelector("#abrir");
let cerrar=document.querySelector("#cerrar");
let popup=document.querySelector(".popup");

/*Codigo para el pop-up*/
cerrar.addEventListener("click",()=>{
    popup.classList.add("d-none");
})
