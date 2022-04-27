var genero = prompt("Indique su género M o F").toLowerCase();
var edad = parseInt(prompt("ingrese su edad"));

if (genero =="m" && edad >=65 || genero =="f" && edad >=60){
    alert("Usted se encuentra en edad de jubilar")
}else{
    alert("Usted aun no se encuentra en edad de jubilar")
}