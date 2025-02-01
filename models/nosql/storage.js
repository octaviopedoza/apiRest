const mongoose = require("mongoose")

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String //dato de la url de un archivo
        },
        filename:{
            type:String //dato del nombre del archivo
        }
    },
    {
        timestamps:true,  //Registra creadAt, updateAt
        versionKey: false,
    }
)

module.exports = mongoose.model("storage", StorageScheme) //exportamos el modulo scheme del usuario