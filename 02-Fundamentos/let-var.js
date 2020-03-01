// var nombre = 'Wolwerin';

/* Con var en cualquier instanciacion de la variable el valor cambia 
   sin importat si esta en un metodo*/

/* Con let no se puede volver a definir una variable con el mismo
   nombre y este es independiente de metodo es decir si se declara 
   nuevamente dentro de un if let nombre = xxx, el console mostrara
   el valor que esta fuera de ese if, pero si en el if esta sin let 
   el apuntador de memoria reconocera la variable fuera de este y se
   actualizara*/

// if (true) {
//     var nombre = 'Magneto';
// }

// console.log(nombre);

let i;

for (var i = 0; i <= 5; i++) {
    console.log(`i: ${ i }`);
}

console.log(i);