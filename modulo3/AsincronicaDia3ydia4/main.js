$(document).ready(function(){
    var chiste = document.getElementById("chiste");
    var boton = document.getElementById("boton");
   
    boton.addEventListener("click",function obtnerChiste(){
        $.getJSON("https://api.chucknorris.io/jokes/random",function(data){
            
            chiste.innerHTML=data.value
        })
    })
    
   
})