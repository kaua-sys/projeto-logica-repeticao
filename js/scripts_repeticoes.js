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

//Coleção de dados - Array
const presentes = ['Bicicleta', 'Celular','Camisa do Mengão', 'Doleira', 'Tênis Adidas']
presentes.push('Pedra')

const divArray = document.querySelector('#div-Array')
for(i=0;i<5;i++){
divArray.innerHTML += `${presentes[i]} <br>`
}
//for in
const divForIn = document.querySelector('#div-forIn')

for(let posicao in presentes) {
    divForIn.innerHTML += `${presentes[posicao]} <br>`
}

//for of
const divForOf = document.querySelector("#div-forOf")

for (let elemento of presentes) {
    divForOf.innerHTML += `${elemento} <br>`
}

//for each
const divForEach = document.querySelector('#div-forEach')

presentes. forEach((elemento,posicao)=>{
    divForEach.innerHTML += `${posicao} - ${elemento} <br>`
})

const pessoas =[
    {nome: 'Maria Flor', idade: 25, renda:8500},
    {nome: 'Joerdson Souza', idade: 75, renda:5000},
    {nome: 'Taoca', idade: 28, renda:500},
    {nome: 'Chicó', idade: 36, renda:100},
    {nome: 'João Grilo', idade: 32, renda:100},
]

//Manipulando Array
//Adicionar elementos no array
pessoas.push({nome: 'Magnólia', idade: 32, renda: 3500})
pessoas.unshift({nome: 'Joerdison', idade: 36, renda: 100000})

//Splice para adicionar em uma posição sem excluir um elemento
pessoas.splice(1,0,{nome: 'Extraterrestre', idade: 250,
renda: 0.50})

//Splice para adicionar em uma posição excluindo elementos
pessoas.splice(1,3,{nome: 'Vini jr', idade: 22, renda: 2222})

//Splice Exclui uma posição e nesse exemplo exclui apenas o elemento da posição(Indíce) informada
pessoas.splice(1,0)

//Splice exclui dois elementos a partir da posição(Indíce)informada
pessoas.splice(2,2)

//Excluir o Último elemento do Array
pessoas.pop()

//Exibir a quantidade de elementos em um array
console.log('Total de elementos na array pessoas ====> ' + pessoas.length)

//Listando objeto literaral pelo for
const divListaObjFor = document.querySelector('#div-listaobj-for')

for(i = 0; i < pessoas.length; i++) {
    divListaObjFor.innerHTML += `${pessoas[i].nome}, ${pessoas[i].idade} R$ ${pessoas[i].renda.toFixed(2).replace('.',',')} <br>`
}

//Listando objeto literal pelo for/in
const divListaObjForIn = document.querySelector('#div-listaobj-forin')

for(let indice in pessoas) {
    divListaObjForIn.innerHTML += `${indice} - ${pessoas[indice].nome}, ${pessoas[indice].idade}, R$ ${pessoas[indice].renda.toFixed(2).replace('.',',')} <br>`
}

//Listando objeto literal pelo For/of
const divListaObjForOf = document.querySelector('#div-listaobj-forof')
let contForOf = 0

for(let elem of pessoas) {
    contForOf++

    divListaObjForOf.innerHTML += `${contForOf} - ${elem.nome}, ${elem.idade}, R$ ${elem.renda.toFixed(2).replace('.',',')} <br>`
}

//Lista objeto literal pelo for each
const divListaObjForEach = document.querySelector('#div-listaobj-foreach')

pessoas.forEach((elem,i)=>{
    divListaObjForEach.innerHTML += `${i} - ${elem.nome}, ${elem.idade} R$ ${elem.renda.toFixed(2).replace('.',',')} <br>`
})