// Calculo de IMC

const pesoCampo = document.querySelector("#peso"); 
const alturaCampo = document.querySelector("#altura"); 
const btnImc = document.querySelector("#calculaImc");
const resultadoCampo = document.querySelector("#resultadoImc"); 

function imc(peso = 0, altura = 0) {
    return (peso / (altura ** 2)).toFixed(2);  
}


btnImc.addEventListener("click", function(){
    resultadoCampo.innerHTML = imc(pesoCampo.value, alturaCampo.value); 
})
