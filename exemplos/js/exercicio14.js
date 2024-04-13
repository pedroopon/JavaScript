function verificacao(){

    let idade = parseInt(prompt('Digite sua Idade: '))
    let habilitacao = prompt('Possui habilitação (Sim ou não)? ')

    if(idade > 17 && habilitacao == 'sim'){
        alert('Pode dirigir')
    }else{
        alert('não pode dirigir')
    }
}

function exercicio1(){

    let x = 'pedro' + 6 + 10
    let y =  6 + 10 + 'pedro' 

    alert( x)
    alert( y)
}