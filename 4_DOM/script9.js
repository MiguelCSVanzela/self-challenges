// Accordion

const listaItens = document.querySelectorAll("#accordionContainer div"); 
const titulos = document.querySelectorAll("#accordionContainer div h2"); 

function toggleAccordion(event){
    listaItens.forEach(item => item.querySelector("p").style.display = "none")
    const header = event.target
    const content = header.nextElementSibling

    if(content.style.display === "none" || content.style.display === ""){
        content.style.display = "block"; 
    }else{
        content.style.display = "none"
    }
}

titulos.forEach(titulo => titulo.addEventListener("click", toggleAccordion))
