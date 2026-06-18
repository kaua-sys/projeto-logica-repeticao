const inputNum = document.querySelector('#num');
const btnEnviar = document.querySelector('button');
const divCont = document.querySelector('#div-cont-acum');

btnEnviar.addEventListener('click', () => {
    const numero = Number(inputNum.value);

    divCont.innerHTML = '';

    for (let contador = 1; contador <= numero; contador++) {

        if (numero % contador === 0) {
            divCont.innerHTML += `${contador}<br>`;
        }

    }

    divCont.innerHTML += `<hr>
    Os divisores de ${numero} são os números acima.`;

});