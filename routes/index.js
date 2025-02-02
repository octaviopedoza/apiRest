const express = require('express')
const fs = require('fs')
const router = express.Router() //manejador de rutas de express

const PATH_ROUTES = __dirname; //directorio de rutas

const removeExtension = (fileName) => { //funcion para eliminar la extencion de los nombres de los archivos y poder usarlos dentro de las rutas
    return fileName.split('.').shift()//en este punto obtenemos el nombre del archivo sin la extencion
}

fs.readdirSync(PATH_ROUTES).filter((file) => { 
    const name = removeExtension(file) //aqui se usa el resultado de la funcion  anterior para manejar el nombre de la ruta
    if(name !== 'index'){ //omitimos el archivo index
        console.log(`Cargando rutas ${name}`)
        router.use(`/${name}`, require(`./${file}`)) //utilizamos el nombre del archivo como nombre de ruta
    }
}) 


module.exports = router
