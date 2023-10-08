// Verificar Palindromo

const palavraPalindroma = document.querySelector("#palavraPalindroma"); 
const btnPalindromar = document.querySelector("#verificarPalindromo"); 

const campoEhPalindromo = document.getElementById("campoEhPalindromo"); 

function ehPalindromo(word){
    let palavra = word.value.toLowerCase(); 
    let palavraReversa = (word.value.toLowerCase()).split("").reverse().join(""); 
    let resultado = palavra === palavraReversa ? `${palavra.charAt(0).toUpperCase() + palavra.slice(1)} é um polindromo` : "Não é polindromo"; 
    return resultado; 
}

btnPalindromar.addEventListener("click", function(){
    campoEhPalindromo.innerHTML = ehPalindromo(palavraPalindroma); 
})