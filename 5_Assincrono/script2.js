// Mapear Array

const array = document.querySelector("#array"); 
const mult = document.querySelector("#multiplicador");
const btnOperar = document.querySelector("#operar");  


const campoArray = document.querySelector("#arrayMapeado"); 

function mapeador(arr, transformacao){
    let array = (arr.value).split(" "); 
    let resultado = []
    for(const valor of array){
       resultado.push(transformacao(parseInt(valor)))
    }

    return resultado; 
}


btnOperar.addEventListener("click", function(){
    campoArray.innerHTML = (mapeador(array, (numero) => numero * mult.value)).join(", "); 
})

