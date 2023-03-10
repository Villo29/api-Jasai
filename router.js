// definicion de rutas

const {
  getPintores,
  createPintores,
  updatePintores,
  deletePintores,
} = require("./controllers/Pintores");

const {
  getCategorias,
  createCategoria,
  updateCategoria,
  deleteCategoria,
} = require("./controllers/categoria");

//para usuario
const {
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  validLogin,
} = require("./controllers/usuario");

//controllador de imagenes
const{
  getimagen,
  createimagen,
  updateimagen,
  deleteimagen,
} = require("./controllers/imagenes")


//para ventas 
const{
  getVenta,
  createVenta,
  updateVenta,
  deleteVenta,
}= require ("./controllers/ventas")


const router = require("express").Router();




// ruta get principal
router.get("/", async (req, res) => {
  res.send("Let's build a CRUD API!");
});

// ruta get /todos
router.get("/Pintores", getPintores);
// ruta post todos
router.post("/Pintores", createPintores);
// ruta put todos
router.put("/Pintores/:todoID", updatePintores);
// ruta delete todos
router.delete("/Pintores/:todoID", deletePintores);

//rutas para coleccion categorias
router.get("/categoria", getCategorias);
router.post("/categoria", createCategoria);
router.put("/categoria/:categoriaID", updateCategoria);
router.delete("/categoria/:categoriaID", deleteCategoria);

//rutas para coleccion usuario
router.get("/usuarios", getUsuario);
router.post("/usuarios", createUsuario);
router.put("/usuarios/:usuarioID", updateUsuario);
router.delete("/usuarios/:usuarioID", deleteUsuario);
router.get("/:usuariosNombre/:usuariosContrasena", validLogin);


//rutas para imagens
router.get("/imagenes", getimagen);
router.post("/imagenes", createimagen);
router.put("/imagenes/:imagenesID", updateimagen);
router.delete("/imagenes/:imagenesID", deleteimagen);

//ruta ventas
router.get("/ventas", getVenta);
router.post("/ventas", createVenta);
router.put("/ventas/:VentasID", updateVenta);
router.delete("/ventas/:VentasID", deleteVenta);

module.exports = router;
