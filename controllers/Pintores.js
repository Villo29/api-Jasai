// constante del modelo de datos
const Todo = require("../model/todo");

// Obtener todos los objetos
const getPintores = async (req, res) => {
  Todo.find((err, Pintores) => {
    if (err) {
      res.send(err);
    }
    res.json(Pintores);
  });
};

// Crear un objeto con el formato indicado
const createPintores = async (req, res) => {
  const todo = new Todo({
    idPintores: req.body.idPPintores,
    nombre: req.body.nombre,
    nacionalidad: req.body.nacionalidad,
    lugarTrabajo: req.body.lugarTrabajo,
    estilo: req.body.estilo,
    experiencia: req.body.experiencia,
  });

  todo.save( async (err, todo) => {
    if (err) {
      res.send(err);
    }
    res.json(todo);
  });
};

// actualizar un elemento a partir del _id
const updatePintores = async (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        idPintores: req.body.idPPintores,
      nombre: req.body.nombre,
      nacionalidad: req.body.nacionalidad,
      lugarTrabajo: req.body.lugarTrabajo,
      estilo: req.body.estilo,
      experiencia: req.body.experiencia,
      },
    },
    { new: true },
    (err, Todo) => {
      if (err) {
        res.send(err);
      } else res.json(Todo);
    }
  );
};

// borrar un elemento a través del _id
const deletePintores = async (req, res) => {
  Todo.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: "Todo Deleted" }))
    .catch((err) => res.send(err));
};

// 
module.exports = {
  getPintores,
  createPintores,
  updatePintores,
  deletePintores,
};
