const one = document.querySelector("#dividendo"); 
const two = document.querySelector("#divisor"); 
const btnCalculaDivisivel = document.querySelector("#clcDivisivel"); 
const resultaDivisivel = document.querySelector("#resultadoDivisivel"); 

const divisibilidade = (firstNumber, secondNumber) => {
    let dividendo = parseInt(firstNumber.value); 
    let divisor = parseInt(secondNumber.value); 
    let mensagem; 
    if(dividendo > divisor){
        mensagem = dividendo % divisor == 0 ? "Divisivel" : "Não divisivel" 
    } else if(divisor > dividendo) {
        mensagem = divisor % dividendo == 0 ? "Divisivel" : "Não Divisivel"
    }
    return mensagem;
}

btnCalculaDivisivel.addEventListener("click", () => {
    resultaDivisivel.innerHTML = divisibilidade(one, two)
    one.value = ""
    two.value = ""
})