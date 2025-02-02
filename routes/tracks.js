const express = require('express')
const router = express.Router() //manejador de rutas de express
/**
 * Aqui declaramos todas las peticiones http como GET, POST, DELETE y PUT
 */
router.get("/", (req, res) => { //funcion callback que resibe 2 argumentos que son request y response
    const data = ["Hola", "mundo"] //constante con un array de datos
    res.send({data}) //regresamos la constante data
})

module.exports = router //importamos el modulo de rutas
