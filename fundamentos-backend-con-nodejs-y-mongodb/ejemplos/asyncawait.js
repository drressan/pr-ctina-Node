'use strict';

// funcion que devuelve una promesa
function sleep(ms) {
  return new Promise((resolve, reject) => {
    // petición al servidor con fetch
    setTimeout(() => {
      // resolve(ms);
      reject(new Error('se rompiò el tiempo'));
    }, ms);
  });
}

// consumir la promesa
async function main() {
  // try {
    const resultado = await sleep(2000);
    console.log(`Han pasado ${resultado} milisegundos`);
  
    for(let n = 0; n <= 5; n++) {
      const resultado = await sleep(2000);
      console.log(`Han pasado ${resultado} milisegundos`);
    }
  
  // } catch (error) {
  //   console.log('Hubo un error', error.message)
  // }
}

main().catch(error => console.log('Hubo un error', error.message))

setTimeout(() => {
  console.log('*** pasaron 3 segundos');
}, 3000);