/* Peça ao usuário para inserir uma frase e, em seguida, conte quantas vogais existem na
frase. Exiba o total de vogais encontradas.

Exemplo de Entrada:
Frase: "Aprender JavaScript é divertido!"

Exemplo de Saída:
"A frase contém 10 vogais."
*/

function contagem_vogais(texto){
    texto = texto.toLowerCase()
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let vogais = texto.match(/[aeiou]/g).length
    return vogais
}
console.log(contagem_vogais("Paralelepípedo"))