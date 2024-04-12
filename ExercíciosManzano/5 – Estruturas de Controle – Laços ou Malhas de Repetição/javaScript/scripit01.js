// b - Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).   

let contadora = 1
let soma = 0

while(contadora<100){
    soma += contadora
    alert('Numero: ' + contadora + '.    Soma: ' + soma + '.')
    console.log('Numero: ' + contadora + '.    Soma: ' + soma + '.')
    contadora++

}