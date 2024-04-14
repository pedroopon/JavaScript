// b - Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
//         1 até 500. 

let contadora = 1;
let somatorio = 0;

do{
    if(contadora % 2 == 0){
        somatorio += contadora

        
        contadora++
    }else{
        contadora++
    }
}while(contadora < 501)

alert(' somatório dos valores pares existentes na faixa de 1 até 500 é: ' + somatorio)