// Contatenador de Arrays

const primeiroArray = document.getElementById("primeiroArray"); 
const segundoArray = document.getElementById("segundoArray"); 

const btnConcatenar = document.getElementById("btnConcatenaArrays"); 

const campoArraysConcatenados = document.getElementById("campoArraysConcatenados");

function concatenarArrays(array1, array2){
    let primeiroArray = array1.value.split(" ");
    let segundoArray = array2.value.split(" ");
    let resultado = primeiroArray.concat(segundoArray); 
    let resultadoSemDuplicatas = Array.from(new Set(resultado)); 

    return resultadoSemDuplicatas.join(", "); 
}

btnConcatenar.onmouseover = function(){
    campoArraysConcatenados.innerHTML = concatenarArrays(primeiroArray, segundoArray); 
}