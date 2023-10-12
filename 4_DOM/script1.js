// Alterando o titulo 

const campoHeader = document.querySelector("#campoHeader"); 

const btnCriarHeader = document.querySelector("#btnCriarHeader"); 

function criarElementoHeader(){
    let h1 = document.createElement("h1"); 
    let text = document.createTextNode("Meu Titulo Noooovo"); 

    h1.appendChild(text); 
    campoHeader.appendChild(h1); 
}

btnCriarHeader.onclick = function(){
    criarElementoHeader()
}