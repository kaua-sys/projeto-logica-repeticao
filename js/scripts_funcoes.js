import {calculoPercentual} from './scripts_calculo.js'

function mensagem() {
    console.log('Uma mensagem')
}

mensagem()
function mensagemLinda(txt) {
    console.log(txt)
}

mensagemLinda('Brasil vai dar um pau no Haiti')

function somaNumeros(num1, num2) {
    return num1 + num2
}

console.log('As somas do números ', somaNumeros(10, 58))

const multiplicacao = function(num1, num2 ) {
    return num1 * num2
}

console.log(multiplicacao(58,80))

console.log('-------> Arrow Function <-------')

const msgArrow = () => {
    console.log('Outra mensagem na arrow function')
}

msgArrow()

const divisaoNum = (valor1, valor2) => {

    let reposta = ''

    if ((valor1 > 0) && (valor2 > 0)) {
        reposta = valor1 / valor2
    } else {
        reposta = 'Não é possível divisão por zero'
    }

    return reposta
}

console.log (divisaoNum(10,8000))

console.log('O numero sorteado é ====>',parseInt(Math.random()* 100))
/*
setTimeout (() => {
    console.log('O numero sorteado é ====>',parseInt(Math.random()* 100))
},5000)

setInterval(() =>{
    console.log('O numero sorteado é ====>',parseInt(Math.random()* 100))
},5000)

let cont = 0
const intervalo = setInterval(()=>{
    cont++
    console.log(cont, 'Repetição da setInterval')

    if(cont == 5) {
        clearInterval(intervalo)
        cont = 0
    }
},3000)
*/

/*
const divNumSorteio = document.querySelector('#div-num-sorteio')

let contVolta = 0, numSorteado = 0, contPar = 0, contImpar = 0

const sorteo = setInterval(()=>{
    contVolta++

    numSorteado = parseInt(Math.random()*60)

    console.log(`${contVolta}º número sorteado ${numSorteado}`)

    if(numSorteado % 2 == 0) {
        contPar++
    } else {
        contImpar++
    }

    divNumSorteio.innerHTML += `${contVolta}º número gerado ${numSorteado} - ${numSorteado % 2 == 0 ? 'Par' : 'Impar'} <br>`

    if (numSorteado == 6) {
        console.log('--------> Sorteio Encerrado <-------')

        divNumSorteio.innerHTML += `-------> Sorteio Encerrado <------- <br> 
        Total de números gerados: ${contVolta} <br>
        Total números par: ${contPar} <br>
        Total números Impar: ${contImpar} <br>
        `
        clearInterval(sorteo)
        contVolta = 0
        numSorteado = 0
    }
},500)
*/

//Chamando a função de outro arquivo
console.log('Cálculo da função calculoPercentual do arquivo scripts_calculos.js ---->', calculoPercentual(750))