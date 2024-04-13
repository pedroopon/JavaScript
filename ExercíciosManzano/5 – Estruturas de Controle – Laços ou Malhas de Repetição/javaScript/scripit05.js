// f - Elaborar um programa que apresente como resultado o valor de uma potência de uma base
//         qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
//         do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
//         portuguol (^). 

let base = parseInt(prompt('Digite o valor da base: '))
let expoente = parseInt(prompt('Digite o valor do expoente: '))
let potencia = 1;
let contadora = 0;

while (contadora < expoente) {
    if (expoente == 0) {
        potencia = 1
    } else if (expoente == 1) {
        potencia = base
    } else {
        potencia *= base
    }


    contadora++

    alert('( ' + base + ' ^ ' + expoente + ' ) = ' + potencia + '\n' + ' Contadora: ' + contadora);
}
