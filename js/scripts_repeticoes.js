//Estrutura de Repetição for
const divFor= document.querySelector('#div-for')
for(i = 0; i <= 10; i++) {
    console.log(i,'amor')
    divFor.innerHTML += `${i} - Amor <br> `
}