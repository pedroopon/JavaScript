// k - Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
//     banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
//     nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e
//     também uma mensagem solicitando do usuário a confirmação de continuar
//     calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
//     total acumulado da área residencial.


let contadora = 0;
let totalArea = 0;
let verificacao = 0

while(!( verificacao == 'não' )){

    let comodo = prompt('Digite o nome do comodo: ')
let largura = parseFloat(prompt('Digite o valor da largura do comodo: '))
let comprimento = parseFloat(prompt('Digite o valor do comprimento do comodo: '))
let area = largura * comprimento

verificacao = prompt('Deseja calcular um novo comodo (sim ou não)? ')

totalArea += area

}

alert('A arae totalda sua casa é de: ' +  totalArea)

