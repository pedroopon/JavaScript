// b - Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. 


let valor = parseInt(prompt('Digite Um valor para ter a tabuada: '))
let resuldado

for(let contadora = 1; contadora < 11; contadora++){

  
     resuldado = contadora * valor

    console.log(valor + ' x ' + contadora + ' = ' + resuldado )
    alert(valor + ' x ' + contadora + ' = ' + resuldado )

}