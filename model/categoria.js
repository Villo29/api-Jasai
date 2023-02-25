const mongoose = require("mongoose");
// Definicion del esquema a utilizar para la coleccion de categoria
const CategoriaSchema = new mongoose.Schema({
    idCategoria: {
    type: String,
    required: true,
    
},
    tipoCategoria: {
    type: String,
    required: true,
    
},
    ventausuarios: {
        type: String,
        required: true,
    }

});
// se manda a llamar la coleccion de categoria
module.exports = mongoose.model("categorias", CategoriaSchema);