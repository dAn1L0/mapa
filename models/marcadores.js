

class Marcadores {

  constructor(){
    this.marcadoresActivos = {}
  }

  agregarMarcador(marcador) {
    this.marcadoresActivos[marcador.id] = marcador
    return marcador
  }

  removerMarcador(id) {
    delete this.marcadoresActivos[id]
  }

  actualizarMarcador(marcador) {
    this.marcadoresActivos[marcador.id] = marcador
    return marcador
  }

  
}


module.exports = Marcadores