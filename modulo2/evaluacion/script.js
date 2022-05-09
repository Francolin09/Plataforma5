var palabraAleatoria;
var Tiempo = 10;
var score=0;

function randomWords(){
    const words = [
        'californication',
        'plataforma5',
        'black',
        'summer',
        'flea',
        'aeroplane',
        'peppers',
        'unlimited',
        'arcadium',
        'love',
        'getaway',
        'stadium',
        'quixoticelixer',
        'quarter',
        'snow',
        'dylan',
        'zephyr',
        'funky',
        'chili'
    ];
    var rand = Math.floor((Math.random()*words.length));
    var rValue = words[rand];
    return rValue;

}
var palabraAleatoria = randomWords();
function addToDom(){
    var elache = document.querySelector("#randomWord");
    elache.innerHTML = palabraAleatoria;
}
var ingreso = document.getElementById('text');
function cuenta(){
    var tiempoTotal = document.getElementById('timeSpan');
    tiempoTotal.innerText=Tiempo +" seg";
    if(Tiempo==0){
        tiempoTotal.innerText="Game Over"
        ingreso.disabled = true;
    }
    else{
        Tiempo-=1;

        setTimeout("cuenta()",1000)
    }
}

function puntaje(){
    
    var puntaje = document.getElementById('score')
    puntaje.innerText=score;
}
addToDom()
var ingreso = document.getElementById('text');
cuenta()
ingreso.addEventListener("keyup",function(data){
    
    if(data.key=="Enter"){
        if(ingreso.value==palabraAleatoria){
            ingreso.style.backgroundColor="Green"
            
            Tiempo +=3;
            
            score+=1;
            puntaje()
            setTimeout(function(){
                ingreso.style.backgroundColor="White"
            },300)
            
            palabraAleatoria = randomWords()
            addToDom()
            ingreso.value="";
            

        }
        else{
            ingreso.style.backgroundColor="Red"
            setTimeout(function(){
                ingreso.style.backgroundColor="White"
            },300)

            palabraAleatoria=randomWords()
            addToDom()
            ingreso.value="";
            
        }
    }
    

})
