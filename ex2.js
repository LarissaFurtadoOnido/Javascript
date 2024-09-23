/*Solicite ao usuário que insira uma palavra e verifique se ela é um palíndromo (ou seja,
    se a palavra pode ser lida da mesma forma de trás para frente). Exiba uma mensagem
    informando se a palavra é ou não um palíndromo.
    
    Exemplo de Entrada:
    Palavra: "arara"
    
    Exemplo de Saída:
    "A palavra é um palíndromo!"*/

function palindromo(texto){
    let inverso = texto.split(' ').reverse().join(' ')
    if(inverso == texto){
        return "É um palíndromo"
    }else{
        return "Não é um palíndromo"
    }
}

console.log(palindromo("arara"))