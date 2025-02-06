const express = require('express');
const router = express.Router(); //manejador de rutas de express
const { getItems, getItem, createItem } = require('../controllers/tracks');

/**
 * Aqui declaramos todas las peticiones http como GET, POST, DELETE y PUT
 */
router.get("/", getItems);

router.post("/", createItem);

module.exports = router //importamos el modulo de rutas
