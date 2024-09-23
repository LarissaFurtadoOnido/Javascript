/* Crie uma página que peça ao usuário dois números inteiros (início e fim de um
intervalo) e, em seguida, exiba todos os números pares entre esses dois números,
inclusive os limites, se forem pares.

Exemplo de Entrada:
Início: 1
Fim: 10

Exemplo de Saída:
"Números pares: 2, 4, 6, 8, 10"
*/

function pares(inicio, fim){
    let num_par = []
    for(let i = inicio; i <= fim; i++){
        if(i % 2 == 0){
            num_par.push(i)
        }
    }
    return num_par
}

console.log(pares(5,50))