// Buscar itens


const buscarItem = () => {
    const filtro = document.querySelector("#campoBusca").value.toUpperCase();; 
    
    const lista = document.querySelector("#listaContainerBusca"); 
    
    const itens = lista.getElementsByTagName("li"); 
    for(let i = 0; i < itens.length; i++){
        const item = itens[i]; 
        const texto = item.textContent || item.innerText; 
        item.style.display = texto.toUpperCase().includes(filtro) ? "" : "none";
    }
}

const filtro = document.querySelector("#campoBusca"); 
filtro.addEventListener("keyup", buscarItem)