// h - Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula 
//         VOLUME = COMPRIMENTO * LARGURA * ALTURA. 

let comprimento = parseFloat(prompt('Digite o valor do comprimento da caixa: '))
let largura = parseFloat(prompt('Digite o valor da largura da caixa: '))
let altura = parseFloat(prompt('Digite o valor da altura da caixa: '))

let volume = comprimento * largura * altura

alert('O volume da caixa é de: ' + volume)
