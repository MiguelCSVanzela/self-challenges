// Temporizador Personalidade

const segundos = document.querySelector("#valorSegundos"); 
const btnContando = document.querySelector("#contando")
const temporizadorCampo = document.querySelector("#temporizador"); 

function temporizador(tempo, acao){
    let segundos = parseInt(tempo.value); 
    setTimeout(() => {
        acao()
    }, segundos * 1000)
}

function acao(){
    temporizadorCampo.style.backgroundColor = "lightgreen"; 
}

function mostrarContador(tempo){
    temporizadorCampo.style.backgroundColor = "lightcoral"; 
    let segundos = parseInt(tempo.value); 
    let campoContagem = document.querySelector("#campoContador")
    let contador = segundos
    
        let contagem = setInterval(() => {
            campoContagem.innerHTML = ""; 
            campoContagem.innerHTML =  contador; 
            contador = contador - 1
            
            if(contador < 0){
                clearInterval(contagem);
            }
        }, 1000)
      
        
}

btnContando.addEventListener("click", () => temporizador(segundos, acao));
segundos.addEventListener("change", () => mostrarContador(segundos))