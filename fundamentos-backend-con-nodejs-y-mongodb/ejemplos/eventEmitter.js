'use strict';

const EventEmitter = require('events');

// creamos un emisor de eventos
const emisor = new EventEmitter();

emisor.on('llamada de telefono', (quienLlama) => {
  if (quienLlama === 'madre') {
    return;
  }
  console.log('suena el telefono');
});

emisor.once('llamada de telefono', (quienLlama) => {
  console.log('brr brr');
});

emisor.emit('llamada de telefono', 'madre');
// emisor.emit('llamada de telefono');
// emisor.emit('llamada de telefono');