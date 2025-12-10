const btnPass    = document.getElementById('btn-pass')
const resultPass = document.getElementById('result-pass')

const caracteres = {
  mayus: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  minus: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  numbers: '0123456789'.split(''),
  simbols: '!@#$%^&*()-_=+'.split('')
}

//Transformamos el objeto a un array
const todos = Object.values(caracteres).flat()

//Función para conseguir caracteres de forma aleatoria de cada elemento del objeto
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

//Algoritmo aleatoriedad: Fisher-Yates | 1ro último elemento, índice aleatorio con Math.random e intercambio de elementos  
function shuffleResult(result) {
  for (let i = result.length -1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1))
  const temporal = result[i]
  result[i] = result[j]
  result[j] = temporal
  }
  return result
}

//Al hacer click
btnPass.addEventListener('click',() => {
  const lengthInput = Number(document.getElementById('length-input').value)  //Coge el valor que el usuario pone en el input
  if (lengthInput < 12 || lengthInput > 50) {
    return alert('El número de caracteres necesarios debe estar entre 12 y 50')
  }
  const result = []
  
  Object.values(caracteres).forEach((arr) => {
    result.push(random(arr))
  })
  
  for (let i = 0; i < lengthInput - 4; i++) {
    result.push(random(todos))
  }

  shuffleResult(result)
  resultPass.innerHTML = `
    <div id ="resultado-pass" class ="resultado-pass">Esta es tu contraseña segura:</div>
    <div>${result.join('')}</div>`
})
