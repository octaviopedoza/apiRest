const mongoose = require("mongoose")

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String
        }
    },
    {
        timestamps:true,  //Registra creadAt, updateAt
        versionKey: false,
    }
)

module.exports = mongoose.model("storage", StorageScheme) //exportamos el modulo scheme del usuario