// Conta vogais

const palavra = document.querySelector("#palavra"); 
const btnContaVogais = document.querySelector("#contaVogais"); 

const campoResultadoContagem = document.querySelector("#campoStringContaVogais"); 

function conta(word){
    const palavra = (word.value).split(""); 
    let resultado = 0; 
    for(let i = 0; i < palavra.length; i++){
       switch(palavra[i].toLowerCase()){
        case "a": 
        case "e":
        case "i":
        case "o":
        case "u":
        resultado++; 
        break;
       }
    }

    return resultado; 
}


btnContaVogais.addEventListener("click", function(){
    campoResultadoContagem.innerHTML = `Há ${conta(palavra)} vogais nesta palavra`; 
})