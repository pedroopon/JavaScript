// i - Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do
//         somatório e a média aritmética dos valores lidos. 

let contadora = 0
let somatorio = 0

let media

while(contadora < 10){
    let valor = parseFloat(prompt('Digite um valor'))  
    somatorio += valor

    contadora++
}

alert('contadora: ' + contadora + '\n' + 'Somatorio: ' + somatorio )

media = somatorio / contadora
alert('Somatorio: ' + somatorio + '\n' + 'Media: ' + media)





