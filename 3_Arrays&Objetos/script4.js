// Média dos elementos de um array  

const arrayNumerico = document.querySelector("#arrayNumerico"); 

const btnCalculaMedia = document.querySelector("#btnCalculaMedia"); 

const campoResultadoMedia = document.querySelector("#campoResultadoMedia"); 

const calculaMedia = (array) => {
    let arrayNumerico = array.value.split(" ").map(element => parseInt(element));

    let total = arrayNumerico.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual; 
    }, 0);

    return (total / arrayNumerico.length).toFixed(1); 
}

btnCalculaMedia.onclick = function(){
    campoResultadoMedia.innerHTML = calculaMedia(arrayNumerico); 
}