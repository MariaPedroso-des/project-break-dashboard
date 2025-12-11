document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('inLinks')
  if (!container) return;

  container.innerHTML = `
    <div class="container-links">
      <h2>Añade tus enlaces de interés</h2>
      <div class="container-input">
        <input type="text" id="name-input" class="name-input" placeholder="Nombre del enlace" required/>
        <input type="text" id="url-input" class="url-input" placeholder="Pega aquí la URL" required/>
        <button id="btn-url" class="btn">Añadir enlace</button>
      </div>
      <div>
        <ul id="espacio-links" class="espacio-links"></ul>
      </div>
    </div>
  `
  //1ro elementos del DOM
  const btnUrl       = document.getElementById('btn-url')
  const espacioLinks = document.getElementById('espacio-links')

  //2do localStorage
  const getUrls = () => {
    let urlsGuardadas = localStorage.getItem('listadoURL')
    return urlsGuardadas ? JSON.parse(urlsGuardadas) : []
  }

  let urls = getUrls()

  const setUrls = (urls) => {
    localStorage.setItem('listadoURL', JSON.stringify(urls))
  }

  //*Prefijos para normalizar url
  const prefijoUrl0 = 'http://'
  const prefijoUrl1 = 'https://'

  const urlNormalizar = (url) => {
    return url.startsWith(prefijoUrl0) || url.startsWith(prefijoUrl1) ? url : prefijoUrl1 + url
  } 

  //3ro renderizar
  function renderizarUrls() {
    espacioLinks.innerHTML = ''

    urls.forEach((objetoUrl, index) => {
      const li = document.createElement('li')
      li.classList.add('listado-url')

      const enlace = document.createElement('a')
      enlace.classList.add('nombre-link')
      enlace.textContent = objetoUrl.nombre
      enlace.href = objetoUrl.url
      enlace.target = '_blank'

      const btnBorrar = document.createElement('button')
      btnBorrar.classList.add('btn-borrar')
      btnBorrar.textContent = 'x'

      btnBorrar.addEventListener('click', () => {
        urls.splice(index, 1)
        setUrls(urls)
        renderizarUrls()
      })
      li.appendChild(enlace)
      li.appendChild(btnBorrar)
      espacioLinks.appendChild(li)
    }); 
  }
  renderizarUrls()

  //Cuando haces click, coges los valores de los dos input y lo guardas en el espacio para links con el valor que se ve del primer input
  btnUrl.addEventListener('click', () => {
    const nameInput = document.getElementById('name-input').value.trim()
    const urlInput = document.getElementById('url-input').value.trim()

    if (nameInput === '' || urlInput === '') {
      return alert('Este campo no puede estar vacío')
    }
    
    const urlFinal = urlNormalizar(urlInput)
    
    const objetoUrl = {
      nombre: nameInput,
      url: urlFinal
    }
    urls.push(objetoUrl)
    setUrls(urls)
    renderizarUrls()
    
    document.getElementById('name-input').value = ''
    document.getElementById('url-input').value = ''
  })
})