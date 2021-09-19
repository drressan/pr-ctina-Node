'use strict';

// this

// esta función la usaremos como constructor de objetos
function Fruta(nombre) {
  this.nombre = nombre;

  // le ponemos un método
  this.saluda = function() {  // tambien podríamos usar una arrow function en vez del .bind de abajo
    console.log('Hola, soy', this.nombre)
  }
}

// crear un objeto con ese constructor
const limon = new Fruta('Limon');
const naranja = new Fruta('Naranja');

// console.log(limon);

setTimeout(limon.saluda.bind(naranja), 2000);
// limon.saluda();

// donde veais los paréntesis de ejecución, mirar a la izquierda del punto anterior
