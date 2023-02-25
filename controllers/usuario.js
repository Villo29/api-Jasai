// constante del modelo de datos
const Usuario = require("../model/usuario");

// Obtener todos los objetos
const getUsuario = async (req, res) => {
  Todo.find((err, usuario) => {
    if (err) {
      res.send(err);
    }
    res.json(usuario);
  });
};

// Crear un objeto con el formato indicado
const createUsuario = async (req, res) => {
  const usuario = new Usuario({
    Nombre: req.body.Nombre,
    Contraseña: req.body.Contraseña,
    Correo: req.body.Correo,
  });

usuario.save( async (err, usuario) => {
    if (err) {
      res.send(err);
    }
    res.json(usuario);
  });
};

// actualizar un elemento a partir del _id
const updateUsuario = async (req, res) => {
  Usuario.findOneAndUpdate(
    { _id: req.params.usuarioID },
    {
      $set: {
      Nombre: req.body.Nombre,
      Contraseña: req.body.Contraseña,
      Correo: req.body.Correo,
      },
    },
    { new: true },
    (err, Usuario) => {
      if (err) {
        res.send(err);
      } else res.json(Usuario);
    }
  );
};

// borrar un elemento a través del _id
const deleteUsuario = async (req, res) => {
  Usuario.deleteOne({ _id: req.params.usuarioID })
    .then(() => res.json({ message: "Todo Deleted" }))
    .catch((err) => res.send(err));
};

// 
module.exports = {
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
