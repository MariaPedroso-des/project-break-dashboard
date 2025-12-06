const btnPass     = document.getElementById('btn-pass')
const resultPass  = document.getElementById('result-pass')

const caracteres = {
  mayus: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  minus: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  numbers: '0123456789'.split(''),
  simbols: '!@#$%^&*()-_=+'.split('')
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

btnPass.addEventListener('click',() => {
  const lengthInput = Number(document.getElementById('length-input').value)
  if (lengthInput < 12 || lengthInput > 50) {
    alert('El número de caracteres necesarios es entre 12 y 50')
    return
  }
  const result = []
  
  Object.values(caracteres).forEach((arr) => {
    const caracter = random(arr)
    result.push(caracter)
  })
  
  const todos = Object.values(caracteres).flat()
  
  for (let i = 0; i < lengthInput - 4; i++) {
    const caracter = random(todos)
    result.push(caracter)
  }
  
  for (let i = result.length -1; i > 0; i--) {
    const j = Math.floor(Math.random()* (i + 1))
    const temporal = result[i]
    result[i] = result[j]
    result[j] = temporal
  }

  resultPass.innerHTML = `
    <div id ="resultado-pass" class ="resultado-pass">Esta es tu contraseña segura:</div>
    <div>${result.join('')}</div>`
})