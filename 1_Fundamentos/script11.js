// Tabuada

const multiplo = document.querySelector("#multiplicando"); 
const btnTabuar = document.querySelector("#tabuar"); 

const campoTabuada = document.querySelector("#tabuada"); 

function tabuar(multiplo){
    let valor = parseInt(multiplo.value); 
    campoTabuada.innerHTML = `Tabuada dos multiplos de ${valor}`

    let contador = 1; 
    while(contador <= 10){
        const node = document.createElement("li"); 
        const text = document.createTextNode(`${contador} X ${valor} = ${valor * contador}`); 
        node.appendChild(text)
        campoTabuada.appendChild(node); 
        contador++; 
    }
}

btnTabuar.addEventListener("click", function(){
    tabuar(multiplo); 
})

