// k - Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em 
//         real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível 
//         com o usuário, para que seja apresentado o valor em moeda americana. 

let dolar = parseFloat(prompt('Digite o valor da cotação do dólar: '))
let qtdReais = parseFloat(prompt('Digite a quantidade de Reais disponiveis: '))
let conversao = qtdReais / dolar

alert('A conversão do valor apresentado para Dolares é de: R$' + conversao.toFixed(2))