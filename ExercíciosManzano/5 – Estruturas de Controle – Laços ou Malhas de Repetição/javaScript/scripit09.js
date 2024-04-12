// j - Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores
//         pares situados na faixa numérica de 50 a 70.


let contadora = 0
let valores = 0
let media
let qtdContadora


while(contadora < 70){
    if(contadora % 2 == 0 && contadora >= 49 && contadora <= 70){
        valores += contadora
        contadora++

        qtdContadora = contadora

    }else{
        contadora++
    }
}

media = valores/qtdContadora
alert('resultados da soma e da média aritmética dos valores pares ' + '\n' + 'situados na faixa numérica de 50 a 70 :  ' + valores + '\n' + '\n' + 'E a media: ' + media.toFixed(2))