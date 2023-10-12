// Criando item de lista

const conteudo = document.querySelector("#conteudoItem"); 

const btnCriar = document.querySelector("#btnCriarItem"); 

const containerLista = document.querySelector("#listaContainer"); 

const criarItem = (conteudo, container) => {
    let topico = conteudo.value; 
    let li = document.createElement("li"); 
    li.textContent = topico; 
    container.appendChild(li); 
}

btnCriar.addEventListener("click", () => criarItem(conteudo, containerLista));