



var respuesta ="s";

var maquina;
while(respuesta=="s"){
    var lanzamiento = parseInt(prompt("Ingresa tu lanzamiento! 1 (Piedra),2 (papel) o 3(tijeras)!"));
   
  
     
     maquina = Math.floor(Math.random() * (4 - 1)) + 1;
    if (lanzamiento==1 && maquina==2||lanzamiento==2 && maquina==3||lanzamiento==3 && maquina==1){
        alert("Gana la maquina!")
    }else if(lanzamiento==1 && maquina==3||lanzamiento==2 && maquina==1||lanzamiento==3&&maquina==2){
        alert("Gana la humanidad!")
    }else if(lanzamiento==maquina){
        alert("Es un empate!")
    }
    respuesta = prompt("Desea volver a jugar? s(si) n(no)");
    
    

}
