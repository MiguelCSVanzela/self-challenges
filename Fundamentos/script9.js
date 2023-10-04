//  Calculadora Tarifa

const idade = document.querySelector("#idade"); 
const estudante = document.querySelector("#estudante"); 
const tarifaNormal = document.querySelector("#tarifaNormal"); 

const btnCalculaTarifa = document.querySelector("#tarifaCalculo"); 
const campoResultadoTarifa = document.querySelector("#resultadoTarifa"); 

function calculaTarifa(idade, estudante, tarifaNormal) {
    let age = parseInt(idade.value); 
    let student = estudante.value; 
    let taxe = parseFloat(tarifaNormal.value); 
    let result = 0; 
    if(age >= 60){
        result += taxe - (taxe * 0.3); 
    } else if(age <= 6){
        result += 0; 
    } else if (student == "sim") {
        result += taxe - (taxe * 0.5); 
    }else {
        result += taxe; 
    }
    return result.toFixed(2); 
}

btnCalculaTarifa.addEventListener("mouseover", function() {
    campoResultadoTarifa.innerHTML = `R$${calculaTarifa(idade, estudante, tarifaNormal)}`; 
})
