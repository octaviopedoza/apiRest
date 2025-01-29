require("dotenv").config()

const express = require("express") //declaramos express para levantar un servicio web
const cors = require("cors") //declaramos cors permite evitar error de origen cruzado entre navegadores
const dbConnect =require('./config/mongoose')
const app = express()

app.use(cors()) //asignamos el uso de la libreria de cors dentro de la aplicacion web

const port = process.env.PORT || 3000

app.listen(port, () => { //funcion inicial
    console.log('Tu app esta lista por http://localhost:'+ port) 
})

dbConnect();
