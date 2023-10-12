// Mudar Ordem Lista

const btnSobe = document.querySelector("#sobe")
const btnDesce = document.querySelector("#desce")

function mudarPosicao(operacao){
    const lista = document.querySelector("#listaContainerOrdem"); 
    const itens = Array.from(lista.querySelectorAll("li")); 
    const itemSelecionado = lista.querySelector(".selecionado"); 

    if(!itemSelecionado){
        alert("Selecione um item"); 
        return;
    }

    const index = itens.indexOf(itemSelecionado); 



    if(operacao === "sobe" && index > 0){
        lista.insertBefore(itemSelecionado, itens[index - 1])
    }else if(operacao === "desce" && index < itens.length - 1){
        lista.insertBefore(itemSelecionado.nextElementSibling, itens[index])
    }
}

function selecionarItem(event){
    const itens = document.querySelectorAll("#listaContainerOrdem li"); 
    itens.forEach((item) => item.classList.remove("selecionado")); 
    event.target.classList.add("selecionado")
}

const itens = document.querySelectorAll("#listaContainerOrdem li"); 
itens.forEach((item) => item.addEventListener("click", selecionarItem))

btnSobe.addEventListener("click", () => mudarPosicao("sobe"))
btnDesce.addEventListener("click", () => mudarPosicao("desce"))
