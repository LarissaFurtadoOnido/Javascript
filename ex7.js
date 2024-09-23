/*Crie um sistema onde o usuário insere quatro notas (variáveis) e o sistema calcula a
média final. Se a média for maior ou igual a 7, o aluno está aprovado. Caso contrário,
ele está reprovado.

Exemplo de Entrada:
Notas: 6, 7, 8, 5

Exemplo de Saída:
"Sua média é 6.5. Você está reprovado.”*/

function media(nota1, nota2, nota3, nota4){
    let media = (nota1+nota2+nota3+nota4)/4

    if (media >= 7){
        console.log("Aprovado!")
    }else{
        console.log("Reprovado!")
    }
}

media(6, 7, 8, 7)