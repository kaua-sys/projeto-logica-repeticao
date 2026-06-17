//Estrutura de Repetição for
const divFor= document.querySelector('#div-for')

for(i = 0; i <= 10; i++) {
    console.log(i,'amor')
    divFor.innerHTML += `${i} - Amor <br> `
}

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

//Controlando for
const inputFrase = document.querySelector('#frase')
const inputNumRepeticao = document.querySelector('#num-repeticao')
const btnFrase = document.querySelector('#btn-frase')
const divFrase = document.querySelector('#div-frase')

btnFrase.addEventListener('click', (evt)=>{
    let numDigi = Number(inputNumRepeticao.value)
    let frase = inputFrase.value 
    
    for (i = 0; i < numDigi; i++) {
        divFrase.innerHTML += `${i + 1} - ${frase} <br>`
    }
})

//For in