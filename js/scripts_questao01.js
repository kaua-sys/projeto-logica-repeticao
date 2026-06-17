//Contador/Acumulador
const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContAcum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0
btnNum.addEventListener('click', (evt)=>{
    let numDigitado = Number(inputNum.value)

    cont++
    acum += numDigitado

    divContAcum.innerHTML = `Total de Número Digitado é: ${cont} <br>
    A Soma dos Número é: ${acum}`
    
    inputNum.value = ''

})