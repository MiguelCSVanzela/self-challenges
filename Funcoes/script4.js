// Inverter um string

const palavra = document.querySelector("#valorString"); 
const btnInversor = document.querySelector("#inverter"); 

const campoInvertido = document.querySelector("#campoStringInvertida"); 

function inverte(palavra){
    let word = (palavra.value).split(""); 
    // Alternativamente
    // return word.reverse().join("")

    let resultado = []; 
    for(let i = 0; i < word.length; i++){
        resultado.unshift(word[i])
    }

    return resultado.join(""); 
}


btnInversor.addEventListener("click", () => {
    campoInvertido.innerHTML = inverte(palavra);
})