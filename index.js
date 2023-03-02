// definicion de librerias
const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");



// variables de entorno
dotenv.config();

// Puerto 
const PORT = process.env.PORT || 9000;
const app = express();

// Libreria para mongodb - usa URL que debe existir en .env
// usa la Base de datos llamada mongo y la coleccion llamada todos
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
// se usa con express, peticiones cruzadas.
app.use(cors());

//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// uso de router.js
app.use(router);

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

const accountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 6, // limita cada IP a 6 peticiones por el tiempo definido con "windowMs"
  message: "Demasiadas peticiones realizadas, intenta despues de 1 hora"
});

// https.createServer({
// cert: fs.readFileSync('/etc/letsencrypt/archive/jasaiart-api.iothings.com.mx/fullchain.pem'),
// key: fs.readFileSync(' /etc/letsencrypt/archive/jasaiart-api.iothings.com.mx/privkey.pem')
// },app).listen(PUERTO, function(){
// console.log('Servidor https corriendo en el puerto 443');
// });

// app.get('/', function(req, res){
// res.send('Hola, estas en la pagina inicial');
// console.log('Se recibio una petición get a través de https');
// });



app.post('/login', (req, res) => {
  const Correo = req.body.Correo;
  const Contraseña = req.body.Contraseña;
  if (Correo === 'user@example.com' && Contraseña === 'Contraseña') {
    // Si las credenciales son válidas, envía una respuesta exitosa al cliente
    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } else {
    // Si las credenciales son inválidas, envía una respuesta de error al cliente
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
});

app.listen(9000, () => {
  console.log('La aplicación está escuchando en el puerto 3000.');
});