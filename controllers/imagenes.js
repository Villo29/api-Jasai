const Img = require("../model/imagenes");
// Obtener todos los objetos de menu
const getimagen = async (req, res) => {
 Img.find((err, imagenes) => {
    if (err) {
      res.send(err);
    }
    res.json(imagenes);
  });
};
// Crear un objeto con el formato de menu
const createimagen = async (req, res) => {
  const imagen = new Img({
    idImagen: req.body.idImagen,
    ilustraciones: req.body.ilustraciones,
    idPintor: req.body.idPintor,
  });

imagen.save( async (err, imagen) => {
    if (err) {
      res.send(err);
    }
    res.json(imagen);
  });
};
// actualizar un elemento a partir del _id de Menu
const updateimagen = async (req, res) => {
  Menu.findOneAndUpdate(
    { _id: req.params.imagenID },
    {
      $set: {
        idImagen: req.body.idImagen,
        ilustraciones: req.body.ilustraciones,
        idPintor: req.body.idPintor,
      },
    },
    { new: true },
    (err, Img) => {
      if (err) {
        res.send(err);
      } else res.json(Img);
    }
  );
};
// borrar un elemento a través del _id de categoria
const deleteimagen = async (req, res) => {
 Menu.deleteOne({ _id: req.params.imagenID })
    .then(() => res.json({ message: "El menu se elimino correctamente" }))
    .catch((err) => res.send(err));
};
module.exports = {
  getimagen,
  createimagen,
  updateimagen,
  deleteimagen,
};
