const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const TracksScheme = new mongoose.Schema(
  {
    name: {
      type: String, //dato del nombre del track tipo string
    },
    album: {
      type: String, //dato nombre del album del track tipo string
    },
    cover: {
      type: String, //dato del cover de tipo string con una validadcion de tipo true
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
    },
    artist: { //datos del artista que esta compuesto por otros tipos de datos
      name: {
        type: String, //nombre del artista tipo string
      },
      nickname: {
        type: String, //nickname del artista de tipo string
      },
      nationality: {
        type: String, //nacionalidad del artista tipo string
      },
    },
    duration: {
      start: {
        type: Number, //inicio de tipo numero
      },
      end: {
        type: Number, //fin de tipo numero
      },
    },
    mediaId: {
      type: mongoose.Types.ObjectId, //es un tipo de dato is de mongoo
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("tracks", TracksScheme);