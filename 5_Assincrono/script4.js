// Simular API

const valor = document.querySelector("#valorPromise"); 
const tempo = document.querySelector("#tempoEspera"); 

const btnSaida = document.querySelector("#darSaida"); 

const campoResultado = document.querySelector("#campoPromise"); 

function simularApi(valor, tempo){
    let value = valor.value; 
    let time = parseInt(tempo.value)
    return new Promise((resolve) => g{
        setTimeout(() => {
            resolve(value)
        }, time * 1000); 
    })
}

console.log(simularApi("ulaa", 3))

btnSaida.addEventListener("click", function(){
    simularApi(valor, tempo).then((resultado) => campoResultado.innerHTML = resultado)
})