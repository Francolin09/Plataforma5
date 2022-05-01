function contarDeA_n(contarDe,contarHasta){
    var cuenta = 1;
    while(cuenta<contarHasta){
        
        
        if(cuenta>=contarHasta){
            break;
        }
        else{
            console.log(cuenta)
        }
        cuenta=cuenta+contarDe;
    }
}

contarDeA_n(3,100);