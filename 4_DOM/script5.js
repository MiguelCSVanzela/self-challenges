// Removendo itens de uma lista

const itemContainer = document.querySelector("#listaContainerRemover"); 
const items = document.querySelectorAll("#listaContainerRemover li"); 


(function removeItem(items){
    items.forEach(element => {
        element.classList.add("hover");
       element.addEventListener("click", function() {
        element.remove()
       }) 
    });
})(items)


function removeAlternativo(event){
    const itemClicado = event.target; //Seleciona o proprio item
    itemClicado.remove(); 
}

for(const item of items){
    item.addEventListener("click", removeAlternativo)
}