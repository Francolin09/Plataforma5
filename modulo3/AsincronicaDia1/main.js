class Libro {
    constructor(nombre,autor,editorial,genero){
        this.nombre=nombre;
        this.autor=autor;
        this.editorial=editorial;
        this.genero=genero;
        

       
    }
    mostrarLibro(){
        console.log("nombre del libro: "+this.nombre);
        console.log("Autor del libro: "+this.autor);
        console.log("editorial: "+this.editorial);
        console.log("genero: "+this.genero)
    }

    
}

var libro = new Libro("El perrito Lindo","Manuel Donoso","Laureles","Fabula")
console.log(libro);
libro.mostrarLibro()
var libros=[];
libros.push(libro)
console.log(libros)

function filtrarPorAutor(nombreAutor){
    libros.forEach(element => {
        if(element.autor==nombreAutor){
            console.log(element)
        }

        
    });
}

filtrarPorAutor("Manuel Donoso")