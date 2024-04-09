let idade = parseInt(prompt('Digite Sua Idade: '))

if (idade < 16){
    alert('Você não pode votar ainda')

} else if(idade < 18){
    alert('Seu voto não é obrigatorio')
}
else{
    alert('Seu voto é Obrigatorio')
}