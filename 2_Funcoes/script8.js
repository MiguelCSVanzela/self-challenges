// Verificar números mais ocorrentes em um Array

const numeros = document.querySelector("#valoresNumericos"); 
const btnVerificarOcorrente = document.querySelector("#verificarMaisOcorrentes"); 

const campoOcorrentes = document.querySelector("#campoOcorrentes"); 

// let mock = [1, 2, 4, 5, 6, 7, 6, 6, 7]; 

function transformaArray(str){
    let arrayString = (str.value).split(" "); 
    let arr = []
    for(let texto in arrayString){
        arr.push(parseInt(arrayString[texto]))
    }
    return arr; 
}

function ocorrentes(arr){
    let elemento = arr[0]; 
    let contador = {}; 
    let maxContagem = 1; 
    for(const valor of arr){
        if(!contador[valor]){
            contador[valor] = 1
        }else{
            contador[valor]++; 
        }

        if(contador[valor] > maxContagem){
            maxContagem = contador[valor]; 
            elemento = valor;
        }
    }

    return [elemento, maxContagem]; 
}

let resultadoFrequencia = ocorrente(transformaArray(numeros)); 

btnVerificarOcorrente.addEventListener("click", () => {
    campoOcorrentes.innerHTML = `O número mais ocorrente foi ${resultadoFrequencia[0]} e apareceu ${resultadoFrequencia[1]}`; 
})