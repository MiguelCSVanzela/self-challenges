// Classificação de faixa etária

const idade =  document.querySelector("#idade"); 
const btnFaixa = document.getElementById("retornarFaixa"); 
const campoFaixa = document.querySelector("#resultadoFaixa"); 

function descobrirFaixa(faixa){
    let mensagem; 
    let condicao = faixa.value; 
    if(condicao >= 60){
        mensagem = "Idoso"; 
    } else if(condicao >= 18){
        mensagem = "Adulto"; 
    } else if(condicao >= 13){
        mensagem = "Adolescente"; 
    } else if(condicao < 0){
        mensagem = "Idade Inválida"; 
    } else {
        mensagem = "Criança"; 
    }
    return mensagem; 
}

btnFaixa.addEventListener("click", () => {
    campoFaixa.innerHTML = descobrirFaixa(idade); 
})

