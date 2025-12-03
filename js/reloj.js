const contenedorReloj = document.getElementById('contenedor-reloj')
const hora = document.getElementById('hora')
const fecha = document.getElementById('fecha')
const mensajeTramos = document.getElementById('mensaje-tramos')

function actualizarReloj() {  
  const reloj = new Date();
  const horaActual = {
    hours: String(reloj.getHours()).padStart(2, 0),
    min: String(reloj.getMinutes()).padStart(2, 0),
    sec: String(reloj.getSeconds()).padStart(2, 0)
  }
  
  const calendario = new Date()
  const fechaActual = {
    dateString: calendario.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }
  hora.innerHTML = `${horaActual.hours}:${horaActual.min}:${horaActual.sec}`
  fecha.innerHTML = `${fechaActual.dateString}`
}

const intervalo = setInterval(actualizarReloj, 1000)