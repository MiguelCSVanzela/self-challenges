// Fatorial 

const numero = document.getElementById("numeroFatorial"); 
const btnFatorial = document.getElementById("verificarFatorial"); 
const campoFatorial = document.getElementById("campoFatorial"); 

function fatorar(num){
    let valor = Number.parseInt(num.value); 
    if(valor === 0 || valor === 1){
        return 1;
    }
    let resultado = 1; 
    for(let i = 1; i <= valor;  i++){
        resultado *= i; 
    }

    return resultado; 
}

btnFatorial.addEventListener("mouseover", function() {
    campoFatorial.innerHTML = fatorar(numero); 
})

function fatorialRecursivo(n){
    let num = parseInt(n.value); 
    
    if(num === 1 || num === 0){
        return 1; 
    } else{
        return num * fatorialRecursivo(n - 1); 
    }
}