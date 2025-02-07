require("dotenv").config()

const express = require("express") //declaramos express para levantar un servicio web
const cors = require("cors") //declaramos cors permite evitar error de origen cruzado entre navegadores
const dbConnect = require('./config/mongoose') //declaramos la constante de concxion a la DB
const app = express()

app.use(cors()) //asignamos el uso de la libreria de cors dentro de la aplicacion web
app.use(express.json()) //sirve para que nuestra app este preparada para recibir información por POST
app.use(express.static('storage'))

const port = process.env.PORT || 3000 //constante que declara el puerto a utilizar para la conexion

/**
 * Aqui invocamos las rutas
 */
//Todo localhost/api/________
app.use("/api", require("./routes")) 


/**
 * Aqui declaramos la funcion inicial
 */
app.listen(port, () => { //funcion inicial
    console.log('Tu app esta lista por http://localhost:'+ port) //Mensaje de console.log indicando el puesto de conecxion
})

dbConnect();
