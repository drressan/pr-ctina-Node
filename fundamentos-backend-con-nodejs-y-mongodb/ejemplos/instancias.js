'use strict';

// vamos a crear objetos con una función

// esta función la usaremos como constructor de objetos
function Fruta() {
  this.nombre = 'Limon';

  // le ponemos un método
  this.saluda = function() {
    console.log('Hola, soy', this.nombre)
  }
}

// crear un objeto con ese constructor
const limon = new Fruta();

console.log(limon);

limon.saluda();

// donde veais los paréntesis de ejecución, mirar a lizquierda del punto anterior