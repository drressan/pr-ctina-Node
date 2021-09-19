'use strict';

function creaCoche(numRuedas) {

  const tipoMotor = 'electrico';

  return {
    ruedas: numRuedas,
    cuantasRuedasTengo: function() {
      console.log(numRuedas);
    },
    queTipoMotor: function() {
      console.log(tipoMotor)
    }
  }
}

const coche = creaCoche(4);

// console.log(coche);

// coche.cuantasRuedasTengo()

setTimeout(coche.cuantasRuedasTengo, 2000)
setTimeout(coche.queTipoMotor, 2000)