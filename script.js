//reloj
export function crearRelojWidget(contenedor) {
  const horaEl = document.createElement('time')
  const fechaEl = document.createElement('time')
  const mensajeEl = document.createElement('div')

  contenedor.appendChild(horaEl)
  contenedor.appendChild(fechaEl)
  contenedor.appendChild(mensajeEl)

  function actualizarReloj() {
    const reloj = new Date()
    horaEl.textContent = reloj.toLocaleTimeString()
    fechaEl.textContent = reloj.toLocaleDateString('es-ES', { weekday:'long', day:'numeric', month:'long', year:'numeric' })
    mensajeEl.textContent = "Todavía hay tiempo para imaginar cualquier cosa"
  }

  actualizarReloj()
  setInterval(actualizarReloj, 1000)
}