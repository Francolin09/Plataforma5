function FIZZBUZZ2(palabra1,palabra2,valorMaximo,fizznum,buzznum){
    var i =1;
    var numeros = [];
    while(i<=valorMaximo){
    if(i % fizznum == 0 && i%buzznum==0){
        numeros.push(palabra1+palabra2)
    }
    else if(i%buzznum==0){
        numeros.push(palabra2)
    }
    else if(i%fizznum==0 ){
        numeros.push(palabra1)
    }
    else{
        numeros.push(i)
    }
    i++
    }
 console.log(numeros.toString())

}

FIZZBUZZ2("rojo","verde",100,3,5);