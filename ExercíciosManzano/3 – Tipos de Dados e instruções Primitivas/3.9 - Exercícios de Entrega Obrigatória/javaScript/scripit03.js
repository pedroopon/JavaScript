// c) Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
// Volume = pi *Raio * Altura 

let altura = parseFloat(prompt('Digite o valor da Altura: '))
let raio = parseFloat(prompt('Digite o valor do Raio: '))

let volume = Math.PI * raio**2 * altura

alert('O volume do raio é: ' + volume.toFixed(2))
