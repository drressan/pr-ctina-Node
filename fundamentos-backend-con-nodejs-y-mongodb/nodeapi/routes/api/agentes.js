'use strict';

const express = require('express');
const router = express.Router();
const Agente = require('../../models/Agente');
// const { body, validationResult } = require('express-validator');

// GET /api/agentes
// Devuelve una lista de agentes
router.get('/', async (req, res, next) => {
  try {
    const name = req.query.name;
    const age = req.query.age;
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);
    // http://localhost:3000/api/agentes/?select=name address -_id
    const select = req.query.select; // campos
    const sort = req.query.sort;

    const filtro = {};

    if (name) {
      filtro.name = name;
    }

    if (age) {
      filtro.age = age;
    }

    const agentes = await Agente.lista(filtro, skip, limit, select, sort);
    res.json({ results: agentes });
  } catch (err) {
    next(err);
  }
});

// GET /api/agentes:id
// Obtener un agente
router.get('/:identificador', async (req, res, next) => {
  try {
    const _id = req.params.identificador;

    const agente = await Agente.find({ _id: _id });
    res.json({ result: agente });
  } catch (err) {
    next(err);
  }
});

// POST /api/agentes (body)
// Crear un agente
router.post('/', async (req, res, next) => {
  try {
    const agenteData = req.body;

    const agente = new Agente(agenteData); // creo un objeto de tipo Agente EN MEMORIA

    if (agente.age < 1 || agente.age > 200) {
      const error = new Error('age out of range');
      next(error);
    }

    const agenteCreado = await agente.save();

    res.status(201).json({ result: agenteCreado });

  } catch (err) {
    next(err);
  }
});

// DELETE /api/agentes:id
// Elimina un agente
router.delete('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;

    await Agente.deleteOne({ _id: _id });
    res.json();
  } catch (err) {
    next(err);
  }
});

// PUT /api/agentes:id (body)
// Actualizar un agente
router.put('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;
    const agenteData = req.body;

    const agenteActualizado = await Agente.findOneAndUpdate({ _id: _id }, agenteData, {
      new: true // esto es para que me devuelva el estado final del documento
    });

    if (!agenteActualizado) {
      res.status(404).json({ error: 'not found'});
      return;
    }

    res.json({ result: agenteActualizado });
  } catch (err) {
    next(err);
  }
});

module.exports = router;