// a - Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.  
//apenas estruturas de repetição do tipo enquanto


let valor = parseInt(prompt('Digite um valor para saber a tabuada: '));
let contadora = 1;


while(contadora < 11){
    let resultado = valor * contadora
    alert(valor + ' X ' + contadora + ' = ' + resultado)
    contadora++
}