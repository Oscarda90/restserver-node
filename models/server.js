const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    //! Middlewares
    this.middlewares();
    //? aqui se ejecuta el metodo para que se creen las rutas
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Parseo y lectura de body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static('public'));
  }

  //* metodo para el manejo de rutas
  routes() {
    this.app.use(this.usuariosPath, require('../routes/usuarios'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port);
    });
  }
}

module.exports = Server;
