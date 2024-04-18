// e - Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o 
//         total do somatório da fatorial de cada valor lido. 

let totalFatorial = 0;
let contador = 1;

while (contador <= 15) {
    let valor = parseInt(prompt("Digite o valor " + contador + ":"));
    let fatorial = 1;

    for (let i = 1; i <= valor; i++) {
        fatorial *= i;
    }

    console.log(fatorial)

    totalFatorial += fatorial;
    contador++;
}

console.log("O total do somatório da fatorial dos valores é: " + totalFatorial);
