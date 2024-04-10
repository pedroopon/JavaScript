// e - Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula 
// PRESTACAO = VALOR + (VALOR * TAXA/100) * TEMPO.

let valor = parseFloat(prompt('Digite o valor da parcela: '))
let taxa = parseFloat(prompt('Digite a porcentagem de juros: '))
let tempo = parseFloat(prompt('Digite o periodo de atrasos em meses: '))

let prestação = valor + ((valor*taxa/100)*tempo)

alert ('o valor da parcela com juros sera de:' + prestação.toFixed(2))