// Criar modal

const abrir = document.querySelector("#abrirModal"); 

const fechar = document.querySelector("#fecharModal"); 

const modal = document.querySelector("#myModal"); 

function mostrarModal(operacao){
    modal.style.display = operacao === "abrir" ? 'block' : "none"
}

modal.addEventListener("click", () => mostrarModal("fechar"))
abrir.addEventListener("click", () => mostrarModal("abrir"))
fechar.addEventListener("click", () => mostrarModal("fechar"))