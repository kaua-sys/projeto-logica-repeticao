const divFor = document.querySelector('#div-for');

let quantidade = 0;

for (let contador = 1; contador <= 1000; contador++) {

    if (contador % 7 === 0) {
        quantidade++;

        divFor.innerHTML += `${contador}<br>`;
    }
}

divFor.innerHTML += `<hr>
Quantidade de números divisíveis por 7: ${quantidade}`;