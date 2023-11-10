let favoritos=[
    {
        "id":1,
        "nombreCancion":"I talk to the wind",
        "nombreAlbum":"In the Court of the Crimson King",
        "duracionSeg":369
    },
    {
        "id":1,
        "nombreCancion":"I talk to the wind",
        "nombreAlbum":"In the Court of the Crimson King",
        "duracionSeg":200
    },
    { 
      "id":1,
      "nombreCancion":"I talk to the wind",
      "nombreAlbum":"In the Court of the Crimson King",
      "duracionSeg":368
    }
];



let todasLasCanciones=[];
let informacionCancion;
let listaCancionesAgregadas=[];
//funcion que al tocar la estrella del contenedor se guarda en localStorage y se incluye en la lista de fav
var contenedores =document.querySelectorAll('.contenedor');

contenedores.forEach(function(contenedor){


var imagen= contenedor.querySelector('.imagen');
imagen.addEventListener('click', function(){
  let fotoRecomendada= document.querySelector('.cancionRecomendada');
  console.log(fotoRecomendada);
  fotoRecomendada.src=imagen.src;


})




var estrella =contenedor.querySelector('.estrella');
//aprovecho el codigo y sacamos de aca todas las canciones
informacionCancion=JSON.parse(contenedor.querySelector('.imagen').getAttribute('data-cancion'));
todasLasCanciones.push(informacionCancion);
let repetidoestrella=false;
   estrella.addEventListener('click', function(){
    let repetido=false;
    let posicion;
    let atributoData=contenedor.querySelector('.imagen').getAttribute('data-cancion');
    //aca guardamos la id que es la identificacion unica de un objeto
    let verRepetido=JSON.parse(atributoData).id;
    for(let i=0; i<listaCancionesAgregadas.length; i++){
      if(listaCancionesAgregadas[i].id==verRepetido){
          repetido=true;
          posicion=i;
        }
      }
    //si no se toco nunca entonces se agrega al array y se suma al localStorage
    if(!repetido){
      listaCancionesAgregadas.push(JSON.parse(atributoData));
      estrella.src="../imagenes/star-48-dorada.png";
      repetidoestrella=true;
    }     

    //si esta y toco otra vez la imagen se la elimina del array y se actualiza al localStorage
    if(repetido==true){
      //lo eliminamos sabiendo la posicion gracias al for
      listaCancionesAgregadas.splice(posicion, 1);
      console.log("canciones favoritas" + listaCancionesAgregadas);
      estrella.src="../imagenes/star-4-48.png";
      repetidoestrella=false;
    } 
    console.log(localStorage.setItem('cancionfav',JSON.stringify(listaCancionesAgregadas)));
    
  })
});
//falta que al cargarse primero vea  el valor en el que esta cada estrella y despues la pinte o no

console.log(todasLasCanciones);

 

//al cargar la vistamis fav
function cargarGrilla(){
let grilla = document.querySelector("#cuadricula");
// Obtener la data-cancion de la imagen clickeada y la volvemos un json y la podemos usar para favoritos;
console.log(localStorage.getItem('cancionfav'));
let datos = JSON.parse(localStorage.getItem('cancionfav'));
//datos= JSON.parse(datos);
console.log(("soy datos"+datos));
let array3 = []; 

array3=favoritos.concat((datos));
console.log(array3);   
favoritos=favoritos.concat(datos);


    for(let i=0; i<favoritos.length; i++){
        let duracionMin=(favoritos[i].duracionSeg/60).toFixed();
        let duracionSegCalculo=favoritos[i].duracionSeg%60;

        if(duracionSegCalculo<10){
          duracionSegCalculo="0"+duracionSegCalculo;
        }
        //asi cargamos los datos como segundos y por medio de un calculo lo separamos
        let duracionTotal=duracionMin+":"+duracionSegCalculo;

            grilla.innerHTML+=
            `
            <!--primera columna-->
            <div class="columna-play"> 
              <span class="material-symbols-outlined"> play_arrow </span>
            </div>

            <!--segunda columna-->
            <div class="columna-cancion">
              <a href="vistaMusicaSonando.html">${favoritos[i].nombreCancion}</a>
              <span class="material-symbols-outlined"> favorite </span>
            </div>
          
            <!--tercera columna-->
            <div class="columna-album">
              <span>${favoritos[i].nombreAlbum}</span>
              <span class="material-symbols-outlined"> favorite </span>
            </div>
          
            <!--cuarta columna-->
            <div class="columna-duracion">
              <span>${duracionTotal}</span>
            </div>

            <!--quinta columna-->
            <div class="columna-favoritos">
              <span class="material-symbols-outlined"> favorite </span>
            </div> `

      }
}

