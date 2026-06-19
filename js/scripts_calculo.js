/**
 * Valor for até 100 cáculo seja 10%
 * Valor for de 101 atè 1000 seja 15%
 * Acima de 1000 seja de 2%
 */
const calculoPercentual = (valor) => {
    let valorCalculado = 0.0

    if (valor <= 100) {
        valorCalculado = valor * 0.10
    } else if (valor <= 1000) {
        valorCalculado = valor * 0.15
    } else {
        valorCalculado = valor * 0.20
    }

    return valorCalculado
}

console.log(calculoPercentual(900))