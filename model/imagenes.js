const mongoose = require("mongoose");
// Definicion del esquema a utilizar para la coleccion de menu
const ImgSchema = new mongoose.Schema({
    idImagen: {
    type: String,
    required: true,
  },
  ilustraciones: {
    type: String,
    required: true,
  },
  idPintor: {
   type: String,
    required: true,
},
});
// se manda a llamar la coleccion de menu
module.exports = mongoose.model("imagenes", ImgSchema);