document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('inReloj')
  if (!container) return;

  container.innerHTML = `
    <div id="container-reloj" class="container-reloj">
      <time id="hora" class="hora" datetime="00:00:00">00:00:00</time>
      <time id="fecha" class="fecha" datetime="02-12-2025">2 de diciembre de 2025</time>
      <div id="mensaje-tramos" class="mensaje-tramos">Todavía hay tiempo para imaginar cualquier cosa</div>
    </div>
  `

const hora = document.getElementById('hora')
const fecha = document.getElementById('fecha')
const mensajeTramos = document.getElementById('mensaje-tramos')

function actualizarReloj() {  
  const now = new Date();

  const horaActual = {
    hours: String(now.getHours()).padStart(2, 0),
    min: String(now.getMinutes()).padStart(2, 0),
    sec: String(now.getSeconds()).padStart(2, 0)
  }
  
  const fechaActual = {                                   // Para que la fecha tenga el formato DD/MM/AAAA solo hace falta esto: const fechaActual = calendario.toLocaleDateString("es-ES")
    dateString: now.toLocaleDateString('es-ES', {               
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const hMensaje = now.getHours()
  if (hMensaje < 12) mensajeTramos.innerHTML = `Hay tiempo para imaginar`
  else if (hMensaje < 18) mensajeTramos.innerHTML = `Siempre hay tiempo`
  else mensajeTramos.innerHTML = `Siempre hay tiempo para imaginar cualquier cosa`


  hora.innerHTML = `${horaActual.hours}:${horaActual.min}:${horaActual.sec}`
  fecha.innerHTML = `${fechaActual.dateString}`
}

actualizarReloj()
setInterval(actualizarReloj, 1000)
})