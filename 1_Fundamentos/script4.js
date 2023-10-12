// Calcule a área e o perimetro de um retângulo

const cumprimento = document.getElementById("cumprimento"); 
const largura = document.getElementById("largura");
const btnCalcular = document.getElementById("clcRetangulo");
const campoResultado = document.getElementById("resultadoRetangulo"); 

function calcularPerimetro (one, second){
    return (one.value * second.value); 
}

function calcularArea(one, second) {
    return (2 * (one.value + second.value)); 
}

btnCalcular.addEventListener("click", function() {
    campoResultado.innerHTML = `O perimetro do retãngulo informado é ${calcularPerimetro(cumprimento, largura)} metros, enquanto que a área será ${calcularArea(cumprimento, largura)} metros quadrados`
})