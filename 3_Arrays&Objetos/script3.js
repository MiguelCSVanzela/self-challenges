// Descobrir a Intersecção entre Arrays
const arrayPrimeiro = document.querySelector("#arrayPrimeiro"); 
const arraySegundo = document.querySelector("#arraySegundo");

const btnInteseccionar = document.querySelector("#btnInterseccionar"); 

const campoInterseccionados = document.querySelector("#campoArraysInterseccionados"); 

function acharInterseccao(array1, array2){
    let arrayPrimeiro = array1.value.split(" "); 
    let arraySegundo = array2.value.split(" "); 
    let resultado = arrayPrimeiro.filter((elemento) => arraySegundo.includes(elemento)); 
    return resultado; 
}

btnInteseccionar.addEventListener("click", () => {
    campoInterseccionados.innerHTML = acharInterseccao(arrayPrimeiro, arraySegundo); 
})