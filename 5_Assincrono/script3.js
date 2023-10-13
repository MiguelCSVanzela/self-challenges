// Execucação Condicional
const resposta = document.querySelector("#respostaVerificar"); 

const btnVerificar = document.querySelector("#verificar"); 

const campoResultado = document.querySelector("#campoResultadoCondicional"); 

function verificar(resp){
    let answer = (resp.value).toLowerCase(); 
    let resultado = answer === 'sim' ? true : false
    return resultado
}

function executar(){
    campoResultado.style.backgroundColor = "lightgreen"; 
            campoResultado.innerHTML = 'SIM'; 
}

function naoExecutar(){
    campoResultado.style.backgroundColor = "lightcoral"; 
        campoResultado.innerHTML = "NÃO"; 
}

function condicional(verifique, executa, naoExecuta){
    verifique(resposta) ? executa() : naoExecuta()
}

btnVerificar.addEventListener("click", () => {
    condicional(verificar, executar, naoExecutar);
})