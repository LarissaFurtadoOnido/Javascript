/*Crie uma página que permita ao usuário converter uma temperatura em Celsius para
Fahrenheit, ou vice-versa.

Exemplo de Entrada:
Temperatura: 100

Tipo de Conversão: Celsius para Fahrenheit

Exemplo de Saída:
Resultado: 212°F
*/

/*F = (C * 1.8) + 32
  C = (F - 32) /1.8
*/
function conversorCelsius(F){
    return ((F - 32) / 1.8)
}
function conversorFahrenheit(C){
    return ((C * 1.8) + 32)
}

console.log(conversorCelsius(41))
console.log(conversorFahrenheit(5))