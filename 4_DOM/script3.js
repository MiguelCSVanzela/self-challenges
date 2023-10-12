// Alterando classe

const campoClasse = document.querySelector("#classe"); 

const btnMudaClasse = document.querySelector("#btnMudaClasse"); 

function trocaClasse(elemento){
    elemento.classList.toggle('active')
}

btnMudaClasse.addEventListener("click", function(){
    trocaClasse(campoClasse);
})