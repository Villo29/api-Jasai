// Modelo de datos de Mongo
const mongoose = require("mongoose");
// Definicion del esquema a utilizar 
const TodoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  nacionalidad: {
    type: String,
    required: true,
  },
  lugarTrabajo: {
    type: String,
    default: false,
  },
  estilo: {
    type: String,
    required: true,
  },
  experiencia: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Pintores", TodoSchema);
