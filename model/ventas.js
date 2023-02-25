const mongoose = require("mongoose");
// Definicion del esquema a utilizar para la coleccion de menu
const VentasSchema = new mongoose.Schema({
    idVentas: {
    type: String,
    required: true,
},
    Precio: {
    type: String,
    required: true,
},
    tipoIlustracion: {
    type: String,
    required: true,
},
    ventasCol: {
        type: String,
        required: true,
    },
    idVentas:{
        type: String,
        required: true,
    },
});
// se manda a llamar la coleccion de menu
module.exports = mongoose.model("ventas", VentasSchema);