// h - Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, 
//     banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do 
//     nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área 
//     do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar 
//     calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor 
//     total acumulado da área residencial. 

let contadora = 0;

let area, areaT = 0;

let confirmacao 


do{
    let comodos = prompt('Digite o nome do comodo: ')
    let largura = parseFloat(prompt('Digite o valor do largura: '))
    let comprimento = parseFloat(prompt('Digite o valor do comprimento: '))
    confirmacao = prompt('Deseja calcular mais um comodo? ')

    area = comprimento * largura
    areaT += area

    contadora++

}while (!(confirmacao == 'não'))

alert('A area da sua casa é: ' + areaT)

