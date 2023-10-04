// Comparação de números

const primeiro = document.querySelector("#primeiroNumero"); 
const segundo = document.querySelector("#segundoNumero"); 
const btnComparar = document.querySelector("#retornarComparacao"); 
const campoComparacao = document.querySelector("#resultadoComparacao"); 

function comparar(num1, num2){
    let primeiroNumero = parseInt(num1.value); 
    let segundoNumero = parseInt(num2.value); 
    let mensagem; 
    if(primeiroNumero === segundoNumero){
        mensagem = "Iguais"; 
    } else if(primeiroNumero > segundoNumero) {
        mensagem = `O número ${primeiroNumero} é maior que o ${segundoNumero}`
    } else if(primeiroNumero < segundoNumero) {
        mensagem = `O número ${primeiroNumero} é menor que o ${segundoNumero}`
    } 

    return mensagem; 
}

btnComparar.addEventListener("click", () => {
    campoComparacao.innerText = comparar(primeiro, segundo);
})