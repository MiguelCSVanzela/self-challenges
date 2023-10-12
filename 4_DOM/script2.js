// Cores paragrafos

const frases = document.querySelectorAll(".frase"); 
const btnAlterar = document.querySelector("#btnAlterarCores"); 
function colorirFrases(phrases){
    // poderia se usar o for of
    phrases.forEach((frase) => {
        frase.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    })
}

btnAlterar.addEventListener("click", function(){
    colorirFrases(frases);
})