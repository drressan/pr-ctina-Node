'use strict';

// conexion a la base de datos
const dbConnection = require('./lib/connectMongoose');

// modelo de agentes
const Agente = require('./models/Agente');
const agenteData = require('./agentesIniciales.json');


main().catch(err => console.log('Hubo un error', err));

async function main() {
  await initAgentes();

  dbConnection.close();
}

async function initAgentes() {
  // elimino todos los documentos de la colección de agentes
  const deleted = await Agente.deleteMany();
  console.log(`Eliminados ${deleted.deletedCount} agentes.`);

  // crear agentes iniciales
  const agentes = await Agente.insertMany(agenteData.agentes);
  console.log(`Creados ${agentes.length} agentes.`);
}