const divNum = document.querySelector('#div-num');

let quantidade = 0;
let divisores

for (let contador = 1; contador <= 1000; contador++) {

    if (contador % divisores === 0) {
        quantidade++;

        divNum.innerHTML += `${contador}<br>`;
    }
}

divFor.innerHTML += `<hr>
Quantidade de números divisíveis por 7: ${divisores}`;