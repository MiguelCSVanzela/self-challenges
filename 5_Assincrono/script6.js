// Cadeia de Promsises

const campo = document.querySelector("#campoResultadoCadeia"); 

function carregarDadosFetch(url){
    fetch(url).then(response => response.json())
}

async function executarEmSequencia(arr){
    let resultado = []
    for(let item of arr){
        let dados = await carregarDadosFetch(item); 
        resultado.push(dados); 
    }
    return resultado; 
}


let array = ["https://jsonplaceholder.typicode.com/photos/1", "https://jsonplaceholder.typicode.com/photos/2"]; 
executarEmSequencia(array).then((response) => {
console.log(response)
}); 