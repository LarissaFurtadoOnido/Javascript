const botao = document.querySelector("#botao") //querySelector seleciona atributo html 

botao.addEventListener("click", function(e){ //addEventListener adiciona um evento de click
    e.preventDefault() //preventDefault não envia o formulário

    const user = document.querySelector("#usuario")
    const password = document.querySelector("#senha")

    const value_user = user.value
    const value_senha = password.value

    const usuario = "Larissa"
    const senha = 1234

    if (value_user === usuario && value_senha === senha){
        
    }

    console.log(value)
})