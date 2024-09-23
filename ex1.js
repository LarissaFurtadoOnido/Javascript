/*Crie uma calculadora que permita ao usuário inserir dois números e selecionar uma
operação (adição, subtração, multiplicação ou divisão) usando botões. O resultado
deve ser exibido abaixo do formulário.
Exemplo de Entrada:
Número 1: 10
Número 2: 5

Operação: Multiplicação

Exemplo de Saída:
Resultado: 50 */

function calculadora(num1, num2, operacao){
    if (operacao == '+'){
        return num1 + num2
    }else if(operacao == '-'){
        return num1 - num2
    }else if(operacao == '*'){
        return num1 * num2
    }else{
        return num1 / num2
    }
}

console.log(calculadora(2, 2, "/"))



