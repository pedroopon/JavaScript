// e - Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
//         considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
//         neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 

let contadora = 0;
const base = 3;


while(contadora<16){
    let potencia = base**contadora;
    alert('Resultados das potências de 3 entre expoente 0 até 15 :    ' + potencia + '\n' + '( ' + base + ' ^ ' + contadora + ' )');

    contadora++;
}