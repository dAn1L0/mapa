const Marcadores = require('./marcadores');



class Sockets {

  constructor(io){

    this.io = io

    this.marcadores = new Marcadores()

    this.socketEvents();

  }

  socketEvents(){

    this.io.on('connection', (socket) => {

      socket.emit('marcadores-activos', this.marcadores.marcadoresActivos )
      
      socket.on('marcador-nuevo', (marcador) => {
        
        this.marcadores.agregarMarcador(marcador)
        socket.broadcast.emit('marcador-nuevo', marcador)

      })

      socket.on('marcador-actualizado', (marcador) => {

        this.marcadores.actualizarMarcador(marcador)
        socket.broadcast.emit('marcador-actualizado', marcador)

      })

      // socket.on('marcador-eliminado', (id) => {

      //   this.marcadores.removerMarcador(id)

      //   socket.emit('marcadores-activos', this.marcadores.marcadoresActivos )
        
      // })

    })

  }

}

module.exports = Sockets