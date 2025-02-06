const { type } = require("express/lib/response")
const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String //se guaradara el nombre de los usuarios como un dato tipo string
        },
        age:{
            type:Number //se guardara la edad como un dato de tipo numero
        },
        email:{
            type:String,
            unique:true //se guardara el email como un dato unico, no se puede repetir
        },
        password:{
            type:String //se guardara el password como un dato de tipo string
        },
        role:{
            type:["user","admin"], //se pueden crear usuarios con estos dos tipos de roles
            default: "user", // si no se asigna un rol se agregara con el rol de user por defecto
        },
    },
    {
        timestamps:true,  //Registra creadAt, updateAt
        versionKey: false,
    }
)

module.exports = mongoose.model("users", UserScheme) //exportamos el modulo scheme del usuario