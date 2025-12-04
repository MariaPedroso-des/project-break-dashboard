const lengthInput = document.getElementById('length-input')
const btnPass     = document.getElementById('btn-pass')
const resultPass  = document.getElementById('result-pass')


const mayus   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const minus   = 'abcdefghijklmnopqrstuvwxyz'.split('')
const numbers = '0123456789'.split('')
const simbols = '!@#$%^&*()-_=+'.split('')

console.log(simbols)

btnPass.addEventListener('click',() => {
  console.log('generar contraseña')
}) 