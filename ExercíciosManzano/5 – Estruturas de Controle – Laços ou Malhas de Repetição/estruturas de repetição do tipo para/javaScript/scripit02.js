// c - Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). 


let somatorio = 0
for(let contadora = 1; contadora < 101; contadora++){

     somatorio += contadora

     console.log('contador:' + contadora + ", Somatoria: " + somatorio)
}