// Números primos

const alcance = document.querySelector("#numero"); 
const btnPrimar = document.querySelector("#primar"); 

const camposPrimos = document.querySelector("#primos"); 


function ehPrimo(num){ 
    if(num <= 1){
        return false; 
    }

    for(let i = 2;  i * i <= num; i++){
        if(num % i === 0){
            return false; 
        }
    }
    return true; 
}
function primos(valor){
    const num = parseInt(valor.value); 
    for(let i = 2; i <= num; i++){
        if(ehPrimo(i)){
            const node = document.createElement("li"); 
            const text = document.createTextNode(i); 
            node.appendChild(text)
            camposPrimos.appendChild(node); 
        }
    }
}

btnPrimar.addEventListener("click", function() {
    primos(alcance);
})