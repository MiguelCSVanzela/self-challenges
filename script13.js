// Criador de padrãos com hash

const qtdHash = document.querySelector("#qtdHash"); 
const btnCriar = document.querySelector("#criarPadrao"); 

const campoPadrao = document.querySelector("#padrao"); 

const criadorPadrao = (qtd) => {
    campoPadrao.innerHTML = ""
    let maxQtd = parseInt(qtd.value); 

    for(let i = maxQtd; i >= 1; i--){
        let hash = "*"; 
        let node = document.createElement("li"); 
        let text = document.createTextNode(hash.repeat(i))
        node.appendChild(text); 
        campoPadrao.appendChild(node); 
    }
}


btnCriar.addEventListener("mouseleave", () => {
    criadorPadrao(qtdHash); 
})