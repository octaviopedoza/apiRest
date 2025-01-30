const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            unique:true
        },
        password:{
            type:String
        },
        role:{
            type:["user","admin"],
            default: "user",
        },
    },
    {
        timestamps:true,  //Registra creadAt, updateAt
        versionKey: false,
    }
)

module.exports = mongoose.model("users", UserScheme) //exportamos el modulo scheme del usuario