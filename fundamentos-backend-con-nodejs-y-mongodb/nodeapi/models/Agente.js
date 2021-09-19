'use strict';

const mongoose = require('mongoose');

// definimos un esquema
const agenteSchema = mongoose.Schema({
  name: String,
  // name: { type: String, index: true },
  age: Number,
}, {
  // collection: 'agentes'
});

agenteSchema.statics.lista = function(filtro, skip, limit, select, sort) {
  const query = Agente.find(filtro);
  query.skip(skip);
  query.limit(limit);
  query.select(select);
  query.sort(sort);
  return query.exec();
}

// creamos el modelo
const Agente = mongoose.model('Agente', agenteSchema);

// exportamos el modelo (opcional)
module.exports = Agente;
