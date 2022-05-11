var titulo = document.getElementById("titulo");
titulo.innerHTML="<p>Se cambio el titulo por un parrafo</p>"
var p = document.createElement("p");
var contenido=document.createTextNode("Nuevo parrafo con appenChild")
var etiquetaConTexto= p.appendChild(contenido)
document.body.appendChild(etiquetaConTexto);