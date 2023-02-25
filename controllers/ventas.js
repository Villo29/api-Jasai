const Ventas = require("../model/ventas");
// Obtener todos los objetos de restaurante
const getVenta = async (req, res) => {
 Ventas.find((err, ventas) => {
    if (err) {
      res.send(err);
    }
    res.json(ventas);
  });
};
// Crear un objeto con el formato indicado del restaurante
const createVenta = async (req, res) => {
  const Venta = new Ventas({
    idVentas: req.body.idVentas,
    Precio: req.body.Precio,
    tipoIlustracion: req.body.tipoIlustracion,
    ventasCol: req.body.ventasCol,
    idVentas: req.body.idVentas,
  });

  Venta.save( async (err, ventas) => {
    if (err) {
      res.send(err);
    }
    res.json(ventas);
  });
};
const updateVenta = async (req, res) => {
    Venta.findOneAndUpdate(
    { _id: req.params.VentasID },
    {
        $set: {
        idVentas: req.body.idVentas,
    Precio: req.body.Precio,
    tipoIlustracion: req.body.tipoIlustracion,
    ventasCol: req.body.ventasCol,
    idVentas: req.body.idVentas,
    },
    },
    { new: true },
    (err, ventas) => {
    if (err) {
        res.send(err);
    } else res.json(ventas);
    }
  );
};
// borrar un elemento a través del _id de ingrediente
const deleteVenta = async (req, res) => {
    Venta.deleteOne({ _id: req.params.ventasID })
    .then(() => res.json({ message: "Restaurante eliminado" }))
    .catch((err) => res.send(err));
};
module.exports = {
    getVenta,
    createVenta,
    updateVenta,
    deleteVenta,
};
