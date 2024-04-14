// c - Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
//         1 até 500.

let contadora = 1;
let soma = 0;

while(contadora<501){
    if(contadora % 2 == 0){
        soma += contadora
        console.log('Numero: ' + contadora + '.    Somatorio: ' + soma)
        contadora++
    }else{
        contadora++
       
    }
   
}

alert(soma)