let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

let newpar = par.toLowerCase();
let array = Array.from(newpar);

function contarLetras(array) {
    var objeto = {}; 
    for(var i in array){
        objeto[array[i]] = ( objeto[array[i]] || 0 ) + 1; // Incrementamos el valor si el elemento ya existe
    }
    return objeto;
}


console.log();