'use strict';

const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res, next) => {
  // yo puedo usar req res y next para lo que quiera
  console.log('recibo un petición a', req.originalUrl);
  res.send('hola');
});

app.get('/eltiempo', (req, res, next) => {
  console.log('recibo un petición a', req.originalUrl);
  res.send('hoy está lloviendo');
});

// Creo el servidor
const server = http.Server(app);

// Arranco el servidor
server.listen(8085, () => {
  console.log('Servidor de Express arrancado en el puerto 8085');
});
