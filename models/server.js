const express = require('express');
const http = require('http');
const socket_io = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');
const cors = require('cors');


class Server {

  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    
    //? Http Server
    this.server = http.createServer(this.app);
    
    //? Configuración socketIO
    this.io = socket_io(this.server, {
      // configuración
    });

    // this.sockets = new Sockets(this.io)

  }

  middleware() {
    this.app.use(express.static(path.resolve(__dirname,'../public')) )
    this.app.use( cors() )
  }

  //Configuración sockets
  SocketsIO() {
    new Sockets(this.io)
  }

  execute() {

    this.middleware();

    this.SocketsIO();

    this.server.listen( this.port, () => {
      console.log('Servidor corriendo en puerto: ', this.port);
    })
  }

}

module.exports = Server