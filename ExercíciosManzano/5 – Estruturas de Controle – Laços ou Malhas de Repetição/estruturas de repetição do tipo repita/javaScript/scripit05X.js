// f - Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o
//         total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras
//         dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve
//         parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar
//         como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da
//         média.

let total = 0;
let quantidade = 0;
let numero;

do {
    numero = parseInt(prompt("Digite um número positivo (ou um número negativo para encerrar):"));
    if (numero >= 0) {
        total += numero;
        quantidade++;
    }
} while (numero >= 0);

let media = quantidade > 0 ? total / quantidade : 0;

console.log("Total: " + total);
console.log("Média: " + media);
console.log("Total de valores lidos: " + quantidade);

