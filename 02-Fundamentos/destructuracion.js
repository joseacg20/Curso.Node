let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${ this.nombre } ${this.apellido} - poder: ${ this.poder}`
    }
};

// console.log(deadpool.getNombre());

//Optener los argumentos de cada uno de los elementos de la variable deadpool
// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

// destructuracion de la variable
/* tambien puedes darle un nombre direfente a la variable que viene del let
   a traves de un nombre: primerNombre*/

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);