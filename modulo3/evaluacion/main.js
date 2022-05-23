var colors =[`rgb(${pickedColor()}, ${pickedColor()}, ${pickedColor()})`,`rgb(${pickedColor()}, ${pickedColor()}, ${pickedColor()})`,`rgb(${pickedColor()}, ${pickedColor()}, ${pickedColor()})`,`rgb(${pickedColor()}, ${pickedColor()}, ${pickedColor()})`,`rgb(${pickedColor()}, ${pickedColor()}, ${pickedColor()})`,`rgb(${pickedColor()}, ${pickedColor()}, ${pickedColor()})`];
var cuadrados = document.querySelectorAll(".square")
var colorElegido=colors[Math.floor(Math.random() * (6 - 0)) + 0];
var displayColor = document.getElementById("colorDisplay")
var boton= document.getElementById("boton")
boton.style.visibility="hidden";
var mensaje = document.getElementById("mensaje")
var titulo=document.getElementById("titulo")
var facil = document.getElementById("facil");
var dificil = document.getElementById("dificil")
var cuadrosfaciles = document.getElementsByClassName("2");
var cuadrosres = document.getElementsByClassName("1")

console.log(colorElegido)

function inicio(){for (i=0; i<cuadrados.length;i++){
    
    
    cuadrados[i].setAttribute('style',`background-color:${colors[i]}`)
    
    displayColor.textContent= colorElegido;
}}







function pickedColor(min=0,max=256) {
     
 
 return Math.floor(Math.random() * (max - min)) + min;
}

function jugar (){
    cuadrados.forEach(element => {
        element.addEventListener("click",function(){
            if(colorElegido==element.style.backgroundColor){
                mensaje.textContent="Ganaste!!"
            console.log("ganaste")
            boton.style.visibility="visible";
            titulo.setAttribute("style","background-color:"+element.style.backgroundColor)

        }
            
        else{ 
            element.style.backgroundColor="#232323"
            mensaje.textContent="Lo siento, intenta de nuevo";
            console.log("Lo siento, intenta de nuevo")
            }
        })
        
    });

}

facil.addEventListener("click",function(){
    cuadrosfaciles[0].style.visibility="hidden"
    cuadrosfaciles[1].style.visibility="hidden"
    cuadrosfaciles[2].style.visibility="hidden";
    function jugarfacil (){
        cuadrosres.forEach(element => {
            element.addEventListener("click",function(){
                if(colorElegido==element.style.backgroundColor){
                    mensaje.textContent="Ganaste!!"
                console.log("ganaste")
                boton.style.visibility="visible";
                titulo.setAttribute("style","background-color:"+element.style.backgroundColor)
    
            }
                
            else{ 
                element.style.backgroundColor="#232323"
                mensaje.textContent="Lo siento, intenta de nuevo";
                console.log("Lo siento, intenta de nuevo")
                }
            })
            
        });
    
    }
    

    
});
boton.addEventListener("click",function(){
    inicio();
    jugar();
})
inicio();
jugar()






