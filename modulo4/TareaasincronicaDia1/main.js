var agregar = document.querySelector(".boton-agregar");
var container = document.querySelector(".container")
var input = document.querySelector(".input")
var item = document.querySelector(".item")


var mostrar = document.querySelector("#tareaMostrar")
var btneditar = document.querySelector(".boton-editar");
var btnborrar = document.querySelector(".boton-remover")

agregar.addEventListener("click",function(e){
    e.preventDefault()
    var texoIngresado = input.value
     
   
    let nuevoContenedor = document.createElement("div");
    nuevoContenedor.className = "container"
    let nuevoDiv = document.createElement("div");
    nuevoDiv.className="item"
    let nuevoInput = mostrar;
    let nuevoEditar = btneditar;
    let nuevoBorrar = btnborrar;
    nuevoInput.setAttribute("value",texoIngresado) 
    nuevoDiv.appendChild(nuevoInput);
    nuevoDiv.appendChild(nuevoEditar);
    nuevoDiv.appendChild(nuevoBorrar)
    nuevoContenedor.appendChild(nuevoDiv)
    document.body.appendChild(nuevoContenedor)
    console.log(nuevoDiv)
   
    
    
   



    
 
    
    
    
  

    
})
btneditar.addEventListener("click",function(){
    mostrar.disabled=false;
    
})
mostrar.addEventListener("focusout",function(){
    mostrar.setAttribute("disabled","")
})
btnborrar.addEventListener("click", function(){
    document.body.removeChild(container)
})