function actualizacionGrilla(){
  let grilla = document.querySelector("#cuadricula");
  grilla.innerHTML+='';
  for(let i=0; i<favoritos.length; i++){
    let duracionMin=(favoritos[i].duracionSeg/60).toFixed();
    let duracionSegCalculo=favoritos[i].duracionSeg%60;

    if(duracionSegCalculo<10){
      duracionSegCalculo="0"+duracionSegCalculo;
    }
    //asi cargamos los datos como segundos y por medio de un calculo lo separamos
  let duracionTotal=duracionMin+":"+duracionSegCalculo;
  

  grilla.innerHTML+=
            `
            <!--primera columna-->
            <div class="columna-play"> 
              <span class="material-symbols-outlined"> play_arrow </span>
            </div>

            <!--segunda columna-->
            <div class="columna-cancion">
              <a href="vistaMusicaSonando.html">${favoritos[i].nombreCancion}</a>
              <span class="material-symbols-outlined"> favorite </span>
            </div>
          
            <!--tercera columna-->
            <div class="columna-album">
              <span>${favoritos[i].nombreAlbum}</span>
              <span class="material-symbols-outlined"> favorite </span>
            </div>
          
            <!--cuarta columna-->
            <div class="columna-duracion">
              <span>${duracionTotal}</span>
            </div>

            <!--quinta columna-->
            <div class="columna-favoritos">
              <span class="material-symbols-outlined"> favorite </span>
            </div> `
}}




//aca es el buscador
function barraBusqueda(){
  let resultado = document.querySelector('#canciones');

let buscador=document.querySelector("#titulo");

buscador.addEventListener("keyup",()=>{
  console.log(buscador.value);
    //1.-guardar el valor del buscador 
    let valor=buscador.value;
    //pasamos todo a minuculas para no generar errores de busqueda
    valor.toLowerCase();

    //2.-filtrar el array de cursos                            pasamos cada tema y cada album a minuscula para no generar fallos
    let cursosFiltrados=todasLasCanciones.filter(tema =>tema.nombreCancion.toLowerCase().startsWith(valor) || tema.nombreAlbum.toLowerCase().startsWith(valor)); //&& tema=>tema.nombreAlbum.indexOf(valor)>-1 );
    //3.-limpiar resultados
    resultado.innerHTML="";
    //4.-llenar resultados con los cursos filtrados
    cursosFiltrados.forEach((item)=>{
      console.log(item.src);
        resultado.innerHTML+=
        `
         <div class="contenedor">
            <img class="estrella" src="../imagenes/star-4-48.png" alt="estrella vacia" data-estado="apagada">
            <img class="imagen" src=${item.src} alt="foto portada cancion" 
            data-cancion= ${JSON.stringify(item)}'>
        </div>
        `;
    });
});
}





document.addEventListener("DOMContentLoaded", function() {
var flechasOrdenamiento = document.querySelectorAll('.ordenamiento');

//por cada flecha
flechasOrdenamiento.forEach(function(flecha) {
 
let sentidoFlecha="inferior";
  
 //faltaria que al tocar cualquiera vaya variando y 
 //faltaria que cada flecha cumpla el ordenamiento que dice(duracion, nombre cancion y banda)
 flecha.addEventListener('click', function() {//hace el cambio de contenido ahora falta que varie 
  
  //analiza para que lado quiere estar el indicador
  if(sentidoFlecha=="inferior"){
    flecha.textContent = '▲';
    sentidoFlecha="superior";
    menorAMayor();
    
  }else{
    flecha.textContent = '▼';
    sentidoFlecha="inferior";
    mayorAMenor();
  }
console.log(sentidoFlecha);
//actualizacionGrilla(); no me funciona que se actualice
console.log(favoritos);
  });  
});
})

/*
var objetos = [
  { nombre: "Juan", edad: 5 },
  { nombre: "María", edad: 40 },
  { nombre: "Carlos", edad: 66 }
];*/

function menorAMayor(){
  favoritos.sort((a,b) =>{
    if(a.duracionSeg < b.duracionSeg){
      return -1;
    }
    if(a.duracionSeg > b.duracionSeg){
      return 1
    }
    return 0;
  })
}


function mayorAMenor(){
  favoritos.sort((a,b) =>{
    if(a.duracionSeg > b.duracionSeg){
      return -1;
    }
    if(a.duracionSeg < b.duracionSeg){
      return 1
    }
    return 0;
  })
}