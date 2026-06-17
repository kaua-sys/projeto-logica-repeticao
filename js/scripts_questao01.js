//Contador/Acumulador
const divContAcum = document.querySelector('#div-cont-acum');

let contador
let quantidade = 0

for(contador = 1; contador < 1000; contador++ ) {
    if (contador % 7 === 0) {
        quantidade ++;

        divContAcum.innerHTML += `${contador} <br>`;
    }
}