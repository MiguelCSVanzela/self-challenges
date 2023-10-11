// Elementos Duplicados

const array = document.querySelector('#ArrayComDuplicacoes'); 
const btnLimparArray = document.querySelector("#btnLimparArray"); 
const campoResultado = document.querySelector("#campoArrayLimpo"); 


function limpaArray(arr){
    let array = (arr.value).split("");
    // let resultado = []; 
    // for(let item of array){
    //     if(!resultado[item]){
    //         resultado.push(item)
    //     }
    // }

    return Array.from(new Set(array)); 
}


btnLimparArray.onclick = function(){
    campoResultado.innerHTML = limpaArray(array).join(" ")
}