// j - Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em 
//         dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares 
//         disponível com o usuário, para que seja apresentado o valor em moeda brasileira.

let dolar = parseFloat(prompt('Digite o valor da cotação do dólar: '))
let qtdDolar = parseFloat(prompt('Digite a quantidade de dólares disponiveis: '))
let conversao = qtdDolar * dolar

alert('A conversão do valor apresentado para Reais é de: R$' + conversao.toFixed(2))