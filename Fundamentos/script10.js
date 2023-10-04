// Somatório de 1 a n

const valor = document.querySelector("#valorMaximo"); 
const btnSomatorio = document.querySelector("#somatorioCalculo"); 

const campoResultadoSomatorio = document.querySelector("#resultadoSomatorio"); 

function somarTudo(valorInputado){
    let value = parseInt(valorInputado.value); 
    let resultado = 0; 

    for(let i = 1; i <= value; i++){
        resultado += i; 
    }

    return resultado; 
}

btnSomatorio.addEventListener("mouseenter", function() {
    campoResultadoSomatorio.innerHTML = somarTudo(valor); 
})