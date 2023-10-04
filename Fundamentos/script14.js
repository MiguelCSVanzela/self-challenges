// Gerador de sequência fibonacci

const termo = document.querySelector("#termo");
const btnFibo = document.querySelector("#obterFibo"); 

const campoFibo = document.querySelector("#fibonacci"); 

function fibonacci(valor) {
    let value = parseInt(valor.value); 
    let a = 0; 
    let b = 1;

    let sequencia = []

    while (a <= value){
        sequencia.push(a); 
        const temp = a; 
        a = b; 
        b = temp + a; 
    }
    return sequencia; 
}

btnFibo.addEventListener("click", function() {
campoFibo.innerHTML = fibonacci(termo); 
})

