const images = [
  './assets/img/alexander-x-zNsHLrQO4Gg-unsplash.jpg',
'./assets/img/asif-aether-_JbCkp6FehY-unsplash.jpg',
'./assets/img/codioful-formerly-gradienta-0AATZc8zt6s-unsplash.jpg',
'./assets/img/craig-melville-Mvv2duEc0ZA-unsplash.jpg',
'./assets/img/eve-GKPNN3zO5eU-unsplash.jpg',
'./assets/img/ikhlas-7UpHbElJUpA-unsplash.jpg',
'./assets/img/kirstin-pritchard-5p5x60ALvp4-unsplash.jpg',
'./assets/img/liana-s-Co87kzeFQMI-unsplash.jpg',
'./assets/img/maxim-berg-XTGTa3Ry6H4-unsplash.jpg',
'./assets/img/milad-fakurian-9xCvw544PWQ-unsplash.jpg'
]

function cambiarFondo() {
  const randomIndice = Math.floor(Math.random() * images.length)
  document.body.style.backgroundImage = `url(${images[randomIndice]})`  
}

cambiarFondo()

setInterval(cambiarFondo, 15000)