// Calculadora Básica

const primeiroNumero = document.querySelector("#primeiroNumero"); 
const operacao = document.querySelector("#operacao"); 
const segundoNumero = document.querySelector("#segundoNumero"); 

const btnCalcula = document.querySelector("#realizaCalculo"); 
const campoCalculoResultado = document.querySelector("#resultadoCalculo"); 

function calcula(num1, num2){
    let primeiroNumero = parseInt(num1.value); 
    let segundoNumero = parseInt(num2.value); 
    let resultado = 0; 
    switch(operacao.value){
        case "soma": 
            resultado += primeiroNumero + segundoNumero; 
        break; 
        case "subtracao": 
            resultado += primeiroNumero - segundoNumero; 
        break; 
        case "multiplicacao": 
            resultado += primeiroNumero * segundoNumero; 
        break; 
        case "divisao": 
            if(primeiroNumero > segundoNumero){
                resultado += primeiroNumero / segundoNumero; 
            } else {
                resultado += segundoNumero / primeiroNumero; 
            }
        break;        
    }
    return resultado; 
}

btnCalcula.addEventListener("mouseover", function(){
    campoCalculoResultado.innerText = calcula(primeiroNumero, segundoNumero); 
})