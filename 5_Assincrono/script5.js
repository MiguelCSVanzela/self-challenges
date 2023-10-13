// Retornando dados com Fetch API

const url = document.querySelector("#url"); 
const btnRetornarDados = document.querySelector("#retornarDados"); 
const campoResultado = document.querySelector("#campoFetch"); 
const campoCatch = document.querySelector("#campoCatch"); 
function fetchar(link){
    let url = link.value; 
    fetch(url)
    .then(response => response.json())
    .then(json =>  campoResultado.setAttribute('src', json.url))
}

btnRetornarDados.addEventListener("click", () => fetchar(url))
