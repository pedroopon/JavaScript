// b) Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de 
// conversão é C  (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

let fahrenheit = parseFloat(prompt('Digite a temperatura em F para converter em C: '));
let celsius = (fahrenheit - 32) * (5/9);
alert(celsius)