/*
Peça ao usuário para inserir uma lista de números separados por vírgula e, em
seguida, crie um array a partir dessa lista. O programa deve calcular e exibir o maior e
o menor número da lista, além de calcular a soma de todos os elementos.

Exemplo de Entrada:
Lista de Números: "1, 3, 7, 2, 5"

Exemplo de Saída:
"Maior número: 7"
"Menor número: 1"
"Soma total: 18" 
*/
function array(lista){
    max = Math.max(...lista)
    min = Math.min(...lista)

    soma = lista.reduce((a, b) => a+b, 0)

    return console.log("Maior número:",max, "\nMenor número:",min, "\nSoma total:",soma)
}

lista = [1,3,7,2,5]
console.log(array(lista))