// Verificar se um valor númerico é par ou impar

const numero = document.getElementById("numeroParImpar"); 
const btnVerificar = document.getElementById("verificarParImpar"); 

const campoResultado = document.getElementById("campoParImpar"); 

function verificaParImpar(num){
    let valor = parseInt(numero.value); 

    let resultado = valor % 2 === 0 ? "Número Par" : "Número Impar"; 

    return resultado; 
}

btnVerificar.addEventListener("click", function() {
    campoResultado.innerHTML = verificaParImpar(numero);
})

