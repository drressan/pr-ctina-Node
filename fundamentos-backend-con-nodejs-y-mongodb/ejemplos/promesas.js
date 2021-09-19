'use strict';

// funcion que devuelve una promesa
function sleep(ms) {
  return new Promise((resolve, reject) => {
    // petición al servidor con fetch
    setTimeout(() => {
      resolve(ms);
      // reject(new Error('se rompiò el tiempo'));
    }, ms);
  });
}

// consumir la promesa
const promesa = sleep(2000);

console.log(promesa);

promesa.then((resultado) => {
  console.log(`han pasado ${resultado} milisegundos`);
}).catch(error => {
  console.log('Hubo un error en el primer sleep:', error.message);
}).then(() => {
  return sleep(2000)
}).then(() => {
  console.log('han pasado otros 2 segundos');
}).catch((error) => {
  console.log('Hubo un error:', error.message);
});
