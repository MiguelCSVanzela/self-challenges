// Gerador de Array Aleátorio

const faixaAleatoria = document.querySelector("#faixaAleatorio"); 
const btnArrayAleatorio = document.querySelector("#gerarArrayAleatorio"); 
const campoAleatorio = document.querySelector("#campoAleatorio"); 


function gerarAleatorio(num){
    let numero = parseInt(num.value); 
    
    let resultado = []; 
    for(let i = 0; i < numero; i++){
        let item = Math.floor(Math.random() * numero); 
        resultado.push(item)
    }

    return resultado; 
}

btnArrayAleatorio.addEventListener("click", function(){
    campoAleatorio.innerHTML = gerarAleatorio(faixaAleatoria); 
})

