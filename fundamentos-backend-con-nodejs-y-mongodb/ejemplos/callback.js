'use strict';

function suma(a, b, callback) {
  setTimeout(function() {
    const resultado = a + b;
    callback(resultado)
  }, 2000)
  console.log('fin');
}


suma(
  3, // a
  7, // b
  function callback(resultado) { 
    console.log(resultado)
  } // callback
)
