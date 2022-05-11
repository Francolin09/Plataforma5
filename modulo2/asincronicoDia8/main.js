var colorete = document.getElementById('colors')
var cuerpo = document.querySelector("body")
colorete.addEventListener("keyup",function(data){
    if(data.key=="Enter"){
        if(colorete.value=="rojo"){
            cuerpo.style.backgroundColor="Red"
    
        }
        else if(colorete.value=="azul"){
            cuerpo.style.backgroundColor="Blue"
    
        }
        else if(colorete.value=="verde"){
            cuerpo.style.backgroundColor="Green"
    
        }
        else if(colorete.value=="amarillo"){
            cuerpo.style.backgroundColor="Yellow"
    
        }
        else if(colorete.value=="rosado"){
            cuerpo.style.backgroundColor="Pink"
    
        }
    }
    
})
console.log(colorete)