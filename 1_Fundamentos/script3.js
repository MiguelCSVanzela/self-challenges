// Concatenação de Strings

const nome = document.getElementById("nome").value; 
const idade = document.getElementById("idade").value; 
const cidade = document.getElementById("cidade").value; 
const btnUnir = document.getElementById("una"); 
const resultado = document.getElementById("resultadoConcatenacao"); 


const concatenar = (nome, idade, cidade) => {
    return `Me chamo ${nome}, tenho ${idade} anos e moro na cidade de ${cidade}`
}

btnUnir.addEventListener("click", function() {
    resultado.innerText = concatenar(nome, idade, cidade);
})